import About from "./About";
import Certificates from "./Certificates";
import Contact from "./Contact";
import Experience from "./Experience";
import Hero from "./Hero";
import Project from "./Project";
import LeftComp from "./components/LeftComp";
import Navbar from "./components/Navbar";
import RightComp from "./components/RightComp";
import { useState, useEffect } from "react";

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main className="bg-[#0a192f] min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative min-h-screen">
        <div className="relative z-40">
          <Navbar />
        </div>

        <div
          className="hidden lg:block fixed bottom-0 z-30"
          style={{ left: "max(1rem, calc(50vw - 640px))" }}
        >
          <LeftComp />
        </div>

        <div
          className="hidden lg:block fixed bottom-0 z-30"
          style={{ right: "max(1rem, calc(50vw - 640px))" }}
        >
          <RightComp />
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-4xl pt-8 md:pt-12">
            <Hero />
            <About />
            <Experience />
            <Project />
            <Certificates />
            <Contact />
            <div className="lg:hidden flex justify-center mt-12 mb-8">
              <LeftComp />
            </div>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className={`fixed bottom-8 right-8 z-50 bg-[#112240] border-2 border-highlight text-highlight 
                     hover:bg-highlight hover:text-[#0a192f] p-3 rounded-full shadow-lg 
                     transition-all duration-300 transform hover:scale-110 
                     ${
                       showScrollTop
                         ? "translate-y-0 opacity-100"
                         : "translate-y-16 opacity-0"
                     }`}
          style={{ right: "max(2rem, calc(50vw - 620px))" }}
          aria-label="Scroll to top"
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
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    </main>
  );
}

export default App;
