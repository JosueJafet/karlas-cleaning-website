import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/logo.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  /* CLOSE MENU ON SCROLL */
  useEffect(() => {

    const closeMenu = () => {
      setMenuOpen(false);
    };

    window.addEventListener("scroll", closeMenu);

    return () => window.removeEventListener("scroll", closeMenu);

  }, []);

  /* LOCK BODY SCROLL */
  useEffect(() => {

    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };

  }, [menuOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  return (

    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-2xl border-b border-pink-500/10 shadow-[0_10px_40px_rgba(0,0,0,0.45)]"
          : "bg-black/20 backdrop-blur-xl border-b border-white/10"
      }`}
    >

      {/* CONTAINER */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">

        <div className="h-[82px] flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
          >

            <img
              src={logo}
              alt="logo"
              className="w-11 h-11 md:w-12 md:h-12 rounded-full object-cover border border-pink-500/30 shadow-[0_0_25px_rgba(236,72,153,0.35)] group-hover:scale-105 transition duration-300"
            />

            <div className="leading-tight">

              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-white">

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
          <div className="hidden lg:flex items-center gap-12">

            {navLinks.map((link) => {

              const active = location.pathname === link.path;

              return (

                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-sm tracking-wide font-medium transition-all duration-300 ${
                    active
                      ? "text-pink-400"
                      : "text-white hover:text-pink-400"
                  }`}
                >

                  {link.name}

                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] bg-pink-500 transition-all duration-300 ${
                      active ? "w-full" : "w-0 hover:w-full"
                    }`}
                  ></span>

                </Link>

              );

            })}

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            {/* DESKTOP BUTTON */}
            <Link
              to="/contact"
              className="hidden md:block"
            >

              <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:scale-105 hover:shadow-[0_0_35px_rgba(236,72,153,0.45)] transition-all duration-300 text-white px-6 lg:px-8 py-3 rounded-2xl font-semibold text-sm shadow-xl">

                Free Estimate ✨

              </button>

            </Link>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden text-white w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center backdrop-blur-md hover:border-pink-500/30 transition"
            >

              {menuOpen ? <X size={22} /> : <Menu size={22} />}

            </button>

          </div>

        </div>

      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {menuOpen && (

          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.25 }}
            className="
              lg:hidden
              border-t
              border-pink-500/10
              bg-black/90
              backdrop-blur-3xl
              shadow-[0_20px_60px_rgba(0,0,0,0.55)]
            "
          >

            <div className="flex flex-col px-6 py-8 gap-6 text-white">

              {navLinks.map((link) => (

                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`text-lg transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-pink-400"
                      : "hover:text-pink-400"
                  }`}
                >

                  {link.name}

                </Link>

              ))}

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
              >

                <button className="w-full mt-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-4 rounded-2xl font-semibold shadow-[0_0_30px_rgba(236,72,153,0.25)]">

                  Free Estimate ✨

                </button>

              </Link>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>

  );
}

export default Navbar;