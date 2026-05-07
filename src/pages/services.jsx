import { Link } from "react-router-dom";
import { CheckCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hero12 from "../assets/hero12.jpg";
import hero14 from "../assets/hero14.jpg";
import hero13 from "../assets/hero13.jpg";
import hero9 from "../assets/hero9.png";
import hero10 from "../assets/hero10.jpg";
import hero11 from "../assets/hero11.jpg";


function Services() {
  const services = [
    {
      title: "Standard Cleaning",
      image: hero10,
      desc: "Routine maintenance cleaning designed to keep your home consistently fresh and organized.",
      includes: [
        "Bedrooms",
        "Bathrooms",
        "Kitchen",
        "Dusting",
        "Vacuuming",
        "Trash Removal",
      ],
    },

    {
      title: "Deep Cleaning",
      image: hero11,
      desc: "A detailed top-to-bottom intensive clean for homes needing extra attention and sanitizing.",
      includes: [
        "Baseboards",
        "Detailed Dusting",
        "Scrubbing",
        "Behind Furniture",
        "Appliances",
      ],
    },

    {
      title: "Move In / Move Out",
      image: hero12,
      desc: "Perfect empty-home cleaning before moving in or after moving out for a spotless handoff.",
      includes: [
        "Cabinets",
        "Closets",
        "Walls",
        "Appliances",
        "Bathrooms",
        "Floors",
      ],
    },

    {
      title: "Post Construction",
      image: hero13,
      desc: "Removal of construction dust, debris and residue after remodels or renovation projects.",
      includes: [
        "Fine Dust Removal",
        "Windows",
        "Vacuum Detail",
        "Surface Wipe",
        "Trash Cleanup",
      ],
    },

    {
      title: "Carpet Cleaning",
      image: hero14,
      desc: "Special appointment-based carpet treatment to remove dirt, odors and restore freshness.",
      includes: [
        "Spot Treatment",
        "Odor Control",
        "Steam Option",
        "Fiber Refresh",
      ],
    },

    {
      title: "Extra Inside Services",
      image: hero9,
      desc: "Optional add-ons for clients wanting a more detailed premium cleaning package.",
      includes: [
        "Inside Fridge",
        "Inside Oven",
        "Windows",
        "Blinds",
        "Patio",
        "Walls",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-[#050505] via-[#0b0710] to-black overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative pt-40 pb-24 px-5 md:px-12 overflow-hidden">

        {/* BACKGROUND GLOW */}
        <div className="absolute top-0 left-0 w-full h-full bg-pink-500/10 blur-3xl"></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">

          <p className="uppercase tracking-[6px] text-xs md:text-sm mb-6 text-pink-300 font-semibold">
            OUR CLEANING PACKAGES
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-8">
            Professional Services <br />
            Tailored For Every <br />
            <span className="text-pink-500">Luxury Home</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-10 max-w-4xl mx-auto">
            Whether you need weekly upkeep, a move-out reset or a detailed
            deep clean, Karla's Cleaning LLC offers flexible premium solutions
            customized to your home's exact needs.
          </p>

        </div>

      </section>

      {/* SERVICES */}
      <section className="px-5 md:px-12 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {services.map((service) => (
            <motion.div
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              key={service.title}
              className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] overflow-hidden hover:border-pink-500/40 transition-all duration-300 shadow-[0_0_50px_rgba(0,0,0,0.35)]"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden h-[280px]">

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>

                <motion.img
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5 }}
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />

                {/* TITLE OVER IMAGE */}
                <div className="absolute bottom-8 left-8 z-20">

                  <div className="flex items-center gap-3 mb-3">

                    <div className="w-12 h-12 rounded-full border border-pink-500/40 bg-black/40 backdrop-blur-md flex items-center justify-center text-pink-400">
                      <Sparkles size={22} />
                    </div>

                    <p className="uppercase tracking-[4px] text-pink-300 text-xs font-semibold">
                      PREMIUM CLEANING
                    </p>

                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    {service.title}
                  </h3>

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-8 md:p-10">

                <p className="text-gray-300 text-lg leading-8 mb-8">
                  {service.desc}
                </p>

                {/* INCLUDED */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">

                  {service.includes.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-gray-200"
                    >

                      <div className="w-7 h-7 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle
                          size={15}
                          className="text-pink-400"
                        />
                      </div>

                      <span className="text-[15px]">
                        {item}
                      </span>

                    </div>
                  ))}

                </div>

                {/* BUTTON */}
                <Link to="/contact">

                  <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.45)] transition-all duration-300 text-white px-8 py-4 rounded-2xl shadow-xl font-semibold">
                    Book This Service ✨
                  </button>

                </Link>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Services;