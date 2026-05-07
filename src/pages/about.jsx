import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Sparkles,
  Clock3,
  BadgeCheck,
  Star,
} from "lucide-react";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import hero15 from "../assets/hero15.jpg";

function About() {
  return (
    <div className="bg-gradient-to-b from-[#050505] via-[#0b0710] to-black overflow-hidden">

      <Navbar />

      {/* HERO SECTION */}
      <section className="relative pt-36 pb-24 px-5 md:px-16">

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-full h-full bg-pink-500/10 blur-3xl"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* GLOW */}
            <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-[40px]"></div>

            <motion.img
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
              src={hero15}
              alt="about"
              className="relative w-full h-[420px] md:h-[720px] object-cover rounded-[35px] border border-pink-500/20 shadow-[0_0_60px_rgba(236,72,153,0.15)]"
            />

          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >

            <p className="uppercase tracking-[6px] text-xs md:text-sm mb-6 text-pink-300 font-semibold">
              ABOUT KARLA'S CLEANING LLC
            </p>

            <h2 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-8">
              A Trusted <br />
              Residential Cleaning <br />
              Team Serving The <br />
              <span className="text-pink-500">Bay Area</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 leading-10 mb-12 max-w-3xl">
              Karla's Cleaning LLC is committed to helping busy homeowners
              enjoy a cleaner, healthier and more relaxing home without the
              stress of doing it themselves. Our mission is simple:
              dependable premium cleaning, honest pricing and beautiful
              results every single visit.
            </p>

            {/* FEATURE CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">

              {/* CARD */}
              <div className="bg-white/5 border border-pink-500/20 backdrop-blur-xl rounded-3xl p-6 hover:border-pink-500/50 transition-all duration-300 shadow-xl">

                <div className="w-14 h-14 rounded-full border border-pink-500/40 bg-black/40 flex items-center justify-center text-pink-400 mb-5">
                  <ShieldCheck size={26} />
                </div>

                <h4 className="font-bold text-2xl mb-3">
                  Insured & Reliable
                </h4>

                <p className="text-gray-400 leading-7">
                  Professional and trusted residential home care with
                  consistent quality standards.
                </p>

              </div>

              {/* CARD */}
              <div className="bg-white/5 border border-pink-500/20 backdrop-blur-xl rounded-3xl p-6 hover:border-pink-500/50 transition-all duration-300 shadow-xl">

                <div className="w-14 h-14 rounded-full border border-pink-500/40 bg-black/40 flex items-center justify-center text-pink-400 mb-5">
                  <Sparkles size={26} />
                </div>

                <h4 className="font-bold text-2xl mb-3">
                  Detailed Results
                </h4>

                <p className="text-gray-400 leading-7">
                  Every room cleaned with precision and attention to detail.
                </p>

              </div>

              {/* CARD */}
              <div className="bg-white/5 border border-pink-500/20 backdrop-blur-xl rounded-3xl p-6 hover:border-pink-500/50 transition-all duration-300 shadow-xl">

                <div className="w-14 h-14 rounded-full border border-pink-500/40 bg-black/40 flex items-center justify-center text-pink-400 mb-5">
                  <Clock3 size={26} />
                </div>

                <h4 className="font-bold text-2xl mb-3">
                  Flexible Schedule
                </h4>

                <p className="text-gray-400 leading-7">
                  Monday through Saturday appointments designed around your lifestyle.
                </p>

              </div>

              {/* CARD */}
              <div className="bg-white/5 border border-pink-500/20 backdrop-blur-xl rounded-3xl p-6 hover:border-pink-500/50 transition-all duration-300 shadow-xl">

                <div className="w-14 h-14 rounded-full border border-pink-500/40 bg-black/40 flex items-center justify-center text-pink-400 mb-5">
                  <Star size={26} />
                </div>

                <h4 className="font-bold text-2xl mb-3">
                  Client Satisfaction
                </h4>

                <p className="text-gray-400 leading-7">
                  Our priority is delivering a luxury cleaning experience every visit.
                </p>

              </div>

            </div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-5">

              <Link to="/contact">

                <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:scale-105 hover:shadow-[0_0_35px_rgba(236,72,153,0.45)] transition-all duration-300 text-white px-10 py-5 rounded-2xl shadow-xl font-semibold text-lg">
                  Request Free Estimate ✨
                </button>

              </Link>

              <button className="border border-white/20 bg-white/5 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 text-white px-10 py-5 rounded-2xl text-lg font-semibold">
                Trusted By Bay Area Families
              </button>

            </div>

          </motion.div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default About;