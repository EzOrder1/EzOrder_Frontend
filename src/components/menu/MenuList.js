import React, { useState, useEffect } from "react";
import menuService from "../../services/menuService";
import MenuItem from "./MenuItem";

const MenuList = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
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

  return (
    <div className="menu-container">
      <h2>Our Menu</h2>

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
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuList;
