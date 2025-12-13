import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio to showcase my frontend skills and resume.",
      link: "https://scarlet-rora-41.tiiny.site/",
      tech: ["HTML", "CSS", "React", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Admin Dashboard",
      description:
        "A responsive admin panel with charts, tables and dark mode.",
      link: "https://admindash.com",
      tech: ["React", "Material UI", "JavaScript", "Tailwind CSS"],
    },
    {
      title: "Landing Page",
      description: "A marketing-focused landing page for a startup product.",
      link: "https://landingpage.com",
      tech: ["HTML", "CSS", "Bootstrap", "JavaScript"],
    },
    {
      title: "Blog Website",
      description: "A blog platform with markdown, categories, and SEO.",
      link: "https://myblog.com",
      tech: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "E-Commerce UI",
      description:
        "Frontend for an online shop using Material UI and custom cart logic.",
      link: "https://shopnow.com",
      tech: ["React", "Material UI", "JavaScript", "CSS"],
    },
    {
      title: "ToDo App",
      description: "Daily task manager with filters and theme switcher.",
      link: "https://tasksapp.com",
      tech: ["React", "Tailwind CSS", "JavaScript"],
    },
  ];

  return (
    <div className="bg-[#0e162e] text-white font-ubuntu px-6 md:px-16 py-12">
      <div className="flex flex-col items-center justify-center">
        <button className="bg-[#1A365D] text-white px-4 py-1 rounded mb-4 text-sm font-semibold">
          My Projects
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-6 md:px-16 py-12">
        {/* Project Cards */}
        {projects.map((project, index) => (
          <div
            key={index}
            className="border  border-gray-200 rounded-2xl shadow-gray-700 hover:shadow-xl hover:scale-[1.015] transition-all duration-300 ease-in-out p-6 w-full max-w-md mx-auto"
          >
            {/* Title */}
            <h2 className="text-2xl font-boldtext-gray-900 mb-2 tracking-tight">
              {project.title}
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-4 leading-relaxed text-sm">
              {project.description}
            </p>

            {/* Link */}
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium text-sm transition-colors"
            >
              View Project <FaExternalLinkAlt className="text-xs" />
            </a>

            {/* Tech Stack */}
            <div className="mt-6">
              <span className="block text-xs uppercase tracking-wide  font-semibold mb-2">
                Technologies Used:
              </span>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
