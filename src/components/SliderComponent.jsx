import React, { useState } from 'react'
import Button from './Button';

const SliderComponent = ({cards}) => {
    const [currentIndex, setCurrentIndex] = useState(3);

    const prevSlide = () =>{
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex -1));
        console.log("previous");
    }

    const nextSlide = () =>{
        setCurrentIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
        console.log("next");
    }

    const visibleCard = cards.slice(currentIndex, currentIndex + 1)

    if(visibleCard.length < 1){
        visibleCard.push(...cards.slice(0, 1 - visibleCard.length)); 
    }

  return (
    // Include transition effect
    <div className='flex items-center'> 
        <Button className='' 
            onClick={prevSlide} 
            text={"Previous"}/>
        {visibleCard.map((cert, i) =>{
            return <div key={i} className='h-full mx-8'> 
                <img src={cert.img} alt="" className='h-full object-cover' />
                <p>{cert.title}</p>
            </div>
        })}
        <Button className='4' 
            onClick={nextSlide} 
            text={"Next"}/>
    </div>
  ) 
}

export default SliderComponent
