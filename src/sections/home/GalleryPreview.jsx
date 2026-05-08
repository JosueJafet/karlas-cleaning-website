import { motion } from "framer-motion";

import hero1 from "../../assets/hero1.jpeg";
import hero2 from "../../assets/hero2.jpeg";
import hero3 from "../../assets/hero3.jpeg";
import hero4 from "../../assets/hero4.jpeg";
import hero5 from "../../assets/hero5.jpeg";

export default function GalleryPreview() {

  const gallery = [hero1, hero2, hero3, hero4, hero5];

  return (

    <section className="relative overflow-hidden bg-gradient-to-b from-[#050505] via-[#0d0712] to-black px-5 md:px-12 py-28">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-pink-500/10 blur-[160px] rounded-full"></div>

      {/* HEADER */}
      <div className="relative z-10 text-center mb-20">

        <p className="uppercase tracking-[5px] text-pink-400 text-sm mb-4 font-semibold">
          REAL CLIENT RESULTS
        </p>

        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Spotless Luxury Spaces
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-8">
          Premium residential cleaning designed to make every room feel fresh,
          elegant and beautifully maintained.
        </p>

      </div>

      {/* GALLERY */}
      <div className="relative z-10 overflow-hidden">

        <div className="flex gap-6 animate-[scroll_25s_linear_infinite] w-max">

          {[...gallery, ...gallery].map((img, index) => (

            <div
              key={index}
              className="relative overflow-hidden rounded-[28px]"
            >

              {/* IMAGE OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>

              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                src={img}
                alt="gallery"
                className="h-56 sm:h-64 md:h-[420px] w-[260px] sm:w-[300px] md:w-[340px] object-cover border border-white/10 hover:border-pink-500/40 shadow-[0_20px_60px_rgba(0,0,0,0.45)] flex-shrink-0 transition-all duration-500"
              />

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
