import React, { useState } from "react";
import orderService from "../../services/orderService";
import {
  VALID_STATUS_TRANSITIONS,
  ORDER_STATUS_DISPLAY,
} from "../../utils/constants";

const OrderStatusUpdate = ({ order, onUpdate, onCancel }) => {
  const [formData, setFormData] = useState({
    status: "",
    notes: "",
    estimated_time: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validTransitions = VALID_STATUS_TRANSITIONS[order.status] || [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]:
        name === "estimated_time" ? (value ? parseInt(value) : "") : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const updateData = {
        status: formData.status,
        notes: formData.notes || undefined,
        estimated_time: formData.estimated_time || undefined,
      };

      await orderService.updateOrderStatus(order.order_number, updateData);
      onUpdate();
    } catch (error) {
      setError(error.response?.data?.detail || "Failed to update order status");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="status-update-form">
      <h4>Update Order Status</h4>
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="status">New Status *</label>
          <select
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
            disabled={loading}
          >
            <option value="">Select new status</option>
            {validTransitions.map((status) => (
              <option key={status} value={status}>
                {ORDER_STATUS_DISPLAY[status]}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="notes">Notes (Optional)</label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleChange}
            rows="3"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="estimated_time">Estimated Time (minutes)</label>
          <input
            type="number"
            id="estimated_time"
            name="estimated_time"
            value={formData.estimated_time}
            onChange={handleChange}
            min="1"
            disabled={loading}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Updating..." : "Update Status"}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="btn btn-secondary"
            disabled={loading}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderStatusUpdate;
