import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, ArrowRight } from "lucide-react";
import { ROUTES } from "../constants/routes";
import '../styles/NotFound.css';

export default function NotFound() {
  return (
    <div className="notfound-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="notfound-content"
      >
        <div className="error-code">404</div>
        <h1 className="error-title">Page Not Found</h1>
        <p className="error-description">
          Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        <Link to={ROUTES.HOME} className="error-btn">
          <Home size={20} />
          Back to Home
          <ArrowRight size={20} />
        </Link>
      </motion.div>
    </div>
  );
}
