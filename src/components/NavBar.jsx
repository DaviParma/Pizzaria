import React, {useState} from 'react'
import { Link, animateScroll as scroll,} from 'react-scroll'
import { MenuIcon, XIcon} from '@heroicons/react/outline';

const NavBar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)
  const handleClose = () => setNav(!nav)
 
  

  return ( 
    <nav name='Home' className='absolute w-full mx-auto text-white'>
        <div className='container mx-auto flex justify-between py-4 backdrop-brightness-90 '>
           
                <h2 className='text-4xl font-semibold hover:scale-125 duration-500 cursor-pointer hover:text-[#FFDF3E] max-md:mx-auto'>Pizzaria</h2>
                
                <ul className='flex font-medium text-2xl justify-center items-center underline underline-offset-4 max-md:hidden'>
                    <li className='px-4 cursor-pointer hover:decoration-[#FFDF3E] hover:scale-110 duration-500 '><Link to="About" smooth={true}  duration={1000}>About</Link></li>
                    <li className='px-4 cursor-pointer hover:decoration-[#FFDF3E] hover:scale-110 duration-500 '><Link to="Menu" smooth={true}  duration={1000}>Menu</Link></li>
                    <li className='px-4 cursor-pointer hover:decoration-[#FFDF3E] hover:scale-110 duration-500 '><Link to="Contact" smooth={true}  duration={1000}>Contact</Link></li>
                </ul>

                <div className='md:hidden mr-4 text-white' onClick={handleClick}>
                  {!nav ? <MenuIcon className='w-10' /> :  <XIcon className='w-10' /> }   
                </div>

               
                   </div>   

                  <div className='md:hidden'>
                      <div className={!nav ? 'hidden' : 'mx-auto   w-full px-8 pb-1 text-center'}>
                          <ul className='mb-5 font-semibold font-sans   text-2xl'>
                            <li className='cursor-pointer hover:decoration-[#FFDF3E] hover:scale-110 duration-500 border-b border-t py-2'><Link onClick={handleClose} to="About" smooth={true}  duration={1000}>About</Link></li>
                            <li className='cursor-pointer hover:decoration-[#FFDF3E] hover:scale-110 duration-500 border-b py-2'><Link onClick={handleClose} to="Menu" smooth={true}  duration={1000}>Menu</Link></li>
                            <li className='cursor-pointer hover:decoration-[#FFDF3E] hover:scale-110 duration-500 border-b py-2'><Link onClick={handleClose} to="Contact" smooth={true}  duration={1000}>Contact</Link></li>
                          </ul>
                       
                  </div>  
        </div>
    </nav>
  )
}

export default NavBar