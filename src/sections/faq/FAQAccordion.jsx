import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  Plus,
  Minus,
} from "lucide-react";

export default function FAQAccordion() {

  const faqs = [

    {
      question: "What areas do you serve?",
      answer:
        "We proudly provide premium residential cleaning services throughout the Bay Area, California.",
    },

    {
      question: "Do I need to be home during the cleaning?",
      answer:
        "Not at all. Many clients provide access instructions and return to a freshly cleaned home.",
    },

    {
      question: "Do you bring your own cleaning supplies?",
      answer:
        "Yes. We arrive fully equipped with professional residential cleaning supplies and tools.",
    },

    {
      question: "How do I book a cleaning service?",
      answer:
        "You can request a free estimate through our contact page or call us directly for scheduling.",
    },

    {
      question: "What types of cleaning services do you offer?",
      answer:
        "We offer standard cleaning, deep cleaning, move in/move out cleaning, post construction cleaning and more.",
    },

    {
      question: "How long does a cleaning appointment take?",
      answer:
        "Service duration depends on the size of the home and the type of cleaning requested.",
    },

  ];

  const [active, setActive] = useState(null);

  const toggleFAQ = (index) => {
    setActive(active === index ? null : index);
  };

  return (

    <section className="bg-[#f8f4f6] text-black py-28 px-5 md:px-12">

      <div className="max-w-5xl mx-auto">

        <div className="space-y-6">

          {faqs.map((faq, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="bg-white border border-pink-100 rounded-[30px] overflow-hidden shadow-[0_0_35px_rgba(0,0,0,0.05)]"
            >

              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between gap-6 text-left px-8 py-7"
              >

                <h3 className="text-xl md:text-2xl font-bold">

                  {faq.question}

                </h3>

                <div className="min-w-[50px] h-[50px] rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-500">

                  {active === index ? (
                    <Minus size={22} />
                  ) : (
                    <Plus size={22} />
                  )}

                </div>

              </button>

              <AnimatePresence>

                {active === index && (

                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >

                    <div className="px-8 pb-8 text-gray-600 text-lg leading-8">

                      {faq.answer}

                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}