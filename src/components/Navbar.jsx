import React from 'react'
import { logo } from '../assets/image'
import { headerData } from '../constant'
import Button from './Button'

const Navbar = () => {
  return (
    <header className='flex h-[100px] padding-l justify-between'>
      <div>
        <img src={logo} alt="" className=' h-full hover:cursor-pointer'/>
      </div>
      <div className='flex gap-10 mr-4 items-center'>
        {headerData.map((header, i) =>{
            return <ul className='flex gap-2 font-mono text-headers' key={i}>
                <p className='text-highlight'>{header.id}. </p>
                <a href={header.loc} className='hover:text-highlight'>{header.name}</a>
            </ul>
        })}
        <Button text={"Resume"}/>
      </div>
    </header>
  )
}

export default Navbar
