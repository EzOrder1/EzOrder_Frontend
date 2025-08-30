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
