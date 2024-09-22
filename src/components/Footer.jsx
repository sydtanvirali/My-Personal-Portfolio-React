import React from "react";
import SocialMedia from "./SocialMedia";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Footer = () => {
  const navItems = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "About",
      link: "about",
    },
    {
      name: "Skills",
      link: "skills",
    },
    {
      name: "Experience",
      link: "experience",
    },
    {
      name: "Projects",
      link: "projects",
    },
    {
      name: "Contact",
      link: "contact",
    },
  ];
  return (
    <div className="flex flex-col items-center mt-40">
      <SocialMedia />
      <motion.div
        className="my-5 flex gap-3 "
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            to={navItem.link}
            smooth={true}
            duration={100}
            spy={true}
            className={
              "flex items-center dark:text-neutral-50 text-neutral-600  cursor-pointer hover:bg-clip-text dark:hover:text-transparent dark:hover:bg-no-repeat dark:hover:bg-gradient-to-r dark:hover:from-purple-500 dark:hover:via-violet-500 dark:hover:to-pink-500 hover:text-transparent hover:bg-no-repeat hover:bg-gradient-to-r hover:from-purple-500 hover:via-violet-500 hover:to-pink-500 hover:ease-in-out hover:duration-300 hover:scale-105"
            }
          >
            <span className="text-sm sm:text-lg">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
      <motion.div
        className="text-center dark:text-white text-black"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <p className="text-xs sm:text-sm ">
          Copyrights ©2024 | Sayyad Tanvir | All Right Reserved.
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
