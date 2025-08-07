import { FaGithub, FaGlobe, FaTimes } from "react-icons/fa";
import { useState } from "react";
import ProjectType from "../utils/ProjectType";

interface Props {
  project: ProjectType;
}

export default function ProjectCard({ project }: Props) {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      {/* CARD */}
      <div
        className="
          flex flex-col min-w-[280px] max-w-xs
          bg-[#0c0c0c] text-white rounded-2xl mx-2 flex-shrink-0
          shadow-[0_0_15px_5px_rgba(0,255,255,0.15)]
          hover:shadow-[0_0_20px_7px_rgba(0,255,255,0.25)]
          hover:scale-105
          transition-transform duration-300 ease-in-out
          p-6 font-[Times_New_Roman,_serif]
        "
      >
        {/* Imagen del proyecto */}
        <img
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          className="w-full h-auto max-h-64 object-contain rounded-md mb-4 cursor-pointer transition-transform hover:scale-105"
          onClick={() => setShowImage(true)}
        />

        {/* Título y descripción */}
        <div className="flex flex-col h-full">
          <h3 className="text-xl font-semibold text-cyan-400 mb-1">{project.title}</h3>
          <p className="text-sm text-gray-400 mb-4">{project.summary}</p>

          {/* Íconos */}
          <div className="flex gap-5 mt-auto">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Repository"
                className="hover:text-cyan-300 transition-transform hover:scale-110"
              >
                <FaGithub className="text-2xl" />
              </a>
            )}
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Website"
                className="hover:text-cyan-300 transition-transform hover:scale-110"
              >
                <FaGlobe className="text-2xl" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* MODAL FULL IMAGE */}
      {showImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 bg-opacity-80 flex items-center justify-center p-4"
          onClick={() => setShowImage(false)}
        >
          <div className=" max-w-4xl max-h-[90vh] overflow-auto">
            <img
              src={project.image}
              alt={`Full view of ${project.title}`}
              className="rounded-lg shadow-lg max-h-[80vh] mx-auto"
            />
            <button
              onClick={() => setShowImage(false)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-red-400 transition"
              aria-label="Close image modal"
            >
              <FaTimes />
            </button>

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Repository"
              className="absolute top-4 left-4 text-white text-3xl hover:text-cyan-300 transition"
            >
              <FaGithub />
            </a> 
          </div>
        </div>
      )}
    </>
  );
}
