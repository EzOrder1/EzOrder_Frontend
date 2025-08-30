import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import orderService from "../../services/orderService";
import OrderDetails from "./OrderDetails";
import { ORDER_STATUS, ORDER_STATUS_DISPLAY } from "../../utils/constants";

const OrderList = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [statusFilter, setStatusFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchOrders();
    fetchStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter]);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const params = statusFilter ? { status: statusFilter } : {};
      const data = await orderService.getAllOrders(params);
      setOrders(data.orders);
      setError("");
    } catch (error) {
      setError("Failed to load orders");
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const data = await orderService.getOrderStats();
      setStats(data);
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    }
  };

  const handleStatusUpdate = async () => {
    await fetchOrders();
    setSelectedOrder(null);
  };

  return (
    <div className="orders-container">
      <h2>Order Management</h2>

      {stats && (
        <div className="order-stats">
          <h3>Order Statistics</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-label">Total Orders:</span>
              <span className="stat-value">{stats.total_orders}</span>
            </div>
            {Object.entries(stats.by_status).map(([status, count]) => (
              <div key={status} className="stat-item">
                <span className="stat-label">
                  {ORDER_STATUS_DISPLAY[status]}:
                </span>
                <span className="stat-value">{count}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="filter-section">
        <label htmlFor="statusFilter">Filter by Status:</label>
        <select
          id="statusFilter"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Orders</option>
          {Object.entries(ORDER_STATUS).map(([key, value]) => (
            <option key={key} value={value}>
              {ORDER_STATUS_DISPLAY[value]}
            </option>
          ))}
        </select>
      </div>

      {loading && <div className="loading">Loading orders...</div>}
      {error && <div className="error-message">{error}</div>}

      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Customer</th>
              <th>Phone</th>
              <th>Total</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.order_number}>
                <td>{order.order_number}</td>
                <td>{order.user_name}</td>
                <td>{order.phone_number}</td>
                <td>PKR {order.total.toFixed(2)}</td>
                <td>
                  <span
                    className="status-badge"
                    style={{ backgroundColor: `var(--status-${order.status})` }}
                  >
                    {ORDER_STATUS_DISPLAY[order.status]}
                  </span>
                </td>
                <td>{new Date(order.created_at).toLocaleString()}</td>
                <td>
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="btn btn-secondary btn-sm"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedOrder && (
        <OrderDetails
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
          onStatusUpdate={handleStatusUpdate}
        />
      )}
    </div>
  );
};

export default OrderList;
