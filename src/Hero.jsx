import React from 'react'
import Button from './components/Button'

const Hero = () => {
  return (
    <div className=' flex flex-col gap-12'>
      <div className=' font-Poppins'>
        <p className='font-mono text-highlight'>Hi, my Name is</p>
        <h1 className='font-semibold text-headers text-[5rem]'>Regina Jalandoni.</h1>
        <h2 className='text-[4rem] font-semibold text-[#B6BED6]'>I am a Front-end Developer</h2>
        <p className='text-text text-lg leading-6]'>I specialize in creating beautiful and functional websites using
            modern <br /> web technologies that prioritize user experience and performance. <br />
            With a keen eye for design and a passion for coding, I strive to deliver <br />
            elegant solutions that meet the unique needs of each project. <br />
        </p>
      </div>  
      <div className='w-[30%]'>
        <Button text={"Contact Me"}/>
      </div>
    </div>
  )
}

export default Hero
