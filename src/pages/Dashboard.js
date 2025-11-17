import React, { useState, useEffect } from 'react';
import { RiRefreshLine } from 'react-icons/ri';
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
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    fetchDashboardData();

    // Faster polling to keep stats closer to real-time
    const interval = setInterval(fetchDashboardData, 8000);

    // Refresh when tab regains focus (helps when user comes back)
    const handleVisibility = () => {
      if (document.visibilityState === 'visible') {
        fetchDashboardData();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      clearInterval(interval);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Fetch orders and stats from backend (respect API max limit of 100)
      const [ordersResponse, statsResponse, liveResponse, metricsResponse] = await Promise.all([
        orderService.getAllOrders({ limit: 100 }),
        orderService.getOrderStats(),
        orderService.getActiveOrders(),
        orderService.getOrderDailyMetrics(7)
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
      
      // Prefer active orders from dedicated endpoint; fall back to filtered list
      setLiveOrders(liveResponse || activeOrders);
      
      // Fetch menu items
      const menuResponse = await menuService.getAllItems({ limit: 10 });
      setMenuItems(menuResponse.items || []);
      
      // Use backend daily metrics for chart (fallback to local calc if missing)
      if (metricsResponse?.series) {
        setSalesData(metricsResponse.series);
      } else {
        setSalesData(generateSalesData(orders));
      }
      setLastUpdated(new Date());
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

  const statusBadges = [
    { key: 'confirmed', label: 'Confirmed', tone: '#22c55e' },
    { key: 'preparing', label: 'Preparing', tone: '#f59e0b' },
    { key: 'ready', label: 'Ready', tone: '#38bdf8' },
    { key: 'out_for_delivery', label: 'On the way', tone: '#10b981' },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-hero">
        <div className="dashboard-header">
          <div className="header-content">
            <p className="eyebrow">Dashboard overview</p>
            <h1>Welcome back, {user?.name || 'there'}!</h1>
            <p className="header-subtitle">Track live orders, revenue and menu health at a glance.</p>
            <div className="status-pills">
              {statusBadges.map((status) => (
                <span key={status.key} className="status-pill">
                  <span className="pill-dot" style={{ backgroundColor: status.tone }}></span>
                  {stats?.statusCounts?.[status.key] ?? 0} {status.label}
                </span>
              ))}
            </div>
          </div>
          <div className="header-actions">
            <div className="last-updated-chip">
              <span className="dot-live"></span>
              Updated {lastUpdated ? lastUpdated.toLocaleTimeString() : '--'}
            </div>
            <button className="btn-refresh" onClick={fetchDashboardData}>
              <RiRefreshLine /> Refresh data
            </button>
          </div>
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
