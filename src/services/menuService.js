import api from "./api";

const menuService = {
  getAllItems: async (params = {}) => {
    const response = await api.get("/menu", { params });
    return response.data;
  },

  getCategories: async () => {
    const response = await api.get("/menu/categories");
    return response.data;
  },

  getItem: async (itemId) => {
    const response = await api.get(`/menu/${itemId}`);
    return response.data;
  },

  searchItems: async (query, category = null) => {
    const params = { query };
    if (category) params.category = category;
    const response = await api.post("/menu/search", null, { params });
    return response.data;
  },

  createItem: async (itemData) => {
    const response = await api.post("/menu", itemData);
    return response.data;
  },

  updateItem: async (itemId, updateData) => {
    const response = await api.put(`/menu/${itemId}`, updateData);
    return response.data;
  },

  deleteItem: async (itemId) => {
    const response = await api.delete(`/menu/${itemId}`);
    return response.data;
  },

  bulkDelete: async (itemIds) => {
    const response = await api.post("/menu/bulk/delete", { item_ids: itemIds });
    return response.data;
  },

  renameCategory: async (oldCategory, newCategory) => {
    const response = await api.put("/menu/category/rename", {
      old_category: oldCategory,
      new_category: newCategory,
    });
    return response.data;
  },

  addCategory: async (name) => {
    // Use explicit endpoint to avoid path conflicts with item routes
    const response = await api.post("/menu/category/create", { name });
    return response.data;
  },

  deleteCategory: async (name) => {
    const response = await api.delete("/menu/category", { data: { name } });
    return response.data;
  },

  resetMenu: async () => {
    const response = await api.post("/menu/reset");
    return response.data;
  },

  deleteCategory: async (name) => {
    const response = await api.delete("/menu/category", { data: { name } });
    return response.data;
  },
};

export default menuService;
