import api from "./api";

const orderService = {
  getAllOrders: async (params = {}) => {
    const response = await api.get("/orders", { params });
    return response.data;
  },

  getActiveOrders: async () => {
    const response = await api.get("/orders/active");
    return response.data;
  },

  getOrderStats: async () => {
    const response = await api.get("/orders/stats");
    return response.data;
  },

  getMyOrders: async () => {
    const response = await api.get("/orders/my-orders");
    return response.data;
  },

  getOrderByNumber: async (orderNumber) => {
    const response = await api.get(`/orders/by-number/${orderNumber}`);
    return response.data;
  },

  getOrdersByPhone: async (phoneNumber) => {
    const response = await api.get(`/orders/by-phone/${phoneNumber}`);
    return response.data;
  },

  updateOrderStatus: async (orderNumber, statusUpdate) => {
    const response = await api.put(
      `/orders/${orderNumber}/status`,
      statusUpdate
    );
    return response.data;
  },

  bulkUpdateStatus: async (orderNumbers, statusUpdate) => {
    const response = await api.post("/orders/bulk/status-update", {
      order_numbers: orderNumbers,
      status_update: statusUpdate,
    });
    return response.data;
  },
};

export default orderService;
