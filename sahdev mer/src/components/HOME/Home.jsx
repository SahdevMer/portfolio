import React from "react";
import "flowbite/plugin";
import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaExternalLinkAlt,
} from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="flex  justify-between items-center flex-col min-h-screen h-screen md:flex-row p-4 bg-blend-darken bg-[#0e162e]">
        <div className="p-4   lg:w-200">
          <h1 className="font-bold text-shadow-superduper lg:text-8xl text-4xl mb-4 text-white">
            Welcome to my
            <br />
            <span className="text-shadow-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#7E27C8] to-[#F00488]">
              Portfolio!
            </span>
          </h1>
          <p className="mb-4 text-left text-white leading-relaxed text-md md:w-180 sm:w-40 max-w-2xl">
            I'm a self-taught developer who’s deeply passionate about turning
            ideas into clean, functional code. With a strong foundation in
            Front-End Development, I’m continuously pushing myself to grow into
            a confident full-stack developer. Whether I’m building responsive
            interfaces or exploring new tech stacks, I enjoy the challenge of
            learning and creating something better every day. When I’m not
            coding, you’ll find me with a warm cup of tea (or coffee, if we’re
            getting fancy) and cheering for my favorite cricket team 🏏☕. I
            thrive in dynamic environments and always look for opportunities to
            learn, build, and level up as a developer. &nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7E27C8] to-[#F00488]">
              (React.js | JavaScript | CSS | HTML | Tailwind CSS | )
            </span>
          </p>
          <div className="flex space-x-4 py-3 justify-center">
            <button className="px-5 py-2 bg-gradient-to-r from-[#7E27C8] to-[#F00488] rounded-2xl text-lg font-medium">
              Hire Me
            </button>

            <a
              href="/resume.pdf" // public folder path
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-[#7E27C8] to-[#F00488] rounded-2xl text-lg font-medium text-white"
            >
              <FaExternalLinkAlt /> View Resume
            </a>
          </div>

          <div className="flex  gap-4">
            <h2 className="text-2xl font-semibold mb-6">CONNECT WITH ME:</h2>
            {/* GitHub */}
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full   hover:text-black hover:rotate-[360deg] transition-all duration-500 cursor-pointer"
              title="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </div>

            {/* LinkedIn */}
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full   hover:text-black hover:rotate-[360deg] transition-all duration-500 cursor-pointer"
              title="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </div>

            {/* Instagram */}
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full   hover:text-black hover:rotate-[360deg] transition-all duration-500 cursor-pointer"
              title="Instagram"
            >
              <FaInstagram className="w-6 h-6" />
            </div>

            {/* Twitter */}
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full hover:text-black hover:rotate-[360deg] transition-all duration-500 cursor-pointer"
              title="Twitter"
            >
              <FaTwitter className="w-6 h-6" />
            </div>
          </div>
        </div>

        <div className="p-6 max-w-full md:w-1/3   hidden md:block justify-center items-center">
          <img
            className="rounded-2xl w-90 lg:h-120 sm:h-100 z-10 object-cover   duration-300"
            src="../public/images/sahdev.png"
            alt="Sahdev Mer"
          />
        </div>
      </div>
    </>
  );
}

export default Home;
