import { useEffect, useState, useRef } from "react";
import Logo from "./images/Logo.png";

function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasShadow, setHasShadow] = useState(false);
  const menuRef = useRef(); // Reference for the mobile menu

  // Toggle Mobile Menu
  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  // Close Mobile Menu if clicking outside
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setMobileMenuOpen(false);
    }
  };

 

  // Scroll behavior for active section and shadow
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "services","projects","blogs", "contact"];
      let currentSection = "";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          const offset = 200;

          if (rect.top >= 0 && rect.top < windowHeight - offset) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
      setHasShadow(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on initial render to set the correct section on page load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Attach event listener to handle clicks outside
    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup on unmount
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      const yOffset = -navbarHeight;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      setMobileMenuOpen(false); // Close mobile menu if open
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`px-4 sm:px-6 md:px-8 flex items-center justify-between h-20 sticky top-0 z-50 transition-shadow duration-300 bg-slate-50 ${
          hasShadow ? "shadow-md" : ""
        }`}
      >
        {/* Logo */}
        <div onClick={() => scrollToSection("home")} className="cursor-pointer">
          <img src={Logo} alt="Logo" className="h-7 sm:h-10 pl-2 sm:pl-4" />
          
        </div>

        {/* Navbar Links (Desktop) */}
        <div className="hidden md:flex items-center justify-end gap-10 mr-10">
          <div className="flex items-center text-lg justify-center font-semibold text-blue-900 gap-9 cursor-pointer">
            {["home", "about", "services","projects","blogs", "contact"].map((section) => (
              <ul key={section}>
                <li
                  className={`${
                    activeSection === section ? "text-blue-700 font-bold" : ""
                  } hover:text-blue-600 transition-colors duration-200`}
                  onClick={() => scrollToSection(section)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </li>
              </ul>
            ))}
          </div>
          
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? "✖" : "☰"}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={menuRef} // Reference for mobile menu
            className="fixed top-0 right-0 bg-white w-1/3 h-1/2 z-40 shadow-lg md:hidden flex flex-col items-center"
          >
            <ul className="flex flex-col items-center gap-6 mt-8">
              {["home", "about", "services","projects","blogs", "contact"].map(
                (section) => (
                  <li
                    key={section}
                    className={`${
                      activeSection === section
                        ? "text-blue-900 font-bold"
                        : ""
                    } hover:text-blue-600 transition-colors duration-200`}
                    onClick={() => scrollToSection(section)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </li>
                )
              )}
            </ul>
            
          </div>
        )}
      </nav>

     
    </>
  );
}

export default Navbar;
