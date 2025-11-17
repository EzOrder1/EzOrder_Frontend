import React, { useEffect, useMemo, useState } from "react";
import {
  RiAddLine,
  RiRefreshLine,
  RiSearchLine,
  RiEdit2Line,
  RiDeleteBinLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import menuService from "../services/menuService";
import "./Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [editing, setEditing] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [filter, setFilter] = useState("");
  const [busyAction, setBusyAction] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    try {
      const [categoriesResult, itemsResult] = await Promise.allSettled([
        menuService.getCategories(),
        // Item count is best-effort; failure shouldn’t block categories
        menuService.getAllItems({ limit: 100 })
      ]);
      if (categoriesResult.status !== "fulfilled") {
        throw categoriesResult.reason;
      }
      const categoriesResponse = categoriesResult.value;
      const names =
        Array.isArray(categoriesResponse) && typeof categoriesResponse[0] === "string"
          ? categoriesResponse
          : (categoriesResponse?.categories || categoriesResponse || []);

      const items =
        itemsResult.status === "fulfilled" ? (itemsResult.value?.items || []) : [];
      const counts = items.reduce((acc, item) => {
        const key = item.category || "Uncategorised";
        acc[key] = (acc[key] || 0) + 1;
        return acc;
      }, {});
      const normalised = names.map((name) => ({
        name,
        count: counts[name] || 0,
      }));
      normalised.sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
      setCategories(normalised);
      setError("");
    } catch (err) {
      setError("Failed to load categories");
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async () => {
    const value = newCategory.trim();
    if (!value) return;
    setBusyAction(true);
    try {
      await menuService.addCategory(value);
      setNewCategory("");
      await fetchCategories();
    } catch (err) {
      alert(err.response?.data?.detail || "Could not add category");
    } finally {
      setBusyAction(false);
    }
  };

  const handleRename = async (oldName) => {
    const next = editValue.trim();
    if (!next || next === oldName) {
      setEditing(null);
      return;
    }
    setBusyAction(true);
    try {
      await menuService.renameCategory(oldName, next);
      setEditing(null);
      setEditValue("");
      await fetchCategories();
    } catch (err) {
      alert(err.response?.data?.detail || "Could not rename category");
    } finally {
      setBusyAction(false);
    }
  };

  const handleDelete = async (name) => {
    const confirmation = window.confirm(
      `Delete category "${name}"? This will NOT delete items but they may show uncategorized.`
    );
    if (!confirmation) return;
    setBusyAction(true);
    try {
      await menuService.deleteCategory(name);
      await fetchCategories();
    } catch (err) {
      alert(err.response?.data?.detail || "Could not delete category");
    } finally {
      setBusyAction(false);
    }
  };

  const filteredCategories = useMemo(() => {
    const term = filter.toLowerCase();
    return categories.filter(({ name }) => name.toLowerCase().includes(term));
  }, [categories, filter]);

  return (
    <div className="categories-page">
      <div className="categories-hero">
        <div>
          <p className="eyebrow">Menu categories</p>
          <h2>Organise your menu taxonomy</h2>
          <p className="subtitle">
            Add, rename or remove categories to keep menu items tidy. We show the item count so you can spot empty buckets.
          </p>
          <div className="hero-actions">
            <button className="btn-ghost" onClick={fetchCategories} disabled={loading}>
              <RiRefreshLine /> Refresh
            </button>
            <span className="pill">{categories.length} total</span>
          </div>
        </div>
        <div className="add-card">
          <div className="add-card-row">
            <RiAddLine className="muted" />
            <input
              type="text"
              placeholder="Create a new category"
              value={newCategory}
              onChange={(e) => setNewCategory(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            />
          </div>
          <button className="btn-primary" onClick={handleAdd} disabled={busyAction}>
            Add category
          </button>
        </div>
      </div>

      <div className="toolbar">
        <div className="search">
          <RiSearchLine />
          <input
            type="text"
            placeholder="Search categories..."
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div className="hint">Click on item counts to view menu filtered by category.</div>
      </div>

      {loading && <div className="loading">Loading categories...</div>}
      {error && <div className="error-message">{error}</div>}

      {!loading && filteredCategories.length === 0 && (
        <div className="empty-state">
          <p>No categories match “{filter}”.</p>
          <button className="btn-light" onClick={() => setFilter("")}>
            Clear filter
          </button>
        </div>
      )}

      <div className="categories-grid">
        {filteredCategories.map(({ name, count }) => (
          <div key={name} className="category-card">
            <div className="card-head">
              <div>
                <p className="eyebrow">Category</p>
                <h3>{name}</h3>
              </div>
              <a className="count-chip" href={`/menu/manage?category=${encodeURIComponent(name)}`}>
                {count} items <RiArrowRightSLine />
              </a>
            </div>

            {editing === name ? (
              <div className="edit-row">
                <input
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  autoFocus
                  placeholder="New category name"
                />
                <div className="edit-actions">
                  <button className="btn-primary" onClick={() => handleRename(name)} disabled={busyAction}>
                    Save
                  </button>
                  <button className="btn-light" onClick={() => setEditing(null)} disabled={busyAction}>
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="actions">
                <button
                  className="btn-secondary"
                  onClick={() => {
                    setEditing(name);
                    setEditValue(name);
                  }}
                >
                  <RiEdit2Line /> Rename
                </button>
                <button className="btn-danger" onClick={() => handleDelete(name)} disabled={busyAction}>
                  <RiDeleteBinLine /> Delete
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
