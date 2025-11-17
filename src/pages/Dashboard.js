import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import DashboardStats from '../components/dashboard/DashboardStats';
import LiveOrders from '../components/dashboard/LiveOrders';
import SalesChart from '../components/dashboard/SalesChart';
import MenuSnapshot from '../components/dashboard/MenuSnapshot';
import orderService from '../services/orderService';
import menuService from '../services/menuService';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});
  const [liveOrders, setLiveOrders] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    fetchDashboardData();
    const interval = setInterval(fetchDashboardData, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch orders and stats from backend
      const [ordersResponse, statsResponse] = await Promise.all([
        orderService.getAllOrders({ limit: 500 }),
        orderService.getOrderStats()
      ]);

      const orders = ordersResponse.orders || [];
      const statusCounts = statsResponse?.by_status || {};
      const totalOrders = statsResponse?.total_orders || orders.length;
      
      // Calculate stats
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const todayOrders = orders.filter(order => new Date(order.created_at) >= today);
      const todayRevenue = todayOrders.reduce((sum, order) => sum + (order.total || 0), 0);
      const activeOrders = orders.filter(order => !['delivered', 'cancelled'].includes(order.status));

      // Top selling item from actual order lines
      const itemCounts = {};
      orders.forEach(order => {
        (order.items || []).forEach(item => {
          const key = item.name;
          itemCounts[key] = (itemCounts[key] || 0) + (item.quantity || 0);
        });
      });
      const topItem = Object.entries(itemCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || 'No orders yet';
      
      // New customers today (unique phone numbers)
      const newCustomerSet = new Set(todayOrders.map(o => o.phone_number));
      const newCustomers = newCustomerSet.size;
      
      setStats({
        todayOrders: todayOrders.length,
        todayRevenue,
        activeOrders: activeOrders.length,
        topItem,
        newCustomers,
        totalOrders,
        statusCounts
      });
      
      setLiveOrders(activeOrders);
      
      // Fetch menu items
      const menuResponse = await menuService.getAllItems({ limit: 10 });
      setMenuItems(menuResponse.items || []);
      
      // Generate sales data for chart using real orders (last 7 days)
      setSalesData(generateSalesData(orders));
      
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateSalesData = (orders) => {
    const dataMap = {};
    const now = new Date();

    // Initialize last 7 days
    for (let i = 6; i >= 0; i--) {
      const day = new Date(now);
      day.setDate(now.getDate() - i);
      const key = day.toISOString().slice(0, 10);
      dataMap[key] = { day: day.toLocaleDateString(undefined, { weekday: 'short' }), orders: 0, revenue: 0 };
    }

    orders.forEach(order => {
      const key = new Date(order.created_at).toISOString().slice(0, 10);
      if (dataMap[key]) {
        dataMap[key].orders += 1;
        dataMap[key].revenue += order.total || 0;
      }
    });

    return Object.values(dataMap);
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="header-content">
          <h1>Welcome back, {user?.name}!</h1>
          <p className="header-subtitle">Here&apos;s what&apos;s happening with your restaurant today.</p>
        </div>
        <div className="header-actions">
          <button className="btn-refresh" onClick={fetchDashboardData}>
            Refresh
          </button>
          <span className="last-updated">
            Last updated: {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>

      <DashboardStats stats={stats} />

      <div className="dashboard-grid">
        <div className="grid-main">
          <LiveOrders orders={liveOrders} />
          <SalesChart data={salesData} />
        </div>
        <div className="grid-sidebar">
          <MenuSnapshot items={menuItems} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
