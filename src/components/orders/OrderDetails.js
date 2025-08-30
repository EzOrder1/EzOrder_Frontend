import React, { useState } from "react";
import OrderStatusUpdate from "./OrderStatusUpdate";
import {
  ORDER_STATUS_DISPLAY,
  ORDER_STATUS_COLORS,
} from "../../utils/constants";

const OrderDetails = ({ order, onClose, onStatusUpdate }) => {
  const [showStatusUpdate, setShowStatusUpdate] = useState(false);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Order Details - {order.order_number}</h3>
          <button onClick={onClose} className="close-button">
            ×
          </button>
        </div>

        <div className="order-details">
          <div className="detail-section">
            <h4>Customer Information</h4>
            <p>
              <strong>Name:</strong> {order.user_name}
            </p>
            <p>
              <strong>Phone:</strong> {order.phone_number}
            </p>
          </div>

          <div className="detail-section">
            <h4>Delivery Information</h4>
            <p>
              <strong>Address:</strong> {order.delivery_address}
            </p>
            <p>
              <strong>City:</strong> {order.delivery_city}
            </p>
            {order.delivery_postal && (
              <p>
                <strong>Postal Code:</strong> {order.delivery_postal}
              </p>
            )}
            {order.delivery_notes && (
              <p>
                <strong>Notes:</strong> {order.delivery_notes}
              </p>
            )}
          </div>

          <div className="detail-section">
            <h4>Order Items</h4>
            <table className="items-table">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>${item.price.toFixed(2)}</td>
                    <td>{item.quantity}</td>
                    <td>${item.subtotal.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3">
                    <strong>Total:</strong>
                  </td>
                  <td>
                    <strong>${order.total.toFixed(2)}</strong>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>

          <div className="detail-section">
            <h4>Order Status</h4>
            <p>
              <strong>Current Status:</strong>{" "}
              <span
                className="status-badge"
                style={{ backgroundColor: ORDER_STATUS_COLORS[order.status] }}
              >
                {ORDER_STATUS_DISPLAY[order.status]}
              </span>
            </p>
            <p>
              <strong>Created:</strong>{" "}
              {new Date(order.created_at).toLocaleString()}
            </p>
            {order.updated_at && (
              <p>
                <strong>Last Updated:</strong>{" "}
                {new Date(order.updated_at).toLocaleString()}
              </p>
            )}
          </div>

          {order.status_history && order.status_history.length > 0 && (
            <div className="detail-section">
              <h4>Status History</h4>
              <ul className="status-history">
                {order.status_history.map((history, index) => (
                  <li key={index}>
                    <span className="history-status">
                      {ORDER_STATUS_DISPLAY[history.status]}
                    </span>
                    <span className="history-time">
                      {new Date(history.timestamp).toLocaleString()}
                    </span>
                    {history.notes && (
                      <p className="history-notes">{history.notes}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="modal-actions">
            {!["delivered", "cancelled"].includes(order.status) && (
              <button
                onClick={() => setShowStatusUpdate(!showStatusUpdate)}
                className="btn btn-primary"
              >
                Update Status
              </button>
            )}
            <button onClick={onClose} className="btn btn-secondary">
              Close
            </button>
          </div>

          {showStatusUpdate && (
            <OrderStatusUpdate
              order={order}
              onUpdate={onStatusUpdate}
              onCancel={() => setShowStatusUpdate(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
