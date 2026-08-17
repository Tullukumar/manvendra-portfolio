import { motion } from "framer-motion";

function Footer() {
  const socialLinks = [
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
    {
      name: "Email",
      href: "mailto:manvendraroy1234@gmail.com",
    },
  ];

  return (
    <footer className="footer">
      <motion.div
        className="footer-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="footer-brand">
        

          <p>Manvendra Kumar — Software Engineer</p>
        </div>

        <div className="footer-socials">
          {socialLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              target={
                link.href.startsWith("http")
                  ? "_blank"
                  : undefined
              }
              rel={
                link.href.startsWith("http")
                  ? "noreferrer"
                  : undefined
              }
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          delay: 0.2,
        }}
      >
        <p>
          © {new Date().getFullYear()} Manvendra Kumar
        </p>

        <p>Built with React</p>
      </motion.div>
    </footer>
  );
}

export default Footer;







