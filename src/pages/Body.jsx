// import { useState } from 'react'
import banner from "../images/bbanner.jpg";
import banner2 from "../images/banner.jpg";

function Body() {
  return (
    <>
      <section id="home">
        <main className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-12 py-0 bg-gradient-to-b from-slate-50 to-slate-100 bg-cover bg-center overflow-hidden">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left space-y-6 animate-fade-in pb-4">
            <h1 className="text-blue-900 pt-7 text-center text-2xl sm:text-3xl lg:text-4xl font-bold  leading-snug tracking-tight">
              Success Tech Lab Ltd: Empowering Rwanda Through Digital Skills and
              Innovation
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

            <button className="mt-6 inline-block px-8 py-3 bg-blue-900 text-white font-medium rounded-full shadow-md hover:bg-blue-800 hover:shadow-xl hover:scale-105 transition-all duration-300">
              Learn More
            </button>
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
        <h1 className="text-blue-900 text-3xl md:text-4xl font-bold tracking-tight mb-8">
          Responding to the COVID-19 Challenge
        </h1>
        <main className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Right Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <img
              src={banner2}
              alt="Success Tech Lab digital learning"
              className="w-full rounded-l-2xl object-cover shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out"
            />
          </div>

          {/* right contents */}
          <div className="flex-1 text-center md:text-left space-y-6">
            <p className="text-slate-700 text-base md:text-lg leading-relaxed text-justify max-w-2xl mx-auto md:mx-0">
              When the COVID-19 pandemic closed schools, Success Tech Lab
              recognized an urgent need for digital learning solutions. Drawing
              on its expertise in business, IT, and education, the company
              launched a{" "}
              <span className="font-semibold text-blue-800">
                Digital Classroom Initiative
              </span>{" "}
              in Kayonza District. Through tablets, internet access, and teacher
              training, the program empowered students to continue learning
              remotely. Initially skeptical, teachers soon embraced it as a
              practical and rewarding way to teach during lockdown.
            </p>

            <p className="text-slate-700 text-base md:text-lg leading-relaxed text-justify max-w-2xl mx-auto md:mx-0">
              Building on this success, the{" "}
              <span className="font-semibold text-blue-800">
                Digital Learning Initiative (DLI)
              </span>{" "}
              was launched in 2021, training over 150 teachers to integrate ICT
              into their lessons. The initiative emphasizes gender equity by
              ensuring that at least half of the trained teachers are women and
              works closely with the local government and Rwanda’s Ministry of
              Education.
            </p>

            <p className="text-slate-700 text-base md:text-lg leading-relaxed text-justify max-w-2xl mx-auto md:mx-0">
              Beyond education, Success Tech Lab has introduced
              community-focused programs such as
              <span className="font-semibold text-blue-800"> “Ba Intyoza”</span>
              , which equips adults, youth, and daycare workers with practical
              digital skills — from smartphone use to basic computer literacy —
              fostering a more inclusive digital future.
            </p>
          </div>
        </main>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 md:px-8 bg-slate-100"></section>
    </>
  );
}

export default Body;
