import React, {useState} from 'react'
import { Fade} from "react-awesome-reveal";
import Pizzas from './Pizzas';
import Drinks from  './Drinks';
import Slides from './Slides';



const Menu = () => {

  const [toggleState, setToggleState] = useState(1);

  const toggleButton = (index) => {
    setToggleState(index);
  }
  


  return (
    <div name='Menu' className='container mx-auto'>
        <h1 className='text-center py-12 font-bold text-6xl'>Menu</h1>
        <p className='text-[#E80606] text-center text-2xl max-md:mx-auto max-sm:text-lg'>Do you already know what you are going to eat today?</p>
      
       <Fade triggerOnce={true} delay={200}>
        <div className=' flex  justify-center items-center text-center py-10 max-sm:grid max-sm:grid-cols-1 max-sm:mx-auto'>


            <div className='text-xl mx-4 font-medium underline underline-offset-4 hover:decoration-[#FFDF3E] hover:scale-110 duration-500 max-sm:grid max-sm:grid-cols-1 max-sm:mx-auto max-sm:py-2'>
              <button onClick={() => toggleButton(1)} className={toggleState === 1 ? ' mx-2 px-4 py-1 text-center text-2xl font-bold rounded-full border-2 border-black bg-[#FFDF3E] hover:scale-110 duration-1000 hover:bg-[#FFDF3E]' : 'block'}>Pizzas</button>
            </div>


            <div className='text-xl mx-4 font-medium underline underline-offset-4 hover:decoration-[#FFDF3E] hover:scale-110 duration-500 max-sm:grid max-sm:grid-cols-1 max-sm:mx-auto max-sm:py-2'>
              <button onClick={() => toggleButton(2)} className={toggleState === 2 ? ' mx-2 px-4 py-1 text-center text-2xl font-bold rounded-full border-2 border-black bg-[#FFDF3E] hover:scale-110 duration-1000 hover:bg-[#FFDF3E]' : 'block'}>Slides</button>
            </div>

            <div className='text-xl mx-4 font-medium decoration-solid underline underline-offset-4 hover:decoration-[#FFDF3E] hover:scale-110 duration-500 max-sm:grid max-sm:grid-cols-1 max-sm:mx-auto max-sm:py-2'>
              <button onClick={() => toggleButton(3)} className={toggleState === 3 ? ' mx-2 px-4 py-1 text-center text-2xl font-bold rounded-full border-2 border-black bg-[#FFDF3E] hover:scale-110 duration-1000 hover:bg-[#FFDF3E]' : 'block'}>Drinks</button>
            </div>


        </div>

        <div className=''>
          
            
          <div className={toggleState === 1 ? "grid grid-cols-2 grid-rows-2  gap-20 items-center mx-auto pb-32 max-md:mx-auto max-md:grid-cols-1 max-md:w-[22em] max-sm:grid max-sm:grid-cols-1 max-sm:mx-auto max-msm:w-[10em] max-msm:mx-auto" : "hidden"}>
          
          <Pizzas/>
    
          </div>
         

          <div className={toggleState === 2 ? "grid grid-cols-2 grid-rows-2  gap-20 items-center mx-auto pb-32 max-md:mx-auto max-md:grid-cols-1 max-md:w-[13em] max-sm:grid max-sm:grid-cols-1 max-sm:mx-auto" : "hidden"}>
          
          <Slides/>

          </div>
         

          <div className={toggleState === 3 ? "grid grid-cols-2 grid-rows-2  gap-20 items-center mx-auto pb-32  max-md:mx-auto max-md:grid-cols-1 max-md:w-[13em] max-sm:grid max-sm:grid-cols-1 max-sm:mx-auto" : "hidden"}>

          <Drinks/>

          </div>
        
          

        </div>
        </Fade>

    </div>
  )
}

export default Menu