import { motion } from "framer-motion";

function Hero() {
  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const scrollToContact = () => {
    document
      .getElementById("contact")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <section className="hero-content">

      {/* =========================
          LEFT SIDE - HERO TEXT
      ========================= */}

      <div className="hero-text">

        {/* Intro */}
        <motion.p
          className="hero-intro"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
        >
          HELLO, I'M
        </motion.p>

        {/* Name + Profession */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          MANVENDRA KUMAR

          <span>
            SOFTWARE ENGINEER
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          className="hero-description"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
        >
          I build modern, scalable and interactive
          digital experiences using modern web
          technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="hero-buttons"
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
            delay: 0.6,
          }}
        >
          <button onClick={scrollToProjects}>
            View My Work
          </button>

          <button
            className="secondary-btn"
            onClick={scrollToContact}
          >
            Contact Me
          </button>
        </motion.div>

      </div>


      {/* =========================
          RIGHT SIDE - PROFILE PHOTO
      ========================= */}

      <motion.div
        className="hero-photo"
        initial={{
          opacity: 0,
          scale: 0.8,
          x: 50,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
        }}
        transition={{
          duration: 1,
          delay: 0.4,
        }}
      >

        <div className="hero-photo-ring">

          <img
            src="/images/profile.jpg"
            alt="Manvendra Kumar"
          />

        </div>

      </motion.div>

    </section>
  );
}

export default Hero;