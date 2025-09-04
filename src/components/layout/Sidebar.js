import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Sidebar.css';

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const location = useLocation();
  const { user, isStaff, isAdmin } = useAuth();
  const [activeItem, setActiveItem] = useState('');

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  const menuItems = [
    {
      path: '/dashboard',
      icon: '📊',
      label: 'Dashboard',
      roles: ['customer', 'staff', 'admin']
    },
    {
      path: '/menu/manage',
      icon: '🍴',
      label: 'Menu Management',
      roles: ['staff', 'admin']
    },
    {
      path: '/orders',
      icon: '🛒',
      label: 'Order List',
      roles: ['staff', 'admin']
    },
    {
      path: '/customers',
      icon: '👥',
      label: 'Customers',
      roles: ['admin']
    },
    {
      path: '/analytics',
      icon: '📈',
      label: 'Analytics',
      roles: ['staff', 'admin']
    },
    {
      path: '/settings',
      icon: '⚙️',
      label: 'Settings',
      roles: ['customer', 'staff', 'admin']
    }
  ];

  const filteredMenuItems = menuItems.filter(item => 
    item.roles.includes(user?.role || 'customer')
  );

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        <Link to="/dashboard" className="sidebar-logo">
          {!isCollapsed && <span className="logo-text">EzOrder</span>}
          {isCollapsed && <span className="logo-icon">🍕</span>}
        </Link>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <span className="toggle-icon">{isCollapsed ? '→' : '←'}</span>
        </button>
      </div>

      <nav className="sidebar-nav">
        {filteredMenuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`sidebar-item ${activeItem === item.path ? 'active' : ''}`}
            title={isCollapsed ? item.label : ''}
          >
            <span className="sidebar-icon">{item.icon}</span>
            {!isCollapsed && <span className="sidebar-label">{item.label}</span>}
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        {!isCollapsed && (
          <div className="user-info">
            <div className="user-avatar-small">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div className="user-details">
              <p className="user-name">{user?.name}</p>
              <p className="user-role">{user?.role}</p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
