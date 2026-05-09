import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import logo from "../assets/logo.png";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

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
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  const services = [
    {
      name: "One-Time Deep Cleaning Services",
      path: "/services/deep-cleaning",
    },

    {
      name: "Recurring Cleaning Services",
      path: "/services/recurring-cleaning",
    },

    {
      name: "Move-in / Move-out Services",
      path: "/services/move-in-move-out",
    },

    {
      name: "Housekeeping Services",
      path: "/services/housekeeping",
    },

    {
      name: "Post-construction Services",
      path: "/services/post-construction",
    },

    {
      name: "Event Cleaning Services",
      path: "/services/event-cleaning",
    },
  ];

  return (

    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
          ? "bg-white/85 backdrop-blur-2xl border-b border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
          : "bg-white/65 backdrop-blur-xl border-b border-white/40"
        }`}
    >

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 lg:px-14">

        <div className="h-[84px] flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >

            <img
              src={logo}
              alt="logo"
              className="w-11 h-11 md:w-12 md:h-12 rounded-full object-cover border border-pink-200 shadow-md"
            />

            <div className="leading-tight">

              <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-[#1f1f1f]">

                Karla's{" "}

                <span className="text-pink-600">
                  Cleaning LLC
                </span>

              </h1>

              <p className="hidden md:block text-[10px] uppercase tracking-[4px] text-gray-500 mt-1">
                Premium Residential Cleaning
              </p>

            </div>

          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-12">

            {navLinks.slice(0, 2).map((link) => {

              const active = location.pathname === link.path;

              return (

                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-sm tracking-wide font-semibold transition-all duration-300 ${active
                      ? "text-pink-600"
                      : "text-[#2a2a2a] hover:text-pink-600"
                    }`}
                >

                  {link.name}

                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] bg-pink-500 transition-all duration-300 ${active ? "w-full" : "w-0"
                      }`}
                  ></span>

                </Link>

              );

            })}

            {/* SERVICES DROPDOWN */}
<div
  className="relative"
  onMouseEnter={() => setServicesOpen(true)}
  onMouseLeave={() => setServicesOpen(false)}
>

  <button className="flex items-center gap-2 text-sm font-semibold text-[#2a2a2a] hover:text-pink-600 transition">

    Services

    <ChevronDown
      size={16}
      className={`transition duration-300 ${
        servicesOpen ? "rotate-180" : ""
      }`}
    />

  </button>

  <AnimatePresence>

    {servicesOpen && (

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 18 }}
        transition={{ duration: 0.22 }}
        className="
          absolute
          top-12
          left-1/2
          -translate-x-1/2
          w-[430px]
          rounded-[28px]
          bg-white
          backdrop-blur-none
          border
          border-[#efe5e5]
          shadow-[0_20px_60px_rgba(0,0,0,0.12)]
          overflow-hidden
        "
      >

        <div className="p-4 flex flex-col">

          {services.map((service, index) => (

            <Link
              key={index}
              to={service.path}
              className="
                group
                rounded-2xl
                px-5
                py-5
                hover:bg-[#fff5f7]
                transition-all
                duration-300
              "
            >

              <div className="flex items-start justify-between gap-4">

                <div>

                  <h4 className="
                    text-[#2b2b2b]
                    font-bold
                    text-[15px]
                    group-hover:text-pink-600
                    transition
                    mb-1
                  ">

                    {service.name}

                  </h4>

                  <p className="text-gray-500 text-sm leading-6">

                    Professional premium residential cleaning service.

                  </p>

                </div>

                <div className="
                  w-10
                  h-10
                  rounded-full
                  bg-pink-50
                  flex
                  items-center
                  justify-center
                  text-pink-500
                  group-hover:bg-pink-500
                  group-hover:text-white
                  transition-all
                  duration-300
                  flex-shrink-0
                ">

                  ✦

                </div>

              </div>

            </Link>

          ))}

        </div>

      </motion.div>

    )}

  </AnimatePresence>

</div>

            {navLinks.slice(2).map((link) => {

              const active = location.pathname === link.path;

              return (

                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-sm tracking-wide font-semibold transition-all duration-300 ${active
                      ? "text-pink-600"
                      : "text-[#2a2a2a] hover:text-pink-600"
                    }`}
                >

                  {link.name}

                </Link>

              );

            })}

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">

            <Link
              to="/contact"
              className="hidden md:block"
            >

              <button className="
                bg-pink-600
                hover:bg-pink-700
                transition-all
                duration-300
                text-white
                px-6
                lg:px-8
                py-3
                rounded-2xl
                font-semibold
                text-sm
                shadow-lg
              ">

                Free Estimate ✨

              </button>

            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="
                lg:hidden
                text-[#1f1f1f]
                w-11
                h-11
                rounded-xl
                border
                border-black/10
                bg-white/80
                flex
                items-center
                justify-center
                backdrop-blur-md
              "
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
        border-black/5
        bg-white/95
        backdrop-blur-3xl
      "
          >

            <div className="flex flex-col px-6 py-8 gap-5 text-[#222]">

              <Link
                to="/"
                onClick={() => setMenuOpen(false)}
                className="text-lg"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setMenuOpen(false)}
                className="text-lg"
              >
                About
              </Link>

              {/* SERVICES */}
              <div className="border border-[#f1e6e6] rounded-2xl p-4 bg-[#fffafb]">

                <p className="text-pink-600 font-semibold mb-4">
                  Services
                </p>

                <div className="space-y-3">

                  {services.map((service, index) => (

                    <Link
                      key={index}
                      to={service.path}
                      onClick={() => setMenuOpen(false)}
                      className="
                  block
                  text-gray-700
                  hover:text-pink-600
                  transition
                "
                    >

                      {service.name}

                    </Link>

                  ))}

                </div>

              </div>

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="text-lg"
              >
                Contact
              </Link>

              <Link
                to="/faq"
                onClick={() => setMenuOpen(false)}
                className="text-lg"
              >
                FAQ
              </Link>

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
              >

                <button className="
            w-full
            mt-3
            bg-pink-600
            text-white
            py-4
            rounded-2xl
            font-semibold
          ">

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