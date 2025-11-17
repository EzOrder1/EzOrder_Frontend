import React from 'react';
import {
  RiShoppingCart2Line,
  RiMoneyDollarCircleLine,
  RiStarSmileLine,
  RiUserAddFill,
  RiTimerFlashLine,
} from 'react-icons/ri';
import './DashboardStats.css';

const DashboardStats = ({ stats }) => {
  const statCards = [
    {
      title: "Today's Orders",
      value: stats?.todayOrders || 0,
      icon: RiShoppingCart2Line,
      color: '#2563eb',
      subtext: `${stats?.activeOrders || 0} active now`,
    },
    {
      title: "Today's Revenue",
      value: `PKR ${Math.round(stats?.todayRevenue || 0).toLocaleString()}`,
      icon: RiMoneyDollarCircleLine,
      color: '#22c55e',
      subtext: `Total orders: ${stats?.totalOrders ?? 0}`,
    },
    {
      title: 'Top Selling Item',
      value: stats?.topItem || 'No orders yet',
      icon: RiStarSmileLine,
      color: '#f59e0b',
      subtext: 'Based on order lines',
    },
    {
      title: 'New Customers (today)',
      value: stats?.newCustomers || 0,
      icon: RiUserAddFill,
      color: '#8b5cf6',
      subtext: 'Unique phone numbers',
    },
  ];

  return (
    <div className="dashboard-stats">
      {statCards.map((stat) => {
        const Icon = stat.icon;
        return (
          <div key={stat.title} className="stat-card" style={{ '--stat-color': stat.color }}>
            <div className="stat-header">
              <div className="stat-icon-wrapper">
                <Icon className="stat-icon" />
              </div>
              {stat.subtext && (
                <div className="stat-subtext">
                  <RiTimerFlashLine /> {stat.subtext}
                </div>
              )}
            </div>
            <div className="stat-content">
              <h3 className="stat-value">{stat.value}</h3>
              <p className="stat-title">{stat.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardStats;
