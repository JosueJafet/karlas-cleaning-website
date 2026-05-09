import { useState } from "react";

import {
  ChevronDown,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

export default function ServiceFAQ({ title, subtitle, faqs }) {

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {

    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }

  };

  return (

    <section className="pb-28 px-5 md:px-12">

      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-pink-700 text-sm font-semibold mb-5">
            FAQ
          </p>

          <h2 className="text-5xl md:text-6xl font-black text-[#7a1535] leading-tight mb-6">

            {title}

          </h2>

          <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto">

            {subtitle}

          </p>

        </div>

        {/* FAQ ITEMS */}
        <div className="space-y-5">

          {faqs.map((faq, index) => {

            const isOpen = openIndex === index;

            return (

              <div
                key={index}
                className="
                  bg-white
                  border
                  border-[#efe5e5]
                  rounded-[28px]
                  overflow-hidden
                  shadow-sm
                "
              >

                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    gap-6
                    px-7
                    py-6
                    text-left
                  "
                >

                  <h3 className="
                    text-xl
                    md:text-2xl
                    font-bold
                    text-[#7a1535]
                    leading-8
                  ">

                    {faq.question}

                  </h3>

                  <div className={`
                    w-11
                    h-11
                    rounded-full
                    bg-pink-50
                    flex
                    items-center
                    justify-center
                    flex-shrink-0
                    transition-all
                    duration-300
                    ${isOpen ? "rotate-180 bg-pink-500 text-white" : "text-pink-600"}
                  `}>

                    <ChevronDown size={22} />

                  </div>

                </button>

                <AnimatePresence>

                  {isOpen && (

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >

                      <div className="px-7 pb-7">

                        <p className="
                          text-gray-700
                          text-lg
                          leading-9
                          max-w-4xl
                        ">

                          {faq.answer}

                        </p>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

            );

          })}

        </div>

      </div>

    </section>

  );
}