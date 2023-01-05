import React from 'react'
import slides from '../json/slides.json'

const Slides = () => {
  
  return  slides.map((x) => (
    <div>
              <div>
                <img className='rounded-full mx-auto h-[150px] hover:scale-110 duration-500' src={x.img} alt='slide-img' />
              </div>

            <div>
                <div className='flex py-3 '>

                      <p className='text-2xl font-bold'>{x.name}</p>
                    <div className="flex my-auto mx-auto">
                      <p className='ml-5 px-2 text-sm text-[#e80606ce] font-semibold'>{x.price_portion}</p>
                    </div>
                </div>

                <hr className='border-[#00000042]'/>
                <p className='py-2 flex font-medium'>{x.description}</p>
            </div>
   
    </div>
  )
  )
}

export default Slides