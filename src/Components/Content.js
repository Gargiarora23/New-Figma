import React from 'react';



const Content = () => {
    const items = [
        ["About us", "Careers", "Employer home", "Sitemap", "Credits", "About us", "Careers", "Employer home"],
        ["About us", "Careers", "Employer home", "Sitemap", "Credits", "About us", "Careers", "Employer home", "Sitemap", "Credits"],
        ["About us", "Careers", "Employer home", "Sitemap", "Credits", "About us", "Careers", "Employer home"],
        ["About us", "Careers", "Employer home", "Sitemap", "Sitemap", "Credits", "About us", "Careers", "Employer home", "Sitemap"],
        ["About us", "Careers", "Employer home", "Sitemap", "Credits"],
        ["About us", "Careers", "Employer home", "Sitemap", "Credits"],
    ];
    

    return (
        <div className='bg-black h-[100vh]'>
          <div className='bg-gradient-to-b from-black to-neutral-800 h-[75vh] mt-[90vh]'>
             <p className='text-white font-bold  ml-[50px] text-[20px] -mt-[680px]'>Explore </p>
            <div className='text-white grid grid-cols-6 gap-4 mt-[70px] ml-[50px] '>
                {items.map((columnItems, index) => (
                    <div key={index} className="flex flex-col gap-2">
                        {columnItems.map((item, i) => (
                            <p key={i} className="text-gray-300 hover:text-white">
                                {item}
                            </p>
                        ))}
                    </div>
                ))}
            </div>

             

               <div>
                <p className='text-white text-center text-[50px] mt-14'>AI Maestro</p>
               </div>
           
</div>

</div>
             
        
    );
};

export default Content;
