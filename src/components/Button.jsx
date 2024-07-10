import React from 'react'

const Button = ({text, onClick}) => {
  return (
    <div className='bg-transparent border border-highlight hover:button-hover 
     px-5 py-3 text-center rounded-[5px]' onClick={onClick}>
      <p className=' text-highlight font-mono '>{text}</p>
    </div>
  )
}

export default Button
