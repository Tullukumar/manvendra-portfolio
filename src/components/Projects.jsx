import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "Traffic Management System",
      description:
        "A web-based traffic management project developed to manage traffic-related information and provide users with a modern, organized interface.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      github:
        "https://github.com/vivekkumar0981/trafic-management.git",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          03 — PROJECTS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          SELECTED
          <span>WORK.</span>
        </motion.h2>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.number}
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
            >
              <div className="project-number">
                {project.number}
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-tech">
                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              <motion.a
                className="project-arrow"
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                whileHover={{
                  x: 8,
                  y: -8,
                }}
              >
                ↗
              </motion.a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;