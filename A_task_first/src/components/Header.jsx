import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm fixed top-0 left-0 w-full z-50 border-b border-gray-100">

      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">

        {/* LOGO */}
        <Link to="/">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight text-gray-900 hover:text-blue-600 transition">
            JobAxle
          </h1>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">

          <ul className="flex space-x-8 text-gray-700 font-medium">

            <li>
              <Link to="/" className="hover:text-blue-600 transition relative group">
                Home
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-blue-600 transition relative group">
                About
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-blue-600 transition relative group">
                Services
              </Link>
            </li>

            <li>
              <Link to="/projects" className="hover:text-blue-600 transition relative group">
                Projects
              </Link>
            </li>

            <li>
              <Link to="/products" className="hover:text-blue-600 transition relative group">
                Products
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-blue-600 transition relative group">
                Contact
              </Link>
            </li>

          </ul>

          {/* AUTH BUTTONS (DESKTOP) */}
          <div className="flex items-center gap-3 ml-4">

            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              Login
            </Link>

            <Link
              to="/register"
              className="px-4 py-2 text-sm font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-sm"
            >
              Sign Up
            </Link>

          </div>

        </nav>

        {/* HAMBURGER BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden relative w-10 h-10 flex items-center justify-center"
        >
          <span
            className={`absolute h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              menuOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute h-0.5 w-6 bg-gray-800 transition-all duration-300 ${
              menuOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-white border-t ${
          menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >

        <ul className="flex flex-col items-center text-lg font-medium py-6 space-y-5 text-gray-700">

          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/projects" onClick={() => setMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>

          {/* AUTH BUTTONS (MOBILE) */}
          <div className="flex flex-col gap-3 mt-4 w-full px-10">

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="text-center px-4 py-2 border border-gray-300 rounded-lg"
            >
              Login
            </Link>

            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="text-center px-4 py-2 bg-blue-600 text-white rounded-lg"
            >
              Sign Up
            </Link>

          </div>

        </ul>

      </div>

    </header>
  );
};

export default Header;