import React from 'react'
import Button from './components/Button';

const Contact = () => {
  return (
    <section className='my-[10rem] mx-10'>
        <div className='flex items-center gap-3'>
          <p className='text-highlight font-mono text-4xl'>4.0</p>
          <p className='font-Poppins font-semibold text-headers text-4xl whitespace-pre-wrap'>
            Contact Me!</p>  
          <div className='ml-4 border border-[#233554] w-[30%] h-0 '></div>
        </div>
        <div className=''>
            <p className='text-headers font-Poppins text-center text-3xl my-8'>Inbox Me!</p>
            <form action="" className='flex flex-col mx-8'>
                <div className='flex justify-between mx-40 gap-8'>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="" className='font-Poppins text-text text-xl'>First Name</label>
                        <input type="text" name='firstName' 
                        className='h-[2rem] border-b border-b-[#8892b0] outline-none bg-transparent font-Poppins text-white'
                        autoComplete='off'
                        />
                    </div> 
                    <div className='flex flex-col w-full'>
                        <label htmlFor="" className='font-Poppins text-text text-xl'>Last Name</label>
                        <input type="text" name='lastName' 
                        className='h-[2rem] border-b border-b-[#8892b0] outline-none bg-transparent font-Poppins text-white'
                        autoComplete='off'
                        />
                    </div>
                </div>
                <div className='w-full flex flex-col my-8 items-center'>
                    <label htmlFor="" className=' text-text text-xl text-center mb-5'>
                      Message Me!</label>
                    <textarea name="" id="" rows={5} className=' w-[50%] p-3'></textarea>
                </div>
                <div className=' w-[30%]  mx-auto'>
                  <Button text={'Send'}/>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
