import React from 'react';
import './DashboardStats.css';

const DashboardStats = ({ stats }) => {
  const statCards = [
    {
      title: "Today's Orders",
      value: stats?.todayOrders || 0,
      icon: '📦',
      color: '#3498db',
      trend: '+12%',
      trendUp: true
    },
    {
      title: "Today's Revenue",
      value: `PKR ${stats?.todayRevenue?.toFixed(0) || 0}`,
      icon: '💰',
      color: '#2ecc71',
      trend: '+8%',
      trendUp: true
    },
    {
      title: 'Top Selling Item',
      value: stats?.topItem || 'Pizza Margherita',
      icon: '🍕',
      color: '#e74c3c',
      trend: '25 sold',
      trendUp: true
    },
    {
      title: 'New Customers',
      value: stats?.newCustomers || 0,
      icon: '👤',
      color: '#f39c12',
      trend: '+5%',
      trendUp: true
    }
  ];

  return (
    <div className="dashboard-stats">
      {statCards.map((stat, index) => (
        <div key={index} className="stat-card" style={{ '--stat-color': stat.color }}>
          <div className="stat-header">
            <div className="stat-icon-wrapper">
              <span className="stat-icon">{stat.icon}</span>
            </div>
            <div className="stat-trend">
              <span className={`trend ${stat.trendUp ? 'up' : 'down'}`}>
                {stat.trendUp ? '↑' : '↓'} {stat.trend}
              </span>
            </div>
          </div>
          <div className="stat-content">
            <h3 className="stat-value">{stat.value}</h3>
            <p className="stat-title">{stat.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
