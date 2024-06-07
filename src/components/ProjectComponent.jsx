import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { projectData } from '../constant';

const ProjectComponent = () => {
  return (
    <>
      {projectData.map((proj, i) =>{
        return <div className=' mt-16 flex'>
          <div className='w-[50%] border border-red-100'>
            <img src={proj.image} alt="" className='w-[50%]'/>
          </div>
          <div className='border'>
            <div className='border border-green-300 text-end'>
              <p className=' font-mono text-highlight text-[1.2rem]'>Featured Project</p>
              <p className=' text-headers font-Poppins text-end text-[1.7rem]'>
                {proj.title}</p>
            </div>
            <div>
              <p className='text-text font-Poppins'>{proj.description}</p>
            </div>
            <div>
              <p className='text-text font-mono text-end'>{proj.tech}</p>
            </div>
            <div className='flex justify-end gap-4'>
              <a href="">
                <GitHubIcon style={{color:'#8892b0'}}/>
              </a>
              <a href="">
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
