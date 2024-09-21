import React from "react";
import HeroImg from "../assets/hero.jpg";
import { BackgroundLines } from "../components/ui/background-lines";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { Toaster, toast } from "sonner";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home">
      <Toaster position="top-right" theme="system" richColors={true} />
      <BackgroundLines className="h-screen xl:pt-5 flex flex-col items-center justify-center">
        <motion.img
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
          src={HeroImg}
          alt="Hero Image"
          className="h-1/3 m-5 rounded-full border-4 border-neutral-200 dark:border-neutral-800"
        />

        <motion.h2
          className="text-lg relative md:text-xl lg:text-2xl text-black dark:text-white"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          Hey, I'm
        </motion.h2>

        <motion.h1
          className="text-5xl relative md:text-6xl lg:text-7xl font-[Lobster]"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
            <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
              <span className="">Sayyad Tanvir</span>
            </div>
            <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
              <span className="">Sayyad Tanvir</span>
            </div>
          </div>
        </motion.h1>

        <motion.h2
          className="text-3xl relative md:text-4xl lg:text-5xl text-black dark:text-white"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          Software Engineer
        </motion.h2>

        <motion.div
          className="m-5 md:m-10 flex justify-center gap-3"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="a"
            href="mailto:sydtanvirali@gmail.com"
            className="w-28 text-center dark:bg-black bg-white text-black dark:text-white space-x-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Hire Me
          </HoverBorderGradient>
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="a"
            href="/public/resume/Tanvir-Sayyad.pdf"
            download="Tanvir-Sayyad.pdf"
            className="w-28 text-center dark:bg-white bg-black text-white dark:text-black space-x-2 hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white"
            onClick={() => toast.success("CV Downloaded Successfully")}
          >
            Get CV
          </HoverBorderGradient>
        </motion.div>
      </BackgroundLines>
    </section>
  );
};

export default Home;
