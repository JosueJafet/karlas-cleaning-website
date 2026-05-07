import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">

      {/* BACKGROUND */}
      <div className="absolute inset-0 backdrop-blur-2xl bg-black/20 border-b border-white/10"></div>

      {/* CONTAINER */}
      <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3 min-w-0"
        >
          <img
            src={logo}
            alt="logo"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-pink-500/30 shadow-[0_0_20px_rgba(236,72,153,0.35)] flex-shrink-0"
          />

          <div className="leading-tight min-w-0">

            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white truncate">
              Karla's{" "}
              <span className="text-pink-500">
                Cleaning LLC
              </span>
            </h1>

            <p className="hidden md:block text-[10px] uppercase tracking-[4px] text-gray-300 mt-1">
              Premium Residential Cleaning
            </p>

          </div>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-10 xl:gap-16 text-sm xl:text-[15px] tracking-wide font-medium">

          <Link
            to="/"
            className="text-white hover:text-pink-400 transition-all duration-300 relative group"
          >
            Home
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/about"
            className="text-white hover:text-pink-400 transition-all duration-300 relative group"
          >
            About
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/services"
            className="text-white hover:text-pink-400 transition-all duration-300 relative group"
          >
            Services
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            to="/contact"
            className="text-white hover:text-pink-400 transition-all duration-300 relative group"
          >
            Contact
            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* DESKTOP BUTTON */}
          <Link
            to="/contact"
            className="hidden md:block"
          >
            <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.45)] transition-all duration-300 text-white px-5 lg:px-7 py-3 rounded-2xl font-semibold text-sm shadow-xl whitespace-nowrap">
              Free Estimate ✨
            </button>
          </Link>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-white w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center backdrop-blur-md"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="lg:hidden border-t border-white/10 bg-black/90 backdrop-blur-2xl">

          <div className="flex flex-col px-6 py-6 gap-5 text-white">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-400 transition"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-400 transition"
            >
              About
            </Link>

            <Link
              to="/services"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-400 transition"
            >
              Services
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-pink-400 transition"
            >
              Contact
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              <button className="w-full mt-2 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-2xl font-semibold">
                Free Estimate ✨
              </button>
            </Link>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;