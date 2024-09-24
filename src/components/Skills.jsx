import { SKILLS } from "../constants";
import { BackgroundLines } from "../components/ui/background-lines";
import { motion } from "framer-motion";

const Skills = () => {
  const iconVariants = (duration) => ({
    initial: { y: -5 },
    animate: {
      y: [5, -5],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <section id="skills">
      <BackgroundLines className="flex items-center flex-col gap-10 py-10 md:py-20">
        <motion.h2
          className="text-2xl md:text-3xl text-black dark:text-white"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          Skills
        </motion.h2>
        <motion.div
          className="h-full grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 content-center gap-x-4 gap-y-8 md:gap-8 mx-10 md:mx-20"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          {SKILLS.map((e, i) => {
            let variantIndex = (i % 5) + 2;
            return (
              <motion.div
                key={e.label}
                className="w-20 h-20 rounded-xl border-4 border-neutral-200 dark:border-neutral-800 p-4"
                variants={iconVariants(variantIndex)}
                initial="initial"
                animate="animate"
              >
                <img src={e.icon} alt={e.label} />
              </motion.div>
            );
          })}
        </motion.div>
      </BackgroundLines>
    </section>
  );
};

export default Skills;
