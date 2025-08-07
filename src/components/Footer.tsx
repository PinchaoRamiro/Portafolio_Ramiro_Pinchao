// components/Footer.tsx
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0c0c0c] text-gray-300 py-8 px-4
     font-[Times_New_Roman,_serif] border-t border-gray-700
      m-5 mt-18 rounded-2xl
      shadow-[0_0_25px_rgb(55_40_95/52%)]
      "
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-cyan-400 mb-1">Ramiro Antonio Pinchao Chachinoy</h4>
          <p>Email: <a href="mailto:rmrpinchao@gmail.com" className="text-cyan-300 hover:underline">rmrpinchao@gmail.com</a></p>
          <p>Phone: <a href="tel:+573217840789" className="text-cyan-300 hover:underline">+57 321 784 07 89</a></p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/PinchaoRamiro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-200 transition duration-300 hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ramiro-antonio-pinchao-chachinoy-5038a931b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-200 transition duration-300 hover:scale-125"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/573217840789"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-200 transition duration-300 hover:scale-125"
          >
            <FaWhatsapp />
          </a>
          <a
            href="mailto:rmrpinchao@gmail.com"
            className="text-cyan-400 hover:text-cyan-200 transition duration-300 hover:scale-125"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-6">
        &copy; {new Date().getFullYear()} Ramiro Antonio Pinchao — All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
