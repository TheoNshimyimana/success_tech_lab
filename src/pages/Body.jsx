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
            <h1 className="text-blue-900 pt-7 text-center text-2xl sm:text-3xl lg:text-4xl font-bold  leading-snug tracking-tight">
              Empowering Rwanda Through Digital Skills and Innovation
            </h1>

            <p className="text-slate-700 text-base sm:text-lg md:text-[17px] leading-8 text-justify max-w-2xl mx-auto md:mx-0">
              Success Tech Lab Ltd is a Rwandan social enterprise dedicated to
              empowering young people by developing their digital skills. Our
              mission is to foster innovation and community growth through
              targeted training and technology-driven solutions. Founded in{" "}
              <span className="font-semibold text-blue-800">2018</span> by
              <span className="font-semibold text-blue-800">
                {" "}
                Tobi Tumukunde
              </span>
              , the company began by creating impactful software solutions —
              including Apartment and Store Management Systems and E-commerce
              platforms. However, we soon realized that to fully harness the
              power of technology, individuals first needed to become
              <span className="font-semibold text-blue-800">
                {" "}
                digitally literate
              </span>
              .
            </p>

            <Link
              to="/details"
              className="mt-6 inline-block px-8 py-3 bg-blue-900 text-white font-medium rounded-full shadow-md hover:bg-blue-800 hover:shadow-xl hover:scale-105 transition-all duration-300"
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
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4">
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
          <div>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              We are dedicated to empowering young people by developing their
              digital skills. Our mission is to foster innovation and growth in
              communities through targeted training and technology-based
              initiatives.
            </p>
          </div>

          {/* Right Side: Image */}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 md:px-8 bg-slate-100"></section>
    </>
  );
}

export default Body;
