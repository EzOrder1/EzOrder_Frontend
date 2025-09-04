# Frontend Documentation

Generated on: 2025-09-02 11:05:07

Total files documented: 37

## Table of Contents


### Other Files
- [src\index.js](#src-index-js)
- [src\App.js](#src-App-js)

### Other Components
- [src\components\auth\Login.js](#src-components-auth-Login-js)
- [src\components\auth\ProtectedRoute.js](#src-components-auth-ProtectedRoute-js)
- [src\components\auth\Register.js](#src-components-auth-Register-js)
- [src\components\layout\Footer.css](#src-components-layout-Footer-css)
- [src\components\layout\Footer.js](#src-components-layout-Footer-js)
- [src\components\layout\Header.css](#src-components-layout-Header-css)
- [src\components\layout\Header.js](#src-components-layout-Header-js)
- [src\components\layout\Layout.js](#src-components-layout-Layout-js)
- [src\components\menu\MenuForm.js](#src-components-menu-MenuForm-js)
- [src\components\menu\MenuItem.js](#src-components-menu-MenuItem-js)
- [src\components\menu\MenuList.js](#src-components-menu-MenuList-js)
- [src\components\orders\OrderDetails.js](#src-components-orders-OrderDetails-js)
- [src\components\orders\OrderList.js](#src-components-orders-OrderList-js)
- [src\components\orders\OrderStatusUpdate.js](#src-components-orders-OrderStatusUpdate-js)
- [src\components\notifications\NotificationManager.js](#src-components-notifications-NotificationManager-js)
- [src\components\ErrorBoundary.js](#src-components-ErrorBoundary-js)

### Context Providers
- [src\contexts\AuthContext.js](#src-contexts-AuthContext-js)

### Pages
- [src\pages\public\AboutPage.js](#src-pages-public-AboutPage-js)
- [src\pages\public\ContactPage.js](#src-pages-public-ContactPage-js)
- [src\pages\public\HomePage.js](#src-pages-public-HomePage-js)
- [src\pages\public\PartnersPage.js](#src-pages-public-PartnersPage-js)
- [src\pages\public\PrivacyPage.js](#src-pages-public-PrivacyPage-js)
- [src\pages\public\PublicPages.css](#src-pages-public-PublicPages-css)
- [src\pages\HomePage.js](#src-pages-HomePage-js)
- [src\pages\MenuManagement.js](#src-pages-MenuManagement-js)

### Services
- [src\services\api.js](#src-services-api-js)
- [src\services\authService.js](#src-services-authService-js)
- [src\services\menuService.js](#src-services-menuService-js)
- [src\services\notificationService.js](#src-services-notificationService-js)
- [src\services\orderService.js](#src-services-orderService-js)
- [src\services\webhookService.js](#src-services-webhookService-js)

### Utilities
- [src\utils\constants.js](#src-utils-constants-js)

### Public Files
- [public\index.html](#public-index-html)
- [public\manifest.json](#public-manifest-json)

### Configuration
- [package.json](#package-json)

---

# Code Files


## Other Files

<a name="src-index-js"></a>
### src\index.js

*File contains 13 lines*

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

<a name="src-App-js"></a>
### src\App.js

*File contains 102 lines*

```javascript
import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./components/layout/Layout";
import NotificationManager from "./components/notifications/NotificationManager";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import MenuList from "./components/menu/MenuList";
import HomePage from "./pages/HomePage";

// Lazy load heavy components
const MenuManagement = lazy(() => import("./pages/MenuManagement"));
const OrderList = lazy(() => import("./components/orders/OrderList"));

// Public Pages
import PublicHomePage from "./pages/public/HomePage";
import About from "./pages/public/AboutPage";
import Partners from "./pages/public/PartnersPage";
import Contact from "./pages/public/ContactPage";
import PrivacyPolicy from "./pages/public/PrivacyPage";

import "./styles/App.css";

// Loading component
const LoadingFallback = () => (
  <div className="loading">Loading...</div>
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
                  <HomePage />
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


## Other Components

<a name="src-components-auth-Login-js"></a>
### src\components\auth\Login.js

*File contains 80 lines*

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

<a name="src-components-auth-ProtectedRoute-js"></a>
### src\components\auth\ProtectedRoute.js

*File contains 28 lines*

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

<a name="src-components-auth-Register-js"></a>
### src\components\auth\Register.js

*File contains 290 lines*

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
    const value = e.target.value.replace(/\D/g, ''); // Only allow digits
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
      otp_code: otp
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
            We've sent a 6-digit OTP to <strong>{formData.phone_number}</strong> via WhatsApp.
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
              <button type="submit" className="btn btn-primary" disabled={loading || otp.length !== 6}>
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

<a name="src-components-layout-Footer-css"></a>
### src\components\layout\Footer.css

*File contains 224 lines*

```css
/* Footer Styles */
.footer {
  background-color: #2c3e50;
  color: #ecf0f1;
  margin-top: 4rem;
  position: relative;
}

/* Root Variables */
:root {
  --primary-color: rgb(0, 190, 38);
  --primary-green: rgb(0, 190, 38);
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-content {
  padding: 3rem 0;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 3rem;
  align-items: start;
}

/* Footer Brand Section */
.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.footer-logo img {
  width: 40px;
  height: 40px;
  filter: brightness(0) invert(1);
}

.footer-logo h3 {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--primary-color);
  margin: 0;
}

.footer-tagline {
  font-size: 0.95rem;
  color: #bdc3c7;
  line-height: 1.5;
  margin: 0;
}

/* Social Links */
.social-links {
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-links a:hover {
  background-color: var(--primary-color);
  transform: translateY(-3px);
}

.social-links svg {
  width: 18px;
  height: 18px;
  fill: #ecf0f1;
}

/* Footer Sections */
.footer-section {
  display: flex;
  flex-direction: column;
}

.footer-section h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0 0 1.5rem 0;
  color: #ffffff;
  position: relative;
  padding-bottom: 0.5rem;
}

.footer-section h4::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background-color: var(--primary-color);
}

.footer-section ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section a {
  color: #bdc3c7;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.95rem;
}

.footer-section a:hover {
  color: var(--primary-color);
}

/* Footer Bottom */
.footer-bottom {
  background-color: rgba(0, 0, 0, 0.2);
  padding: 1.5rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-bottom-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.footer-bottom p {
  margin: 0;
  color: #95a5a6;
  font-size: 0.9rem;
}

.footer-bottom-links {
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.9rem;
}

.footer-bottom-links a {
  color: #95a5a6;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-bottom-links a:hover {
  color: var(--primary-color);
}

.separator {
  color: #7f8c8d;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .footer-content {
    grid-template-columns: repeat(2, 2fr);
    gap: 2rem;
  }
  
  .footer-brand {
    grid-column: span 2;
  }
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .footer-section h4::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .footer-logo {
    justify-content: center;
  }
  
  .social-links {
    justify-content: center;
  }
  
  .footer-bottom-container {
    flex-direction: column;
    text-align: center;
  }
  
  .footer-bottom-links {
    flex-wrap: wrap;
    justify-content: center;
  }
}

```

---

<a name="src-components-layout-Footer-js"></a>
### src\components\layout\Footer.js

*File contains 95 lines*

```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Branding Section */}
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              {/* <img src="/logo.png" alt="EZ Order Logo" /> */}
              <h3>EzOrder</h3>
            </div>
            <p className="footer-tagline">Food ordering made simple – via Website & WhatsApp.</p>
            <div className="social-links">
              <a href="https://facebook.com/ezorder" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="https://instagram.com/ezorder" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/ezorder" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* For Customers */}
          <div className="footer-section">
            <h4>For Customers</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/menu">Menu</Link></li>
              <li><Link to="/about#how-it-works">How It Works</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* For Restaurants */}
          <div className="footer-section">
            <h4>For Restaurants</h4>
            <ul>
              <li><Link to="/partners">Partners</Link></li>
              <li><Link to="/menu/manage">Menu Management</Link></li>
              <li><Link to="/orders">Order List</Link></li>
              <li><Link to="/register">Register / Login</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/about#testimonials">Testimonials</Link></li>
              <li><Link to="/privacy">Terms & Privacy</Link></li>
              <li><Link to="/sitemap">Sitemap</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {currentYear} EzOrder. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms">Terms of Service</Link>
            <span className="separator">|</span>
            <span>Powered by <a href="https://nexusnao.com" target="_blank" rel="noopener noreferrer">NexusNao</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

```

---

<a name="src-components-layout-Header-css"></a>
### src\components\layout\Header.css

⚠️ **File has 503 lines. Showing first 300 lines.**

```css
/* Modern Header Styles */
.modern-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(4, 158, 4, 0.95);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
  z-index: 1000;
  transition: all 0.3s ease;
}

.modern-header.scrolled {
  background: rgba(4, 158, 4, 0.95);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.12);
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo Styles */
.logo-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.logo-link:hover {
  transform: scale(1.05);
}

.logo-image {
  width: 40px;
  height: 40px;
  object-fit: contain;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  /* background: linear-gradient(135deg, var(--primary-green) 0%, #00a826 100%); */
  -webkit-background-clip: text;
  /* -webkit-text-fill-color: transparent; */
  background-clip: text;
  color: white;

}

/* Desktop Navigation */
.desktop-nav {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

/* Navigation Links */
.nav-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.2rem;
  color: var(--dark-text);
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  background: linear-gradient(135deg, rgba(242, 243, 242, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%);
  transition: width 0.3s ease;
  z-index: -1;
}

.nav-link:hover::before {
  width: 100%;
}

.nav-link:hover {
  color: white;
  transform: translateY(-2px);
}

.nav-icon {
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.nav-link:hover .nav-icon {
  transform: rotate(10deg) scale(1.1);
}

.nav-text {
  font-weight: 500;
  font-size: 0.95rem;
}

.login-link {
  color: var(--primary-green);
}

/* Navigation Divider */
.nav-divider {
  width: 1px;
  height: 30px;
  background: rgba(0, 0, 0, 0.1);
  margin: 0 0.5rem;
}

/* Header Button */
.btn-header {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: linear-gradient(135deg, var(--primary-green) 0%, #00a826 100%);
  color: white;
  text-decoration: none;
  border-radius: 30px;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 190, 38, 0.3);
}

.btn-header::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.btn-header:hover::before {
  width: 300px;
  height: 300px;
}

.btn-header:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 190, 38, 0.4);
}

.btn-glow {
  animation: glow 2s ease-in-out infinite;
}

@keyframes glow {
  0%, 100% { box-shadow: 0 4px 15px rgba(0, 190, 38, 0.3); }
  50% { box-shadow: 0 4px 25px rgba(0, 190, 38, 0.5); }
}

.btn-icon {
  font-size: 1.2rem;
}

/* User Menu */
.user-menu {
  position: relative;
}

.user-menu-trigger {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.user-menu-trigger:hover {
  background: rgba(0, 0, 0, 0.08);
  transform: translateY(-1px);
}

.user-avatar {
  width: 35px;
  height: 35px;
  background: linear-gradient(135deg, var(--primary-green) 0%, #00a826 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 1.1rem;
  box-shadow: 0 2px 8px rgba(0, 190, 38, 0.3);
}

.user-avatar.large {
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
}

.user-name {
  font-weight: 500;
  color: var(--dark-text);
}

.dropdown-arrow {
  transition: transform 0.3s ease;
}

.dropdown-arrow.open {
  transform: rotate(180deg);
}

/* User Dropdown */
.user-dropdown {
  position: absolute;
  top: calc(100% + 10px);
  right: 0;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  min-width: 280px;
  overflow: hidden;
  animation: dropdownFadeIn 0.3s ease;
}

@keyframes dropdownFadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.dropdown-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, rgba(0, 190, 38, 0.05) 0%, rgba(0, 168, 38, 0.05) 100%);
}

.user-info {
  flex: 1;
}

.user-fullname {
  font-weight: 600;
  color: var(--dark-text);
  margin: 0;
}

.user-email {
  font-size: 0.875rem;
  color: var(--gray-text);
  margin: 0.25rem 0;
}

.user-role {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  background: var(--primary-green);
  color: white;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  text-transform: uppercase;
}

.dropdown-divider {
  height: 1px;
  background: rgba(0, 0, 0, 0.08);
  margin: 0;
}


... (203 more lines)

```

---

<a name="src-components-layout-Header-js"></a>
### src\components\layout\Header.js

*File contains 188 lines*

```javascript
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import './Header.css';

const Header = () => {
  const { user, logout, isStaff } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);

  const isPublicPage = ['/', '/about', '/partners', '/contact', '/privacy'].includes(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setUserDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
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
    <header className={`modern-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to={user ? "/dashboard" : "/"} className="logo-link" onClick={closeMobileMenu}>
          {/* <img src="/logo.png" alt="EZ Order Logo" className="logo-image" /> */}
          <span className="logo-text" color="white">EzOrder</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`desktop-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {!user && isPublicPage ? (
            <>
              <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                <span className="nav-icon"></span>
                <span className="nav-text">Home</span>
              </Link>
              <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
                <span className="nav-icon"></span>
                <span className="nav-text">About</span>
              </Link>
              <Link to="/partners" className="nav-link" onClick={closeMobileMenu}>
                <span className="nav-icon"></span>
                <span className="nav-text">Partners</span>
              </Link>
              <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>
                <span className="nav-icon"></span>
                <span className="nav-text">Contact</span>
              </Link>
              <div className="nav-divider"></div>
              <Link to="/login" className="nav-link login-link" onClick={closeMobileMenu}>
                <span className="nav-icon"></span>
                <span className="nav-text">Login</span>
              </Link>
              <Link to="/register" className="btn-header btn-glow" onClick={closeMobileMenu}>
                <span className="btn-icon">🚀</span>
                Get Started
              </Link>
            </>
          ) : user ? (
            <>
              <Link to="/dashboard" className="nav-link" onClick={closeMobileMenu}>
                <span className="nav-icon">📊</span>
                <span className="nav-text">Dashboard</span>
              </Link>
              <Link to="/menu" className="nav-link" onClick={closeMobileMenu}>
                <span className="nav-icon">🍕</span>
                <span className="nav-text">Menu</span>
              </Link>
              {isStaff() && (
                <>
                  <Link to="/orders" className="nav-link" onClick={closeMobileMenu}>
                    <span className="nav-icon">📋</span>
                    <span className="nav-text">Orders</span>
                  </Link>
                  <Link to="/menu/manage" className="nav-link" onClick={closeMobileMenu}>
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
                  <span className="user-name">{user.name}</span>
                  <svg className={`dropdown-arrow ${userDropdownOpen ? 'open' : ''}`} width="12" height="8" viewBox="0 0 12 8">
                    <path d="M1 1l5 5 5-5" stroke="currentColor" strokeWidth="2" fill="none"/>
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
                    <Link to="/profile" className="dropdown-item" onClick={() => { setUserDropdownOpen(false); closeMobileMenu(); }}>
                      <span className="dropdown-icon">👤</span>
                      My Profile
                    </Link>
                    <Link to="/settings" className="dropdown-item" onClick={() => { setUserDropdownOpen(false); closeMobileMenu(); }}>
                      <span className="dropdown-icon">⚙️</span>
                      Settings
                    </Link>
                    <div className="dropdown-divider"></div>
                    <button onClick={handleLogout} className="dropdown-item logout">
                      <span className="dropdown-icon">🚪</span>
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link login-link" onClick={closeMobileMenu}>
                <span className="nav-icon"></span>
                <span className="nav-text">Login</span>
              </Link>
              <Link to="/register" className="btn-header btn-glow" onClick={closeMobileMenu}>
                <span className="btn-icon"></span>
                Register
              </Link>
            </>
          )}
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
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

<a name="src-components-layout-Layout-js"></a>
### src\components\layout\Layout.js

*File contains 15 lines*

```javascript
import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="app-layout">
      <Header />
      <main className="main-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

```

---

<a name="src-components-menu-MenuForm-js"></a>
### src\components\menu\MenuForm.js

*File contains 150 lines*

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

<a name="src-components-menu-MenuItem-js"></a>
### src\components\menu\MenuItem.js

*File contains 25 lines*

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

<a name="src-components-menu-MenuList-js"></a>
### src\components\menu\MenuList.js

*File contains 74 lines*

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

<a name="src-components-orders-OrderDetails-js"></a>
### src\components\orders\OrderDetails.js

*File contains 157 lines*

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

<a name="src-components-orders-OrderList-js"></a>
### src\components\orders\OrderList.js

*File contains 148 lines*

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

<a name="src-components-orders-OrderStatusUpdate-js"></a>
### src\components\orders\OrderStatusUpdate.js

*File contains 117 lines*

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

<a name="src-components-notifications-NotificationManager-js"></a>
### src\components\notifications\NotificationManager.js

*File contains 62 lines*

```javascript
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

```

---

<a name="src-components-ErrorBoundary-js"></a>
### src\components\ErrorBoundary.js

*File contains 34 lines*

```javascript
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <h2>Something went wrong</h2>
          <p>We're sorry for the inconvenience. Please try refreshing the page.</p>
          <button onClick={() => window.location.reload()}>
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

```

---


## Context Providers

<a name="src-contexts-AuthContext-js"></a>
### src\contexts\AuthContext.js

*File contains 114 lines*

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
    }
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


## Pages

<a name="src-pages-public-AboutPage-js"></a>
### src\pages\public\AboutPage.js

*File contains 224 lines*

```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import './PublicPages.css';

const AboutPage = () => {
  const coreValues = [
    {
      icon: "⚡",
      title: "Simplicity",
      description: "We believe ordering food should be as simple as sending a message",
      color: "#FF6B6B"
    },
    {
      icon: "🤝",
      title: "Trust",
      description: "Building reliable relationships with customers and restaurants",
      color: "#4ECDC4"
    },
    {
      icon: "🚀",
      title: "Innovation",
      description: "Leveraging technology to create seamless experiences",
      color: "#45B7D1"
    },
    {
      icon: "🍴",
      title: "Customer Satisfaction",
      description: "Your happiness is our primary goal",
      color: "#F7B731"
    }
  ];

  const teamMembers = [
    {
      name: "Usman Zafar",
      role: "CEO & Founder",
      image: "https://i.pravatar.cc/300?img=12",
      bio: "Passionate about making food ordering accessible to everyone"
    },
    {
      name: "Muhammad Zain",
      role: "CTO",
      image: "https://i.pravatar.cc/300?img=24",
      bio: "Tech enthusiast dedicated to building seamless solutions"
    },
    {
      name: "Ahmad Saeed",
      role: "Head of Operations",
      image: "https://i.pravatar.cc/300?img=33",
      bio: "Ensuring smooth operations and happy customers"
    },
    {
      name: "Hamda Aziz",
      role: "Marketing Director",
      image: "https://i.pravatar.cc/300?img=45",
      bio: "Spreading the word about easier food ordering"
    }
  ];

  const benefits = [
    { icon: "✅", text: "No app downloads required" },
    { icon: "💬", text: "WhatsApp integration" },
    { icon: "🌐", text: "Multi-language support" },
    { icon: "⏱️", text: "24/7 availability" }
  ];

  return (
    <div className="public-page about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>Making Food Ordering Simple for Everyone</h1>
          <p>EzOrder connects restaurants and customers through an easy-to-use system with WhatsApp integration.</p>
        </div>
        <div className="about-hero-image">
          <img 
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop" 
            alt="Food ordering made simple"
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="story-container">
          <div className="story-content">
            <h2>Our Story</h2>
            <p>
              We noticed restaurants struggling with managing orders and customers frustrated with complicated apps. 
              So, we built EzOrder – a simple, WhatsApp-powered solution that works for everyone.
            </p>
            <p>
              It all started in 2024 when our founder, Usman Zafar, watched his grandmother struggle to order food online. 
              She was comfortable with WhatsApp but found food delivery apps confusing. That's when the idea struck: 
              why not let people order food the same way they chat with friends?
            </p>
            <p>
              Today, EzOrder serves thousands of happy customers and helps restaurants streamline their operations, 
              all through the familiar interface of WhatsApp.
            </p>
          </div>
          <div className="story-image">
            <img 
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop" 
              alt="Restaurant scene"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="mission-vision-container">
          <div className="mission-card">
            <div className="card-icon">🎯</div>
            <h3>Our Mission</h3>
            <p>To simplify food ordering for restaurants and customers with reliable technology.</p>
          </div>
          <div className="vision-card">
            <div className="card-icon">🌟</div>
            <h3>Our Vision</h3>
            <p>A world where ordering food is as easy as sending a message.</p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="who-we-serve">
        <h2>Who We Serve</h2>
        <div className="serve-container">
          <div className="serve-card customers">
            <div className="serve-icon">👥</div>
            <h3>For Customers</h3>
            <p>Order food via website or WhatsApp in seconds</p>
            <ul>
              <li>No app downloads needed</li>
              <li>Voice message ordering</li>
              <li>Real-time order tracking</li>
              <li>Multiple payment options</li>
            </ul>
          </div>
          <div className="serve-card restaurants">
            <div className="serve-icon">🏪</div>
            <h3>For Restaurants</h3>
            <p>Manage menus, orders, and customers easily in one place</p>
            <ul>
              <li>Simple dashboard interface</li>
              <li>Automated order management</li>
              <li>Customer analytics</li>
              <li>Inventory tracking</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="core-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          {coreValues.map((value, index) => (
            <div key={index} className="value-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="value-icon" style={{ backgroundColor: value.color }}>
                <span>{value.icon}</span>
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet the Team</h2>
        <p className="team-subtitle">The passionate people behind EzOrder</p>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <img src={member.image} alt={member.name} />
              <h3>{member.name}</h3>
              <p className="team-role">{member.role}</p>
              <p className="team-bio">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose EzOrder?</h2>
        <div className="benefits-list">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-item">
              <span className="benefit-icon">{benefit.icon}</span>
              <span className="benefit-text">{benefit.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-content">
          <h2>Whether you're hungry or running a restaurant – EZ Order is here for you.</h2>
          <div className="cta-buttons">
            <a 
              href="https://wa.me/923001234567?text=Hi,%20I%20want%20to%20order%20food"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Start Ordering
            </a>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Partner with Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

```

---

<a name="src-pages-public-ContactPage-js"></a>
### src\pages\public\ContactPage.js

*File contains 300 lines*

```javascript
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './PublicPages.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setSubmitting(false);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }, 1000);
  };

  const contactOptions = [
    {
      icon: "📧",
      title: "Email Support",
      detail: "support@ezorder.com",
      description: "Get response within 24 hours",
      action: "mailto:support@ezorder.com",
      color: "#3498db"
    },
    {
      icon: "📱",
      title: "WhatsApp Help",
      detail: "+92 300 1234567",
      description: "Chat with us instantly",
      action: "https://wa.me/923001234567?text=Hi,%20I%20need%20help%20with%20EZ%20Order",
      color: "#25D366"
    },
    {
      icon: "📍",
      title: "Office Location",
      detail: "Karachi, Pakistan",
      description: "Visit us Mon-Fri, 9am-6pm",
      action: "#map-section",
      color: "#e74c3c"
    }
  ];

  const faqs = [
    {
      question: "How do I place an order via WhatsApp?",
      answer: "Simply send a message to our WhatsApp number +92 300 1234567. Our AI assistant will guide you through the menu and help you place your order. You can type or send voice notes in any language!"
    },
    {
      question: "How can my restaurant join EZ Order?",
      answer: "Click on 'Partner with Us' or send us an email at partners@ezorder.com. We'll guide you through the simple onboarding process which typically takes less than 24 hours."
    },
    {
      question: "Is EZ Order available in all cities?",
      answer: "Currently, we operate in Karachi, Lahore, and Islamabad. We're expanding to other cities soon. Join our waitlist to get notified when we launch in your area."
    },
    {
      question: "What are the delivery charges?",
      answer: "Delivery charges vary by restaurant and distance, typically ranging from PKR 50-150. You'll see the exact delivery fee before confirming your order."
    }
  ];

  return (
    <div className="public-page contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1>We'd love to hear from you!</h1>
          <p>Whether you're a hungry customer or a restaurant owner looking to partner with us, reach out anytime.</p>
        </div>
        <div className="contact-hero-image">
          <img 
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?w=600&h=400&fit=crop" 
            alt="Contact us"
          />
        </div>
      </section>

      {/* Contact Options */}
      <section className="contact-options">
        <h2>Get in Touch</h2>
        <p className="section-subtitle">Choose the most convenient way to reach us</p>
        <div className="contact-cards">
          {contactOptions.map((option, index) => (
            <a 
              key={index} 
              href={option.action}
              target={option.action.startsWith('http') ? '_blank' : '_self'}
              rel={option.action.startsWith('http') ? 'noopener noreferrer' : ''}
              className="contact-card"
              style={{ '--card-color': option.color }}
            >
              <div className="contact-icon" style={{ backgroundColor: option.color }}>
                <span>{option.icon}</span>
              </div>
              <h3>{option.title}</h3>
              <p className="contact-detail">{option.detail}</p>
              <p className="contact-description">{option.description}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-form-section">
            <h2>Send us a Message</h2>
            <p>Have a question or feedback? We'd love to hear from you!</p>
            
            {submitted && (
              <div className="success-message">
                ✅ Thank you for your message! We'll get back to you soon.
              </div>
            )}
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone (optional)</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+92 300 1234567"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us how we can help you..."
                />
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary btn-lg"
                disabled={submitting}
              >
                {submitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          <div className="contact-info-section">
            <div className="info-image">
              <img 
                src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=500&h=300&fit=crop" 
                alt="Customer support"
              />
            </div>
            
            <div className="business-hours">
              <h3>Business Hours</h3>
              <ul>
                <li><strong>Monday - Friday:</strong> 9:00 AM - 11:00 PM</li>
                <li><strong>Saturday:</strong> 10:00 AM - 11:00 PM</li>
                <li><strong>Sunday:</strong> 10:00 AM - 10:00 PM</li>
              </ul>
            </div>
            
            <div className="emergency-contact">
              <h3>For Urgent Orders</h3>
              <p>Call us directly at:</p>
              <a href="tel:+923001234567" className="phone-link">
                📞 +92 300 1234567
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map-section" className="map-section">
        <h2>Visit Our Office</h2>
        <div className="map-container">
          <div className="map-info">
            <h3>EZ Order Headquarters</h3>
            <p>📍 Plot 123, Block 7, Clifton</p>
            <p>Karachi, Pakistan 75600</p>
            <p>📧 office@ezorder.com</p>
            <p>📞 +92 21 35123456</p>
            
            <div className="directions-btn">
              <a 
                href="https://maps.google.com/?q=24.8607,67.0011" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                Get Directions
              </a>
            </div>
          </div>
          <div className="map-frame">
            <img 
              src="https://images.unsplash.com/photo-1524634126442-357e0eac3c14?w=600&h=400&fit=crop" 
              alt="Office location map"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <details key={index} className="faq-item">
              <summary>
                <span>{faq.question}</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-cta">
        <div className="cta-content">
          <h2>Let's make food ordering simple – together.</h2>
          <p>Join thousands of happy customers and restaurant partners</p>
          <div className="cta-buttons">
            <a 
              href="https://wa.me/923001234567?text=Hi,%20I%20want%20to%20order%20food"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Order Now
            </a>
            <Link to="/partners" className="btn btn-light btn-lg">
              Partner with Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

```

---

<a name="src-pages-public-HomePage-js"></a>
### src\pages\public\HomePage.js

*File contains 269 lines*

```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import './PublicPages.css';

const HomePage = () => {
  const features = [
    {
      title: "WhatsApp Ordering",
      description: "Order directly through WhatsApp - no app download needed!",
      icon: "💬",
      color: "#25D366"
    },
    {
      title: "Voice Messages",
      description: "Send voice notes to place your order in any language",
      icon: "🎤",
      color: "#FF6B6B"
    },
    {
      title: "Real-time Updates",
      description: "Get instant updates about your order status",
      icon: "🔔",
      color: "#4ECDC4"
    },
    {
      title: "24/7 Service",
      description: "Order anytime, anywhere - we're always available",
      icon: "🕐",
      color: "#45B7D1"
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Send a Message",
      description: "Open WhatsApp and send us a message to start ordering",
      icon: "📱"
    },
    {
      step: 2,
      title: "Choose Your Food",
      description: "Browse our menu and select your favorite items",
      icon: "🍕"
    },
    {
      step: 3,
      title: "Confirm Order",
      description: "Review your order and provide delivery details",
      icon: "✅"
    },
    {
      step: 4,
      title: "Track & Receive",
      description: "Get real-time updates until your food arrives",
      icon: "🚚"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Ahmed",
      rating: 5,
      comment: "The easiest way to order food! I love that I don't need to download another app.",
      location: "Karachi"
    },
    {
      name: "Ali Hassan",
      rating: 5,
      comment: "Voice ordering in Urdu is amazing! My parents can now order food easily.",
      location: "Lahore"
    },
    {
      name: "Fatima Khan",
      rating: 5,
      comment: "Super fast delivery and the WhatsApp updates keep me informed throughout.",
      location: "Islamabad"
    }
  ];

  const stats = [
    { number: "50,000+", label: "Happy Customers" },
    { number: "100+", label: "Restaurant Partners" },
    { number: "15 mins", label: "Average Delivery Time" },
    { number: "4.9/5", label: "Customer Rating" }
  ];

  const faqs = [
    {
      question: "How do I start ordering?",
      answer: "Simply send a WhatsApp message to our number. Our AI assistant will guide you through the process."
    },
    {
      question: "Is there a minimum order amount?",
      answer: "Minimum order amount varies by restaurant, typically starting from PKR 300."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept Cash on Delivery, JazzCash, EasyPaisa, and bank transfers."
    },
    {
      question: "Can I track my order?",
      answer: "Yes! You'll receive real-time WhatsApp updates about your order status."
    }
  ];

  return (
    <div className="public-page home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Order Food Through <span className="whatsapp-text">WhatsApp!</span></h1>
          <p>The easiest way to order your favorite meals - just send a message!</p>
          <div className="hero-buttons">
            <a 
              href="https://wa.me/923001234567?text=Hi,%20I%20want%20to%20order%20food"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg whatsapp-btn"
            >
              <span className="whatsapp-icon"></span>
              Start Ordering Now
            </a>
            <Link to="/register" className="btn btn-secondary btn-lg">
              Create Account
            </Link>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-icon">🍕</span>
              <span className="stat-text">50,000+ Orders Delivered</span>
            </div>
            <div className="hero-stat">
              <span className="stat-icon">⭐</span>
              <span className="stat-text">4.9/5 Rating</span>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-image-wrapper">
            <div className="floating-elements">
              <span className="floating-emoji" style={{top: '10%', left: '10%'}}>🍕</span>
              <span className="floating-emoji" style={{top: '20%', right: '15%'}}>🍔</span>
              <span className="floating-emoji" style={{bottom: '30%', left: '20%'}}>🥗</span>
              <span className="floating-emoji" style={{bottom: '20%', right: '10%'}}>🍰</span>
            </div>
            <div className="hero-phone-mockup">
              <div className="whatsapp-chat">
                <div className="chat-header">
                  <span className="chat-avatar">🤖</span>
                  <span className="chat-name">EZ Order Bot</span>
                </div>
                <div className="chat-messages">
                  <div className="message bot">Hi! Welcome to EZ Order 👋</div>
                  <div className="message user">I want to order pizza</div>
                  <div className="message bot">Great choice! Here's our pizza menu...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2>Why Choose EZ Order?</h2>
        <p className="section-subtitle">We make food ordering incredibly simple and convenient</p>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="feature-icon" style={{backgroundColor: feature.color}}>
                <span className="icon-emoji">{feature.icon}</span>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <p className="section-subtitle">Order your favorite food in 4 simple steps</p>
        <div className="steps-container">
          {howItWorks.map((step, index) => (
            <div key={index} className="step-item">
              <div className="step-number">{step.step}</div>
              <div className="step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < howItWorks.length - 1 && <div className="step-arrow">→</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {"⭐".repeat(testimonial.rating)}
              </div>
              <p className="testimonial-text">"{testimonial.comment}"</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <details key={index} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Order?</h2>
          <p>Join thousands of happy customers who order food the easy way!</p>
          <div className="cta-buttons">
            <a 
              href="https://wa.me/923001234567"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              Order on WhatsApp
            </a>
            <Link to="/register" className="btn btn-light btn-lg">
              Sign Up Free
            </Link>
          </div>
        </div>
        <div className="cta-visual">
          <span className="cta-emoji">🎉</span>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

```

---

<a name="src-pages-public-PartnersPage-js"></a>
### src\pages\public\PartnersPage.js

⚠️ **File has 311 lines. Showing first 300 lines.**

```javascript
import React from 'react';
import { Link } from 'react-router-dom';
import './PublicPages.css';

const PartnersPage = () => {
  const benefits = [
    {
      icon: "📲",
      title: "WhatsApp Integration",
      description: "Customers can order directly via chat - no app downloads required",
      color: "#25D366"
    },
    {
      icon: "⚡",
      title: "Faster Order Management",
      description: "No missed calls or messy slips - everything organized digitally",
      color: "#FF6B6B"
    },
    {
      icon: "📊",
      title: "Dashboard & Analytics",
      description: "Track sales, menu items, and performance with real-time insights",
      color: "#4ECDC4"
    },
    {
      icon: "🤝",
      title: "Customer Trust",
      description: "Easy ordering increases loyalty and repeat customers",
      color: "#45B7D1"
    },
    {
      icon: "💡",
      title: "Low Setup, High Impact",
      description: "Simple onboarding, no complex training - start earning more today",
      color: "#F7B731"
    },
    {
      icon: "💰",
      title: "Zero Commission",
      description: "Keep 100% of your earnings - we charge a simple monthly fee, no hidden costs",
      color: "#00BE26"
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Sign Up",
      description: "Register as a restaurant partner",
      icon: "✍️"
    },
    {
      number: 2,
      title: "Setup Menu",
      description: "Upload menu items with prices",
      icon: "📋"
    },
    {
      number: 3,
      title: "Go Live",
      description: "Start receiving orders via website & WhatsApp",
      icon: "🚀"
    },
    {
      number: 4,
      title: "Manage Orders",
      description: "Track and grow with our dashboard",
      icon: "📈"
    }
  ];

  const testimonials = [
    {
      name: "Karachi Kitchen",
      owner: "Mohammad Ali",
      comment: "Since joining EZ Order, our order processing became 2x faster and we gained 30% more repeat customers!",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop",
      increase: "+30%",
      metric: "Repeat Customers"
    },
    {
      name: "Lahore Bites",
      owner: "Fatima Sheikh",
      comment: "The WhatsApp integration is genius! Our elderly customers love ordering via voice notes.",
      image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&h=300&fit=crop",
      increase: "+45%",
      metric: "Customer Satisfaction"
    },
    {
      name: "Islamabad Delights",
      owner: "Hassan Raza",
      comment: "We reduced order errors by 90% and saved 3 hours daily on phone calls!",
      image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
      increase: "-90%",
      metric: "Order Errors"
    }
  ];

  const partnershipModels = [
    {
      icon: "🛒",
      title: "Small Restaurants",
      description: "Perfect for local eateries and family restaurants",
      features: ["Basic dashboard", "WhatsApp ordering", "Customer management"]
    },
    {
      icon: "🍔",
      title: "Fast Food Chains",
      description: "Ideal for quick service restaurants",
      features: ["Multi-branch support", "Real-time analytics", "Bulk order handling"]
    },
    {
      icon: "🍴",
      title: "Cafes & Bakeries",
      description: "Great for coffee shops and bakeries",
      features: ["Pre-order system", "Special items", "Loyalty programs"]
    },
    {
      icon: "🍕",
      title: "Cloud Kitchens",
      description: "Built for delivery-only businesses",
      features: ["Virtual brands", "Menu optimization", "Delivery integration"]
    }
  ];

  const stats = [
    { number: "500+", label: "Restaurant Partners" },
    { number: "2M+", label: "Orders Processed" },
    { number: "15%", label: "Average Revenue Increase" },
    { number: "4.8/5", label: "Partner Rating" }
  ];

  return (
    <div className="public-page partners-page">
      {/* Hero Section */}
      <section className="partners-hero">
        <div className="partners-hero-content">
          <h1>Partner with EzOrder – Grow Your Restaurant Business</h1>
          <p>Join hundreds of restaurants using EzOrder to simplify ordering, reduce costs, and reach more customers.</p>
          <div className="hero-buttons">
            <Link to="/register" className="btn btn-primary btn-lg">
              Become a Partner
            </Link>
            <Link to="/contact" className="btn btn-secondary btn-lg">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="partners-hero-image">
          <img 
            src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800&h=600&fit=crop" 
            alt="Restaurant success with EzOrder"
          />
        </div>
      </section>

      {/* Statistics Bar */}
      <section className="partners-stats-bar">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="why-partner">
        <h2>Why Partner with EzOrder?</h2>
        <p className="section-subtitle">Transform your restaurant operations with our cutting-edge technology</p>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="benefit-icon" style={{ backgroundColor: benefit.color }}>
                <span>{benefit.icon}</span>
              </div>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="how-partnership-works">
        <h2>How Partnership Works</h2>
        <p className="section-subtitle">Get started in 4 simple steps</p>
        <div className="steps-timeline">
          {steps.map((step, index) => (
            <div key={index} className="timeline-step">
              <div className="step-connector" />
              <div className="step-content">
                <div className="step-number">{step.number}</div>
                <div className="step-icon">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      <section className="success-stories">
        <h2>Success Stories</h2>
        <p className="section-subtitle">See how EzOrder transformed these restaurants</p>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="success-card">
              <img src={testimonial.image} alt={testimonial.name} className="restaurant-image" />
              <div className="success-content">
                <p className="testimonial-quote">"{testimonial.comment}"</p>
                <div className="testimonial-footer">
                  <div className="restaurant-info">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.owner}</p>
                  </div>
                  <div className="success-metric">
                    <span className="metric-number">{testimonial.increase}</span>
                    <span className="metric-label">{testimonial.metric}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Models */}
      <section className="partnership-models">
        <h2>Partnership Models</h2>
        <p className="section-subtitle">We have the perfect solution for every type of food business</p>
        <div className="models-grid">
          {partnershipModels.map((model, index) => (
            <div key={index} className="model-card">
              <div className="model-icon">{model.icon}</div>
              <h3>{model.title}</h3>
              <p>{model.description}</p>
              <ul className="model-features">
                {model.features.map((feature, idx) => (
                  <li key={idx}>✓ {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Features Showcase */}
      <section className="features-showcase">
        <div className="showcase-content">
          <div className="showcase-text">
            <h2>Everything You Need to Succeed</h2>
            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Real-time order notifications</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Multi-language support</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Inventory management</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>Customer analytics</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>24/7 support</span>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <span>No commission on orders</span>
              </div>
            </div>
          </div>
          <div className="showcase-image">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop" 
              alt="Dashboard preview"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="partners-cta">
        <div className="cta-content">
          <h2>Ready to grow your restaurant with EzOrder?</h2>
          <p>Join hundreds of successful restaurants already using our platform</p>
          <div className="cta-buttons">
            <Link to="/register" className="btn btn-primary btn-lg">
              Join as a Partner
            </Link>

... (11 more lines)

```

---

<a name="src-pages-public-PrivacyPage-js"></a>
### src\pages\public\PrivacyPage.js

*File contains 59 lines*

```javascript
import React from 'react';
import './PublicPages.css';

const PrivacyPolicy = () => {
  return (
    <div className="public-page privacy-page">
      <div className="page-header">
        <h1>Privacy Policy</h1>
        <p>Last updated: August 25, 2025</p>
      </div>
      
      <div className="content-section policy-content">
        <section>
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create 
            an account, place an order, or contact us for support.
          </p>
          <ul>
            <li>Personal information (name, email, phone number)</li>
            <li>Delivery address</li>
            <li>Order history</li>
            <li>Voice messages (temporarily processed for orders)</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Process and deliver your orders</li>
            <li>Send order confirmations and updates</li>
            <li>Improve our services</li>
            <li>Communicate with you about promotions</li>
          </ul>
        </section>

        <section>
          <h2>3. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect 
            your personal information against unauthorized access, alteration, disclosure, 
            or destruction.
          </p>
        </section>

        <section>
          <h2>4. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
            privacy@ezorder.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

```

---

<a name="src-pages-public-PublicPages-css"></a>
### src\pages\public\PublicPages.css

⚠️ **File has 2002 lines. Showing first 300 lines.**

```css
/* Root Variables */
:root {
  --primary-color: rgb(0, 190, 38);
  --primary-green: rgb(0, 190, 38);
  --whatsapp-green: #25D366;
  --dark-color: #2c3e50;
  --dark-text: #2c3e50;
  --gray-color: #6c757d;
  --gray-text: #6c757d;
  --light-bg: #f8f9fa;
  --white: #ffffff;
  --success-color: #27ae60;
  --danger-color: #e74c3c;
  --shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --shadow-hover: 0 4px 16px rgba(0, 0, 0, 0.15);
}

/* Hero Section */
.hero-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  min-height: 80vh;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, #f8f9fa 0%, #e8f5e9 100%);
  gap: 3rem;
}

.hero-content {
  max-width: 600px;
}

.hero-content h1 {
  font-size: 3.5rem;
  color: var(--dark-color);
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-content p {
  font-size: 1.5rem;
  color: var(--dark-color);
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
}

.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.2rem;
}

.btn-primary {
  background-color: var(--primary-color);
  color: white;
}

.btn-primary:hover {
  background-color: #00a826;
}

.btn-secondary {
  background-color: white;
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
}

.btn-secondary:hover {
  background-color: var(--primary-color);
  color: white;
}

/* WhatsApp Specific Styles */
.whatsapp-text {
  color: #25D366;
}

.whatsapp-btn {
  background-color: #25D366;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.whatsapp-btn:hover {
  background-color: #128C7E;
}

.whatsapp-icon {
  font-size: 1.5rem;
}

/* Hero Stats */
.hero-stats {
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
}

.hero-stat {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;
  color: var(--gray-color);
}

.stat-icon {
  font-size: 1.5rem;
}

/* Hero Visual */
.hero-visual {
  position: relative;
}

.hero-image {
  flex: 1;
  text-align: center;
}

.hero-image img {
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.hero-image-wrapper {
  position: relative;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

/* Floating Elements */
.floating-elements {
  position: absolute;
  width: 100%;
  height: 100%;
}

.floating-emoji {
  position: absolute;
  font-size: 3rem;
  animation: float 3s ease-in-out infinite;
}

.floating-emoji:nth-child(2) { animation-delay: 0.5s; }
.floating-emoji:nth-child(3) { animation-delay: 1s; }
.floating-emoji:nth-child(4) { animation-delay: 1.5s; }

/* WhatsApp Mockup */
.hero-phone-mockup {
  background: white;
  border-radius: 30px;
  padding: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.15);
  max-width: 350px;
  margin: 0 auto;
}

.whatsapp-chat {
  background: #E5DDD5;
  border-radius: 10px;
  padding: 1rem;
  min-height: 300px;
}

.chat-header {
  background: #128C7E;
  color: white;
  padding: 1rem;
  border-radius: 10px 10px 0 0;
  margin: -1rem -1rem 1rem -1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.chat-avatar {
  font-size: 1.5rem;
}

.chat-messages {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.message {
  padding: 0.75rem 1rem;
  border-radius: 15px;
  max-width: 80%;
}

.message.bot {
  background: white;
  align-self: flex-start;
}

.message.user {
  background: #DCF8C6;
  align-self: flex-end;
}

/* Features Section */
.features-section {
  padding: 5rem 2rem;
  background: white;
  text-align: center;
}

.features-section h2 {
  font-size: 2.5rem;
  color: var(--dark-color);
  margin-bottom: 3rem;
}

.section-subtitle {
  color: var(--gray-color);
  font-size: 1.2rem;
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  transition: all 0.3s ease;
  border: 1px solid #eee;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.feature-icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

.icon-emoji {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.feature-card h3 {
  color: var(--primary-color);
  margin-bottom: 1rem;
}

/* How It Works Section */
.how-it-works {
  padding: 5rem 2rem;
  background: #f8f9fa;
  text-align: center;

... (1702 more lines)

```

---

<a name="src-pages-HomePage-js"></a>
### src\pages\HomePage.js

*File contains 93 lines*

```javascript
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import menuService from "../services/menuService";
import orderService from "../services/orderService";

const HomePage = () => {
  const { user, isStaff } = useAuth();
  const [featuredItems, setFeaturedItems] = useState([]);
  const [recentOrders, setRecentOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      // Fetch featured menu items
      const menuData = await menuService.getAllItems({ limit: 6 });
      setFeaturedItems(menuData.items.slice(0, 6));

      // Fetch recent orders for staff
      if (isStaff()) {
        const orderData = await orderService.getAllOrders({ limit: 5 });
        setRecentOrders(orderData.orders.slice(0, 5));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="home-page">
      <div className="welcome-section">
        <h1>Welcome to EZ Order</h1>
        <p>Hello, {user?.name}! What would you like to do today?</p>
      </div>

      <div className="quick-actions">
        <Link to="/menu" className="action-card">
          <h3>Browse Menu</h3>
          <p>Explore our delicious pizza selection</p>
        </Link>

        {isStaff() && (
          <>
            <Link to="/orders" className="action-card">
              <h3>Manage Orders</h3>
              <p>View and update customer orders</p>
              {recentOrders.length > 0 && (
                <ul className="recent-orders">
                  {recentOrders.slice(0, 3).map((order) => (
                    <li key={order.order_number}>
                      Order #{order.order_number} - {order.status}
                    </li>
                  ))}
                </ul>
              )}
            </Link>

            <Link to="/menu/manage" className="action-card">
              <h3>Manage Menu</h3>
              <p>Add, edit, or remove menu items</p>
            </Link>
          </>
        )}
      </div>

      {!loading && featuredItems.length > 0 && (
        <div className="featured-section">
          <h2>Featured Items</h2>
          <div className="featured-grid">
            {featuredItems.map((item) => (
              <div key={item.id} className="featured-item">
                <h4>{item.name}</h4>
                <p className="category">{item.category}</p>
                <p className="price">${item.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
          <Link to="/menu" className="btn btn-primary">
            View Full Menu
          </Link>
        </div>
      )}
    </div>
  );
};

export default HomePage;

```

---

<a name="src-pages-MenuManagement-js"></a>
### src\pages\MenuManagement.js

*File contains 154 lines*

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


## Services

<a name="src-services-api-js"></a>
### src\services\api.js

*File contains 64 lines*

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

<a name="src-services-authService-js"></a>
### src\services\authService.js

*File contains 50 lines*

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
    const response = await api.post("/auth/send-otp", { phone_number: phoneNumber });
    return response.data;
  },

  verifyOTP: async (phoneNumber, otpCode) => {
    const response = await api.post("/auth/verify-otp", {
      phone_number: phoneNumber,
      otp_code: otpCode
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

<a name="src-services-menuService-js"></a>
### src\services\menuService.js

*File contains 60 lines*

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

<a name="src-services-notificationService-js"></a>
### src\services\notificationService.js

*File contains 76 lines*

```javascript
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

```

---

<a name="src-services-orderService-js"></a>
### src\services\orderService.js

*File contains 51 lines*

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

<a name="src-services-webhookService-js"></a>
### src\services\webhookService.js

*File contains 166 lines*

```javascript
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

```

---


## Utilities

<a name="src-utils-constants-js"></a>
### src\utils\constants.js

*File contains 35 lines*

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


## Public Files

<a name="public-index-html"></a>
### public\index.html

*File contains 14 lines*

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description" content="Pizza Delivery Management System" />
    <title>EZ Order</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
  </body>
</html>

```

---

<a name="public-manifest-json"></a>
### public\manifest.json

*File contains 25 lines*

```json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}

```

---


## Configuration

<a name="package-json"></a>
### package.json

*File contains 36 lines*

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
    "extends": [
      "react-app"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}

```

---


## Summary

- **Total files documented**: 37
- **Total lines of code**: 6,408

### Files by type:
- `.css`: 3 files
- `.html`: 1 files
- `.js`: 31 files
- `.json`: 2 files
