import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { projectData } from "../constant";

const ProjectComponent = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === selectedProject.images.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? selectedProject.images.length - 1 : prevIndex - 1
      );
    }
  };

  const getCurrentImage = () => {
    if (selectedProject) {
      // If project has multiple images, use the current index
      if (selectedProject.images && selectedProject.images.length > 0) {
        return selectedProject.images[currentImageIndex];
      }
      // Fallback to single image
      return selectedProject.image;
    }
    return null;
  };

  const hasMultipleImages = () => {
    return (
      selectedProject &&
      selectedProject.images &&
      selectedProject.images.length > 1
    );
  };

  return (
    <>
      {projectData.map((proj, i) => {
        return (
          <div
            className="mt-8 md:mt-16 flex flex-col lg:flex-row relative"
            key={i}
          >
            <div
              className={`w-full lg:w-[60%] ${
                proj.value % 2 === 0 ? "lg:order-1" : ""
              } mb-4 lg:mb-0 relative z-10`}
            >
              {proj.link ? (
                <a href={proj.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="brightness-50 hover:brightness-100 w-full h-auto rounded-lg lg:rounded-none transition-all duration-300"
                  />
                </a>
              ) : (
                <div
                  className="hover:cursor-pointer group relative overflow-hidden rounded-lg lg:rounded-none"
                  onClick={() => openModal(proj)}
                >
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="brightness-50 hover:brightness-100 w-full h-auto transition-all duration-300 group-hover:scale-105"
                  />
                  {/* Overlay hint for non-linked projects */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-highlight text-[#0a192f] px-3 py-1 rounded-full text-sm font-mono">
                      View Gallery
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div
              className={`w-full lg:w-[40%] flex flex-col gap-4 lg:gap-6 ${
                proj.value % 2 === 0 ? "lg:mr-4 lg:-ml-16" : "lg:ml-4 lg:-mr-16"
              } relative z-20`}
            >
              <div
                className={`text-left ${
                  proj.value % 2 === 0 ? "lg:text-left" : "lg:text-right"
                }`}
              >
                <p className="font-mono text-highlight text-base lg:text-[1.2rem]">
                  Featured Project
                </p>
                <p className="text-headers font-Poppins text-xl lg:text-[2rem] font-semibold">
                  {proj.title}
                </p>
              </div>
              <div
                className={`bg-[#112240] p-4 lg:p-6 text-left ${
                  proj.value % 2 === 0 ? "lg:text-left" : "lg:text-right"
                } rounded-lg shadow-lg`}
              >
                <p className="text-text font-Poppins text-sm lg:text-base leading-relaxed">
                  {proj.description}
                </p>
              </div>
              <div
                className={`text-left ${
                  proj.value % 2 === 0 ? "lg:text-left" : "lg:text-right"
                }`}
              >
                <p className="text-text font-mono text-sm lg:text-base">
                  {proj.tech}
                </p>
              </div>
              <div
                className={`flex gap-4 ${
                  proj.value % 2 === 0
                    ? "justify-start lg:justify-start"
                    : "justify-start lg:justify-end"
                }`}
              >
                <a
                  href="https://github.com/novice-is-me"
                  target="_blank"
                  className="hover:text-highlight transition-colors"
                >
                  <GitHubIcon style={{ color: "#8892b0" }} />
                </a>
                <a
                  href={proj.link}
                  target="_blank"
                  className="hover:text-highlight transition-colors"
                >
                  <ExitToAppIcon style={{ color: "#8892b0" }} />
                </a>
              </div>
            </div>
          </div>
        );
      })}

      {/* Project Image Carousel Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-6xl max-h-[90vh] w-full bg-[#112240] border-2 border-highlight rounded-lg overflow-hidden">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 bg-[#0a192f] text-highlight hover:bg-highlight hover:text-[#0a192f] 
                         w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {hasMultipleImages() && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#0a192f] bg-opacity-80 text-highlight 
                             hover:bg-highlight hover:text-[#0a192f] w-12 h-12 rounded-full flex items-center justify-center 
                             transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-[#0a192f] bg-opacity-80 text-highlight 
                             hover:bg-highlight hover:text-[#0a192f] w-12 h-12 rounded-full flex items-center justify-center 
                             transition-all duration-300 hover:scale-110"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </>
            )}

            <div className="p-6">
              {/* Main image */}
              <div className="relative mb-4">
                <img
                  src={getCurrentImage()}
                  alt={selectedProject.title}
                  className="w-full h-auto max-h-[60vh] object-contain rounded"
                />
              </div>

              {/* Project info */}
              <div className="text-center">
                <h3 className="text-headers font-Poppins text-xl md:text-2xl font-semibold mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-text font-Poppins text-sm md:text-base leading-relaxed mb-4">
                  {selectedProject.description}
                </p>
                <p className="text-text font-mono text-sm">
                  {selectedProject.tech}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectComponent;
