import React from "react";

const MenuItem = ({ item, onEdit, onDelete, isManage = false }) => {
  return (
    <div className="menu-item">
      <h3>{item.name}</h3>
      <p className="category">{item.category}</p>
      <p className="description">{item.description}</p>
      <p className="price">PKR {item.price.toFixed(2)}</p>

      {isManage && (
        <div className="item-actions">
          <button onClick={() => onEdit(item)} className="btn btn-secondary">
            Edit
          </button>
          <button onClick={() => onDelete(item.id)} className="btn btn-danger">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
