import { motion } from "framer-motion";

function Experience() {
  const experiences = [
    {
      year: "CURRENT",
      title: "Full Stack Development",
      organization: "Personal Development",
      description:
        "Currently developing full-stack web development skills and building projects with modern frontend and backend technologies.",
    },
    {
      year: "CURRENT",
      title: "Frontend Development",
      organization: "Personal Projects",
      description:
        "Building responsive and interactive interfaces using HTML, CSS, JavaScript, React and Tailwind CSS.",
    },
    {
      year: "CURRENT",
      title: "Backend Development",
      organization: "MERN Stack",
      description:
        "Learning and building backend applications using Node.js, Express.js, MongoDB, Mongoose and REST APIs.",
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="experience-container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          04 — EXPERIENCE
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          MY
          <span>EXPERIENCE.</span>
        </motion.h2>

        <div className="experience-list">
          {experiences.map((experience, index) => (
            <motion.article
              className="experience-item"
              key={`${experience.title}-${index}`}
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
            >
              <div className="experience-year">
                {experience.year}
              </div>

              <div className="experience-content">
                <h3>{experience.title}</h3>

                <p className="experience-organization">
                  {experience.organization}
                </p>

                <p className="experience-description">
                  {experience.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;