import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
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

  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="sticky w-full flex max-w-fit top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] p-8 py-3  items-center justify-center space-x-4">
      {navItems.map((navItem, idx) => (
        <Link
          key={`link=${idx}`}
          activeClass="active bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 ease-in-out duration-300 scale-110 dark:text-transparent dark:bg-no-repeat dark:bg-gradient-to-r dark:from-purple-500 dark:via-violet-500 dark:to-pink-500 ease-in-out duration-300 scale-110"
          to={navItem.link}
          smooth={true}
          duration={100}
          spy={true}
          className={
            "flex items-center dark:text-neutral-50 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500  cursor-pointer"
          }
        >
          <span className="text-xs sm:text-sm">{navItem.name}</span>
        </Link>
      ))}
      <a className="flex items-center cursor-pointer" onClick={toggleMode}>
        {darkMode ? (
          <i className="material-symbols-outlined text-lg dark:text-neutral-50 dark:hover:text-neutral-300">
            light_mode
          </i>
        ) : (
          <i className="material-symbols-outlined text-lg text-neutral-600 hover:text-neutral-500">
            dark_mode
          </i>
        )}
      </a>
    </div>
  );
};

export default Navbar;
