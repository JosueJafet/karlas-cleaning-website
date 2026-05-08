import { motion } from "framer-motion";
import before from "../../assets/before.png";
import after from "../../assets/after.png";
import antes from "../../assets/antes.png";
import despues from "../../assets/despues.png";

export default function BeforeAfterSection() {

  const comparisons = [

    {
      before: before,
      after: after,
    },

    {
      before: antes,
      after: despues,
    },

  ];

  return (

    <section className="relative overflow-hidden bg-gradient-to-b from-black via-[#12040a] to-[#050505] py-28 px-5 md:px-12">

      {/* GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-pink-500/10 blur-[180px] rounded-full"></div>

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

            REAL TRANSFORMATIONS

          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-black text-white leading-tight mb-8"
          >

            Before &
            <span className="text-pink-500">
              {" "}After
            </span>

          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg leading-9 max-w-3xl mx-auto"
          >

            See the difference premium residential cleaning can make.
            Every visit is focused on detail, freshness and comfort.

          </motion.p>

        </div>

        {/* COMPARISONS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {comparisons.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >

              {/* BEFORE */}
              <div className="relative overflow-hidden rounded-[30px] group">

                <div className="absolute top-5 left-5 z-20 bg-black/70 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm tracking-[3px] uppercase border border-white/10">

                  Before

                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>

                <img
                  src={item.before}
                  alt="before"
                  className="h-[420px] w-full object-cover group-hover:scale-105 transition-all duration-500"
                />

              </div>

              {/* AFTER */}
              <div className="relative overflow-hidden rounded-[30px] group">

                <div className="absolute top-5 left-5 z-20 bg-pink-500/80 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm tracking-[3px] uppercase">

                  After

                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent z-10"></div>

                <img
                  src={item.after}
                  alt="after"
                  className="h-[420px] w-full object-cover group-hover:scale-105 transition-all duration-500"
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>

  );
}