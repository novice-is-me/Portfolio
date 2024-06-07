import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { projectData } from '../constant';

const ProjectComponent = () => {
  return (
    <>
      {projectData.map((proj, i) =>{
        return <div className=' mt-16 flex'>
          <div className={`w-[60%] ${proj.value % 2 === 0 ? 'order-1' : ''}`}>
            <a href={proj.link} target='_blank'>
              <img src={proj.image} alt="" className=' brightness-50 hover:brightness-100'/> 
            </a>
          </div>
          <div className={`w-[40%] flex flex-col gap-6 ${proj.value % 2 === 0 ? 'mr-4' : 'ml-4'}`}>
            <div className={`${proj.value % 2 === 0 ? 'text-left' : 'text-end'}`}>
              <p className=' font-mono text-highlight text-[1.2rem]'>Featured Project</p>
              <p className=' text-headers font-Poppins text-[2rem] font-semibold'>
                {proj.title}</p>
            </div>
            <div className={`bg-[#112240] p-8 ${proj.value % 2 === 0 ? 'text-left' : 'text-end'}`}>
              <p className='text-text font-Poppins'>{proj.description}</p>
            </div>
            <div>
              <p className={`text-text font-mono ${proj.value % 2 === 0 ? 'text-left' : 'text-end'}`}>
                {proj.tech}</p>
            </div>
            <div className={`flex gap-4 ${proj.value % 2 === 0 ? ' justify-start' : 'justify-end'}`}>
              <a href="https://github.com/novice-is-me" target='_blank'>
                <GitHubIcon style={{color:'#8892b0'}}/>
              </a>
              <a href={proj.link} target='_blank'>
                <ExitToAppIcon style={{color:'#8892b0'}}/>
              </a>
            </div>
          </div>
        </div>
      })}
    </>
  )
}

export default ProjectComponent
