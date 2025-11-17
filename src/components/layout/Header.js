import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  RiHome5Line,
  RiInformationLine,
  RiTeamLine,
  RiMailLine,
  RiLoginCircleLine,
  RiArrowRightLine,
  RiDashboardLine,
  RiRestaurantLine,
  RiFileList3Line,
  RiSettings3Line,
  RiUserLine,
  RiSettings5Line,
  RiLogoutCircleRLine,
} from "react-icons/ri";
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
          <span className="logo-text">EzOrder</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`desktop-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          {!user && isPublicPage ? (
            <>
              <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                <RiHome5Line className="nav-icon" />
                <span className="nav-text">Home</span>
              </Link>
              <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
                <RiInformationLine className="nav-icon" />
                <span className="nav-text">About</span>
              </Link>
              <Link to="/partners" className="nav-link" onClick={closeMobileMenu}>
                <RiTeamLine className="nav-icon" />
                <span className="nav-text">Partners</span>
              </Link>
              <Link to="/contact" className="nav-link" onClick={closeMobileMenu}>
                <RiMailLine className="nav-icon" />
                <span className="nav-text">Contact</span>
              </Link>
              <div className="nav-divider"></div>
              <Link to="/login" className="nav-link login-link" onClick={closeMobileMenu}>
                <RiLoginCircleLine className="nav-icon" />
                <span className="nav-text">Login</span>
              </Link>
              <Link to="/register" className="btn-header" onClick={closeMobileMenu}>
                <RiArrowRightLine className="btn-icon" />
                Get Started
              </Link>
            </>
          ) : user ? (
            <>
              <Link to="/dashboard" className="nav-link" onClick={closeMobileMenu}>
                <RiDashboardLine className="nav-icon" />
                <span className="nav-text">Dashboard</span>
              </Link>
              <Link to="/menu" className="nav-link" onClick={closeMobileMenu}>
                <RiRestaurantLine className="nav-icon" />
                <span className="nav-text">Menu</span>
              </Link>
              {isStaff() && (
                <>
                  <Link to="/orders" className="nav-link" onClick={closeMobileMenu}>
                    <RiFileList3Line className="nav-icon" />
                    <span className="nav-text">Orders</span>
                  </Link>
                  <Link to="/menu/manage" className="nav-link" onClick={closeMobileMenu}>
                    <RiSettings3Line className="nav-icon" />
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
                      <RiUserLine className="dropdown-icon" />
                      My Profile
                    </Link>
                    <Link to="/settings" className="dropdown-item" onClick={() => { setUserDropdownOpen(false); closeMobileMenu(); }}>
                      <RiSettings5Line className="dropdown-icon" />
                      Settings
                    </Link>
                    <div className="dropdown-divider"></div>
                    <button onClick={handleLogout} className="dropdown-item logout">
                      <RiLogoutCircleRLine className="dropdown-icon" />
                      Logout
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link login-link" onClick={closeMobileMenu}>
                <RiLoginCircleLine className="nav-icon" />
                <span className="nav-text">Login</span>
              </Link>
              <Link to="/register" className="btn-header" onClick={closeMobileMenu}>
                <RiArrowRightLine className="btn-icon" />
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
