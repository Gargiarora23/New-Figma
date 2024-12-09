import React from 'react'

import image1 from '../Assets/new1.png';
import image2 from '../Assets/new1.png';

const Navbar = () => 
  {
  let navbarItems=["Products","Pricing","Resources","Patners","Why Maestro"];

// ------------------------Use some icons-------------------------

let icon=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

let icon1=<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>

    return (
<div>
<div className='bg-black'>
<img src={image1} className="h-[800px] w-[1000px] rotate-[148deg] ml-[950px] -mt-[450px] opacity-80 "  alt="not found"/>
<img src={image2} className='h-[587.06px] -mt-48 -ml-[410px] rotate-[-90deg] ' alt="not found"/>
</div> 

{/* -----------------------Creating Navbar-----------------*/}

<div className='bg-[rgba(0, 0, 0, 1)]w-[184px] h-[39px] -mt-[740px] ml-7 left-[59px]'>
<div className='text-white text-[40px] mt-14 '>AL MAESTRO</div>

{/* //------------------------Using Map function---------------------// */}

<div className='flex space-x-12 ml-[400px] text-[10px] -mt-24 font-[Rajdhani] justify-center'>
{navbarItems.map((item,index) =>(
<div key={index} className='text-white text-[20px] cursor-pointer hover:underline'>
     {item}
</div>
))}
</div>

{/* -------------------------Buttons----------------------- */}
  <div className="font-[Rajdhani] flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center space-x-12 mt-6 ml-[1000px] opacity-95">
    <button className="text-white w-[150px] h-[39.71px] rounded-[39px] sm:w-[150px] bg-neutral-900 py-2">Contact Us</button>
    <button className="text-white bg-[rgba(0,250,145,1)] w-[190px] rounded-[39px] sm:w-[190px] py-2">Sign Up For Free</button>
  </div>
  </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
  );
};

export default Navbar