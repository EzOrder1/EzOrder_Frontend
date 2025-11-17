import React from 'react';
import './SalesChart.css';

const SalesChart = ({ data }) => {
  const maxRevenue = Math.max(...data.map(d => d.revenue), 0);
  const maxOrders = Math.max(...data.map(d => d.orders), 0);
  const totalRevenue = data.reduce((sum, item) => sum + item.revenue, 0);
  const totalOrders = data.reduce((sum, item) => sum + item.orders, 0);

  const formatCurrency = (value) => `PKR ${Math.round(value).toLocaleString()}`;

  return (
    <div className="sales-chart-card">
      <div className="card-header">
        <h3>Sales Overview</h3>
        <div className="chart-legend">
          <span className="legend-item revenue">Revenue</span>
          <span className="legend-item orders">Orders</span>
        </div>
      </div>
      
      <div className="chart-container">
        <div className="chart-y-axis">
          <span>{formatCurrency(maxRevenue)}</span>
          <span>{formatCurrency(maxRevenue / 2)}</span>
          <span>{formatCurrency(0)}</span>
        </div>
        
        <div className="chart-bars">
          {data.map((item, index) => (
            <div key={index} className="chart-bar-group">
              <div className="bars-wrapper">
                <div 
                  className="bar revenue-bar"
                  style={{ height: maxRevenue ? `${(item.revenue / maxRevenue) * 100}%` : '0%' }}
                >
                  <span className="bar-value">{formatCurrency(item.revenue)}</span>
                </div>
                <div 
                  className="bar orders-bar"
                  style={{ height: maxOrders ? `${(item.orders / maxOrders) * 100}%` : '0%' }}
                >
                  <span className="bar-value">{item.orders}</span>
                </div>
              </div>
              <span className="bar-label">{item.day}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="chart-summary">
        <div className="summary-item">
          <span className="summary-label">Total Revenue</span>
          <span className="summary-value">
            {formatCurrency(totalRevenue)}
          </span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Total Orders</span>
          <span className="summary-value">
            {totalOrders}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
