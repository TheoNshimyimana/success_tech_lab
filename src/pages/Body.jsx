// import { useState } from 'react'
import banner from "../images/banner.png";
import banner2 from "../images/banner-2.jpeg";

function Body() {
  

  return (
    <>
      <section id="home">
      <main className="flex flex-col md:flex-row bg-slate-50 justify-between md:space-y-0 md:space-x-4 pt-0 gap-5 py-0 z-0 scroll-animate items-center bg-cover bg-center">
          <div className="flex-1 sm:mt-0 lg:mt-5 md:text-left pl-6">
            <h1 className="text-blue-950  text-2xl md:text-3xl pl-4 lg:text-5xl font-semibold">
              Innovating For Impact
            </h1>
            <p className="mt-4 leading-5 text-slate-600  md:text-base text-justify mx-4 sm:mx-4 ">
              Empowering youth through digital skills and innovative solutions
              
            </p>
        
          </div>
          <div className="flex-1">
            <img
              src={banner}
              alt="Banner image"
              className="w-full h-[400px] rounded-lg object-cover"
            />
          </div>
        </main>

        {/* Home Section */}
        
      </section>

      {/* About Section */}
      <section id="about" className="pt-12 px-4 pb-16 md:px-8 bg-white">
       
        <main className="flex flex-col md:flex-row items-center bg-white justify-between md:space-y-0 md:space-x-4 pt-0 gap-5 py-0 z-0 scroll-animate bg-cover bg-center">
          <div className="flex-1 sm:mt-0 lg:mt-4 md:text-left ">
          <h1 className=" text-2xl font-bold text-blue-800 text-left md:text-2xl lg:text-3xl">
          About
        </h1>
            
            <p className="mt-4 leading-5 text-slate-600 text-sm md:text-base text-justify mx-4 sm:mx-4">
              We are dedicated to Empowering young people by developing their digital skills, our mission is factor innovation and growth in communities through targeted training and technology-bas. 
             
            </p>
            
          </div>
          <div className="flex-1">
            <img
              src={banner2}
              alt="Banner image"
              className="w-full h-[300px] rounded-lg object-cover"
            />
          </div>
        </main>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 md:px-8 bg-slate-100"></section>
    </>
  );
}

export default Body;
