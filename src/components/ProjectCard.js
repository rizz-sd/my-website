import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({ project, index }) {
  const isWork = project.category === "Work";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="project-card"
      style={{
        borderRadius: "1rem",
        overflow: "hidden",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        height: "100%"
      }}
      onHover
      whileHover={{
        boxShadow: "0 20px 25px rgba(0, 0, 0, 0.2)",
        borderColor: "rgba(59, 130, 246, 0.2)"
      }}
    >
      {/* Image Section */}
      <div style={{
        position: "relative",
        height: "200px",
        overflow: "hidden",
        backgroundColor: "rgba(100, 100, 120, 0.2)"
      }}>
        {project.imageUrl ? (
          <img
            src={project.imageUrl}
            alt={project.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.5s ease"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />
        ) : (
          <div style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(59, 130, 246, 0.1)",
            fontSize: "3rem",
            color: "rgba(59, 130, 246, 0.2)",
            fontWeight: "bold"
          }}>
            {project.title.charAt(0)}
          </div>
        )}

        {/* Category Badge */}
        <div style={{
          position: "absolute",
          top: "1rem",
          right: "1rem"
        }}>
          <span style={{
            padding: "0.5rem 0.75rem",
            borderRadius: "9999px",
            fontSize: "0.75rem",
            fontWeight: "600",
            backgroundColor: isWork ? "rgba(59, 130, 246, 0.9)" : "rgba(255, 255, 255, 0.8)",
            color: isWork ? "white" : "#000",
            backdropFilter: "blur(12px)"
          }}>
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div style={{
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        flexGrow: 1
      }}>
        <h3 style={{
          fontSize: "1.25rem",
          fontWeight: "bold",
          marginBottom: "0.5rem",
          color: "#fff",
          transition: "color 0.3s ease"
        }}>
          {project.title}
        </h3>

        <p style={{
          color: "rgba(255, 255, 255, 0.6)",
          fontSize: "0.875rem",
          lineHeight: "1.5",
          marginBottom: "1.5rem",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          flexGrow: 1
        }}>
          {project.description}
        </p>

        {/* Link */}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              fontSize: "0.875rem",
              fontWeight: "600",
              color: "#3b82f6",
              textDecoration: "none",
              transition: "color 0.3s ease",
              marginTop: "auto"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#2563eb";
              e.currentTarget.querySelector("svg").style.transform = "translateX(0.25rem)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#3b82f6";
              e.currentTarget.querySelector("svg").style.transform = "translateX(0)";
            }}
          >
            View Project
            <ArrowRight
              size={16}
              style={{
                marginLeft: "0.25rem",
                transition: "transform 0.3s ease"
              }}
            />
          </a>
        )}
      </div>
    </motion.div>
  );
}
