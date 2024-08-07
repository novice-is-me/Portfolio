import About from "./About"
import Certificates from "./Certificates"
import Contact from "./Contact"
import Experience from "./Experience"
import Hero from "./Hero"
import Project from "./Project"
import LeftComp from "./components/LeftComp"
import Navbar from "./components/Navbar"
import RightComp from "./components/RightComp"

function App() {
  return (
    <main className=" bg-[#0a192f] h-full">
      <Navbar/>
      <div className="flex justify-between padding-l">
        <div className="fixed bottom-0">
          <LeftComp/>
        </div>
          <div className="mx-[8rem] mt-[5rem]">
            <Hero/>
            <About/>
            <Experience/>
            <Project/>
            <Certificates/>
            <Contact/>
          </div> 
        <div className=" fixed bottom-0 right-0 ">
          <RightComp/> 
        </div>
      </div>
    </main>
  ) 
}

export default App
