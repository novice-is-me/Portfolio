import React, { useState } from "react";
import { certData } from "./constant";

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const cardsPerPage = 6;
  const totalPages = Math.ceil(certData.length / cardsPerPage);

  const getCurrentCards = () => {
    const startIndex = currentPage * cardsPerPage;
    return certData.slice(startIndex, startIndex + cardsPerPage);
  };

  const openModal = (cert) => {
    setSelectedCert(cert);
  };

  const closeModal = () => {
    setSelectedCert(null);
  };

  return (
    <section className="my-16 md:my-[10rem] mx-0" id="certificates">
      <div className="flex items-center gap-3">
        <p className="text-highlight font-mono text-2xl md:text-4xl">03.</p>
        <p className="font-Poppins font-semibold text-headers text-2xl md:text-4xl whitespace-pre-wrap">
          Certificates
        </p>
        <div className="ml-4 border border-[#233554] w-[30%] h-0 "></div>
      </div>

      <div className="mt-8 md:mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {getCurrentCards().map((cert, i) => (
            <div
              key={i}
              className="group cursor-pointer bg-[#112240] border border-[#233554] rounded-lg overflow-hidden 
                         hover:border-highlight transition-all duration-300 hover:transform hover:scale-105"
              onClick={() => openModal(cert)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-headers font-Poppins text-sm md:text-base font-medium text-center leading-tight">
                  {cert.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
              disabled={currentPage === 0}
              className="p-2 text-text hover:text-highlight disabled:opacity-50 disabled:cursor-not-allowed 
                         transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
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

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i)}
                className={`w-8 h-8 rounded-full text-sm font-mono transition-all duration-300 
                           ${
                             currentPage === i
                               ? "bg-highlight text-[#0a192f]"
                               : "text-text hover:text-highlight hover:bg-[#112240]"
                           }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage(Math.min(totalPages - 1, currentPage + 1))
              }
              disabled={currentPage === totalPages - 1}
              className="p-2 text-text hover:text-highlight disabled:opacity-50 disabled:cursor-not-allowed 
                         transition-colors duration-300"
            >
              <svg
                className="w-5 h-5"
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
          </div>
        )}
      </div>

      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-[90vh] bg-[#112240] border-2 border-highlight rounded-lg overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-[#0a192f] text-highlight hover:bg-highlight hover:text-[#0a192f] 
                         w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
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
            <div className="p-6">
              <img
                src={selectedCert.img}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <h3 className="text-headers font-Poppins text-xl md:text-2xl font-semibold text-center mt-4">
                {selectedCert.title}
              </h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
