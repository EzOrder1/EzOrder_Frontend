import React, { useState, useEffect } from 'react';
import './Customers.css';

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  useEffect(() => {
    // Fetch customers data
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    // Mock data - replace with actual API call
    setCustomers([
      {
        id: 1,
        name: 'Sarah Ahmed',
        email: 'sarah@example.com',
        phone: '+92 300 1234567',
        totalOrders: 25,
        totalSpent: 15750,
        lastOrder: '2025-09-01',
        status: 'active'
      },
      {
        id: 2,
        name: 'Ali Hassan',
        email: 'ali@example.com',
        phone: '+92 321 9876543',
        totalOrders: 18,
        totalSpent: 12400,
        lastOrder: '2025-08-28',
        status: 'active'
      },
      // Add more mock customers
    ]);
  };

  const filteredCustomers = customers.filter(customer => {
    const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         customer.phone.includes(searchTerm);
    const matchesStatus = filterStatus === 'all' || customer.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

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
          <p>{customers.filter(c => c.status === 'active').length}</p>
        </div>
        <div className="stat-box">
          <h3>Average Order Value</h3>
          <p>PKR 850</p>
        </div>
      </div>

      <div className="customers-table-wrapper">
        <table className="customers-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Contact</th>
              <th>Total Orders</th>
              <th>Total Spent</th>
              <th>Last Order</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map(customer => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>
                  <div>{customer.email}</div>
                  <div className="phone">{customer.phone}</div>
                </td>
                <td>{customer.totalOrders}</td>
                <td>PKR {customer.totalSpent}</td>
                <td>{new Date(customer.lastOrder).toLocaleDateString()}</td>
                <td>
                  <span className={`status-badge ${customer.status}`}>
                    {customer.status}
                  </span>
                </td>
                <td>
                  <button className="action-btn">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
