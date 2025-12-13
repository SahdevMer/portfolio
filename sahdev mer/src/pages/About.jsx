import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiRedux,
  SiFirebase,
} from "react-icons/si";

import MainProject from "./MainPro";

const About = () => {
  return (
    <section className="bg-[#0e162e] text-white font-ubuntu px-6 md:px-16 py-12">
      <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
        {/* Left Side: Text Content */}
        <div className="">
          <button className="bg-[#1A365D] text-white px-4 py-1 rounded mb-4 text-sm font-semibold">
            ABOUT ME
          </button>
          <h1 className="text-4xl font-bold mb-4 leading-tight">
            Hello! My name is <span className="text-blue-400">Sahdev Mer</span>
          </h1>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I'm a self-taught programmer with an insatiable curiosity for
            learning and diving into new technologies. With a solid foundation
            in Front-End Development, I specialize in building responsive,
            user-friendly interfaces that not only look good but feel great to
            use. I'm currently leveling up my skills in full-stack development
            to bring even more value to the projects I work on.
            <br />
            <br />
            When I’m not deep in code, you'll probably find me sipping tea (or
            coffee, depending on the vibe) and catching up on a good game of
            cricket. I thrive in creative environments, enjoy solving
            challenges, and am always on the lookout for opportunities to grow,
            collaborate, and innovate.
          </p>

          <p className="text-lg font-semibold mb-3 text-blue-300">
            Some of the Stack I know:
          </p>
          <div className="flex flex-wrap gap-4 text-3xl text-white">
            <FaHtml5 className="hover:text-orange-500" />
            <FaCss3Alt className="hover:text-blue-500" />
            <FaJsSquare className="hover:text-yellow-300" />
            <FaReact className="hover:text-cyan-400" />
            <FaNodeJs className="hover:text-green-500" />
            <SiExpress className="hover:text-gray-400" />
            <SiMongodb className="hover:text-green-600" />
            <SiTailwindcss className="hover:text-sky-400" />
            <SiRedux className="hover:text-purple-400" />
            <FaGithub className="hover:text-gray-300" />
            <FaBootstrap className="hover:text-indigo-500" />
            <SiFirebase className="hover:text-yellow-400" />
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="lg:w-600 h-full flex justify-center ">
          <img
            src="https://spectrum.ieee.org/media-library/image.jpg?id=25587918"
            alt="Sahdev Mer"
            className="w-[350px] h-100 rounded-lg shadow-xl object-cover"
          />
        </div>
      </div>
      <MainProject />
    </section>
  );
};

export default About;
