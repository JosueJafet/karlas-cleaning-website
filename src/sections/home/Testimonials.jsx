import { motion } from "framer-motion";

import TestimonialCard from "../../components/TestimonialCard";

export default function Testimonials() {

  const testimonials = [
    {
      name: "Emily Johnson",
      service: "Deep Cleaning",
      review:
        "Absolutely amazing service. My house has never looked this spotless before.",
    },

    {
      name: "Michael Smith",
      service: "Move Out Cleaning",
      review:
        "Professional, fast and super detailed. They exceeded my expectations.",
    },

    {
      name: "Sophia Martinez",
      service: "Recurring Cleaning",
      review:
        "Very trustworthy team and excellent communication every visit.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#fff0f7] via-white to-[#fff7fb] px-5 md:px-12 py-28">

      <div className="text-center mb-20">

        <p className="uppercase tracking-[5px] text-pink-500 font-semibold mb-5">
          CLIENT TESTIMONIALS
        </p>

        <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
          What Our Clients Say
        </h2>

        <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
          We focus on delivering premium residential cleaning
          experiences with attention to detail, trust and
          consistency every visit.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <TestimonialCard
              name={item.name}
              service={item.service}
              review={item.review}
            />
          </motion.div>
        ))}

      </div>

    </section>
  );
}