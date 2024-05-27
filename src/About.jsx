import React from 'react'
import { FaHtml5, FaCss3, FaBootstrap, FaWordpress, FaReact} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { me } from './assets/image';

const About = () => {
  return (
    <section className='my-[10rem] mx-10' id='about'>
       <div className='flex items-center'>
        <p className='text-highlight font-mono text-4xl'>01.</p>
        <p className='font-Poppins font-semibold text-headers text-4xl whitespace-pre-wrap'> About Me</p>
        <div className='ml-4 border border-[#233554] w-[30%] h-0 '></div>
       </div>
       <div className='flex gap-8 mt-10'>
        <div className=' flex flex-col gap-8'>
          <div className=' font-Poppins text-text text-[16px]'>
            <p>Hello! My name is Regina Jalandoni a Computer Engineering student at 
               Batangas State University. I enjoy coding specially developing website's layout
               and interface. I have a strong foundation in web development technologies, 
               including HTML, CSS, JavaScript, and modern frameworks like React.
               <br />
               <br />
               I already have some experienced in creating real world projects that I gained
               during my part time job at <a href="" className=' text-highlight'>Yaramay</a> and during my internship at
               <a href="" className='text-highlight'> 8box</a>.
               <br />
               <br />
              I am passionate about creating visually appealing and user-friendly web applications that prioritize user experience and performance.
            </p>
            <br />
            <p>Here are the following technologies I used in creating appealing websites:</p>
          </div>
          <div className='flex flex-wrap gap-x-20 gap-y-8 justify-center'>
           <FaHtml5 className='h-[3rem] w-[2rem] text-highlight'/>
           <FaCss3 className='h-[3rem] w-[2rem] text-highlight'/> 
           <IoLogoJavascript className='h-[3rem] w-[2rem] text-highlight'/>
           <FaBootstrap className='h-[3rem] w-[2rem] text-highlight'/>
           <SiTailwindcss className='h-[3rem] w-[2rem] text-highlight'/>
           <FaWordpress className='h-[3rem] w-[2rem] text-highlight'/>
           <FaReact className='h-[3rem] w-[2rem] text-highlight'/>
          </div>
        </div>
        <div className='flex justify-center'>
          <img src={me} alt="" className=' h-[60%] image-hover brightness-50 hover:brightness-100' />
        </div>
       </div>
    </section>
  )
}

export default About
