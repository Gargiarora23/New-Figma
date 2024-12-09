import React from 'react'
// import image24  from '../Assets/global button.png';
// import image25  from '../Assets/A.png';
// import image26  from '../Assets/parag .png';
import global from '../Assets/globalsymbol.png';
import image27  from '../Assets/earth.png';


const Globalpotential = () => {
  return (
    <>
    {/* <div className='bg-black h-[230vh]'>
        <img src={image24} className='ml-[80vh]'/>
        <img src={image25} className='ml-[50vh] mt-9'/>
        <img src={image26} className='ml-[40vh] mt-10'/>
        <img src={image27} className='h-[170vh] ml-16'/> */}
  <div className='bg-black h-[230vh]'>
  <button className="bg-gradient-to-b from-neutral-800 to-black w-44 h-11 mt-20 ml-[670px] rounded-[300px]">
  <img src={global} alt="Beta Release Icon" className="ml-[17px] h-7 -mt-2" />
  <div className="text-white ml-[30px] -mt-6 text-[15px]">Global Network</div>
</button>

<span className='text-white text-[50px] flex justify-center mt-6'>
<pre className='font-serif'>        A Truly Global Network    <br/>
For Lightning - Fast Interference</pre>
</span>
<span className='text-gray-400'>
  <pre className='font-[Rajdhani] mt-6 ml-[40vh] text-[18px]'>                     The term "AI" stands for "Artificial Intelligence," which refers to the simulation of human intelligence in machines <br/>  designed to think and learn like humans. AI can perform tasks such as problem-solving, understanding natural language, and  understanding<br/>                                                                                         natural language, and  understanding
</pre>
</span>

<div>
<img src={image27} className='h-[170vh] ml-24'/>
</div>


    </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    </>
  )
}

export default Globalpotential