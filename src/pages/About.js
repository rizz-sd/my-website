import React from "react";
import { motion } from "framer-motion";
import '../styles/About.css';

export default function About() {
  const skills = [
    ["React", "TypeScript", "Node.js", "Express"],
    ["Next.js", "Tailwind CSS", "Framer Motion", "GraphQL"],
    ["PostgreSQL", "MongoDB", "AWS", "Docker"],
  ];

  return (
    <div className="about-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="about-content"
      >
        <h1 className="about-title">About Me</h1>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Hi, I'm a full-stack developer and designer with a passion for creating beautiful,
              functional web experiences. I've been building digital products for over 5 years,
              working with startups and established companies alike.
            </p>

            <p>
              My journey started with a curiosity about how things work online. Today, I combine
              technical expertise with creative problem-solving to build applications that not only
              look great but also provide real value to users.
            </p>

            <p>
              When I'm not coding, you can find me exploring new design trends, contributing to
              open-source projects, or sharing knowledge with the developer community through writing
              and speaking.
            </p>

            <div className="about-stats">
              <div className="stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat">
                <div className="stat-number">30+</div>
                <div className="stat-label">Happy Clients</div>
              </div>
              <div className="stat">
                <div className="stat-number">5+</div>
                <div className="stat-label">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="skills-section">
            <h3>Skills & Technologies</h3>
            <div className="skills-container">
              {skills.map((skillGroup, groupIdx) => (
                <div key={groupIdx} className="skill-group">
                  {skillGroup.map((skill, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="skill-badge"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
