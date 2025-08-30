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
