import React from "react";
import { BackgroundLines } from "../components/ui/background-lines";
import { ABOUT_TEXT } from "../constants/index.jsx";
import SocialMedia from "./SocialMedia";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about">
      <BackgroundLines className="flex items-center flex-col gap-10 md:gap-5 py-10 md:py-20">
        <motion.h2
          className="text-2xl md:text-3xl text-black dark:text-white"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          About
        </motion.h2>
        <div className="h-full mx-10 md:mx-20 lg:mx-40 flex flex-col justify-center">
          <motion.p
            className="md:text-lg lg:text-xl text-neutral-700 dark:text-neutral-400 text-justify font-[Merienda]"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            Hi, I'm Sayyad Tanvir, <br />
            B.Tech Graduate in Computer Engineering from GF's Godavari College
            of Engineering, Jalgaon(MH).
          </motion.p>
          <br />
          {ABOUT_TEXT.map((e, index) => (
            <motion.p
              key={index}
              className="lg:text-xl text-neutral-700 dark:text-neutral-400 text-justify font-[Merienda]"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: "tween" }}
            >
              {e}
            </motion.p>
          ))}
        </div>
        <SocialMedia />
      </BackgroundLines>
    </section>
  );
};

export default About;
