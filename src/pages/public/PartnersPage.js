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
            <Link to="/contact" className="btn btn-light btn-lg">
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnersPage;
