import React from 'react'
import image3 from '../Assets/Vector (1).png';
import frame from '../Assets/Frame.png';
import frame1 from '../Assets/frame1.png';

const Potential = () => {
  return (
    <>
      
  <div className='bg-black h-[120vh]'>
  <button className="bg-gradient-to-b from-neutral-800 to-black w-44 h-11 mt-20 ml-[660px] rounded-[300px]">
  <img src={image3} alt="Beta Release Icon" className="ml-[26px] h-7 -mt-2" />
  <div className="text-white ml-[29px] -mt-6 text-[16px]">AI Potential</div>
</button>

<span className='text-white text-[50px] flex justify-center mt-6'>
<pre className='font-[Rajdhani]'>             Unleash Your<br/>
AI Application’s Full Potential</pre>
</span>

<div className='flex gap-20 ml-12 mt-16'>
  <img src={frame}/>
  <img src={frame1}/>
</div>

<div className='text-white -mt-[50vh] ml-20 text-[18px]'>
UNLOCK THE POWER OF AI WITH MAESTROUNLOCK THE POWER OF AI <br/>
WITH MAESTRO
</div>

<p className='text-white ml-20 mt-6'>
The term "AI" stands for "Artificial Intelligence," which refers to the simulation of <br/>
human intelligence in machines 
</p>

<div className='text-white ml-[130vh] mt-16 text-[18px]'>
  UNLOCK THE POWER OF AI WITH MAESTROUNLOCK THE <br/>
  POWER OF AI WITH MAESTRO
</div>

<p className='text-white ml-[130vh] mt-6'>
The term "AI" stands for "Artificial Intelligence," which<br/>
refers to the simulation of human intelligence in<br/>
machines 
</p>





</div>
  </>   
  
  )
}

export default Potential