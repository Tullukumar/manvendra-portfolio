import { motion } from "framer-motion";

function Skills() {
  const skills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Mongoose",
  "REST APIs",
  "Git & GitHub",
];
  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          02 — SKILLS
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          MY
          <span>TECH STACK.</span>
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              className="skill-card"
              key={skill}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
            >
              <span>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{skill}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;