import React from 'react'
import image14 from '../Assets/text.png';
import image15 from '../Assets/face.png';
import imageicon from '../Assets/t pic.png';
import imageicon2 from '../Assets/imgicon.png';

const About = () => 
  {
   const aboutitems = [
      { text: "Text generation", image: imageicon},
      { text: "Text generation", image: imageicon2},
      { text: "Text generation", image: imageicon },
      { text: "Text generation", image: imageicon },
      { text: "Text generation", image: imageicon2 },
      { text: "Text generation", image: imageicon2 },
      { text: "Text generation", image: imageicon2 },
      { text: "Text generation", image: imageicon2 },
      { text: "Text generation", image: imageicon2 },
      { text: "Text generation", image: imageicon2 },
      { text: "Text generation", image: imageicon2 },
    ];
    
  return (
    <div>

<div className=' bg-black h-[500px] space-x-10 '>
<button className='bg-gradient-to-b from-neutral-700  to-black w-32 h-10 mt-96 ml-[620px] rounded-[300px] text-white text-[13px] font-bold'>What is ?</button>
<button className='rounded-2xl h-8 w-32 bg-white text-black text-[13px] font-bold'>How it works</button>
</div>

<div className='bg-black'>
    <img src={image14} className=' ml-[60vh] h-28 -mt-9'/>
</div>

<div className='bg-black'>
    <img src={image15} className='h-[100vh] ml-10'></img>
</div>



<div className='bg-black h-[90vh]'>
  <div className='text-white -mt-[78vh] ml-[100vh] text-[25px]'>
    UNLOCK THE POWER OF AI WITH MAESTROUNLOCK <br/>
    THE POWER OF AI WITH MAESTRO UNLOCK THE POWER<br/>
    OF AI
  </div>

  <div className='text-gray-400 ml-[100vh] text-[18px] mt-6'>
  The term "AI" stands for "Artificial Intelligence," which refers to the simulation<br/>
  of human intelligence in machines <br/>
  designed to think and learn like humans. AI can perform tasks such as<br/> 
  problem-solving, understanding natural language,
  </div>

  <div className="ml-[740px] font-[Rajdhani] grid gap-4 mt-10">
  <div className="grid grid-cols-2  w-[69vh] gap-7 ">
    {aboutitems.slice(0, 2).map((item, index) => 
    (
      <div 
        key={index} 
        className="text-white text-[20px] cursor-pointer flex items-center bg-neutral-700 h-[6vh] w-[26vh] rounded-[50px] hover:bg-neutral-900 transition">
        <img src={item.image} className="w-14 h-14 " />
        {item.text}
      </div>
    ))}
  </div>
  
  <div className="grid grid-cols-3">
    {aboutitems.slice(2, 5).map((item, index) => (
      <div 
        key={index} 
        className="text-white text-[20px] cursor-pointer flex items-center bg-neutral-700 h-[6vh] w-[26vh] rounded-[50px] hover:bg-neutral-900 transition">
        <img src={item.image} className="w-14 h-14" />
        {item.text}
      </div>
    ))}
  </div>
  
  <div className="grid grid-cols-3 ">
    {aboutitems.slice(2, 5).map((item, index) => (
      <div 
        key={index} 
        className="text-white text-[20px] cursor-pointer flex items-center bg-neutral-700 h-[6vh] w-[26vh] rounded-[50px] hover:bg-neutral-900 transition">
        <img src={item.image} className="w-14 h-14" />
        {item.text}
      </div>
    ))}
  </div>
  
  <div className="grid grid-cols-1">
    {aboutitems.slice(9, 10).map((item, index) => (
      <div 
        key={index} 
        className="text-white text-[20px] cursor-pointer flex items-center bg-neutral-700 h-[6vh] w-[26vh] rounded-[50px] hover:bg-neutral-900 transition">
        <img src={item.image} className="w-14 h-14" />
        {item.text}
      </div>
    ))}
  </div>
</div>



{/* <img src={image18} className='ml-[100vh] h-[230px] mt-6'/> */}
</div>























    </div>
  )
}

export default About