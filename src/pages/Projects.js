import React from "react";
import { motion } from "framer-motion";
import ProjectCard from '../components/ProjectCard';
import { useProjects } from '../hooks/useProjects';
import '../styles/Projects.css';

export default function Projects() {
  const { data: projects, isLoading } = useProjects();

  return (
    <div className="projects-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="projects-header-section"
      >
        <h1 className="projects-title">Full Portfolio</h1>
        <p className="projects-description">
          A comprehensive list of my work, experiments, and side projects. 
          Everything from web applications to design systems and creative ventures.
        </p>
      </motion.div>

      {isLoading ? (
        <div className="projects-grid">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div key={n} className="skeleton-card"></div>
          ))}
        </div>
      ) : (
        <div className="projects-grid">
          {projects && projects.length > 0 ? (
            projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))
          ) : (
            <div className="no-projects-found">
              <p>No projects found. Check back later!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
