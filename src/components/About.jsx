import React from 'react'
import { Fade} from "react-awesome-reveal";
import about from "../json/about.json"


const About = () => {

  return about.map((x) => (
    
    <div name='About' className=''>
          <h1 className='text-center py-12 font-bold text-5xl'>About Us</h1>
        <Fade triggerOnce={true} delay={550}>
        <div className='max-md:hidden container mx-auto w-[50em]  grid grid-rows-2 grid-flow-col gap-4 items-center h-[51em]'>

              <div className='row-span-2 text-start font-medium text-xl'>
                <p>
                  {x.text1}
                  <br/>
                  <br/>
                  {x.text2}
                </p>
                  <h3 className='py-3 font-bold'>OUR MISSION</h3>
                <p>
                  {x.text3}
                  <br/>
                  <br/>
                  {x.text4}
                </p>
              </div>

            <div className='row-span-2 col-span-2 '>
                <img className='rounded-[80px] w-[25em] h-[33em] hover:scale-105 duration-500  ' src={x.img} alt='Pizza-About' />
            </div>
           
        </div>
        </Fade>

        <Fade triggerOnce={true} delay={550}>
        <div className='md:hidden text-center'>
            <div className='font-medium text-lg w-[20em] mx-auto max-sm:w-[19em] max-msm:w-[10em]'>
                <p>
                  {x.text1}
                  <br/>
                  <br/>
                  {x.text2}
                </p>
                  <h3 className='py-3 font-bold'>OUR MISSION</h3>
                <p>
                  {x.text3}
                  <br/>
                  <br/>
                  {x.text4}
                </p>
            </div>
            <div className='py-10'>
                <img className='max-sm:w-[16em] rounded-[80px] w-[25em] h-[33em] hover:scale-105 duration-500  max-md:mx-auto max-md:w-auto max-md:h-[25em] ' src={x.img} alt='Pizza-About' />
            </div>
           
        </div>
        </Fade>


    </div>
  )
  )
}

export default About