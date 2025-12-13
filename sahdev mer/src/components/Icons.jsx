// export in
import React from "react";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Icons = () => {
  return (
    <div className="bg-[#0e162e] text-white px-14 ">
      <h2 className="text-2xl font-semibold mb-6">CONNECT WITH ME:</h2>
      <div className="flex flex-wrap gap-4">
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
  );
};

export default Icons;
