import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function ServicesHero() {

  return (

    <section className="relative overflow-hidden bg-gradient-to-b from-[#14030b] via-[#090909] to-black pt-40 pb-28 px-6">

      {/* GLOW */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-pink-500/10 blur-[160px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto text-center">

        {/* ICON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 rounded-full border border-pink-500/30 bg-pink-500/10 flex items-center justify-center mx-auto mb-10"
        >

          <Sparkles
            size={34}
            className="text-pink-400"
          />

        </motion.div>

        {/* SMALL TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="uppercase tracking-[6px] text-pink-400 text-sm font-semibold mb-6"
        >

          PREMIUM CLEANING SERVICES

        </motion.p>

        {/* TITLE */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl sm:text-6xl md:text-7xl font-black text-white leading-tight mb-8"
        >

          Exceptional Cleaning
          <br />

          <span className="text-pink-500">
            Tailored For Your Home
          </span>

        </motion.h1>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="max-w-3xl mx-auto text-gray-300 text-lg md:text-xl leading-9"
        >

          From recurring home cleaning to deep luxury detailing,
          we deliver reliable residential cleaning experiences
          with professionalism, flexibility and premium care.

        </motion.p>

      </div>

    </section>

  );
}