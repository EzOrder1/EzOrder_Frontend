import React from 'react';
import { Link } from 'react-router-dom';
import {
  RiWhatsappFill,
  RiMic2Line,
  RiSendPlaneLine,
  RiDashboardLine,
  RiShieldCheckLine,
  RiChatSmile3Line,
  RiStore2Line,
  RiMapPin2Line,
  RiTimerFlashLine,
  RiStarSFill,
  RiArrowRightLine,
  RiCustomerService2Line,
  RiPlayCircleLine,
} from 'react-icons/ri';
import './PublicPages.css';

const HomePage = () => {
  const features = [
    {
      title: 'WhatsApp Ordering',
      description: 'Customers order in chat—no apps, no logins, just a simple conversation.',
      icon: RiWhatsappFill,
      color: '#25D366',
    },
    {
      title: 'Voice + Multi-language',
      description: 'Voice notes are transcribed and translated so your team never misses a request.',
      icon: RiMic2Line,
      color: '#FF6B6B',
    },
    {
      title: 'Smart Fulfillment',
      description: 'Send confirmed orders to the kitchen and keep customers updated automatically.',
      icon: RiSendPlaneLine,
      color: '#4ECDC4',
    },
    {
      title: 'Menu Control',
      description: 'Update items, bundles, and availability from a single dashboard built for staff.',
      icon: RiDashboardLine,
      color: '#45B7D1',
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Say hello on WhatsApp',
      description: 'Guests message your business number and the bot greets them instantly.',
      icon: RiChatSmile3Line,
    },
    {
      step: 2,
      title: 'Browse & customize',
      description: 'Menu, dietary tags, and add-ons are presented in chat without opening a browser.',
      icon: RiStore2Line,
    },
    {
      step: 3,
      title: 'Confirm & handoff',
      description: 'Collect delivery details and push the order to your kitchen or POS.',
      icon: RiMapPin2Line,
    },
    {
      step: 4,
      title: 'Live updates',
      description: 'Customers stay in WhatsApp while you send prep and delivery statuses.',
      icon: RiTimerFlashLine,
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Ahmed',
      rating: 5,
      comment: 'We launched WhatsApp ordering in a weekend. Customers finish orders without needing help.',
      location: 'Karachi',
    },
    {
      name: 'Ali Hassan',
      rating: 5,
      comment: 'Voice notes in Urdu are auto-transcribed, so our team just confirms and fulfills.',
      location: 'Lahore',
    },
    {
      name: 'Fatima Khan',
      rating: 5,
      comment: 'Realtime updates in chat cut down on follow-up calls and reduced late deliveries.',
      location: 'Islamabad',
    },
  ];

  const stats = [
    { number: '30s', label: 'Average time to place an order', icon: RiTimerFlashLine },
    { number: '8/10', label: 'Orders completed without human handoff', icon: RiCustomerService2Line },
    { number: '24/7', label: 'Ordering stays open around the clock', icon: RiShieldCheckLine },
    { number: '100+', label: 'Menus managed across locations', icon: RiStore2Line },
  ];

  const faqs = [
    {
      question: 'How do I start ordering?',
      answer: 'Send a WhatsApp message to our business number. The assistant shares the menu and builds your cart.',
    },
    {
      question: 'Is there a minimum order amount?',
      answer: 'It depends on the restaurant, but most start around PKR 300. The bot will tell you if a minimum applies.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'Common options include Cash on Delivery, JazzCash, EasyPaisa, and bank transfer—shown during checkout.',
    },
    {
      question: 'Can I track my order?',
      answer: 'Yes. You receive prep and delivery updates right inside your WhatsApp thread.',
    },
  ];

  return (
    <div className="public-page home-page">
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-badge">
            <RiShieldCheckLine /> WhatsApp ordering, done for you
          </span>
          <h1>
            The intuitive ordering layer for busy restaurants
          </h1>
          <p className="hero-subtext">
            Spin up WhatsApp ordering in minutes, upsell automatically, and keep kitchen and delivery in sync—without adding new apps to your team’s day.
          </p>
          <div className="hero-actions">
            <a
              href="https://wa.me/923001234567?text=Hi,%20I%20want%20to%20order%20food"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg whatsapp-btn"
            >
              <RiWhatsappFill className="whatsapp-icon" />
              Start on WhatsApp
            </a>
            <Link to="/register" className="btn ghost-btn btn-lg">
              <RiPlayCircleLine />
              See product demo
            </Link>
          </div>
          <div className="hero-rating">
            <div className="rating-stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <RiStarSFill key={i} />
              ))}
            </div>
            <p><strong>4.9/5</strong> from 30k+ chat orders</p>
          </div>
          <div className="hero-points">
            <div className="hero-point">
              <RiShieldCheckLine />
              Verified WhatsApp Business channel
            </div>
            <div className="hero-point">
              <RiTimerFlashLine />
              Avg. order time under 30 seconds
            </div>
            <div className="hero-point">
              <RiCustomerService2Line />
              Human handoff available anytime
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-highlight">
            <div className="hero-visual-placeholder">
              <div className="placeholder-ring"></div>
              <div className="placeholder-card">
                <div className="placeholder-header">
                  <div className="placeholder-dot"></div>
                  WhatsApp ordering
                  <span className="placeholder-chip">Live</span>
                </div>
                <div className="placeholder-body">
                  <div className="placeholder-line long"></div>
                  <div className="placeholder-line mid"></div>
                  <div className="placeholder-line short"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <h2>Why Choose EZ Order?</h2>
        <p className="section-subtitle">We keep ordering effortless for customers and simple for your team</p>
        <div className="features-grid">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="feature-card" data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="feature-icon" style={{ backgroundColor: feature.color }}>
                  <Icon />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <p className="section-subtitle">Order your favorite food in 4 simple steps</p>
        <div className="steps-container">
          {howItWorks.map((step, index) => (
            <div key={step.title} className="step-item">
              <div className="step-number">{step.step}</div>
              <div className="step-icon">
                <step.icon />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {index < howItWorks.length - 1 && <RiArrowRightLine className="step-arrow" />}
            </div>
          ))}
        </div>
      </section>

      <section className="stats-section">
        <div className="stats-header">
          <h2>Operational wins in one glance</h2>
          <p>Realtime ordering performance your team and customers can rely on.</p>
        </div>
        <div className="stats-container">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-card">
              {stat.icon && (
                <span className="stat-icon-circle">
                  <stat.icon />
                </span>
              )}
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="testimonial-card">
              <div className="stars">
                {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                  <RiStarSFill key={starIndex} className="star-icon" />
                ))}
              </div>
              <p className="testimonial-text">{testimonial.comment}</p>
              <div className="testimonial-author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.location}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          {faqs.map((faq) => (
            <details key={faq.question} className="faq-item">
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

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
              <RiWhatsappFill />
              Order on WhatsApp
            </a>
            <Link to="/register" className="btn btn-light btn-lg">
              <RiDashboardLine />
              Sign Up Free
            </Link>
          </div>
        </div>
        <div className="cta-visual">
          <div className="cta-graphic">
            <RiWhatsappFill />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
