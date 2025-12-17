import React from "react";

const Experience = () => {
  return (
    <div className="bg-[#0e162e] text-white font-ubuntu px-6 md:px-16 py-12">
      <div className="flex flex-col items-center justify-center">
        <button className="bg-[#1A365D] text-white px-4 py-1 rounded mb-6 text-sm font-semibold">
          My Experience
        </button>

        <ol className="pl-4 space-y-10 w-full">
          {/* ITEM 1 */}
          <div className="flex justify-center">
            <li className="bg-[#0e162a] shadow-2xl rounded-2xl w-full md:w-3/4 px-6 py-4">
              <time className="block mb-1 text-sm text-gray-400">
                Dec 2024
              </time>
              <h2 className="text-lg font-semibold">
                <a href="https://www.shreeacademy.net.in/" target="_blank">
                  Shree Academy, Rajkot
                </a>
              </h2>
              <p className="mt-2 text-gray-400">
                Learned HTML5, CSS3, JavaScript. Built responsive projects using
                Bootstrap and Tailwind. Strengthened React and GitHub skills.
              </p>
              <ul className="list-disc list-inside text-gray-400 mt-2">
                <li>Built responsive UI projects</li>
                <li>Learned React components & hooks</li>
                <li>Improved debugging and Git skills</li>
              </ul>
            </li>
          </div>

          {/* ITEM 2 */}
          <div className="flex justify-center">
            <li className="bg-[#0e162a] shadow-2xl rounded-2xl w-full md:w-3/4 px-6 py-4">
              <time className="block mb-1 text-sm text-gray-400">
                Feb 2025 – Oct 2025
              </time>
              <h2 className="text-lg font-semibold">
                <a href="https://ybnewsite.ybtest.co.in/" target="_blank">
                  YoungBrains InfoTech Pvt. Ltd., Ahmedabad
                </a>
              </h2>
              <p className="mt-2 text-gray-400">
                Worked as a Front-End Developer on live projects with team collaboration.
              </p>
              <ul className="list-disc list-inside text-gray-400 mt-2">
                <li>Developed UIs using React & Tailwind CSS</li>
                <li>Optimized performance across devices</li>
                <li>Collaborated with designers & backend team</li>
                <li>Used Git & Figma in agile workflow</li>
              </ul>
            </li>
          </div>

          {/* ITEM 3 – CURRENT */}
          <div className="flex justify-center">
            <li className="bg-[#0e162a] border border-blue-500 shadow-2xl rounded-2xl w-full md:w-3/4 px-6 py-4">
              <time className="block mb-1 text-sm text-blue-400 font-semibold">
                Dec 2025 – Present
              </time>
              <h2 className="text-lg font-semibold">
                Bitwise InfoTech, Rajkot
              </h2>
              <p className="mt-2 text-gray-400">
                Currently working as a Front-End Developer on production-level applications.
              </p>
              <ul className="list-disc list-inside text-gray-400 mt-2">
                <li>Building scalable UIs using React, Tailwind & TypeScript</li>
                <li>Working on live client projects</li>
                <li>Improving performance & UI consistency</li>
                <li>Collaborating with cross-functional teams</li>
              </ul>
            </li>
          </div>
        </ol>
      </div>
    </div>
  );
};

export default Experience;