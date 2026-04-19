import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-medium">
              JobAxle
            </h2>

            <p className="mt-3 text-l sm:text-l text-gray-400 leading-relaxed">
              A modern platform connecting job seekers and employers. Build
              careers and explore opportunities.
            </p>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-3">
              Quick Links
            </h3>

            <ul className="space-y-2 text-xl sm:text-base text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-3">
              Contact
            </h3>

            <ul className="space-y-2 text-l sm:text-base text-gray-400">
              <li>support@jobaxle.com</li>
              <li>+977-98XXXXXXXX</li>
              <li>Kathmandu, Nepal</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-l sm:text-sm text-gray-500">
            © {new Date().getFullYear()} JobAxle
          </p>

          <div className="flex gap-4 mt-3 md:mt-0 text-l sm:text-sm text-gray-500">
            <a className="hover:text-white transition">Privacy</a>
            <a className="hover:text-white transition">Terms</a>
            <a className="hover:text-white transition">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
