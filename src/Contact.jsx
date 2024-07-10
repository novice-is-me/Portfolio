import React from 'react'

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
            <p className='text-headers font-Inter text-center'>Inbox Me!</p>
            <form action="" className='flex flex-col'>
                <div className='flex justify-between mx-40 gap-4'>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="" className='font-Poppins text-text text-xl'>First Name</label>
                        <input type="text" name='firstName'/>
                    </div>
                    <div className='flex flex-col w-full'>
                        <label htmlFor="" className='font-Poppins text-text text-xl'>Last Name</label>
                        <input type="text" name='lastName'/>
                    </div>
                </div>
                <div>
                    <label htmlFor=""></label>
                    <textarea name="" id=""></textarea>
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
