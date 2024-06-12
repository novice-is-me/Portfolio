import React from 'react'
import Slider from 'react-slick'
import { certData } from './constant'

const Certificates = () => {
  const settings ={
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  }
  return (
    <section className='my-[10rem] mx-10'>
        <div className='flex items-center gap-3'>
          <p className='text-highlight font-mono text-4xl'>3.1</p>
          <p className='font-Poppins font-semibold text-headers text-4xl whitespace-pre-wrap'>
            Certificates</p>  
          <div className='ml-4 border border-[#233554] w-[30%] h-0 '></div>
        </div>
        <div className='slider-container w-[300px] flex'>
          <Slider {...settings}>
              {certData.map((data, i) =>{
                return <div>
                  <img src={data.img} alt="" className=''/>
                  <p>{data.title}</p> 
                </div>
              })}
          </Slider>
        </div>
    </section>
  )
}

export default Certificates
