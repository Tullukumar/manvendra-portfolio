import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function VisitorCounter() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    const recordVisit = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/visitors/visit",
          {
            method: "POST",
          }
        );

        const data = await response.json();

        setCount(data.count);
      } catch (error) {
        console.error(
          "Visitor counter error:",
          error
        );
      }
    };

    recordVisit();
  }, []);

  return (
    <motion.div
      className="visitor-counter"
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
    >
      <span className="visitor-icon">
        👁
      </span>

      <div>
        <strong>
          {count !== null ? count : "..."}
        </strong>

        <span>
          Portfolio Visitors
        </span>
      </div>
    </motion.div>
  );
}

export default VisitorCounter;