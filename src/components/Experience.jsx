import React from "react";
import { BackgroundLines } from "../components/ui/background-lines";
import { Timeline } from "../components/ui/timeline";
import { EXPERIENCES } from "../constants/index.jsx";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience">
      <BackgroundLines className="flex items-center flex-col gap-10 md:gap-5 py-10 md:py-20">
        <motion.h2
          className="text-2xl md:text-3xl text-black dark:text-white"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          Experience
        </motion.h2>
        <div className="mx-10 lg:mx-40">
          <Timeline data={EXPERIENCES} />
        </div>
      </BackgroundLines>
    </section>
  );
};

export default Experience;
