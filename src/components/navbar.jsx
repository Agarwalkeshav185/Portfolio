import { FaGithub, FaInstagram, FaLinkedin, FaDownload } from "react-icons/fa";  // Importing the social media icons
import logo from "../assets/Ka_white.svg";  // Your custom logo
import Keshav_Agarwal_SDE_Resume from "../assets/Keshav_Agarwal_SDE_Resume.pdf"

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-20" src={logo} alt="logo" />
        </div>

      {/* Social Icons and Codulio Link */}
      <div className="m-8 flex items-center justify-center gap-4 text-4xl">
        <a
          href="https://www.linkedin.com/in/keshav9880"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/agarwalkeshav185"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-800"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/keshav.agarwall"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500"
        >
          <FaInstagram />
        </a>

        {/* Codulio Link with Logo */}
        <a
          href="https://codolio.com/profile/agarwalkeshav185"  // Codulio profile link, replace with your actual profile URL
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <img 
            src="https://codolio.com/codolio_assets/codolio.svg"  // Codulio SVG logo
            alt="Codulio Logo"
            className="w-8 h-8"  // You can adjust the size (w-8 h-8) as needed
          />
        </a>
        <a
          href={Keshav_Agarwal_SDE_Resume}
          download
          className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          <FaDownload className="mr-2" />
          <span className="font-bold">Resume</span>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;