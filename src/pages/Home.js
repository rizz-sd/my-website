import React from "react";
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion";
import { ArrowDown, Code, Heart, Sparkles, Terminal, ArrowRight } from "lucide-react";
import ProjectCard from '../components/ProjectCard';
import { useProjects } from '../hooks/useProjects';
import '../styles/Home.css';

export default function Home() {
  const navigate = useNavigate();
  const { data: projects, isLoading } = useProjects();

  const workProjects = projects?.filter(p => p.category === "Work").slice(0, 3) || [];
  const stats = [
    { icon: Terminal, label: "Experience", value: "5+ Years" },
    { icon: Sparkles, label: "Expertise", value: "Full Stack" },
    { icon: Code, label: "Projects", value: "50+" },
    { icon: Heart, label: "Passion", value: "Always" },
  ];

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="bg-shape bg-shape-1"></div>
          <div className="bg-shape bg-shape-2"></div>
        </div>

        <div className="hero-content">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="hero-title">
                Creating digital <br />
                <span className="hero-highlight">experiences</span> that matter.
              </h1>
              <p className="hero-subtitle">
                Hi! I'm a full-stack developer and designer passionate about building beautiful, 
                functional software that solves real problems.
              </p>

              <div className="hero-buttons">
                <button 
                  onClick={() => navigate('/projects')}
                  className="btn btn-primary"
                >
                  View My Work
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="btn btn-secondary"
                >
                  Contact Me
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="scroll-indicator"
        >
          <ArrowDown size={24} />
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="stat-card"
            >
              <div className="stat-icon">
                <stat.icon size={24} />
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <div className="projects-header">
          <div>
            <h2 className="section-title">Featured Work</h2>
            <p className="section-subtitle">
              Showcase of my recent projects and accomplishments
            </p>
          </div>
          <button 
            onClick={() => navigate('/projects')}
            className="view-all-btn"
          >
            View All <ArrowRight size={18} />
          </button>
        </div>

        {isLoading ? (
          <div className="projects-grid">
            {[1, 2, 3].map((n) => (
              <div key={n} className="skeleton-card"></div>
            ))}
          </div>
        ) : (
          <div className="projects-grid">
            {workProjects.length > 0 ? (
              workProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))
            ) : (
              <div className="no-projects">
                <p>No projects found yet.</p>
              </div>
            )}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="cta-content"
        >
          <h2>Let's build something amazing together</h2>
          <p>Have a project in mind? I'd love to hear about it and discuss how we can collaborate.</p>
          <button 
            onClick={() => navigate('/contact')}
            className="btn btn-primary btn-large"
          >
            Start a Conversation
          </button>
        </motion.div>
      </section>
    </div>
  );
}
