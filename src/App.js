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
