import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowRightSLine } from 'react-icons/ri';
import './MenuSnapshot.css';

const MenuSnapshot = ({ items }) => {
  return (
    <div className="menu-snapshot-card">
      <div className="card-header">
        <h3>Menu Quick View</h3>
        <Link to="/menu/manage" className="manage-link">
          Manage <RiArrowRightSLine />
        </Link>
      </div>
      
      <div className="menu-items-list">
        {items.length === 0 ? (
          <p className="empty-state">No menu items found</p>
        ) : (
          items.slice(0, 8).map((item) => (
            <div key={item.id} className="menu-item-row">
              <div className="item-info">
                <h4>{item.name}</h4>
                <p className="item-category">{item.category || 'Uncategorised'}</p>
              </div>
              <div className="item-meta">
                <span className="item-price">PKR {item.price}</span>
                <label className="availability-toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          ))
        )}
      </div>
      
      <div className="quick-actions">
        <Link to="/menu/manage" className="btn-add-item">
          + Add New Item
        </Link>
      </div>
    </div>
  );
};

export default MenuSnapshot;
