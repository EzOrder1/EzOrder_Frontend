import React, { useEffect, useState } from "react";
import menuService from "../services/menuService";
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [editing, setEditing] = useState(null);
  const [editValue, setEditValue] = useState("");

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const data = await menuService.getCategories();
      setCategories(data || []);
      setError("");
    } catch (err) {
      setError("Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    if (!newCategory.trim()) return;
    try {
      await menuService.addCategory(newCategory.trim());
      setNewCategory("");
      fetchCategories();
    } catch (err) {
      alert(err.response?.data?.detail || "Could not add category");
    }
  };

  const handleRename = async (oldName) => {
    if (!editValue.trim()) return;
    try {
      await menuService.renameCategory(oldName, editValue.trim());
      setEditing(null);
      setEditValue("");
      fetchCategories();
    } catch (err) {
      alert(err.response?.data?.detail || "Could not rename category");
    }
  };

  const handleDelete = async (name) => {
    const confirm = window.confirm(
      `Delete category "${name}"? This will NOT delete items but they may show uncategorized.`
    );
    if (!confirm) return;
    try {
      await menuService.deleteCategory(name);
      fetchCategories();
    } catch (err) {
      alert(err.response?.data?.detail || "Could not delete category");
    }
  };

  return (
    <div className="categories-page">
      <div className="categories-header">
        <div>
          <h2>Category Management</h2>
          <p>Manage categories used by menu items.</p>
        </div>
        <div className="add-inline">
          <input
            type="text"
            placeholder="New category"
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          />
          <button className="btn btn-primary" onClick={handleAdd}>
            Add Category
          </button>
        </div>
      </div>

      {loading && <div className="loading">Loading categories...</div>}
      {error && <div className="error-message">{error}</div>}

      <div className="categories-grid">
        {categories.map((cat) => (
          <div key={cat} className="category-card">
            {editing === cat ? (
              <div className="edit-row">
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  autoFocus
                />
                <button className="btn btn-primary" onClick={() => handleRename(cat)}>
                  Save
                </button>
                <button className="btn btn-light" onClick={() => setEditing(null)}>
                  Cancel
                </button>
              </div>
            ) : (
              <>
                <h3>{cat}</h3>
                <div className="actions">
                  <button className="btn btn-secondary" onClick={() => { setEditing(cat); setEditValue(cat); }}>
                    Edit
                  </button>
                  <button className="btn btn-danger" onClick={() => handleDelete(cat)}>
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
