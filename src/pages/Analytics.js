import React, { useState, useEffect } from 'react';
import './Analytics.css';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('week');
  const [analyticsData, setAnalyticsData] = useState({
    orderTrends: [],
    topDishes: [],
    customerRetention: 0,
    averageOrderValue: 0,
    peakHours: []
  });

  useEffect(() => {
    // Fetch analytics data
    fetchAnalyticsData();
  }, [timeRange]);

  const fetchAnalyticsData = () => {
    // Mock data - replace with actual API call
    setAnalyticsData({
      orderTrends: generateOrderTrends(),
      topDishes: [
        { name: 'Pepperoni Pizza', orders: 145, revenue: 21750 },
        { name: 'Margherita Pizza', orders: 132, revenue: 17160 },
        { name: 'BBQ Chicken Pizza', orders: 98, revenue: 15680 },
        { name: 'Veggie Supreme', orders: 87, revenue: 12180 },
        { name: 'Hawaiian Pizza', orders: 76, revenue: 11400 }
      ],
      customerRetention: 78,
      averageOrderValue: 850,
      peakHours: [
        { hour: '12 PM', orders: 45 },
        { hour: '1 PM', orders: 52 },
        { hour: '6 PM', orders: 38 },
        { hour: '7 PM', orders: 64 },
        { hour: '8 PM', orders: 71 }
      ]
    });
  };

  const generateOrderTrends = () => {
    const days = timeRange === 'week' ? 7 : timeRange === 'month' ? 30 : 90;
    return Array.from({ length: days }, (_, i) => ({
      date: new Date(Date.now() - (days - i) * 24 * 60 * 60 * 1000).toLocaleDateString(),
      orders: Math.floor(Math.random() * 50) + 30,
      revenue: Math.floor(Math.random() * 5000) + 3000
    }));
  };

  return (
    <div className="analytics-container">
      <div className="analytics-header">
        <h1>Analytics Dashboard</h1>
        <div className="time-range-selector">
          <button 
            className={timeRange === 'week' ? 'active' : ''}
            onClick={() => setTimeRange('week')}
          >
            Week
          </button>
          <button 
            className={timeRange === 'month' ? 'active' : ''}
            onClick={() => setTimeRange('month')}
          >
            Month
          </button>
          <button 
            className={timeRange === 'quarter' ? 'active' : ''}
            onClick={() => setTimeRange('quarter')}
          >
            Quarter
          </button>
        </div>
      </div>

      <div className="analytics-grid">
        {/* Key Metrics */}
        <div className="metric-card">
          <h3>Average Order Value</h3>
          <p className="metric-value">PKR {analyticsData.averageOrderValue}</p>
          <span className="metric-change positive">+5.2%</span>
        </div>
        
        <div className="metric-card">
          <h3>Customer Retention</h3>
          <p className="metric-value">{analyticsData.customerRetention}%</p>
          <span className="metric-change positive">+3.1%</span>
        </div>

        {/* Top Dishes */}
        <div className="analytics-card top-dishes">
          <h3>Top 5 Dishes</h3>
          <div className="dishes-list">
            {analyticsData.topDishes.map((dish, index) => (
              <div key={index} className="dish-item">
                <span className="dish-rank">#{index + 1}</span>
                <div className="dish-info">
                  <h4>{dish.name}</h4>
                  <p>{dish.orders} orders • PKR {dish.revenue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Peak Hours */}
        <div className="analytics-card peak-hours">
          <h3>Peak Hours</h3>
          <div className="hours-chart">
            {analyticsData.peakHours.map((hour, index) => (
              <div key={index} className="hour-bar">
                <div 
                  className="bar"
                  style={{ height: `${(hour.orders / 80) * 100}%` }}
                ></div>
                <span className="hour-label">{hour.hour}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
