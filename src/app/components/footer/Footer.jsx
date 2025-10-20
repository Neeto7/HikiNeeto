"use client"

import { FaInstagram } from "react-icons/fa"

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left */}
        <p className="text-sm text-gray-400">
          © 2025 Hikineeto. All rights reserved.
        </p>

        {/* Right - Instagram */}
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-300 group"
        >
          {/* Icon */}
          <FaInstagram className="text-lg group-hover:text-pink-500 transition-colors duration-300" />
          {/* Text with gradient hover */}
          <span className="text-sm bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-500 bg-clip-text text-transparent group-hover:opacity-100 transition-opacity duration-300">
            Instagram
          </span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
