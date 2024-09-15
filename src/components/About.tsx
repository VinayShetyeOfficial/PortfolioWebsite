import React, { useEffect, useState } from "react";
import Tilty from "react-tilty";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, user } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";
import { fadeIn, textVariant } from "../utils/motion";
import { Service } from "../configs/types";

interface ServiceCardProps extends Service {
  index: number;
}

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => (
  <Tilty className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilty>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px] sm:text-justify text-left md:text-left"
      >
        {user.about_me_description}
      </motion.p>

      <div className="mt-20 flex flex-wrap sm:justify-center lg:justify-start align-center gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
