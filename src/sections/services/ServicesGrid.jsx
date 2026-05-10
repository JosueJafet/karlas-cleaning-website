import { Link } from "react-router-dom";

import {
  CheckCircle,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

import hero12 from "../../assets/hero12.jpg";
import hero14 from "../../assets/hero14.jpg";
import hero13 from "../../assets/hero13.jpg";
import hero9 from "../../assets/hero9.png";
import hero10 from "../../assets/hero10.jpg";
import hero11 from "../../assets/hero11.jpg";
import hero18 from "../../assets/hero18.jpeg";


export default function ServicesGrid() {

  const services = [

    {
      title: "Standard Cleaning",
      image: hero10,
      desc: "Routine maintenance cleaning designed to keep your home consistently fresh and beautifully organized.",
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
      desc: "A detailed top-to-bottom intensive clean for homes needing extra attention and deep sanitizing.",
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
      image: hero18,
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
      desc: "Optional add-ons for clients wanting a more detailed luxury cleaning experience.",
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

    <section className="bg-[#f7f4f6] text-black px-5 md:px-12 py-28">

      {/* SECTION HEADER */}
      <div className="max-w-4xl mx-auto text-center mb-20">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="uppercase tracking-[5px] text-pink-500 text-sm font-semibold mb-5"
        >

          OUR PREMIUM SERVICES

        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-black leading-tight mb-8"
        >

          Cleaning Solutions
          <br />

          <span className="text-pink-500">
            Designed Around Your Lifestyle
          </span>

        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg leading-9"
        >

          We provide flexible residential cleaning services tailored
          to busy homes, luxury spaces and families looking for
          dependable premium-quality care.

        </motion.p>

      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {services.map((service, index) => (

          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            key={service.title}
            className="group bg-white border border-pink-100 rounded-[35px] overflow-hidden hover:border-pink-500/40 transition-all duration-300 shadow-[0_0_50px_rgba(0,0,0,0.06)]"
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

              {/* TITLE */}
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

              <p className="text-gray-600 text-lg leading-8 mb-8">

                {service.desc}

              </p>

              {/* INCLUDED */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">

                {service.includes.map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3 text-gray-700"
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

              <Link to="/contact">

                <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:scale-105 hover:shadow-[0_0_30px_rgba(236,72,153,0.35)] transition-all duration-300 text-white px-8 py-4 rounded-2xl shadow-xl font-semibold">

                  Book This Service ✨

                </button>

              </Link>

            </div>

          </motion.div>

        ))}

      </div>

    </section>

  );
}