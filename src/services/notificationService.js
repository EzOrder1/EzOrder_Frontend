import io from 'socket.io-client';
import { toast } from 'react-toastify';

class NotificationService {
  constructor() {
    this.socket = null;
    this.connected = false;
  }

  connect(userId) {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';
    const SOCKET_URL = API_BASE_URL.replace('/api/v1', '');
    
    this.socket = io(SOCKET_URL, {
      path: '/socket.io/',
      transports: ['websocket', 'polling'],
    });

    this.socket.on('connect', () => {
      console.log('WebSocket connected');
      this.connected = true;
      
      // Authenticate the connection
      this.socket.emit('authenticate', { user_id: userId });
    });

    this.socket.on('new_order', (data) => {
      this.handleNewOrder(data);
    });

    this.socket.on('disconnect', () => {
      console.log('WebSocket disconnected');
      this.connected = false;
    });
  }

  handleNewOrder(data) {
    const { order } = data;
    
    // Show toast notification
    toast.success(
      <div>
        <h4>New Order Received!</h4>
        <p>Order #{order.order_number}</p>
        <p>Customer: {order.customer_name}</p>
        <p>Total: PKR {order.total?.toFixed(2)}</p>
      </div>,
      {
        position: "top-right",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      }
    );

    // Play notification sound
    this.playNotificationSound();
  }

  playNotificationSound() {
    const audio = new Audio('/sounds/notification.mp3');
    audio.play().catch(e => console.log('Error playing sound:', e));
  }

  disconnect() {
    if (this.socket) {
      this.socket.disconnect();
      this.socket = null;
      this.connected = false;
    }
  }
}

export default new NotificationService();
