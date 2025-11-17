import React from 'react';
import { Link } from 'react-router-dom';
import {
  RiChatCheckLine,
  RiShieldCheckLine,
  RiLightbulbFlashLine,
  RiEmotionHappyLine,
  RiSendPlaneLine,
  RiEyeLine,
  RiUserSmileLine,
  RiStore2Line,
  RiSmartphoneLine,
  RiWhatsappFill,
  RiTranslate,
  RiTimeLine,
} from 'react-icons/ri';
import './PublicPages.css';

const AboutPage = () => {
  const coreValues = [
    {
      icon: RiChatCheckLine,
      title: "Simplicity",
      description: "We believe ordering food should be as simple as sending a message",
      color: "#FF6B6B"
    },
    {
      icon: RiShieldCheckLine,
      title: "Trust",
      description: "Building reliable relationships with customers and restaurants",
      color: "#4ECDC4"
    },
    {
      icon: RiLightbulbFlashLine,
      title: "Innovation",
      description: "Leveraging technology to create seamless experiences",
      color: "#45B7D1"
    },
    {
      icon: RiEmotionHappyLine,
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
    { icon: RiSmartphoneLine, text: "No app downloads required" },
    { icon: RiWhatsappFill, text: "WhatsApp integration" },
    { icon: RiTranslate, text: "Multi-language support" },
    { icon: RiTimeLine, text: "24/7 availability" }
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
            <div className="card-icon"><RiSendPlaneLine /></div>
            <h3>Our Mission</h3>
            <p>To simplify food ordering for restaurants and customers with reliable technology.</p>
          </div>
          <div className="vision-card">
            <div className="card-icon"><RiEyeLine /></div>
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
            <div className="serve-icon"><RiUserSmileLine /></div>
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
            <div className="serve-icon"><RiStore2Line /></div>
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
                <value.icon />
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
              <span className="benefit-icon"><benefit.icon /></span>
              <span className="benefit-text">{benefit.text}</span>
            </div>
          ))}
        </div>
      </section>

        {/* CTA Section */}
        <section className="about-cta">
          <div className="cta-content">
          <h2>Whether you're hungry or running a restaurant, EZ Order is here for you.</h2>
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
