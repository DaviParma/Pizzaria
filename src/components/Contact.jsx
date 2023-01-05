import React from 'react'
import { Fade, Slide } from "react-awesome-reveal";
import {BsTelephoneFill, BsFillClockFill, BsFillGeoAltFill } from 'react-icons/bs'
import contact from "../json/contact.json"


const Contact = () => {


  return contact.map((x) => (

    <div name='Contact' className='container mx-auto'>
        <h1 className='text-center py-16 font-bold text-5xl'>Contact</h1>
        
          <div className='grid grid-rows-2 grid-flow-col gap-20 items-center h-[45.625em] max-lg:hidden'>
            
              <div className='row-span-2 col-span-2'>
                <Slide triggerOnce={true} delay={100} direction='left'>
                  <iframe className='w-[37.5em] h-[28.125em] rounded-2xl border  hover:scale-105 duration-500 hover:border-black max-lg:mx-auto' src={x.img} />
                </Slide>
              </div>
        
                <div className='row-span-2 text-start font-medium text-2xl '>
                  <Slide triggerOnce={true} delay={100} direction='right'>
                    <p className='flex py-1'><span className='px-2 hover:scale-125 duration-500'><BsFillGeoAltFill size={33}/></span>{x.location}</p>
                    <p className='flex py-3'><span className='px-2 hover:scale-125 duration-500'><BsFillClockFill size={33} /></span>{x.clock}</p>
                    <p className='flex py-3'><span className='px-2 hover:scale-125 duration-500'><BsTelephoneFill size={33} /></span>{x.phone}</p>
                  </Slide>
                </div>
      
          </div>


            <div className='lg:hidden'>

                <div className=''>
                  <Slide triggerOnce={true} delay={100} direction='left'>
                    <iframe className='max-msm:w-[16.5em] max-sm:w-[20em] max-sm:h-[20em] max-md:w-[30em] max-md:h-[25em]  mx-auto w-[37.5em] h-[28.125em] rounded-2xl border  hover:scale-105 duration-500 hover:border-black max-lg:mx-auto' src={x.img} />
                  </Slide>
                </div>
        
                <div className=' font-medium text-2xl '>
                  <Slide triggerOnce={true} delay={100} direction='right'>
                    <p className='flex py-3 pt-12'><span className='px-2 hover:scale-125 duration-500'><BsFillGeoAltFill size={33}/></span>{x.location}</p>
                    <p className='flex py-3'><span className='px-2 hover:scale-125 duration-500'><BsFillClockFill size={33} /></span>{x.clock}</p>
                    <p className='flex py-3 pb-12'><span className='px-2 hover:scale-125 duration-500'><BsTelephoneFill size={33} /></span>{x.phone}</p>
                  </Slide>
                </div>
      
            </div>







    </div>
  )
  )
}

export default Contact