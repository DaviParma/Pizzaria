import React from 'react'
import { Link, animateScroll as scroll} from 'react-scroll'

const Footer = () => {
  return (
    <footer className='mx-auto h-[100px] py-10 bg-slate-100'>

        <div className='flex text-center text-2xl items-center justify-center font-bold underline underline-offset-4 '>
          <button className='max-msm:px-2  px-5 hover:scale-110 duration-500 hover:decoration-[#FFDF3E]'><Link to="Home" smooth={true} offset={0} duration={1000}>Home</Link></button>
          <button className='max-msm:px-2  px-5 hover:scale-110 duration-500 hover:decoration-[#FFDF3E]'><Link to="About" smooth={true} offset={50} duration={1000}>About</Link></button>
          <button className='max-msm:px-2  px-5 hover:scale-110 duration-500 hover:decoration-[#FFDF3E]'><Link to="Menu" smooth={true} offset={50} duration={1000}>Menu</Link></button>
        </div>
        
        <div className='text-center text-[#5C6574] py-6 bg-slate-100 font-semibold '>
          <p>©{(new Date().getFullYear())} Pizzaria All rights reserved</p>
        </div>

    </footer>
  )
}

export default Footer