import {
  ShieldCheck,
  Sparkles,
  Clock3,
  BadgeCheck,
} from "lucide-react";

import { motion } from "framer-motion";

export default function WhyChooseUs() {

  const features = [
    {
      icon: ShieldCheck,
      title: "Trusted Professionals",
      text: "Reliable and respectful cleaning specialists committed to quality service every visit.",
    },

    {
      icon: Sparkles,
      title: "Luxury-Level Cleaning",
      text: "Detailed residential cleaning designed to leave every space spotless and refreshed.",
    },

    {
      icon: Clock3,
      title: "Flexible Scheduling",
      text: "Convenient appointment times that fit your lifestyle and busy weekly routine.",
    },

    {
      icon: BadgeCheck,
      title: "Satisfaction Guaranteed",
      text: "We focus on consistency, communication and delivering exceptional client experiences.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#0b0710] via-black to-[#140812] px-5 md:px-12 py-28 text-white overflow-hidden">

      <div className="text-center mb-20">

        <p className="uppercase tracking-[5px] text-pink-400 font-semibold mb-5">
          WHY CLIENTS CHOOSE US
        </p>

        <h2 className="text-5xl md:text-6xl font-bold mb-8">
          Premium Cleaning With
          <span className="text-pink-500"> Exceptional Care</span>
        </h2>

        <p className="text-gray-400 text-lg leading-8 max-w-3xl mx-auto">
          We combine reliability, premium attention to detail and
          flexible scheduling to create a cleaning experience that
          truly feels stress-free and professional.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

        {features.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-white/5 border border-pink-500/20 backdrop-blur-xl rounded-[32px] p-8 hover:border-pink-400/40 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center mb-8">

                <Icon size={30} className="text-pink-400" />

              </div>

              <h3 className="text-2xl font-bold mb-5">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-8">
                {item.text}
              </p>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}