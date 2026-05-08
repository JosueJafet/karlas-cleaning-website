import { motion } from "framer-motion";

import {
  ClipboardCheck,
  CalendarDays,
  Sparkles,
  Home,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Request Estimate",
    description:
      "Fill out our quick contact form with your cleaning needs.",
  },

  {
    number: "02",
    title: "Schedule Your Service",
    description:
      "Choose the best date and time for your appointment.",
  },

  {
    number: "03",
    title: "Professional Cleaning",
    description:
      "Our trained team arrives fully equipped and ready.",
  },

  {
    number: "04",
    title: "Enjoy Your Home",
    description:
      "Relax in a fresh, clean and stress-free environment.",
  },
];

const icons = [
  ClipboardCheck,
  CalendarDays,
  Sparkles,
  Home,
];

export default function ServicesProcess() {

  return (

    <section className="relative overflow-hidden bg-gradient-to-b from-[#050505] via-[#12040a] to-black text-white py-28 px-5 md:px-12">

      {/* GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-pink-500/10 blur-[180px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="uppercase tracking-[5px] text-pink-400 text-sm font-semibold mb-4"
          >

            OUR PROCESS

          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black leading-tight mb-8"
          >

            Simple &
            <span className="text-pink-500">
              {" "}Stress Free
            </span>

          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg leading-9 max-w-3xl mx-auto"
          >

            We make premium residential cleaning easy,
            flexible and completely hassle-free from start to finish.

          </motion.p>

        </div>

        {/* STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {steps.map((step, index) => {

            const Icon = icons[index];

            return (

              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="relative bg-white/5 border border-pink-500/20 backdrop-blur-xl rounded-[35px] p-10 overflow-hidden"
              >

                {/* BIG NUMBER */}
                <div className="absolute top-5 right-6 text-7xl font-black text-white/5">

                  {step.number}

                </div>

                {/* ICON */}
                <div className="w-20 h-20 rounded-full border border-pink-500/30 bg-pink-500/10 flex items-center justify-center text-pink-400 mb-8">

                  <Icon size={34} />

                </div>

                {/* TITLE */}
                <h3 className="text-3xl font-bold mb-5">

                  {step.title}

                </h3>

                {/* DESC */}
                <p className="text-gray-400 leading-8 text-lg">

                  {step.description}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>

  );
}