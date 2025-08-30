export const ORDER_STATUS = {
  CONFIRMED: "confirmed",
  PREPARING: "preparing",
  READY: "ready",
  OUT_FOR_DELIVERY: "out_for_delivery",
  DELIVERED: "delivered",
  CANCELLED: "cancelled",
};

export const ORDER_STATUS_DISPLAY = {
  confirmed: "Confirmed",
  preparing: "Preparing",
  ready: "Ready",
  out_for_delivery: "Out for Delivery",
  delivered: "Delivered",
  cancelled: "Cancelled",
};

export const ORDER_STATUS_COLORS = {
  confirmed: "#3498db",
  preparing: "#f39c12",
  ready: "#27ae60",
  out_for_delivery: "#e74c3c",
  delivered: "#2ecc71",
  cancelled: "#95a5a6",
};

export const VALID_STATUS_TRANSITIONS = {
  confirmed: ["preparing", "cancelled"],
  preparing: ["ready", "cancelled"],
  ready: ["out_for_delivery", "cancelled"],
  out_for_delivery: ["delivered", "cancelled"],
  delivered: [],
  cancelled: [],
};
