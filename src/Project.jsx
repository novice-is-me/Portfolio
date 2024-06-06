import React from 'react'
import ProjectComponent from './components/ProjectComponent'

const Project = () => {
  return (
    <div className='font-Poppins my-[10rem] mx-10'>
      <div className=' flex items-center'>
        <h1 className='font-Poppins font-semibold text-headers text-4xl whitespace-pre-wrap'>
          <span className='font-mono text-highlight'>03.</span>
          Some Things I've built
        </h1>
        <div className='ml-4 border border-[#233554] w-[30%] h-0 '></div>
      </div>
      <div>
        <ProjectComponent/>
      </div>
    </div>
  )
}

export default Project
