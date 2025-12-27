import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import '../styles/Certifications.css';

export default function Certifications() {
  const certifications = [
    {
      id: 1,
      title: "Advanced React & Next.js",
      issuer: "Udemy",
      date: "2023",
      description: "Comprehensive course covering React hooks, Next.js, and modern web development patterns.",
      icon: "⚛️"
    },
    {
      id: 2,
      title: "Full Stack Web Development",
      issuer: "Codecademy",
      date: "2022",
      description: "End-to-end web development covering frontend, backend, and databases.",
      icon: "🚀"
    },
    {
      id: 3,
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2023",
      description: "Cloud computing fundamentals and AWS services certification.",
      icon: "☁️"
    },
    {
      id: 4,
      title: "UI/UX Design Fundamentals",
      issuer: "Coursera",
      date: "2022",
      description: "Design principles, user research, and prototyping for digital products.",
      icon: "🎨"
    },
    {
      id: 5,
      title: "JavaScript Mastery",
      issuer: "freeCodeCamp",
      date: "2021",
      description: "Deep dive into JavaScript ES6+, async programming, and DOM manipulation.",
      icon: "📜"
    },
    {
      id: 6,
      title: "Database Design & PostgreSQL",
      issuer: "Pluralsight",
      date: "2023",
      description: "Database normalization, SQL optimization, and PostgreSQL best practices.",
      icon: "🗄️"
    }
  ];

  return (
    <div className="certifications-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="certifications-title">Certifications & Achievements</h1>
        <p className="certifications-subtitle">
          Continuous learning and professional development through industry-recognized certifications
        </p>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="certification-card"
            >
              <div className="cert-header">
                <div className="cert-icon">{cert.icon}</div>
                <div className="cert-meta">
                  <h3 className="cert-title">{cert.title}</h3>
                  <p className="cert-issuer">{cert.issuer}</p>
                </div>
              </div>

              <p className="cert-description">{cert.description}</p>

              <div className="cert-footer">
                <span className="cert-year">{cert.date}</span>
                <CheckCircle size={18} className="check-icon" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="additional-info"
        >
          <Award size={32} />
          <h3>Continuous Learning</h3>
          <p>
            I'm committed to staying updated with the latest technologies and best practices 
            in web development, cloud computing, and design. New certifications and courses are 
            regularly added to my profile.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
