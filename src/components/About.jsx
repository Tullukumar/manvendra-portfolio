import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          01 — ABOUT ME
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          I BUILD
          <span>DIGITAL EXPERIENCES.</span>
        </motion.h2>

        <motion.p
          className="about-text"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          I'm a Software Engineer focused on building modern, scalable
          and interactive web applications. I enjoy turning ideas into
          real-world products and exploring technologies across
          frontend and backend development.
        </motion.p>
      </div>
    </section>
  );
}

export default About;