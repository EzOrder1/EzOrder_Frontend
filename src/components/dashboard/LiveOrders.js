import React from 'react';
import { Link } from 'react-router-dom';
import './LiveOrders.css';

const LiveOrders = ({ orders }) => {
  const getStatusColor = (status) => {
    const colors = {
      confirmed: '#3498db',
      preparing: '#f39c12',
      ready: '#2ecc71',
      out_for_delivery: '#e74c3c',
      delivered: '#27ae60',
      cancelled: '#95a5a6'
    };
    return colors[status] || '#95a5a6';
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="live-orders-card">
      <div className="card-header">
        <h3>Live Orders</h3>
        <Link to="/orders" className="view-all-link">
          View All →
        </Link>
      </div>
      
      <div className="orders-table-wrapper">
        <table className="live-orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Status</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="6" className="empty-state">
                  No active orders at the moment
                </td>
              </tr>
            ) : (
              orders.slice(0, 5).map((order) => (
                <tr key={order.order_number} className="order-row">
                  <td className="order-id">#{order.order_number}</td>
                  <td className="customer-name">{order.user_name}</td>
                  <td className="order-items">
                    <span className="items-count">{order.items.length} items</span>
                  </td>
                  <td>
                    <span 
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(order.status) }}
                    >
                      {order.status.replace(/_/g, ' ')}
                    </span>
                  </td>
                  <td className="order-time">{formatTime(order.created_at)}</td>
                  <td>
                    <Link to={`/orders/${order.order_number}`} className="action-btn">
                      Update Status
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveOrders;
