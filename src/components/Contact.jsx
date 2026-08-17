import { motion } from "framer-motion";

function Contact() {
  const links = [
    {
      name: "Email Me",
      href: "mailto:manvendraroy1234@gmail.com",
    },
    {
      name: "Call Me",
      href: "tel:+919798028144",
    },
    {
      name: "GitHub",
      href: "https://github.com/Tullukumar",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/manvendra-kumar-b6a381382/",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/_about_x_/",
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.p
          className="section-label"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          05 — CONTACT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9 }}
        >
          LET'S BUILD
          <span>SOMETHING.</span>
        </motion.h2>

        <motion.p
          className="contact-description"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Have an idea, project, opportunity, or just want to
          talk about technology? I'd love to hear from you.
        </motion.p>

        <div className="contact-links">
          {links.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http")
                  ? "noreferrer"
                  : undefined
              }
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
                scale: 1.03,
              }}
            >
              {link.name} ↗
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;