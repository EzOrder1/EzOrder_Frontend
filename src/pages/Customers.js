import React, { useState, useEffect, useMemo } from 'react';
import orderService from '../services/orderService';
import './Customers.css';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchCustomers();
  }, []);

  const aggregateFromOrders = (orders = []) => {
    const map = new Map();
    orders.forEach((order) => {
      const key = order.phone_number || order.user_name || order.order_number;
      if (!key) return;
      const existing = map.get(key) || {
        phone_number: order.phone_number || '',
        name: order.user_name || 'Unknown',
        total_orders: 0,
        total_spent: 0,
        last_order: null,
      };
      existing.total_orders += 1;
      existing.total_spent += order.total || 0;
      const created = order.created_at ? new Date(order.created_at) : null;
      if (created && (!existing.last_order || created > new Date(existing.last_order))) {
        existing.last_order = order.created_at;
      }
      map.set(key, existing);
    });
    return Array.from(map.values()).sort((a, b) => b.total_orders - a.total_orders);
  };

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const data = await orderService.getCustomerSummaries();
      setCustomers(data || []);
      setError('');
    } catch (err) {
      // If endpoint not available (404), fallback to aggregating orders
      if (err?.response?.status === 404) {
        try {
          const ordersResp = await orderService.getAllOrders({ limit: 100 });
          const agg = aggregateFromOrders(ordersResp.orders || []);
          setCustomers(agg);
          setError('');
        } catch (inner) {
          setError('Failed to load customers');
        }
      } else {
        setError('Failed to load customers');
      }
    } finally {
      setLoading(false);
    }
  };

  const filteredCustomers = useMemo(() => {
    return customers.filter(customer => {
      const matchesSearch =
        (customer.name || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
        (customer.phone_number || '').includes(searchTerm);
      const status = customer.total_orders > 0 ? 'active' : 'inactive';
      const matchesStatus = filterStatus === 'all' || status === filterStatus;
      return matchesSearch && matchesStatus;
    });
  }, [customers, searchTerm, filterStatus]);

  return (
    <div className="customers-container">
      <div className="customers-header">
        <h1>Customer Management</h1>
        <div className="header-actions">
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Customers</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div className="customers-stats">
        <div className="stat-box">
          <h3>Total Customers</h3>
          <p>{customers.length}</p>
        </div>
        <div className="stat-box">
          <h3>Active Customers</h3>
          <p>{customers.filter(c => c.total_orders > 0).length}</p>
        </div>
        <div className="stat-box">
          <h3>Total Revenue</h3>
          <p>PKR {customers.reduce((sum, c) => sum + (c.total_spent || 0), 0)}</p>
        </div>
      </div>

      {loading && <div className="loading">Loading customers...</div>}
      {error && <div className="error-message">{error}</div>}

      <div className="customers-table-wrapper">
        <table className="customers-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Phone</th>
              <th>Total Orders</th>
              <th>Total Spent</th>
              <th>Last Order</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map(customer => (
              <tr key={customer.phone_number}>
                <td>{customer.name}</td>
                <td className="phone">{customer.phone_number}</td>
                <td>{customer.total_orders}</td>
                <td>PKR {customer.total_spent}</td>
                <td>{customer.last_order ? new Date(customer.last_order).toLocaleDateString() : '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
