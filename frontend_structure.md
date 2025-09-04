# Frontend Project Structure

Generated on: 2025-09-02 11:05:10

## Component Hierarchy

```
App.js
├── Layout
│   ├── Header
│   └── Footer
├── Routes
│   ├── Public Routes
│   │   ├── HomePage
│   │   ├── AboutPage
│   │   ├── ContactPage
│   │   ├── PartnersPage
│   │   └── PrivacyPage
│   └── Protected Routes
│       ├── Login
│       ├── Register
│       └── MenuManagement
│           ├── MenuList
│           ├── MenuItem
│           └── MenuForm
└── Components
    ├── OrderList
    ├── OrderDetails
    ├── OrderStatusUpdate
    └── NotificationManager
```

## Service Layer

- **api.js** - Base API configuration and interceptors
- **authService.js** - Authentication related API calls
- **menuService.js** - Menu CRUD operations
- **orderService.js** - Order management
- **notificationService.js** - Real-time notifications
- **webhookService.js** - Webhook handling

## Key Features

- 🔐 **Authentication** - Login/Register with protected routes
- 📱 **Responsive Design** - Mobile-first approach
- 🔔 **Real-time Notifications** - WebSocket integration
- 🍕 **Menu Management** - CRUD operations for restaurant items
- 📦 **Order Tracking** - Real-time order status updates
- 🎨 **Modern UI** - Clean and intuitive interface
