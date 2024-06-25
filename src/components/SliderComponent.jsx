import React, { useState } from 'react'
import { certData } from '../constant';

const SliderComponent = ({cards}) => {
    const [currentIndex, setCurrentIndex] = useState(3);

    const prevSlide = () =>{
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex -1));
    }

    const nextSlide = () =>{
        setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
    }

  return (
    <div>
        <button className='p-5 bg-blue-400' onClick={prevSlide}>Previous</button>
        {cards.map((cert, i) =>{
            return <div key={i} > 
                <img src={cert.img} alt="" />
                <p>{cert.title}</p>
            </div>
        })}
        <button className='p-5 bg-blue-400' onClick={nextSlide}>Previous</button>
    </div>
  ) 
}

export default SliderComponent
