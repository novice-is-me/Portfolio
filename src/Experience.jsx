import React, { useEffect, useState } from 'react'
import { workExp } from './constant'
import WorkExp from './components/WorkExp'

const Experience = () => {

  const [active, setActive] = useState('default')

  const handleClick = (props) =>{
    setActive(props === 'default' ? 'default' : '8box')
  }

  useEffect(() =>{
    console.log(active)
  }, [active])

  return (
    <section className='my-[10rem] mx-10' id='experience'>
      <div className='flex items-center'>
        <p className='text-highlight font-mono text-4xl'>02.</p>
        <p className='font-Poppins font-semibold text-headers text-4xl whitespace-pre-wrap'>
           Work Experienced</p>
        <div className='ml-4 border border-[#233554] w-[30%] h-0 '></div>
      </div>
      <div className='mt-16 flex gap-14'>
        <div className=''>
          {workExp.map((work, i) => { 
            return <div className='flex text-center w-[300px]'>
              <p className={`text-text text-xl font-Poppins p-4 hover:text-highlight hover:cursor-pointer
               ${active === work.value ? 'border-l border-highlight' : ''}`}
               onClick={() => handleClick(work.value)}>
                {work.name}</p>
            </div>
          })}
        </div>
        <div>
          {active === 'default' && <WorkExp props={workExp[0]}/>}
          {active === '8box' && <WorkExp props={workExp[1]}/>}
        </div>
      </div>
    </section>
  )
}

export default Experience
