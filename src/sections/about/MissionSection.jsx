import { motion } from "framer-motion";

export default function MissionSection() {

  const stats = [
    {
      number: "5★",
      label: "Client Satisfaction",
    },

    {
      number: "100%",
      label: "Attention To Detail",
    },

    {
      number: "Flexible",
      label: "Scheduling",
    },
  ];

  return (

    <section className="bg-[#f8f4f6] py-28 px-5 md:px-12 overflow-hidden">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[5px] text-pink-500 text-sm font-semibold mb-5">

              OUR MISSION

            </p>

            <h2 className="text-5xl md:text-6xl font-black text-black leading-tight mb-8">

              Creating Cleaner
              <br />

              Healthier &
              <span className="text-pink-500">
                {" "}More Comfortable
              </span>

              {" "}Homes

            </h2>

            <p className="text-gray-600 text-lg leading-9 mb-8">

              At Karla's Cleaning LLC, we believe a clean home creates
              peace of mind, comfort and a healthier lifestyle.
              Our goal is to provide dependable premium residential
              cleaning with consistent quality and trusted care.

            </p>

            <p className="text-gray-600 text-lg leading-9">

              Every visit is handled with professionalism,
              attention to detail and genuine respect for our clients'
              homes and routines.

            </p>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8"
          >

            {stats.map((item, index) => (

              <div
                key={index}
                className="bg-white border border-pink-100 rounded-[35px] p-10 shadow-[0_0_40px_rgba(0,0,0,0.05)]"
              >

                <h3 className="text-5xl font-black text-pink-500 mb-4">

                  {item.number}

                </h3>

                <p className="text-gray-700 text-xl font-semibold">

                  {item.label}

                </p>

              </div>

            ))}

          </motion.div>

        </div>

      </div>

    </section>

  );
}