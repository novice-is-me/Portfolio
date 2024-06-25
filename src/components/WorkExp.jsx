import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const WorkExp = ({props}) => {
  return (
    <div className=' text-[16px] w-[80%]'>
      <div className=' font-Poppins '>
        <div className='flex gap-4'>
          <h3 className='text-xl text-headers'>{props.title}</h3>
          <p className=' text-highlight'>@{props.name}</p>
        </div> 
        <p className=' text-text mt-2'>{props.date}</p>
      </div>
      <div className='text-text font-Poppins mt-4 flex flex-col gap-4'>
        {props.role.map((item, i) =>{
          return <ul key={i}> 
            <li className=' flex items-center'>
              <ArrowRightIcon fontSize='large' style={{color: '#64ffda'}}/>
              {item}</li>
          </ul>
        })}
      </div>
    </div>
  )
}

export default WorkExp
