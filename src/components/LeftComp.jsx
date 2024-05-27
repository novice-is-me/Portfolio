import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const LeftComp = () => {
  return (
    <div className=' flex flex-col items-center align-bottom gap-4'>
        <div className='flex flex-col gap-8'>
            <a href="">
              <GitHubIcon 
                className=' text-text hover:text-highlight' 
                fontSize='medium'/></a>
            <a href="">
              <InstagramIcon 
                className=' text-text hover:text-highlight' 
                fontSize='medium'/></a>
            <a href="">
              <XIcon 
                className=' text-text hover:text-highlight' 
                fontSize='medium'/></a>
            <a href="">
              <LinkedInIcon 
                className=' text-text hover:text-highlight' 
                fontSize='medium'/></a>
        </div>
        <div className='border border-text h-[10rem]'></div>
    </div>
  )
}

export default LeftComp
