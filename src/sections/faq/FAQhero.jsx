import { motion } from "framer-motion";

export default function FAQHero() {

  return (

    <section className="relative overflow-hidden bg-gradient-to-b from-[#14030b] via-[#090909] to-black pt-40 pb-28 px-5 md:px-12">

      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-pink-500/10 blur-[180px] rounded-full"></div>

      <div className="relative max-w-5xl mx-auto text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="uppercase tracking-[5px] text-pink-400 text-sm font-semibold mb-6"
        >

          FREQUENTLY ASKED QUESTIONS

        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-7xl font-black leading-tight mb-8"
        >

          Questions &
          <span className="text-pink-500">
            {" "}Answers
          </span>

        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-gray-400 text-lg md:text-xl leading-9"
        >

          Everything you need to know about our premium
          residential cleaning services, scheduling and process.

        </motion.p>

      </div>

    </section>

  );
}