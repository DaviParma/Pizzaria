import React, {useState} from 'react'
import { Fade, Slide } from "react-awesome-reveal";
import review from '../json/review.json'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'


const image = "pizza-testimonials.jpg"

const Testimonials = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? review.length - 1 : currentIndex -1;
    setCurrentIndex(newIndex);
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === review.length - 1;
    const newIndex = isLastSlide? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }


  return (
    <Slide triggerOnce={true} delay={200}>
    <div style={{backgroundImage: `url(${image})`}}  className='relative bg-cover bg-center bg-no-repeat w-[screen] h-[31.25em] py-12 max-nsm:h-[45em] '>

        <h2 className='absolute text-center w-full font-bold text-5xl text-white max-sm:text-3xl  max-msm:pb-0'>What our customers are saying</h2>
      
        <div className=' flex h-[31.25em] justify-center items-center text-center max-nsm:h-[46em] '>
      
      
            <div className='backdrop-brightness-[.5]  rounded-[50px] px-2 hover:scale-105 transition   duration-700  '>
              <h1 className='text-white text-center font-medium text-2xl py-6 drop-shadow-2xl w-[30em] max-lm:w-[20em]  max-sm:w-[12em] max-nsm:w-[8em] '>{review[currentIndex].text}</h1>
              <p className=' text-center text-2xl font-semibold text-[#FFDF3E] py-2'>{review[currentIndex].person}</p>
            </div>


            <div className='max-msm:left-0 max-msm:p-0 max-sm:p-1.5 absolute top-[60%] -translate-x-0 translate-y-[-50%] left-5 text-5xl  rounded-full p-2.5 backdrop-brightness-[.1] text-white cursor-pointer hover:scale-125 transition duration-700'>
              <BsChevronCompactLeft onClick={prevSlide} size={30}/>
            </div>

            <div className='max-msm:right-0 max-msm:p-0  max-sm:p-1.5 absolute top-[60%] -translate-x-0 translate-y-[-50%] right-5 text-5xl rounded-full p-2.5  backdrop-brightness-[.1] text-white cursor-pointer hover:scale-125 transition duration-700'>
              <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>


        </div>
    </div>
    </Slide>
  )
}

export default Testimonials