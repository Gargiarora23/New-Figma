import React from 'react'
import image3 from '../Assets/Vector (1).png';
import image4 from '../Assets/AI Maestro 2.png';
import image5 from '../Assets/AI Maestro 1.png';
import image6 from '../Assets/Group 1066 (1).png';
import image7 from '../Assets/Group 1065.png';
import image8 from '../Assets/Group 1064.png';
import image9 from '../Assets/Group 1057.png';
import image10 from '../Assets/Group 1069.png';
import image11 from '../Assets/Group 1068.png';
import image12 from '../Assets/Group 1067 (1).png';
import image13 from '../Assets/Group 1087.png';


const Header = () => {
  return (
    <div>
        <button className="bg-gradient-to-b from-neutral-800 to-black w-44 h-11 mt-20 ml-[640px] rounded-[300px]">
  <img src={image3} alt="Beta Release Icon" className="ml-[26px] h-7 -mt-2" />
  <div className="text-white ml-[27px] -mt-6 text-[16px]">Beta Release</div>
</button>

<div className='ml-[440px] mt-7'>
  <img src={image4} className=''/>
  <img src={image5} className='-mt-[10px] ml-1 '/>
</div>

<pre className='text-neutral-400 mt-6 flex justify-center text-[16px]'>
The term "AI" stands for "Artificial Intelligence," which refers to the simulation human intelligence in machines <br/>
 designed to think and learn like humans. AI can perform tasks such as problem-solving, understanding natural<br/></pre>
<p className='flex justify-center text-neutral-400 text-[16px]'> language, and  understanding natural language, and  understanding</p>

<div className='w-80 mt-10 ml-[600px] space-x-10 '>
<button className='border-2 rounded-2xl  h-8 w-32 bg-green-500 border-white-[100px]'>Get Started</button>
<button className='text-white rounded-2xl h-8 w-32 bg-neutral-900'>Book a Demo</button>
</div>

{/****************************************************************************/}

<div className='bg-black'>
<img src={image6} className='mt-12 ml-48' alt='img not available'/>
<img src={image7} className='mt-[14px] ml-36' alt='img not available'/>
<img src={image8} className='-mt-[70px] ml-[220px]' alt='img not available'/>
</div>

<div className='flex justify-center -mt-80'>
<img src={image9} alt='img not available'/>
</div>

<div className=' flex justify-end   items-start'>
<img src={image10} className='transform translate-x-[33.5rem] translate-y-[-11.7rem]' alt='img not available'/>
<img src={image11} className='translate-x-[2.8rem] translate-y-[-4.5rem]' alt='img not available ' />
<img src={image12} className='-ml-96 translate-x-[-10.1rem] translate-y-[-3rem]' alt='img not available'/>
</div>

<div>
  <img src={image13} className='-mt-[330px] ml-[82vh]'/>
</div>
<div>
  <img src={image13} className='mt-[26px] ml-44'/>
</div>
<div>
  <img src={image13} className='rotate-[300deg] ml-96'/>
</div>
<div>
  <img src={image13} className='ml-[161vh] -mt-[250px]'/>
</div>
<div>
  <img src={image13} className='ml-[156vh] mt-[12vh]'/>
</div>
<div>
  <img src={image13} className='ml-[113vh] -mt-[12vh] '/>
</div>

    </div>
  )
}

export default Header