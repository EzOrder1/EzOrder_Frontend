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
