import React from "react";
import { Meteors } from "./ui/meteors";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <section
      id="projects"
      className="flex items-center flex-col gap-20 py-10 md:py-20 px-10 bg-white dark:bg-black"
    >
      <motion.h2
        className="text-2xl md:text-3xl text-black dark:text-white"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 xl:grid-cols-2 items-center justify-center gap-10">
        {PROJECTS.map((e, index) => (
          <motion.div
            key={index}
            className="w-full xl:h-full relative max-w-xl font-[Merienda]"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, type: "tween" }}
          >
            <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
            <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-start">
              <h1 className="font-bold text-lg text-white mb-4 relative z-50">
                {e.title}
              </h1>

              <p className="font-normal text-sm text-slate-500 mb-4 relative z-50">
                {e.description}
              </p>

              <ul className="flex flex-wrap font-normal text-sm text-slate-500 mb-4">
                {e.technology.map((e, index) => (
                  <li key={index} className="list-disc mx-4">
                    {e}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button
                  className="justify-self-end border px-4 py-1 rounded-lg  border-gray-500 text-gray-300"
                  onClick={() => window.open(e.codeLink, "_blank")}
                >
                  Source Code
                </button>
              </div>
              <Meteors number={20} />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
