import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const SocialMedia = () => {
  return (
    <motion.div
      className="flex gap-4"
      initial={{ scale: 0.8, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, type: "tween" }}
    >
      <SocialIcon
        url="www.whatsapp.com"
        href="https://wa.me/+919881511007"
        target="_blank"
        rel="noopener noreferrer"
        style={{ height: 32, width: 32 }}
        className="ease-in-out duration-300 hover:scale-125 hover:drop-shadow-xl"
      />
      <SocialIcon
        url="www.instagram.com"
        href="https://www.instagram.com/sydtanvirofficial"
        target="_blank"
        rel="noopener noreferrer"
        style={{ height: 32, width: 32 }}
        className="ease-in-out duration-300 hover:scale-125 hover:drop-shadow-xl"
      />
      <SocialIcon
        url="www.x.com"
        href="https://www.x.com/sydtanvirali"
        target="_blank"
        rel="noopener noreferrer"
        style={{ height: 32, width: 32 }}
        className="ease-in-out duration-300 hover:scale-125 hover:drop-shadow-xl"
      />
      <SocialIcon
        url="www.linkedin.com"
        href="https://www.linkedin.com/in/sydtanvirali/"
        target="_blank"
        rel="noopener noreferrer"
        style={{ height: 32, width: 32 }}
        className="ease-in-out duration-300 hover:scale-125 hover:drop-shadow-xl"
      />
      <SocialIcon
        url="www.github.com"
        href="https://github.com/sydtanvirali"
        target="_blank"
        rel="noopener noreferrer"
        style={{ height: 32, width: 32 }}
        className="ease-in-out duration-300 hover:scale-125 hover:drop-shadow-xl"
      />
    </motion.div>
  );
};

export default SocialMedia;
