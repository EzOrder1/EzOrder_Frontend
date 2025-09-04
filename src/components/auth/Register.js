import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

const Register = () => {
  const navigate = useNavigate();
  const { registerWithOTP } = useAuth();
  const [step, setStep] = useState(1); // 1: Form, 2: OTP Verification
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    phone_number: "",
    address: "",
    city: "",
    postal_code: "",
  });
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(0);

  // Start resend timer
  React.useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleOtpChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Only allow digits
    if (value.length <= 6) {
      setOtp(value);
    }
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Validate password length
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      setLoading(false);
      return;
    }

    // Send OTP
    const result = await registerWithOTP.sendOTP(formData.phone_number);

    if (result.success) {
      setStep(2);
      setResendTimer(60); // 60 seconds before allowing resend
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (otp.length !== 6) {
      setError("Please enter a valid 6-digit OTP");
      setLoading(false);
      return;
    }

    const result = await registerWithOTP.verifyAndRegister({
      ...formData,
      otp_code: otp
    });

    if (result.success) {
      alert("Registration successful! Please login.");
      navigate("/login");
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  const handleResendOTP = async () => {
    if (resendTimer > 0) return;
    
    setError("");
    setLoading(true);

    const result = await registerWithOTP.sendOTP(formData.phone_number);

    if (result.success) {
      setResendTimer(60);
      setError(""); // Clear any previous errors
      alert("OTP resent successfully!");
    } else {
      setError(result.error);
    }

    setLoading(false);
  };

  const handleBackToForm = () => {
    setStep(1);
    setOtp("");
    setError("");
  };

  if (step === 2) {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <h2>Verify Phone Number</h2>
          <p className="otp-instruction">
            We've sent a 6-digit OTP to <strong>{formData.phone_number}</strong> via WhatsApp.
          </p>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleVerifyOTP}>
            <div className="form-group">
              <label htmlFor="otp">Enter OTP</label>
              <input
                type="text"
                id="otp"
                name="otp"
                value={otp}
                onChange={handleOtpChange}
                placeholder="000000"
                maxLength="6"
                required
                disabled={loading}
                className="otp-input"
                autoComplete="off"
              />
            </div>
            <div className="otp-actions">
              <button type="submit" className="btn btn-primary" disabled={loading || otp.length !== 6}>
                {loading ? "Verifying..." : "Verify OTP"}
              </button>
              <button
                type="button"
                onClick={handleBackToForm}
                className="btn btn-secondary"
                disabled={loading}
              >
                Back
              </button>
            </div>
          </form>
          <div className="resend-section">
            {resendTimer > 0 ? (
              <p className="resend-timer">Resend OTP in {resendTimer}s</p>
            ) : (
              <button
                onClick={handleResendOTP}
                className="resend-link"
                disabled={loading}
              >
                Resend OTP
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Register Restaurant</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmitForm}>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password * (min 6 characters)</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Restaurant Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              minLength="2"
              maxLength="100"
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone_number">Phone Number * (WhatsApp)</label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              required
              placeholder="+923001234567"
              disabled={loading}
              title="Please enter a valid phone number with country code"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address *</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              minLength="5"
              maxLength="200"
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">City *</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              minLength="2"
              maxLength="100"
              disabled={loading}
            />
          </div>
          <div className="form-group">
            <label htmlFor="postal_code">Postal Code</label>
            <input
              type="text"
              id="postal_code"
              name="postal_code"
              value={formData.postal_code}
              onChange={handleChange}
              maxLength="20"
              disabled={loading}
            />
          </div>
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Processing..." : "Continue to Verification"}
          </button>
        </form>
        <p className="auth-link">
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
