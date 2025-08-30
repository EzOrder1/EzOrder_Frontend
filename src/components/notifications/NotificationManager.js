import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import webhookService from '../../services/webhookService';
import { useAuth } from '../../contexts/AuthContext';

const NotificationManager = () => {
  const { user, isStaff } = useAuth();

  useEffect(() => {
    if (user && isStaff()) {
      // Handler for new notifications
      const handleNotification = (notification) => {
        if (notification.type === 'order_confirmed') {
          const orderData = notification.data;
          
          // Show toast notification
          toast.success(
            <div>
              <h4>🎉 New Order Received!</h4>
              <p><strong>Order #:</strong> {orderData.order_number}</p>
              <p><strong>Customer:</strong> {orderData.customer_name}</p>
              <p><strong>Total:</strong> PKR {orderData.total?.toFixed(2)}</p>
              <p><strong>Items:</strong> {orderData.items?.length || 0}</p>
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
          playNotificationSound();
        }
      };

      // Start webhook notifications (choose one approach)
      // Option 1: Polling (simpler, works everywhere)
      webhookService.startPolling(handleNotification, 5000); // Check every 5 seconds

      // Option 2: Server-Sent Events (real-time, may need proxy config)
      // webhookService.startSSE(handleNotification);

      return () => {
        webhookService.stopPolling();
        // webhookService.stopSSE();
      };
    }
  }, [user, isStaff]);

  const playNotificationSound = () => {
    const audio = new Audio('/sounds/notification.mp3');
    audio.play().catch(e => console.log('Could not play notification sound:', e));
  };

  return null; // This component doesn't render anything
};

export default NotificationManager;
