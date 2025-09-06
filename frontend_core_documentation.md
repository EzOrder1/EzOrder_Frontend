# Frontend Core Documentation

This document contains the essential source code files from the frontend project.

## Table of Contents

### Configuration

- [package.json](#package-json)
- [.env.example](#-env-example)

### Core Application

- [src/App.js](#src-app-js)
- [src/index.js](#src-index-js)

### Authentication

- [src/components/auth/Login.js](#src-components-auth-login-js)
- [src/components/auth/Register.js](#src-components-auth-register-js)
- [src/components/auth/ProtectedRoute.js](#src-components-auth-protectedroute-js)
- [src/contexts/AuthContext.js](#src-contexts-authcontext-js)
- [src/services/authService.js](#src-services-authservice-js)

### Dashboard Components

- [src/components/dashboard/DashboardStats.js](#src-components-dashboard-dashboardstats-js)
- [src/components/dashboard/LiveOrders.js](#src-components-dashboard-liveorders-js)
- [src/components/dashboard/MenuSnapshot.js](#src-components-dashboard-menusnapshot-js)
- [src/components/dashboard/SalesChart.js](#src-components-dashboard-saleschart-js)

### Layout Components

- [src/components/layout/Header.js](#src-components-layout-header-js)
- [src/components/layout/Sidebar.js](#src-components-layout-sidebar-js)
- [src/components/layout/Layout.js](#src-components-layout-layout-js)

### Menu Management

- [src/components/menu/MenuForm.js](#src-components-menu-menuform-js)
- [src/components/menu/MenuItem.js](#src-components-menu-menuitem-js)
- [src/components/menu/MenuList.js](#src-components-menu-menulist-js)
- [src/services/menuService.js](#src-services-menuservice-js)

### Order Management

- [src/components/orders/OrderDetails.js](#src-components-orders-orderdetails-js)
- [src/components/orders/OrderList.js](#src-components-orders-orderlist-js)
- [src/components/orders/OrderStatusUpdate.js](#src-components-orders-orderstatusupdate-js)

### Notifications

- [src/components/notifications/NotificationManager.js](#src-components-notifications-notificationmanager-js)

### Pages

- [src/pages/Dashboard.js](#src-pages-dashboard-js)
- [src/pages/MenuManagement.js](#src-pages-menumanagement-js)
- [src/pages/Analytics.js](#src-pages-analytics-js)
- [src/pages/Customers.js](#src-pages-customers-js)

### Services

- [src/services/api.js](#src-services-api-js)
- [src/services/authService.js](#src-services-authservice-js)
- [src/services/menuService.js](#src-services-menuservice-js)
- [src/services/orderService.js](#src-services-orderservice-js)
- [src/services/notificationService.js](#src-services-notificationservice-js)
- [src/services/webhookService.js](#src-services-webhookservice-js)

### Utilities

- [src/utils/constants.js](#src-utils-constants-js)

---

## Source Code

### src/App.js {#src-app-js}

```javascript
import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./components/layout/Layout";
import NotificationManager from "./components/notifications/NotificationManager";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import MenuList from "./components/menu/MenuList";
import Dashboard from "./pages/Dashboard";

// Lazy load heavy components
const MenuManagement = lazy(() => import("./pages/MenuManagement"));
const OrderList = lazy(() => import("./components/orders/OrderList"));
const Analytics = lazy(() => import("./pages/Analytics"));
const Customers = lazy(() => import("./pages/Customers"));

// Public Pages
import PublicHomePage from "./pages/public/HomePage";
import About from "./pages/public/AboutPage";
import Partners from "./pages/public/PartnersPage";
import Contact from "./pages/public/ContactPage";
import PrivacyPolicy from "./pages/public/PrivacyPage";

import "./styles/App.css";

// Loading component
const LoadingFallback = () => (
  <div className="loading-container">
    <div className="loading-spinner"></div>
    <p>Loading...</p>
  </div>
);

function App() {
  return (
    <AuthProvider>
      <Router>
        <Layout>
          <NotificationManager />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<PublicHomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />

            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route path="/menu" element={<MenuList />} />
            <Route
              path="/menu/manage"
              element={
                <ProtectedRoute requiredRole="staff">
                  <Suspense fallback={<LoadingFallback />}>
                    <MenuManagement />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="/orders"
              element={
                <ProtectedRoute requiredRole="staff">
                  <Suspense fallback={<LoadingFallback />}>
                    <OrderList />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="/analytics"
              element={
                <ProtectedRoute requiredRole="staff">
                  <Suspense fallback={<LoadingFallback />}>
                    <Analytics />
                  </Suspense>
                </ProtectedRoute>
              }
            />
            <Route
              path="/customers"
              element={
                <ProtectedRoute requiredRole="admin">
                  <Suspense fallback={<LoadingFallback />}>
                    <Customers />
                  </Suspense>
                </ProtectedRoute>
              }
            />

            {/* Catch all - redirect to home */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Router>
    </AuthProvider>
  );
}

export default App;
```

---

### src/index.js {#src-index-js}

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ErrorBoundary from "./components/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
```

---

### src/components/auth/Login.js {#src-components-auth-login-js}

```javascript
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await login(formData);

    if (result.success) {
      navigate("/");
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
        <p className="auth-link">
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
```

---

### src/components/auth/Register.js {#src-components-auth-register-js}

```javascript
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { registerWithOTP } = useAuth();
  const [step, setStep] = useState(1); // 1: Form, 2: OTP Verification
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone_number: "",
    address: "",
    city: "",
    postal_code: "",
  });
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  // Start resend timer
  React.useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, ""); // Only allow digits
    if (value.length <= 6) {
      setOtp(value);
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validate password length
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    // Send OTP
    const result = await registerWithOTP.sendOTP(formData.phone_number);

    if (result.success) {
      setStep(2);
      setResendTimer(60); // 60 seconds before allowing resend
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      setLoading(false);
      return;
    }

    const result = await registerWithOTP.verifyAndRegister({
      ...formData,
      otp_code: otp,
    });

    if (result.success) {
      alert("Registration successful! Please login.");
      navigate("/login");
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  const handleResendOTP = async () => {
    if (resendTimer > 0) return;

    setError("");
    setLoading(true);

    const result = await registerWithOTP.sendOTP(formData.phone_number);

    if (result.success) {
      setResendTimer(60);
      setError(""); // Clear any previous errors
      alert("OTP resent successfully!");
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  const handleBackToForm = () => {
    setStep(1);
    setOtp("");
    setError("");
  };

  if (step === 2) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h2>Verify Phone Number</h2>
          <p className="otp-instruction">
            We've sent a 6-digit OTP to <strong>{formData.phone_number}</strong>{" "}
            via WhatsApp.
          </p>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleVerifyOTP}>
            <div className="form-group">
              <label htmlFor="otp">Enter OTP</label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={otp}
                onChange={handleOtpChange}
                placeholder="000000"
                maxLength="6"
                required
                disabled={loading}
                className="otp-input"
                autoComplete="off"
              />
            </div>
            <div className="otp-actions">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading || otp.length !== 6}
              >
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
              <button
                type="button"
                onClick={handleBackToForm}
                className="btn btn-secondary"
                disabled={loading}
              >
                Back
              </button>
            </div>
          </form>
          <div className="resend-section">
            {resendTimer > 0 ? (
              <p className="resend-timer">Resend OTP in {resendTimer}s</p>
            ) : (
              <button
                onClick={handleResendOTP}
                className="resend-link"
                disabled={loading}
              >
                Resend OTP
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register Restaurant</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmitForm}>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password * (min 6 characters)</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Restaurant Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength="2"
              maxLength="100"
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone_number">Phone Number * (WhatsApp)</label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
              placeholder="+923001234567"
              disabled={loading}
              title="Please enter a valid phone number with country code"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              minLength="5"
              maxLength="200"
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City *</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              minLength="2"
              maxLength="100"
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="postal_code">Postal Code</label>
            <input
              type="text"
              id="postal_code"
              name="postal_code"
              value={formData.postal_code}
              onChange={handleChange}
              maxLength="20"
              disabled={loading}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Processing..." : "Continue to Verification"}
          </button>
        </form>
        <p className="auth-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
```

---

### src/components/auth/ProtectedRoute.js {#src-components-auth-protectedroute-js}

```javascript
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const ProtectedRoute = ({ children, requiredRole = null }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole) {
    if (requiredRole === "staff" && !["staff", "admin"].includes(user.role)) {
      return <Navigate to="/" replace />;
    }
    if (requiredRole === "admin" && user.role !== "admin") {
      return <Navigate to="/" replace />;
    }
  }

  return children;
};

export default ProtectedRoute;
```

---

### src/contexts/AuthContext.js {#src-contexts-authcontext-js}

```javascript
import React, { createContext, useState, useContext, useEffect } from "react";
import authService from "../services/authService";

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on mount
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (credentials) => {
    try {
      const response = await authService.login(credentials);
      setUser(response.user);
      return { success: true, data: response };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.detail || "Login failed",
      };
    }
  };

  const register = async (userData) => {
    try {
      const response = await authService.register(userData);
      return { success: true, data: response };
    } catch (error) {
      return {
        success: false,
        error: error.response?.data?.detail || "Registration failed",
      };
    }
  };

  const registerWithOTP = {
    sendOTP: async (phoneNumber) => {
      try {
        const response = await authService.sendRegistrationOTP(phoneNumber);
        return { success: true, data: response };
      } catch (error) {
        return {
          success: false,
          error: error.response?.data?.detail || "Failed to send OTP",
        };
      }
    },

    verifyAndRegister: async (userData) => {
      try {
        const response = await authService.registerWithOTP(userData);
        return { success: true, data: response };
      } catch (error) {
        return {
          success: false,
          error: error.response?.data?.detail || "Registration failed",
        };
      }
    },
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  const updateUserInfo = async () => {
    try {
      const updatedUser = await authService.getCurrentUser();
      setUser(updatedUser);
      localStorage.setItem("user", JSON.stringify(updatedUser));
    } catch (error) {
      console.error("Failed to update user info:", error);
    }
  };

  const isStaff = () => {
    return user?.role === "staff" || user?.role === "admin";
  };

  const isAdmin = () => {
    return user?.role === "admin";
  };

  const value = {
    user,
    login,
    register,
    registerWithOTP,
    logout,
    updateUserInfo,
    isStaff,
    isAdmin,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
```

---

### src/components/dashboard/DashboardStats.js {#src-components-dashboard-dashboardstats-js}

```javascript
import React from "react";
import "./DashboardStats.css";

const DashboardStats = ({ stats }) => {
  const statCards = [
    {
      title: "Today's Orders",
      value: stats?.todayOrders || 0,
      icon: "📦",
      color: "#3498db",
      trend: "+12%",
      trendUp: true,
    },
    {
      title: "Today's Revenue",
      value: `PKR ${stats?.todayRevenue?.toFixed(0) || 0}`,
      icon: "💰",
      color: "#2ecc71",
      trend: "+8%",
      trendUp: true,
    },
    {
      title: "Top Selling Item",
      value: stats?.topItem || "Pizza Margherita",
      icon: "🍕",
      color: "#e74c3c",
      trend: "25 sold",
      trendUp: true,
    },
    {
      title: "New Customers",
      value: stats?.newCustomers || 0,
      icon: "👤",
      color: "#f39c12",
      trend: "+5%",
      trendUp: true,
    },
  ];

  return (
    <div className="dashboard-stats">
      {statCards.map((stat, index) => (
        <div
          key={index}
          className="stat-card"
          style={{ "--stat-color": stat.color }}
        >
          <div className="stat-header">
            <div className="stat-icon-wrapper">
              <span className="stat-icon">{stat.icon}</span>
            </div>
            <div className="stat-trend">
              <span className={`trend ${stat.trendUp ? "up" : "down"}`}>
                {stat.trendUp ? "↑" : "↓"} {stat.trend}
              </span>
            </div>
          </div>
          <div className="stat-content">
            <h3 className="stat-value">{stat.value}</h3>
            <p className="stat-title">{stat.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardStats;
```

---

### src/components/dashboard/LiveOrders.js {#src-components-dashboard-liveorders-js}

```javascript
import React from "react";
import { Link } from "react-router-dom";
import "./LiveOrders.css";

const LiveOrders = ({ orders }) => {
  const getStatusColor = (status) => {
    const colors = {
      confirmed: "#3498db",
      preparing: "#f39c12",
      ready: "#2ecc71",
      out_for_delivery: "#e74c3c",
      delivered: "#27ae60",
      cancelled: "#95a5a6",
    };
    return colors[status] || "#95a5a6";
  };

  const formatTime = (date) => {
    return new Date(date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="live-orders-card">
      <div className="card-header">
        <h3>Live Orders</h3>
        <Link to="/orders" className="view-all-link">
          View All →
        </Link>
      </div>

      <div className="orders-table-wrapper">
        <table className="live-orders-table">
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Items</th>
              <th>Status</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.length === 0 ? (
              <tr>
                <td colSpan="6" className="empty-state">
                  No active orders at the moment
                </td>
              </tr>
            ) : (
              orders.slice(0, 5).map((order) => (
                <tr key={order.order_number} className="order-row">
                  <td className="order-id">#{order.order_number}</td>
                  <td className="customer-name">{order.user_name}</td>
                  <td className="order-items">
                    <span className="items-count">
                      {order.items.length} items
                    </span>
                  </td>
                  <td>
                    <span
                      className="status-badge"
                      style={{ backgroundColor: getStatusColor(order.status) }}
                    >
                      {order.status.replace(/_/g, " ")}
                    </span>
                  </td>
                  <td className="order-time">{formatTime(order.created_at)}</td>
                  <td>
                    <Link
                      to={`/orders/${order.order_number}`}
                      className="action-btn"
                    >
                      Update Status
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LiveOrders;
```

---

### src/components/dashboard/MenuSnapshot.js {#src-components-dashboard-menusnapshot-js}

```javascript
import React from "react";
import { Link } from "react-router-dom";
import "./MenuSnapshot.css";

const MenuSnapshot = ({ items }) => {
  return (
    <div className="menu-snapshot-card">
      <div className="card-header">
        <h3>Menu Quick View</h3>
        <Link to="/menu/manage" className="manage-link">
          Manage →
        </Link>
      </div>

      <div className="menu-items-list">
        {items.length === 0 ? (
          <p className="empty-state">No menu items found</p>
        ) : (
          items.slice(0, 8).map((item) => (
            <div key={item.id} className="menu-item-row">
              <div className="item-info">
                <h4>{item.name}</h4>
                <p className="item-category">{item.category}</p>
              </div>
              <div className="item-meta">
                <span className="item-price">PKR {item.price}</span>
                <label className="availability-toggle">
                  <input type="checkbox" defaultChecked />
                  <span className="toggle-slider"></span>
                </label>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="quick-actions">
        <Link to="/menu/manage" className="btn-add-item">
          + Add New Item
        </Link>
      </div>
    </div>
  );
};

export default MenuSnapshot;
```

---

### src/components/dashboard/SalesChart.js {#src-components-dashboard-saleschart-js}

```javascript
import React from "react";
import "./SalesChart.css";

const SalesChart = ({ data }) => {
  const maxRevenue = Math.max(...data.map((d) => d.revenue));
  const maxOrders = Math.max(...data.map((d) => d.orders));

  return (
    <div className="sales-chart-card">
      <div className="card-header">
        <h3>Sales Overview</h3>
        <div className="chart-legend">
          <span className="legend-item revenue">Revenue</span>
          <span className="legend-item orders">Orders</span>
        </div>
      </div>

      <div className="chart-container">
        <div className="chart-y-axis">
          <span>PKR {maxRevenue}</span>
          <span>PKR {maxRevenue / 2}</span>
          <span>PKR 0</span>
        </div>

        <div className="chart-bars">
          {data.map((item, index) => (
            <div key={index} className="chart-bar-group">
              <div className="bars-wrapper">
                <div
                  className="bar revenue-bar"
                  style={{ height: `${(item.revenue / maxRevenue) * 100}%` }}
                >
                  <span className="bar-value">PKR {item.revenue}</span>
                </div>
                <div
                  className="bar orders-bar"
                  style={{ height: `${(item.orders / maxOrders) * 100}%` }}
                >
                  <span className="bar-value">{item.orders}</span>
                </div>
              </div>
              <span className="bar-label">{item.day}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="chart-summary">
        <div className="summary-item">
          <span className="summary-label">Total Revenue</span>
          <span className="summary-value">
            PKR{" "}
            {data.reduce((sum, item) => sum + item.revenue, 0).toLocaleString()}
          </span>
        </div>
        <div className="summary-item">
          <span className="summary-label">Total Orders</span>
          <span className="summary-value">
            {data.reduce((sum, item) => sum + item.orders, 0)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SalesChart;
```

---

### src/components/layout/Header.js {#src-components-layout-header-js}

```javascript
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Header.css";

const Header = () => {
  const { user, logout, isStaff } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const isPublicPage = [
    "/",
    "/about",
    "/partners",
    "/contact",
    "/privacy",
  ].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
    setUserDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`modern-header ${scrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <Link
          to={user ? "/dashboard" : "/"}
          className="logo-link"
          onClick={closeMobileMenu}
        >
          <span className="logo-text">EzOrder</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`desktop-nav ${mobileMenuOpen ? "mobile-open" : ""}`}>
          {!user && isPublicPage ? (
            <>
              <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                <span className="nav-icon">🏠</span>
                <span className="nav-text">Home</span>
              </Link>
              <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
                <span className="nav-icon">ℹ️</span>
                <span className="nav-text">About</span>
              </Link>
              <Link
                to="/partners"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">🤝</span>
                <span className="nav-text">Partners</span>
              </Link>
              <Link
                to="/contact"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">📧</span>
                <span className="nav-text">Contact</span>
              </Link>
              <div className="nav-divider"></div>
              <Link
                to="/login"
                className="nav-link login-link"
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">🔑</span>
                <span className="nav-text">Login</span>
              </Link>
              <Link
                to="/register"
                className="btn-header"
                onClick={closeMobileMenu}
              >
                <span className="btn-icon">🚀</span>
                Get Started
              </Link>
            </>
          ) : user ? (
            <>
              <Link
                to="/dashboard"
                className="nav-link"
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">📊</span>
                <span className="nav-text">Dashboard</span>
              </Link>
              <Link to="/menu" className="nav-link" onClick={closeMobileMenu}>
                <span className="nav-icon">🍕</span>
                <span className="nav-text">Menu</span>
              </Link>
              {isStaff() && (
                <>
                  <Link
                    to="/orders"
                    className="nav-link"
                    onClick={closeMobileMenu}
                  >
                    <span className="nav-icon">📋</span>
                    <span className="nav-text">Orders</span>
                  </Link>
                  <Link
                    to="/menu/manage"
                    className="nav-link"
                    onClick={closeMobileMenu}
                  >
                    <span className="nav-icon">⚙️</span>
                    <span className="nav-text">Manage</span>
                  </Link>
                </>
              )}

              <div className="user-menu" ref={dropdownRef}>
                <button
                  className="user-menu-trigger"
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                >
                  <div className="user-avatar">
                    <span>{user.name.charAt(0).toUpperCase()}</span>
                  </div>
                  <div className="user-info-wrapper">
                    <span className="user-name">{user.name}</span>
                    <span className="user-email-small">{user.email}</span>
                    <span className="user-role-badge">{user.role}</span>
                  </div>
                  <svg
                    className={`dropdown-arrow ${
                      userDropdownOpen ? "open" : ""
                    }`}
                    width="12"
                    height="8"
                    viewBox="0 0 12 8"
                  >
                    <path
                      d="M1 1l5 5 5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </button>

                {userDropdownOpen && (
                  <div className="user-dropdown">
                    <div className="dropdown-header">
                      <div className="user-avatar large">
                        <span>{user.name.charAt(0).toUpperCase()}</span>
                      </div>
                      <div className="user-info">
                        <p className="user-fullname">{user.name}</p>
                        <p className="user-email">{user.email}</p>
                        <span className="user-role">{user.role}</span>
                      </div>
                    </div>
                    <div className="dropdown-divider"></div>
                    <Link
                      to="/profile"
                      className="dropdown-item"
                      onClick={() => {
                        setUserDropdownOpen(false);
                        closeMobileMenu();
                      }}
                    >
                      <span className="dropdown-icon">👤</span>
                      My Profile
                    </Link>
                    <Link
                      to="/settings"
                      className="dropdown-item"
                      onClick={() => {
                        setUserDropdownOpen(false);
                        closeMobileMenu();
                      }}
                    >
                      <span className="dropdown-icon">⚙️</span>
                      Settings
                    </Link>
                    <div className="dropdown-divider"></div>
                    <button
                      onClick={handleLogout}
                      className="dropdown-item logout"
                    >
                      <span className="dropdown-icon">🚪</span>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="nav-link login-link"
                onClick={closeMobileMenu}
              >
                <span className="nav-icon">🔑</span>
                <span className="nav-text">Login</span>
              </Link>
              <Link
                to="/register"
                className="btn-header"
                onClick={closeMobileMenu}
              >
                <span className="btn-icon">🚀</span>
                Register
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu}></div>
      )}
    </header>
  );
};

export default Header;
```

---

### src/components/layout/Sidebar.js {#src-components-layout-sidebar-js}

```javascript
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./Sidebar.css";

const Sidebar = ({ isCollapsed, toggleSidebar }) => {
  const location = useLocation();
  const { user, isStaff, isAdmin } = useAuth();
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location]);

  const menuItems = [
    {
      path: "/dashboard",
      icon: "📊",
      label: "Dashboard",
      roles: ["customer", "staff", "admin"],
    },
    {
      path: "/menu/manage",
      icon: "🍴",
      label: "Menu Management",
      roles: ["staff", "admin"],
    },
    {
      path: "/orders",
      icon: "🛒",
      label: "Order List",
      roles: ["staff", "admin"],
    },
    {
      path: "/customers",
      icon: "👥",
      label: "Customers",
      roles: ["admin"],
    },
    {
      path: "/analytics",
      icon: "📈",
      label: "Analytics",
      roles: ["staff", "admin"],
    },
    {
      path: "/settings",
      icon: "⚙️",
      label: "Settings",
      roles: ["customer", "staff", "admin"],
    },
  ];

  const filteredMenuItems = menuItems.filter((item) =>
    item.roles.includes(user?.role || "customer")
  );

  return (
    <aside className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <Link to="/dashboard" className="sidebar-logo">
          {!isCollapsed && <span className="logo-text">EzOrder</span>}
          {isCollapsed && <span className="logo-icon">🍕</span>}
        </Link>
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <span className="toggle-icon">{isCollapsed ? "→" : "←"}</span>
        </button>
      </div>

      <nav className="sidebar-nav">
        {filteredMenuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`sidebar-item ${
              activeItem === item.path ? "active" : ""
            }`}
            title={isCollapsed ? item.label : ""}
          >
            <span className="sidebar-icon">{item.icon}</span>
            {!isCollapsed && (
              <span className="sidebar-label">{item.label}</span>
            )}
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        {!isCollapsed && (
          <div className="user-info">
            <div className="user-avatar-small">
              {user?.name?.charAt(0).toUpperCase()}
            </div>
            <div className="user-details">
              <p className="user-name">{user?.name}</p>
              <p className="user-role">{user?.role}</p>
            </div>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
```

---

### src/components/layout/Layout.js {#src-components-layout-layout-js}

```javascript
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Check if we're on a page that needs sidebar
  const showSidebar =
    user &&
    [
      "/dashboard",
      "/menu/manage",
      "/orders",
      "/customers",
      "/analytics",
      "/settings",
    ].some((path) => location.pathname.startsWith(path));

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="app-layout">
      <Header />
      {showSidebar && (
        <Sidebar isCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      )}
      <main
        className={`main-content ${showSidebar ? "with-sidebar" : ""} ${
          sidebarCollapsed ? "sidebar-collapsed" : ""
        }`}
      >
        {children}
      </main>
      {!showSidebar && <Footer />}
    </div>
  );
};

export default Layout;
```

---

### src/components/menu/MenuForm.js {#src-components-menu-menuform-js}

```javascript
import React, { useState, useEffect } from "react";
import menuService from "../../services/menuService";

const MenuForm = ({ item, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCategories();
    if (item) {
      setFormData({
        name: item.name,
        price: item.price,
        category: item.category,
        description: item.description,
      });
    }
  }, [item]);

  const fetchCategories = async () => {
    try {
      const data = await menuService.getCategories();
      setCategories(data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "price" ? parseFloat(value) || "" : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      let result;
      if (item) {
        result = await menuService.updateItem(item.id, formData);
      } else {
        result = await menuService.createItem(formData);
      }
      onSave(result);
    } catch (error) {
      setError(error.response?.data?.detail || "Failed to save menu item");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="menu-form">
      <h3>{item ? "Edit Menu Item" : "Add New Menu Item"}</h3>
      {error && <div className="error-message">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            maxLength="100"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price">Price *</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            min="0.01"
            step="0.01"
            disabled={loading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="category">Category *</label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            disabled={loading}
          >
            <option value="">Select a category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            maxLength="200"
            rows="3"
            disabled={loading}
          />
        </div>

        <div className="form-actions">
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Saving..." : "Save"}
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

export default MenuForm;
```

---

### src/components/menu/MenuItem.js {#src-components-menu-menuitem-js}

```javascript
import React from "react";

const MenuItem = ({ item, onEdit, onDelete, isManage = false }) => {
  return (
    <div className="menu-item">
      <h3>{item.name}</h3>
      <p className="category">{item.category}</p>
      <p className="description">{item.description}</p>
      <p className="price">PKR {item.price.toFixed(2)}</p>

      {isManage && (
        <div className="item-actions">
          <button onClick={() => onEdit(item)} className="btn btn-secondary">
            Edit
          </button>
          <button onClick={() => onDelete(item.id)} className="btn btn-danger">
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuItem;
```

---

### src/components/menu/MenuList.js {#src-components-menu-menulist-js}

```javascript
import React, { useState, useEffect } from "react";
import menuService from "../../services/menuService";
import MenuItem from "./MenuItem";

const MenuList = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCategories();
    fetchMenuItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const fetchCategories = async () => {
    try {
      const data = await menuService.getCategories();
      setCategories(data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  const fetchMenuItems = async () => {
    setLoading(true);
    try {
      const params = selectedCategory ? { category: selectedCategory } : {};
      const data = await menuService.getAllItems(params);
      setMenuItems(data.items);
      setError("");
    } catch (error) {
      setError("Failed to load menu items");
      console.error("Error fetching menu:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="menu-container">
      <h2>Our Menu</h2>

      <div className="category-filter">
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {loading && <div className="loading">Loading menu...</div>}
      {error && <div className="error-message">{error}</div>}

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuList;
```

---

### src/components/orders/OrderDetails.js {#src-components-orders-orderdetails-js}

```javascript
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
```

---

### src/components/orders/OrderList.js {#src-components-orders-orderlist-js}

```javascript
import React, { useState, useEffect } from "react";
import { useAuth } from "../../contexts/AuthContext";
import orderService from "../../services/orderService";
import OrderDetails from "./OrderDetails";
import { ORDER_STATUS, ORDER_STATUS_DISPLAY } from "../../utils/constants";

const OrderList = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [statusFilter, setStatusFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchOrders();
    fetchStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [statusFilter]);

  const fetchOrders = async () => {
    setLoading(true);
    try {
      const params = statusFilter ? { status: statusFilter } : {};
      const data = await orderService.getAllOrders(params);
      setOrders(data.orders);
      setError("");
    } catch (error) {
      setError("Failed to load orders");
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const data = await orderService.getOrderStats();
      setStats(data);
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    }
  };

  const handleStatusUpdate = async () => {
    await fetchOrders();
    setSelectedOrder(null);
  };

  return (
    <div className="orders-container">
      <h2>Order Management</h2>

      {stats && (
        <div className="order-stats">
          <h3>Order Statistics</h3>
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-label">Total Orders:</span>
              <span className="stat-value">{stats.total_orders}</span>
            </div>
            {Object.entries(stats.by_status).map(([status, count]) => (
              <div key={status} className="stat-item">
                <span className="stat-label">
                  {ORDER_STATUS_DISPLAY[status]}:
                </span>
                <span className="stat-value">{count}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="filter-section">
        <label htmlFor="statusFilter">Filter by Status:</label>
        <select
          id="statusFilter"
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="">All Orders</option>
          {Object.entries(ORDER_STATUS).map(([key, value]) => (
            <option key={key} value={value}>
              {ORDER_STATUS_DISPLAY[value]}
            </option>
          ))}
        </select>
      </div>

      {loading && <div className="loading">Loading orders...</div>}
      {error && <div className="error-message">{error}</div>}

      <div className="orders-table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Order Number</th>
              <th>Customer</th>
              <th>Phone</th>
              <th>Total</th>
              <th>Status</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.order_number}>
                <td>{order.order_number}</td>
                <td>{order.user_name}</td>
                <td>{order.phone_number}</td>
                <td>PKR {order.total.toFixed(2)}</td>
                <td>
                  <span
                    className="status-badge"
                    style={{ backgroundColor: `var(--status-${order.status})` }}
                  >
                    {ORDER_STATUS_DISPLAY[order.status]}
                  </span>
                </td>
                <td>{new Date(order.created_at).toLocaleString()}</td>
                <td>
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="btn btn-secondary btn-sm"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedOrder && (
        <OrderDetails
          order={selectedOrder}
          onClose={() => setSelectedOrder(null)}
          onStatusUpdate={handleStatusUpdate}
        />
      )}
    </div>
  );
};

export default OrderList;
```

---

### src/components/orders/OrderStatusUpdate.js {#src-components-orders-orderstatusupdate-js}

```javascript
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
```

---

### src/components/notifications/NotificationManager.js {#src-components-notifications-notificationmanager-js}

```javascript
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import webhookService from "../../services/webhookService";
import { useAuth } from "../../contexts/AuthContext";

const NotificationManager = () => {
  const { user, isStaff } = useAuth();

  useEffect(() => {
    if (user && isStaff()) {
      // Handler for new notifications
      const handleNotification = (notification) => {
        if (notification.type === "order_confirmed") {
          const orderData = notification.data;

          // Show toast notification
          toast.success(
            <div>
              <h4>🎉 New Order Received!</h4>
              <p>
                <strong>Order #:</strong> {orderData.order_number}
              </p>
              <p>
                <strong>Customer:</strong> {orderData.customer_name}
              </p>
              <p>
                <strong>Total:</strong> PKR {orderData.total?.toFixed(2)}
              </p>
              <p>
                <strong>Items:</strong> {orderData.items?.length || 0}
              </p>
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
    const audio = new Audio("/sounds/notification.mp3");
    audio
      .play()
      .catch((e) => console.log("Could not play notification sound:", e));
  };

  return null; // This component doesn't render anything
};

export default NotificationManager;
```

---

### src/pages/Dashboard.js {#src-pages-dashboard-js}

```javascript
import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import DashboardStats from "../components/dashboard/DashboardStats";
import LiveOrders from "../components/dashboard/LiveOrders";
import SalesChart from "../components/dashboard/SalesChart";
import MenuSnapshot from "../components/dashboard/MenuSnapshot";
import orderService from "../services/orderService";
import menuService from "../services/menuService";
import "./Dashboard.css";

const Dashboard = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});
  const [liveOrders, setLiveOrders] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  const [salesData, setSalesData] = useState([]);

  useEffect(() => {
    fetchDashboardData();
    const interval = setInterval(fetchDashboardData, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval);
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);

      // Fetch orders
      const ordersResponse = await orderService.getAllOrders();
      const orders = ordersResponse.orders || [];

      // Calculate stats
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      const todayOrders = orders.filter(
        (order) => new Date(order.created_at) >= today
      );

      const todayRevenue = todayOrders.reduce(
        (sum, order) => sum + order.total,
        0
      );

      // Get active orders
      const activeOrders = orders.filter(
        (order) => !["delivered", "cancelled"].includes(order.status)
      );

      // Calculate top selling item (mock data for now)
      const topItem = "Pepperoni Pizza";

      // Get new customers (mock data)
      const newCustomers = Math.floor(Math.random() * 10) + 5;

      setStats({
        todayOrders: todayOrders.length,
        todayRevenue,
        topItem,
        newCustomers,
      });

      setLiveOrders(activeOrders);

      // Fetch menu items
      const menuResponse = await menuService.getAllItems({ limit: 10 });
      setMenuItems(menuResponse.items || []);

      // Generate sales data for chart (mock data)
      const salesData = generateSalesData();
      setSalesData(salesData);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const generateSalesData = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days.map((day) => ({
      day,
      orders: Math.floor(Math.random() * 50) + 20,
      revenue: Math.floor(Math.random() * 5000) + 2000,
    }));
  };

  if (loading) {
    return (
      <div className="dashboard-loading">
        <div className="loading-spinner"></div>
        <p>Loading dashboard...</p>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="header-content">
          <h1>Welcome back, {user?.name}! 👋</h1>
          <p className="header-subtitle">
            Here's what's happening with your restaurant today.
          </p>
        </div>
        <div className="header-actions">
          <button className="btn-refresh" onClick={fetchDashboardData}>
            🔄 Refresh
          </button>
          <span className="last-updated">
            Last updated: {new Date().toLocaleTimeString()}
          </span>
        </div>
      </div>

      <DashboardStats stats={stats} />

      <div className="dashboard-grid">
        <div className="grid-main">
          <LiveOrders orders={liveOrders} />
          <SalesChart data={salesData} />
        </div>
        <div className="grid-sidebar">
          <MenuSnapshot items={menuItems} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
```

---

### src/pages/MenuManagement.js {#src-pages-menumanagement-js}

```javascript
import React, { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import menuService from "../services/menuService";
import MenuItem from "../components/menu/MenuItem";
import MenuForm from "../components/menu/MenuForm";

const MenuManagement = () => {
  const { isAdmin } = useAuth();
  const [menuItems, setMenuItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCategories();
    fetchMenuItems();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]);

  const fetchCategories = async () => {
    try {
      const data = await menuService.getCategories();
      setCategories(data);
    } catch (error) {
      console.error("Failed to fetch categories:", error);
    }
  };

  const fetchMenuItems = async () => {
    setLoading(true);
    try {
      const params = selectedCategory ? { category: selectedCategory } : {};
      const data = await menuService.getAllItems(params);
      setMenuItems(data.items);
      setError("");
    } catch (error) {
      setError("Failed to load menu items");
      console.error("Error fetching menu:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item) => {
    setSelectedItem(item);
    setShowForm(true);
  };

  const handleDelete = async (itemId) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await menuService.deleteItem(itemId);
        fetchMenuItems();
      } catch (error) {
        alert(
          "Failed to delete item: " +
            (error.response?.data?.detail || "Unknown error")
        );
      }
    }
  };

  const handleSave = (savedItem) => {
    setShowForm(false);
    setSelectedItem(null);
    fetchMenuItems();
  };

  const handleCancel = () => {
    setShowForm(false);
    setSelectedItem(null);
  };

  const handleResetMenu = async () => {
    if (
      window.confirm(
        "Are you sure you want to reset the menu to default? This will delete all custom items!"
      )
    ) {
      try {
        await menuService.resetMenu();
        fetchMenuItems();
        alert("Menu has been reset to default");
      } catch (error) {
        alert(
          "Failed to reset menu: " +
            (error.response?.data?.detail || "Unknown error")
        );
      }
    }
  };

  return (
    <div className="menu-management">
      <div className="management-header">
        <h2>Menu Management</h2>
        <div className="header-actions">
          <button onClick={() => setShowForm(true)} className="btn btn-primary">
            Add New Item
          </button>
          {isAdmin() && (
            <button onClick={handleResetMenu} className="btn btn-danger">
              Reset Menu
            </button>
          )}
        </div>
      </div>

      {showForm && (
        <MenuForm
          item={selectedItem}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}

      <div className="category-filter">
        <label htmlFor="category">Filter by Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      {loading && <div className="loading">Loading menu...</div>}
      {error && <div className="error-message">{error}</div>}

      <div className="menu-grid">
        {menuItems.map((item) => (
          <MenuItem
            key={item.id}
            item={item}
            onEdit={handleEdit}
            onDelete={handleDelete}
            isManage={true}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuManagement;
```

---

### src/pages/Analytics.js {#src-pages-analytics-js}

```javascript
import React, { useState, useEffect } from "react";
import "./Analytics.css";

const Analytics = () => {
  const [timeRange, setTimeRange] = useState("week");
  const [analyticsData, setAnalyticsData] = useState({
    orderTrends: [],
    topDishes: [],
    customerRetention: 0,
    averageOrderValue: 0,
    peakHours: [],
  });

  useEffect(() => {
    // Fetch analytics data
    fetchAnalyticsData();
  }, [timeRange]);

  const fetchAnalyticsData = () => {
    // Mock data - replace with actual API call
    setAnalyticsData({
      orderTrends: generateOrderTrends(),
      topDishes: [
        { name: "Pepperoni Pizza", orders: 145, revenue: 21750 },
        { name: "Margherita Pizza", orders: 132, revenue: 17160 },
        { name: "BBQ Chicken Pizza", orders: 98, revenue: 15680 },
        { name: "Veggie Supreme", orders: 87, revenue: 12180 },
        { name: "Hawaiian Pizza", orders: 76, revenue: 11400 },
      ],
      customerRetention: 78,
      averageOrderValue: 850,
      peakHours: [
        { hour: "12 PM", orders: 45 },
        { hour: "1 PM", orders: 52 },
        { hour: "6 PM", orders: 38 },
        { hour: "7 PM", orders: 64 },
        { hour: "8 PM", orders: 71 },
      ],
    });
  };

  const generateOrderTrends = () => {
    const days = timeRange === "week" ? 7 : timeRange === "month" ? 30 : 90;
    return Array.from({ length: days }, (_, i) => ({
      date: new Date(
        Date.now() - (days - i) * 24 * 60 * 60 * 1000
      ).toLocaleDateString(),
      orders: Math.floor(Math.random() * 50) + 30,
      revenue: Math.floor(Math.random() * 5000) + 3000,
    }));
  };

  return (
    <div className="analytics-container">
      <div className="analytics-header">
        <h1>Analytics Dashboard</h1>
        <div className="time-range-selector">
          <button
            className={timeRange === "week" ? "active" : ""}
            onClick={() => setTimeRange("week")}
          >
            Week
          </button>
          <button
            className={timeRange === "month" ? "active" : ""}
            onClick={() => setTimeRange("month")}
          >
            Month
          </button>
          <button
            className={timeRange === "quarter" ? "active" : ""}
            onClick={() => setTimeRange("quarter")}
          >
            Quarter
          </button>
        </div>
      </div>

      <div className="analytics-grid">
        {/* Key Metrics */}
        <div className="metric-card">
          <h3>Average Order Value</h3>
          <p className="metric-value">PKR {analyticsData.averageOrderValue}</p>
          <span className="metric-change positive">+5.2%</span>
        </div>

        <div className="metric-card">
          <h3>Customer Retention</h3>
          <p className="metric-value">{analyticsData.customerRetention}%</p>
          <span className="metric-change positive">+3.1%</span>
        </div>

        {/* Top Dishes */}
        <div className="analytics-card top-dishes">
          <h3>Top 5 Dishes</h3>
          <div className="dishes-list">
            {analyticsData.topDishes.map((dish, index) => (
              <div key={index} className="dish-item">
                <span className="dish-rank">#{index + 1}</span>
                <div className="dish-info">
                  <h4>{dish.name}</h4>
                  <p>
                    {dish.orders} orders • PKR {dish.revenue}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Peak Hours */}
        <div className="analytics-card peak-hours">
          <h3>Peak Hours</h3>
          <div className="hours-chart">
            {analyticsData.peakHours.map((hour, index) => (
              <div key={index} className="hour-bar">
                <div
                  className="bar"
                  style={{ height: `${(hour.orders / 80) * 100}%` }}
                ></div>
                <span className="hour-label">{hour.hour}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
```

---

### src/pages/Customers.js {#src-pages-customers-js}

```javascript
import React, { useState, useEffect } from "react";
import "./Customers.css";

const Customers = () => {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  useEffect(() => {
    // Fetch customers data
    fetchCustomers();
  }, []);

  const fetchCustomers = () => {
    // Mock data - replace with actual API call
    setCustomers([
      {
        id: 1,
        name: "Sarah Ahmed",
        email: "sarah@example.com",
        phone: "+92 300 1234567",
        totalOrders: 25,
        totalSpent: 15750,
        lastOrder: "2025-09-01",
        status: "active",
      },
      {
        id: 2,
        name: "Ali Hassan",
        email: "ali@example.com",
        phone: "+92 321 9876543",
        totalOrders: 18,
        totalSpent: 12400,
        lastOrder: "2025-08-28",
        status: "active",
      },
      // Add more mock customers
    ]);
  };

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.phone.includes(searchTerm);
    const matchesStatus =
      filterStatus === "all" || customer.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="customers-container">
      <div className="customers-header">
        <h1>Customer Management</h1>
        <div className="header-actions">
          <input
            type="text"
            placeholder="Search customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Customers</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
      </div>

      <div className="customers-stats">
        <div className="stat-box">
          <h3>Total Customers</h3>
          <p>{customers.length}</p>
        </div>
        <div className="stat-box">
          <h3>Active Customers</h3>
          <p>{customers.filter((c) => c.status === "active").length}</p>
        </div>
        <div className="stat-box">
          <h3>Average Order Value</h3>
          <p>PKR 850</p>
        </div>
      </div>

      <div className="customers-table-wrapper">
        <table className="customers-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Contact</th>
              <th>Total Orders</th>
              <th>Total Spent</th>
              <th>Last Order</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.name}</td>
                <td>
                  <div>{customer.email}</div>
                  <div className="phone">{customer.phone}</div>
                </td>
                <td>{customer.totalOrders}</td>
                <td>PKR {customer.totalSpent}</td>
                <td>{new Date(customer.lastOrder).toLocaleDateString()}</td>
                <td>
                  <span className={`status-badge ${customer.status}`}>
                    {customer.status}
                  </span>
                </td>
                <td>
                  <button className="action-btn">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
```

---

### src/services/api.js {#src-services-api-js}

```javascript
import axios from "axios";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8000/api/v1";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = localStorage.getItem("refresh_token");
        if (refreshToken) {
          const response = await axios.post(`${API_BASE_URL}/auth/refresh`, {
            refresh_token: refreshToken,
          });

          const { access_token, refresh_token: newRefreshToken } =
            response.data;
          localStorage.setItem("access_token", access_token);
          localStorage.setItem("refresh_token", newRefreshToken);

          originalRequest.headers.Authorization = `Bearer ${access_token}`;
          return api(originalRequest);
        }
      } catch (refreshError) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("refresh_token");
        localStorage.removeItem("user");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default api;
```

---

### src/services/authService.js {#src-services-authservice-js}

```javascript
import api from "./api";

const authService = {
  login: async (credentials) => {
    const response = await api.post("/auth/login", credentials);
    const { access_token, refresh_token, user } = response.data;

    localStorage.setItem("access_token", access_token);
    localStorage.setItem("refresh_token", refresh_token);
    localStorage.setItem("user", JSON.stringify(user));

    return response.data;
  },

  register: async (userData) => {
    const response = await api.post("/auth/register", userData);
    return response.data;
  },

  sendRegistrationOTP: async (phoneNumber) => {
    const response = await api.post("/auth/send-otp", {
      phone_number: phoneNumber,
    });
    return response.data;
  },

  verifyOTP: async (phoneNumber, otpCode) => {
    const response = await api.post("/auth/verify-otp", {
      phone_number: phoneNumber,
      otp_code: otpCode,
    });
    return response.data;
  },

  registerWithOTP: async (userData) => {
    const response = await api.post("/auth/register-with-otp", userData);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
  },

  getCurrentUser: async () => {
    const response = await api.get("/auth/me");
    return response.data;
  },
};

export default authService;
```

---

### src/services/menuService.js {#src-services-menuservice-js}

```javascript
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

  resetMenu: async () => {
    const response = await api.post("/menu/reset");
    return response.data;
  },
};

export default menuService;
```

---

### src/services/orderService.js {#src-services-orderservice-js}

```javascript
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
```

---

### src/services/notificationService.js {#src-services-notificationservice-js}

```javascript
import io from "socket.io-client";
import { toast } from "react-toastify";

class NotificationService {
  constructor() {
    this.socket = null;
    this.connected = false;
  }

  connect(userId) {
    const API_BASE_URL =
      process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";
    const SOCKET_URL = API_BASE_URL.replace("/api/v1", "");

    this.socket = io(SOCKET_URL, {
      path: "/socket.io/",
      transports: ["websocket", "polling"],
    });

    this.socket.on("connect", () => {
      console.log("WebSocket connected");
      this.connected = true;

      // Authenticate the connection
      this.socket.emit("authenticate", { user_id: userId });
    });

    this.socket.on("new_order", (data) => {
      this.handleNewOrder(data);
    });

    this.socket.on("disconnect", () => {
      console.log("WebSocket disconnected");
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
    const audio = new Audio("/sounds/notification.mp3");
    audio.play().catch((e) => console.log("Error playing sound:", e));
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
```

---

### src/services/webhookService.js {#src-services-webhookservice-js}

```javascript
import api from "./api";

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
      const response = await api.get("/webhooks/notifications/unread");
      const notifications = response.data;

      if (notifications && notifications.length > 0) {
        // Process each notification
        notifications.forEach((notification) => {
          onNotification(notification);
        });

        // Mark as read
        const notificationIds = notifications.map((n) => n._id || n.id);
        await this.markAsRead(notificationIds);
      }
    } catch (error) {
      console.error("Failed to check notifications:", error);
      // Don't throw - just log the error to prevent breaking the polling
    }
  }

  async markAsRead(notificationIds) {
    if (!notificationIds || notificationIds.length === 0) return;

    try {
      await api.post("/webhooks/notifications/mark-read", {
        notification_ids: notificationIds,
      });
    } catch (error) {
      console.error("Failed to mark notifications as read:", error);
    }
  }

  // Server-Sent Events approach (real-time, but has CORS limitations)
  startSSE(onNotification) {
    if (this.isSSE) return;

    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        console.error("No access token found, falling back to polling");
        this.startPolling(onNotification);
        return;
      }

      const apiUrl =
        process.env.REACT_APP_API_BASE_URL || "http://localhost:8000/api/v1";
      const baseUrl = apiUrl.replace("/api/v1", "");

      // SSE doesn't support custom headers, so pass token as query param
      const sseUrl = `${baseUrl}/api/v1/webhooks/notifications/stream?token=${encodeURIComponent(
        token
      )}`;

      this.eventSource = new EventSource(sseUrl);
      this.isSSE = true;

      this.eventSource.onopen = () => {
        console.log("SSE connection opened");
      };

      this.eventSource.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data);

          if (data.type === "ping") {
            // Heartbeat message, ignore
            return;
          }

          if (data.type === "new_notifications" && data.notifications) {
            data.notifications.forEach((notification) => {
              onNotification(notification);
            });
          } else if (data.type === "notification" && data.notification) {
            // Single notification
            onNotification(data.notification);
          }
        } catch (error) {
          console.error("Failed to parse SSE data:", error);
        }
      };

      this.eventSource.onerror = (error) => {
        console.error("SSE error:", error);
        this.stopSSE();

        // Fallback to polling after a delay
        setTimeout(() => {
          console.log("Falling back to polling due to SSE error");
          this.startPolling(onNotification);
        }, 5000);
      };
    } catch (error) {
      console.error("Failed to start SSE:", error);
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
      _id: "test-" + Date.now(),
      type: "order_confirmed",
      data: {
        order_number: "TEST-001",
        customer_name: "Test Customer",
        total: 100.0,
        items: [{ name: "Test Item", quantity: 1 }],
      },
      created_at: new Date().toISOString(),
    };

    onNotification(testNotification);
  }
}

// Export as singleton
const webhookService = new WebhookService();
export default webhookService;
```

---

### src/utils/constants.js {#src-utils-constants-js}

```javascript
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
```

---

### package.json {#package-json}

```json
{
  "name": "pizza-delivery-frontend",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "axios": "^1.6.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.18.0",
    "react-scripts": "^5.0.1",
    "react-toastify": "^9.1.3"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": ["react-app"]
  },
  "browserslist": {
    "production": [">0.2%", "not dead", "not op mini all"],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

---

### .env.example {#-env-example}

```bash
REACT_APP_API_BASE_URL=http://localhost:8000/api/v1
```

---
