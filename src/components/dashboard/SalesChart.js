import React from 'react';
import './SalesChart.css';

const SalesChart = ({ data }) => {
  const maxRevenue = Math.max(...data.map(d => d.revenue));
  const maxOrders = Math.max(...data.map(d => d.orders));

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
          <span>PKR {maxRevenue}</span>
          <span>PKR {maxRevenue / 2}</span>
          <span>PKR 0</span>
        </div>
        
        <div className="chart-bars">
          {data.map((item, index) => (
            <div key={index} className="chart-bar-group">
              <div className="bars-wrapper">
                <div 
                  className="bar revenue-bar"
                  style={{ height: `${(item.revenue / maxRevenue) * 100}%` }}
                >
                  <span className="bar-value">PKR {item.revenue}</span>
                </div>
                <div 
                  className="bar orders-bar"
                  style={{ height: `${(item.orders / maxOrders) * 100}%` }}
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
            PKR {data.reduce((sum, item) => sum + item.revenue, 0).toLocaleString()}
          </span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Total Orders</span>
          <span className="summary-value">
            {data.reduce((sum, item) => sum + item.orders, 0)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
