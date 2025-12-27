import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import { useContact } from '../hooks/useContact';
import '../styles/Contact.css';

export default function Contact() {
  const { submitContact, isLoading } = useContact();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formError, setFormError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setFormError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    try {
      await submitContact(formData);
      setShowSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Hide success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);
    } catch (err) {
      setFormError(err.message);
    }
  };

  return (
    <div className="contact-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h1 className="contact-title">Let's work together</h1>
            <p className="contact-subtitle">
              Have a project in mind? Want to discuss a potential partnership? 
              Or just want to say hi? I'd love to hear from you.
            </p>

            <div className="contact-details">
              <div className="contact-detail">
                <div className="detail-icon">
                  <Mail size={24} />
                </div>
                <div>
                  <h3>Email</h3>
                  <a href="mailto:contact@example.com">contact@example.com</a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">
                  <Phone size={24} />
                </div>
                <div>
                  <h3>Phone</h3>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
              </div>

              <div className="contact-detail">
                <div className="detail-icon">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3>Location</h3>
                  <p>Your City, Your Country</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="contact-form-section"
          >
            <form onSubmit={handleSubmit} className="contact-form">
              {showSuccess && (
                <div className="success-message">
                  <CheckCircle size={20} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {formError && (
                <div className="error-message">
                  <span>{formError}</span>
                </div>
              )}

              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows="6"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="submit-btn"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
