import { FaGithub, FaInstagram, FaLinkedin, FaDownload } from "react-icons/fa";  // Importing the social media icons
import logo from "../assets/Ka_white.svg";  // Your custom logo
import Keshav_Agarwal_SDE_Resume from "../assets/Keshav_Agarwal_SDE_Resume.pdf"

const Navbar = () => {
  return (
    <nav className="mb-20 py-6">
      <div className="flex flex-row md:flex-row items-center justify-between">
        <div className="flex md:flex-row items-center justify-between w-full">
        {/* Logo on the left */}
        <div className="flex flex-shrink-0 items-center md:mr-4">
          <img className="mx-2 w-20 pt-5" src={logo} alt="logo" />
        </div>
        {/* Icons and Resume on the right */}
        <div className="hidden md:flex md:flex-row items-center w-full md:w-auto md:justify-end">
          {/* Social Icons and Codulio Link */}
          <div className=" md:flex items-center justify-center gap-4 text-2xl md:text-4xl overflow-x-auto w-full md:w-auto">
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
              href="https://codolio.com/profile/agarwalkeshav185"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <img 
                src="https://codolio.com/codolio_assets/codolio.svg"
                alt="Codulio Logo"
                className="w-8 h-8"
              />
            </a>
          </div>
          {/* Resume button */}
          <a
            href={Keshav_Agarwal_SDE_Resume}
            download
            className="mt-4 hidden md:inline-flex md:mt-0 md:ml-4 items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <FaDownload className="mr-2" />
            <span className="font-bold">Resume</span>
          </a>
        </div>
        {/* Resume button */}
          <a
            href={Keshav_Agarwal_SDE_Resume}
            download
            className="mt-4 md:hidden md:mt-0 md:ml-4 inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
          >
            <FaDownload className="mr-2" />
            <span className="font-bold">Resume</span>
          </a>
        
      </div>
      </div>

      
      <div className="flex md:hidden mt-4 items-center justify-end gap-4 text-2xl md:text-4xl overflow-x-auto w-full md:w-auto">
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
              href="https://codolio.com/profile/agarwalkeshav185"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <img 
                src="https://codolio.com/codolio_assets/codolio.svg"
                alt="Codulio Logo"
                className="w-8 h-8"
              />
            </a>
          </div>
    </nav>
  );
};

export default Navbar;