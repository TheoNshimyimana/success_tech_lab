import { FaLinkedin, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0b1e3a] text-white px-4 py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        {/* Left Section */}
        <div>
        <h1 className="text-2xl font-bold text-white">
        Success Tech Lab Ltd </h1>
          <p className="leading-8">Empowering youth and businesses across Rwanda through innovative digital solutions.</p>
        </div>

        {/* Contact Section */}
        <div>
          <p className="font-semibold mb-3">Contact:</p>
          <p className="mb-3">📧 Email: <a href="mailto:contact@stlab.rw" className="hover:underline">contact@stlab.rw</a></p>
          <p>📞 Phone: <a href="tel:+250782755830" className="hover:underline">+250 782 755 830</a></p>
        </div>

        {/* Social Media Section */}
        <div>
          <p className="font-semibold mb-2">Follow Us:</p>
          <div className="flex space-x-7 mt-1 text-xl">
            <a href="https://www.linkedin.com/@successtechlab" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaLinkedin /></a>
            <a href="https://www.facebook.com/successtechlab" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaFacebook /></a>
            <a href="https://www.twitter.com/@successtechlab" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="https://www.instagram.com/@successtechlab" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><FaInstagram /></a>
          </div>
        </div>
      </div>
      <div className="mt-6 text-sm md:mt-8 pt-4 text-center text-white">
        &copy; {new Date().getFullYear()} Success Tech Lab Ltd. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
