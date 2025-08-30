import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import menuService from "../services/menuService";
import MenuItem from "../components/menu/MenuItem";
import MenuForm from "../components/menu/MenuForm";

const MenuManagement = () => {
  const { isAdmin } = useAuth();
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCategories();
    fetchMenuItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const fetchCategories = async () => {
    try {
      const data = await menuService.getCategories();
      setCategories(data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  const fetchMenuItems = async () => {
    setLoading(true);
    try {
      const params = selectedCategory ? { category: selectedCategory } : {};
      const data = await menuService.getAllItems(params);
      setMenuItems(data.items);
      setError("");
    } catch (error) {
      setError("Failed to load menu items");
      console.error("Error fetching menu:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setShowForm(true);
  };

  const handleDelete = async (itemId) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await menuService.deleteItem(itemId);
        fetchMenuItems();
      } catch (error) {
        alert(
          "Failed to delete item: " +
            (error.response?.data?.detail || "Unknown error")
        );
      }
    }
  };

  const handleSave = (savedItem) => {
    setShowForm(false);
    setSelectedItem(null);
    fetchMenuItems();
  };

  const handleCancel = () => {
    setShowForm(false);
    setSelectedItem(null);
  };

  const handleResetMenu = async () => {
    if (
      window.confirm(
        "Are you sure you want to reset the menu to default? This will delete all custom items!"
      )
    ) {
      try {
        await menuService.resetMenu();
        fetchMenuItems();
        alert("Menu has been reset to default");
      } catch (error) {
        alert(
          "Failed to reset menu: " +
            (error.response?.data?.detail || "Unknown error")
        );
      }
    }
  };

  return (
    <div className="menu-management">
      <div className="management-header">
        <h2>Menu Management</h2>
        <div className="header-actions">
          <button onClick={() => setShowForm(true)} className="btn btn-primary">
            Add New Item
          </button>
          {isAdmin() && (
            <button onClick={handleResetMenu} className="btn btn-danger">
              Reset Menu
            </button>
          )}
        </div>
      </div>

      {showForm && (
        <MenuForm
          item={selectedItem}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}

      <div className="category-filter">
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {loading && <div className="loading">Loading menu...</div>}
      {error && <div className="error-message">{error}</div>}

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            onEdit={handleEdit}
            onDelete={handleDelete}
            isManage={true}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuManagement;
