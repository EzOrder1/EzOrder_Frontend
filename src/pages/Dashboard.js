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
      
      // Fetch orders
      const ordersResponse = await orderService.getAllOrders();
      const orders = ordersResponse.orders || [];
      
      // Calculate stats
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      const todayOrders = orders.filter(order => 
        new Date(order.created_at) >= today
      );
      
      const todayRevenue = todayOrders.reduce((sum, order) => sum + order.total, 0);
      
      // Get active orders
      const activeOrders = orders.filter(order => 
        !['delivered', 'cancelled'].includes(order.status)
      );
      
      // Calculate top selling item (mock data for now)
      const topItem = 'Pepperoni Pizza';
      
      // Get new customers (mock data)
      const newCustomers = Math.floor(Math.random() * 10) + 5;
      
      setStats({
        todayOrders: todayOrders.length,
        todayRevenue,
        topItem,
        newCustomers
      });
      
      setLiveOrders(activeOrders);
      
      // Fetch menu items
      const menuResponse = await menuService.getAllItems({ limit: 10 });
      setMenuItems(menuResponse.items || []);
      
      // Generate sales data for chart (mock data)
      const salesData = generateSalesData();
      setSalesData(salesData);
      
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const generateSalesData = () => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days.map(day => ({
      day,
      orders: Math.floor(Math.random() * 50) + 20,
      revenue: Math.floor(Math.random() * 5000) + 2000
    }));
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
          <h1>Welcome back, {user?.name}! 👋</h1>
          <p className="header-subtitle">Here's what's happening with your restaurant today.</p>
        </div>
        <div className="header-actions">
          <button className="btn-refresh" onClick={fetchDashboardData}>
            🔄 Refresh
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
