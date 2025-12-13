import React from "react";

const Experience = () => {
  return (
    <div className="bg-[#0e162e] text-white font-ubuntu px-6 md:px-16 py-12">
      <div className="flex flex-col items-center justify-center">
        <button className="bg-[#1A365D] text-white px-4 py-1 rounded mb-4 text-sm font-semibold">
          My Experience
        </button>

        <ol className="border-gray-200 dark:border-gray-700 pl-4 space-y-10">
          {/* ITEM 1 */}
          <div className="flex justify-center">
            <li className="bg-[#0e162a] shadow-2xl rounded-2xl w-full md:w-3/4 px-6 py-4">
              <time className="block mb-1 text-sm text-gray-400">
                Dec -2024
              </time>
              <h2 className="text-lg font-semibold text-white">
                <a href="https://www.shreeacademy.net.in/">
                  Shree Academy, Rajkot
                </a>
              </h2>
              <p className="mt-2 text-gray-400">
                Learned HTML5, CSS3, JS. Built responsive projects using
                Bootstrap and Tailwind. Strengthened React and GitHub skills.
              </p>
              <ul className="list-disc list-inside text-gray-400 mt-2">
                <li>Built responsive UI projects with Bootstrap & Tailwind</li>
                <li>Learned React component architecture and hooks</li>
                <li>Improved debugging and Git version control skills</li>
              </ul>
            </li>
          </div>

          {/* ITEM 2 */}
          <div className="flex justify-center">
            <li className="bg-[#0e162a] shadow-2xl rounded-2xl w-full md:w-3/4 px-6 py-4">
              <time className="block mb-1 text-sm text-gray-400">
                Feb 2025 - Current
              </time>
              <h2 className="text-lg font-semibold text-white">
                <a href="https://ybnewsite.ybtest.co.in/">
                  Youngbarinz InfoTech Pvt. Ltd., Ahmedabad
                </a>
              </h2>
              <p className="mt-2 text-gray-400">
                Working as Front-End Developer. Handling live projects and
                collaborating with team.
              </p>
              <ul className="list-disc list-inside text-gray-400 mt-2">
                <li>Developing responsive UIs with React.js + Tailwind,Typescripe</li>
                <li>Optimizing performance across devices</li>
                <li>Collaborating with designers & backend team</li>
                <li>Using Git, Figma, for agile workflow</li>
              </ul>
            </li>
          </div>
        </ol>
      </div>
    </div>
  );
};

export default Experience;
