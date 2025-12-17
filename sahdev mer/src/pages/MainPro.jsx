import React from "react";

const MainProject = () => {
  return (
    <div>
      <div className="bg-[#0e162e] text-white font-ubuntu px-6 md:px-16 py-12 flex flex-col items-center    justify-center">
        <button className="bg-[#1A365D] text-white px-4 py-1 rounded mb-4 text-sm font-semibold">
          My Main Project
        </button>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">My Main Project</h1>
        <p className="text-gray-300 mb-6 leading-relaxed">
          This is a brief description of my main project. It showcases my skills
          in web development and my ability to create responsive, user-friendly
          interfaces.
        </p>
        <img
          src="../public/images/main-project.png"
          alt="Main Project"
          className="w-[500px] h-[300px] rounded-lg shadow-xl object-cover"
        />
        <h2 className="text-2xl py-10 bg-gradient-to-r from-[#7E27C8] to-[#F00488] bg-clip-text text-transparent font-bold">
          Online Interview Assessment System for Students and Professionals
        </h2>
        <p className="text-gray-300 text-xl font-semibold  mb-6 leading-relaxed">
          Tech Stack Used :
        </p>
        <ul className="flex flex-wrap gap-4 text-3xl text-white">
          <li className="px-4 py-1 bg-gradient-to-r from-[#7E27C8] to-[#F00488] rounded-2xl text-lg font-medium">
            React.js
          </li>
          <li className="px-4 py-1 bg-gradient-to-r from-[#7E27C8] to-[#F00488] rounded-2xl text-lg font-medium">
            Tailwind Css
          </li>
          <li className="px-4 py-1 bg-gradient-to-r from-[#7E27C8] to-[#F00488] rounded-2xl text-lg font-medium">
            Typescript
          </li>
          <li className="px-4 py-1 bg-gradient-to-r from-[#7E27C8] to-[#F00488] rounded-2xl text-lg font-medium">
            Git
          </li>
          <li className="px-4 py-1 bg-gradient-to-r from-[#7E27C8] to-[#F00488] rounded-2xl text-lg font-medium">
            Google Auth
          </li>
          <li className="px-4 py-1 bg-gradient-to-r from-[#7E27C8] to-[#F00488] rounded-2xl text-lg font-medium">
            Firebase
          </li>
          <li className="px-4 py-1 bg-gradient-to-r from-[#7E27C8] to-[#F00488] rounded-2xl text-lg font-medium">
            Next.js
          </li>
          <li className="px-4 py-1 bg-gradient-to-r from-[#7E27C8] to-[#F00488] rounded-2xl text-lg font-medium">
            Shopify
          </li>
        </ul>
        <div className="flex justify-center mt-6">
          <button className="bg-blue-500 hover:bg-[#274C77] transition-all duration-300 text-white px-6 py-2 rounded-lg text-sm font-semibold shadow-md hover:shadow-lg">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainProject;
