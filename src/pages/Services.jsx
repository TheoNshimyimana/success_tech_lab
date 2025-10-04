
import { forwardRef } from 'react'
import { FaUserGraduate, FaChalkboardTeacher, FaCode } from 'react-icons/fa';
import { MdRocketLaunch } from "react-icons/md";
import proj2 from "../images/project2.png"; 
import proj1 from "../images/proj1.png"; 

const services = [
  {
    icon: (
      <FaChalkboardTeacher className="text-5xl text-white p-2 rounded-lg bg-green-700" />
    ),
    title: "ICT Training",
    description:
      "Reliable ICT support and technical assistance online, in-office, and via mobile outreach.",
    button: "Read More",
  },
  {
    icon: (
      <FaCode className="text-5xl p text-white p-2 bg-blue-400 rounded-lg" />
    ),
    title: "Software Development",
    description:
      "Customized software development, digital tools, and technology solutions to meet business and community needs.",
    button: "Read More",
  },
  {
    icon: <MdRocketLaunch className="text-5xl text-green-600" />,
    title: "Startup Support",
    description:
      "Mentorship, entrepreneurial training, and guidance for young innovators to start and grow their businesses.",
    button: "Read More",
  },
  {
    icon: <FaUserGraduate className="text-5xl text-green-600" />,
    title: "Digital Skills Programs",
    description:
      "Practical courses and programs for youth, adults, and educators to build digital literacy and ICT competencies.",
    button: "Read More",
  },
];

const projects = [
  {
    title: "Agereyo Initiative",
    description:
      "We develop the digital growth and development of their digital skills and growth.promotes community upliftment by providing practical digital literacy programs and empowering youth to launch small businesses and drive innovation in their communities.",
    image: proj1,
  },
  {
    title: "ICT Desk Platform",
    description:
      "Reliable ICT support and technical assistance online, in-office, and via mobile outreach and across all sections.",
    image: proj2,
  },
];

const Services = forwardRef((props, ref) => {
  return (
    <section className="bg-white px-8">
      <main id="services" className="pt-4" ref={ref}>
        <div>
          <h2 className="text-2xl font-bold flex text-blue-800 mb-8">
            Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center hover:scale-105 justify-center p-6 bg-white rounded-lg border-2 border-gray-400 shadow hover:bg-green-300 cursor-pointer hover:border-green-700 transition duration-300"
              >
                <>{service.icon}</>
                <h1 className="mt-4  text-blue-900 text-lg text-center">
                  {service.title}
                </h1>
                <p className="mt-2 text-gray-600 leading-relaxed text-center">
                  {service.description}
                </p>
                <button className="mt-4 px-4 py-2 bg-blue-400 text-white rounded hover:bg-blue-700 transition duration-300">
                  {service.button}
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Projects */}
      <main className="pl-0 py-9" id="projects">
        <h1 className="text-2xl font-bold flex text-blue-800 mb-8">
          Featured Projects
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg border-2 border-gray-300 cursor-pointer shadow hover:shadow-2xl  transition flex-col sm:flex-row items-center gap-4"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-50 object-cover rounded-lg "
              />
              <div>
                <h3 className="text-2xl font-semibold text-blue-900 mb-3">
                  {project.title}
                </h3>
                <p className="mt-2 text-gray-600 leading-relaxed text-center">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
})

Services.displayName = 'Services'

export default Services
