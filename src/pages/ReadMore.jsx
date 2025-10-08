import banner2 from "../images/banner.jpg";
import Footer from "./Footer";
import Navbar2 from "./Navbar2";


function ReadMore() {
    return (
      <>
        <Navbar2 />
        <div className="p-10">
          <h1 className="text-blue-900 text-xl md:text-2xl font-bold tracking-tight  mb-8">
            Responding to the COVID-19 Challenge
          </h1>
          <main className="flex flex-col md:flex-row items-center  justify-between mb-10 gap-10">
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
              <p className="text-slate-700 text-sm md:text-base leading-relaxed text-justify w-full mx-auto md:mx-0">
                When the COVID-19 pandemic closed schools, Success Tech Lab
                recognized an urgent need for digital learning solutions.
                Drawing on its expertise in business, IT, and education, the
                company launched a{" "}
                <span className="font-semibold text-blue-800">
                  Digital Classroom Initiative
                </span>{" "}
                in Kayonza District. Through tablets, internet access, and
                teacher training, the program empowered students to continue
                learning remotely. Initially skeptical, teachers soon embraced
                it as a practical and rewarding way to teach during lockdown.
              </p>

              <p className="text-slate-700 text-sm md:text-base leading-relaxed text-justify max-w-2xl mx-auto md:mx-0">
                Building on this success, the{" "}
                <span className="font-semibold text-blue-800">
                  Digital Learning Initiative (DLI)
                </span>{" "}
                was launched in 2021, training over 150 teachers to integrate
                ICT into their lessons. The initiative emphasizes gender equity
                by ensuring that at least half of the trained teachers are women
                and works closely with the local government and Rwanda’s
                Ministry of Education.
              </p>

              <p className="text-slate-700 text-sm md:text-base leading-relaxed text-justify max-w-2xl mx-auto md:mx-0">
                Beyond education, Success Tech Lab has introduced
                community-focused programs such as
                <span className="font-semibold text-blue-800">
                  {" "}
                  “Ba Intyoza”
                </span>
                , which equips adults, youth, and daycare workers with practical
                digital skills — from smartphone use to basic computer literacy
                — fostering a more inclusive digital future.
              </p>
            </div>
          </main>
        </div>
        <Footer />
      </>
    );
}

export default ReadMore
