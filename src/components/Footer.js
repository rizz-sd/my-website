import React from "react";
import '../styles/Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-branding">
            <h3 className="footer-title">
              My <span className="footer-highlight">Portfolio</span>
            </h3>
            <p className="footer-description">
              Building digital experiences with passion and precision.
            </p>
          </div>

          <div className="footer-socials">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub"
            >
              <i className="pi pi-github"></i>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Twitter"
            >
              <i className="pi pi-twitter"></i>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn"
            >
              <i className="pi pi-linkedin"></i>
            </a>
            <a 
              href="mailto:contact@example.com"
              className="social-link"
              aria-label="Email"
            >
              <i className="pi pi-envelope"></i>
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
