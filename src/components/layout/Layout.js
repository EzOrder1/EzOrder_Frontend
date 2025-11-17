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
  const showSidebar = user && [
    '/dashboard',
    '/menu/manage',
    '/categories',
    '/orders',
    '/customers',
    '/analytics',
    '/settings'
  ].some(path => location.pathname.startsWith(path));

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="app-layout">
      <Header />
      {showSidebar && (
        <Sidebar isCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
      )}
      <main className={`main-content ${showSidebar ? 'with-sidebar' : ''} ${sidebarCollapsed ? 'sidebar-collapsed' : ''}`}>
        {children}
      </main>
      {!showSidebar && <Footer />}
    </div>
  );
};

export default Layout;
