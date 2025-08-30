import api from './api';

class WebhookService {
  constructor() {
    this.pollingInterval = null;
    this.eventSource = null;
    this.isPolling = false;
    this.isSSE = false;
  }

  // Polling approach (simpler, works everywhere)
  startPolling(onNotification, interval = 5000) {
    if (this.isPolling) return;
    
    this.isPolling = true;
    
    // Initial check
    this.checkNotifications(onNotification);
    
    // Set up polling
    this.pollingInterval = setInterval(() => {
      this.checkNotifications(onNotification);
    }, interval);
  }

  stopPolling() {
    this.isPolling = false;
    if (this.pollingInterval) {
      clearInterval(this.pollingInterval);
      this.pollingInterval = null;
    }
  }

  async checkNotifications(onNotification) {
    try {
      const response = await api.get('/webhooks/notifications/unread');
      const notifications = response.data;
      
      if (notifications && notifications.length > 0) {
        // Process each notification
        notifications.forEach(notification => {
          onNotification(notification);
        });
        
        // Mark as read
        const notificationIds = notifications.map(n => n._id || n.id);
        await this.markAsRead(notificationIds);
      }
    } catch (error) {
      console.error('Failed to check notifications:', error);
      // Don't throw - just log the error to prevent breaking the polling
    }
  }

  async markAsRead(notificationIds) {
    if (!notificationIds || notificationIds.length === 0) return;
    
    try {
      await api.post('/webhooks/notifications/mark-read', {
        notification_ids: notificationIds
      });
    } catch (error) {
      console.error('Failed to mark notifications as read:', error);
    }
  }

  // Server-Sent Events approach (real-time, but has CORS limitations)
  startSSE(onNotification) {
    if (this.isSSE) return;
    
    try {
      const token = localStorage.getItem('access_token');
      if (!token) {
        console.error('No access token found, falling back to polling');
        this.startPolling(onNotification);
        return;
      }
      
      const apiUrl = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api/v1';
      const baseUrl = apiUrl.replace('/api/v1', '');
      
      // SSE doesn't support custom headers, so pass token as query param
      const sseUrl = `${baseUrl}/api/v1/webhooks/notifications/stream?token=${encodeURIComponent(token)}`;
      
      this.eventSource = new EventSource(sseUrl);
      this.isSSE = true;

      this.eventSource.onopen = () => {
        console.log('SSE connection opened');
      };

      this.eventSource.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);
          
          if (data.type === 'ping') {
            // Heartbeat message, ignore
            return;
          }
          
          if (data.type === 'new_notifications' && data.notifications) {
            data.notifications.forEach(notification => {
              onNotification(notification);
            });
          } else if (data.type === 'notification' && data.notification) {
            // Single notification
            onNotification(data.notification);
          }
        } catch (error) {
          console.error('Failed to parse SSE data:', error);
        }
      };

      this.eventSource.onerror = (error) => {
        console.error('SSE error:', error);
        this.stopSSE();
        
        // Fallback to polling after a delay
        setTimeout(() => {
          console.log('Falling back to polling due to SSE error');
          this.startPolling(onNotification);
        }, 5000);
      };
      
    } catch (error) {
      console.error('Failed to start SSE:', error);
      // Fallback to polling
      this.startPolling(onNotification);
    }
  }

  stopSSE() {
    this.isSSE = false;
    if (this.eventSource) {
      this.eventSource.close();
      this.eventSource = null;
    }
  }

  // Stop all notification methods
  stop() {
    this.stopPolling();
    this.stopSSE();
  }

  // Utility method to test notifications
  async testNotification(onNotification) {
    const testNotification = {
      _id: 'test-' + Date.now(),
      type: 'order_confirmed',
      data: {
        order_number: 'TEST-001',
        customer_name: 'Test Customer',
        total: 100.00,
        items: [{ name: 'Test Item', quantity: 1 }]
      },
      created_at: new Date().toISOString()
    };
    
    onNotification(testNotification);
  }
}

// Export as singleton
const webhookService = new WebhookService();
export default webhookService;
