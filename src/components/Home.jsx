import React from 'react'
import { Link} from 'react-scroll'


const bg_image = "pizza-home.jpg"

const Home = () => {
  return (
    
    
    
    <div style={{backgroundImage: `url(${bg_image})`}}  className='bg-cover bg-center bg-no-repeat w-screen h-screen bg-fixed '>
      
        <div className='flex h-screen justify-center items-center text-center '>
          
            
            <div className='backdrop-brightness-95 w-[25em] max-sm:w-[20em]'>
              <h2 className='text-center font-bold text-3xl text-[#FFDF3E]'>Go for a pizza?</h2>
              <h1 className='text-white text-center font-semibold text-4xl py-4 drop-shadow-2xl'>Try our delicious pizzas made with fresh ingredients!</h1>
              <button className='px-4 py-2 text-center text-3xl font-semibold rounded-full border border-black bg-[#FFDF3E] hover:scale-110 duration-500'><Link to="Menu" smooth={true} offset={50} duration={1000}>I want to order</Link></button>
            </div>
           
          
     
        </div>
    </div>
    
   
  )
}

export default Home