import { motion } from "framer-motion";

import {
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";

export default function WhyTrustUs() {

  const items = [

    {
      icon: ShieldCheck,
      title: "Trusted Professionals",
      desc: "Reliable residential cleaning with professionalism, consistency and genuine care for every home.",
    },

    {
      icon: Sparkles,
      title: "Luxury-Level Results",
      desc: "Detailed cleaning designed to leave every room spotless, refreshed and beautifully maintained.",
    },

    {
      icon: HeartHandshake,
      title: "Client Relationships",
      desc: "We focus on long-term trust, communication and dependable service every visit.",
    },

    {
      icon: BadgeCheck,
      title: "Satisfaction Focused",
      desc: "Our priority is delivering premium-quality experiences that exceed expectations.",
    },

  ];

  return (

    <section className="relative overflow-hidden bg-gradient-to-b from-[#050505] via-[#12040a] to-black px-5 md:px-12 py-28 text-white">

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
            className="uppercase tracking-[5px] text-pink-400 text-sm font-semibold mb-5"
          >

            WHY CLIENTS TRUST US

          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black leading-tight mb-8"
          >

            Premium Cleaning
            <br />

            <span className="text-pink-500">
              With Genuine Care
            </span>

          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg leading-9 max-w-3xl mx-auto"
          >

            We believe residential cleaning should feel dependable,
            stress-free and consistently high quality from the first visit.

          </motion.p>

        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {items.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white/5 border border-pink-500/20 backdrop-blur-xl rounded-[35px] p-10"
              >

                <div className="w-20 h-20 rounded-full border border-pink-500/30 bg-pink-500/10 flex items-center justify-center text-pink-400 mb-8">

                  <Icon size={34} />

                </div>

                <h3 className="text-3xl font-bold mb-5">

                  {item.title}

                </h3>

                <p className="text-gray-400 leading-8 text-lg">

                  {item.desc}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>

  );
}