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
