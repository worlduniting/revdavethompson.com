import { motion } from "framer-motion";

// Pass the text to be animated and the CSS classes to style
const AnimatedText = ({ text, textStyles }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 * i },
    }),
  };

  const styles = textStyles;

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        default: { ease: "linear" },
      },
    },
    hidden: {
      opacity: 0,
      x: 10,
      y: -5,
      rotate: -10,
      transition: {
        type: "linear",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      className={textStyles}
      style={{ zIndex: 10, fontSize: "2em" }}
      variants={container}
      initial="hidden"
      animate="visible"
      transition={{ duration: 1.5, delay: 3 }}
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
      <p></p>
    </motion.div>
  );
};

export default AnimatedText;