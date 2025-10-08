// import { useState } from 'react'
import banner from "../images/bbanner.jpg";
import aboutImg from "../images/banner.jpeg";
import { Link } from "react-router-dom";

function Body() {
  return (
    <>
      <section id="home">
        <main className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12 py-0 bg-gradient-to-b from-slate-50 to-slate-100 bg-cover bg-center overflow-hidden">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in pb-4">
            <h1 className="text-blue-800 pt-7 text-center text-2xl sm:text-4xl lg:text-3xl font-bold  leading-snug tracking-tight">
              Empowering Rwanda Through Digital Skills and Innovation
            </h1>

            <p className="text-slate-700 text-sm sm:text-lg md:text-[15px] leading-10 text-justify max-w-2xl mx-auto md:mx-0">
              Success Tech Lab Ltd is a Rwandan social enterprise dedicated to
              empowering young people by developing their digital skills. Our
              mission is to foster innovation and community growth through
              targeted training and technology-driven solutions. Founded in{" "}
              <span className="font-semibold text-blue-700">2018</span> by
              <span className="font-semibold text-blue-700">
                {" "}
                Tobi Tumukunde
              </span>
              , the company began by creating impactful software solutions —
              including Apartment and Store Management Systems and E-commerce
              platforms. However, we soon realized that to fully harness the
              power of technology, individuals first needed to become
              <span className="font-semibold text-blue-700">
                {" "}
                digitally literate
              </span>
              .
            </p>

            <Link
              to="/details"
              className="mt-6 inline-block text-sm px-8 py-2 bg-blue-800 text-white font-medium rounded-full shadow-md hover:bg-blue-900 hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center md:justify-end animate-slide-in">
            <img
              src={banner}
              alt="Banner image"
              className="w-full max-w-full h-full rounded-r-2xl object-cover shadow-xl hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>
        </main>

        {/* Home Section */}
      </section>

      {/* About Section */}

      <section
        id="about"
        className="pt-8 pb-0 px-6 md:px-12 bg-gradient-to-b from-white to-slate-200"
      >
        <h2 className="text-xl px-10 sm:text-2xl font-bold text-blue-700 mb-4">
          About Us
        </h2>
        <div className="w-full mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Left Side: Text */}
          <div className="flex justify-center">
            <img
              src={aboutImg}
              alt="About illustration"
              className="w-full md:max-w-md object-contain"
            />
          </div>
          <div className="px-4 sm:px-6 lg:px-8">
            <p className="text-gray-700 text-base sm:text-base leading-relaxed md:leading-loose text-justify max-w-2xl mx-auto md:mx-0">
              We are dedicated to{" "}
              <span className="font-semibold text-blue-600">
                empowering young people
              </span>
              by developing their digital skills. Our mission is to
              <span className="font-semibold text-blue-600">
                {" "}
                foster innovation and growth{" "}
              </span>
              in communities through targeted training and
              <span className="font-semibold text-blue-600">
                {" "}
                technology-based initiatives
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 md:px-8 bg-slate-100"></section>
    </>
  );
}

export default Body;
