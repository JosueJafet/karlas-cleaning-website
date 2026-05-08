import {
  Phone,
  ShieldCheck,
  Star,
  Sparkles,
  Clock3,
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import hero9 from "../../assets/hero9.png";

export default function HeroSection() {
  return (
    <>
      {/* HERO */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
        style={{ backgroundImage: `url(${hero9})` }}
      >

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-[#12060f]/75 to-black/90"></div>

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-full h-full bg-pink-500/10 blur-3xl"></div>

        <div className="relative z-10 w-full max-w-[1600px] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-20 px-4 sm:px-6 md:px-10 lg:px-14 pt-32 pb-20 items-center overflow-hidden">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >

            <p className="uppercase tracking-[6px] text-xs md:text-sm mb-6 text-pink-300 font-semibold">
              TRUSTED • INSURED • PREMIUM RESULTS
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6 md:mb-8 max-w-3xl break-words">
              Luxury Cleaning <br />
              That Makes Your <br />
              Home <span className="text-pink-500">Feel New Again</span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg xl:text-xl text-gray-200 leading-7 md:leading-9 max-w-2xl mb-8 md:mb-10">
              Karla's Cleaning LLC delivers dependable high-detail residential
              cleaning across the Bay Area, helping busy homeowners enjoy
              healthier, fresher and beautifully maintained spaces.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mb-12">

              <Link to="/contact">
                <button className="bg-gradient-to-r from-pink-500 to-pink-600 hover:scale-105 transition-all duration-300 text-white px-10 py-5 rounded-2xl shadow-[0_0_40px_rgba(236,72,153,0.45)] font-semibold text-lg">
                  Book Your Free Estimate ✨
                </button>
              </Link>

              <a
  href="https://wa.me/14088499404"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="border border-white/20 bg-white/5 backdrop-blur-md hover:bg-green-500 hover:border-green-500 transition-all duration-300 text-white px-8 py-5 rounded-2xl text-lg font-semibold flex items-center gap-3">
    
    <Phone size={20} />
    
    WhatsApp Us

  </button>
</a>

            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">

              <div className="flex flex-col gap-3">

                <div className="w-14 h-14 rounded-full border border-pink-500/40 bg-black/40 backdrop-blur-md flex items-center justify-center text-pink-400 shadow-lg">
                  <ShieldCheck size={24} />
                </div>

                <div>
                  <h4 className="font-semibold">Insured & Bonded</h4>

                  <p className="text-gray-400 text-sm">
                    Your home is in safe hands
                  </p>
                </div>

              </div>

              <div className="flex flex-col gap-3">

                <div className="w-14 h-14 rounded-full border border-pink-500/40 bg-black/40 backdrop-blur-md flex items-center justify-center text-pink-400 shadow-lg">
                  <Star size={24} />
                </div>

                <div>
                  <h4 className="font-semibold">5-Star Satisfaction</h4>

                  <p className="text-gray-400 text-sm">
                    Hundreds of happy clients
                  </p>
                </div>

              </div>

              <div className="flex flex-col gap-3">

                <div className="w-14 h-14 rounded-full border border-pink-500/40 bg-black/40 backdrop-blur-md flex items-center justify-center text-pink-400 shadow-lg">
                  <Sparkles size={24} />
                </div>

                <div>
                  <h4 className="font-semibold">Detailed Cleaning</h4>

                  <p className="text-gray-400 text-sm">
                    We focus on the details
                  </p>
                </div>

              </div>

              <div className="flex flex-col gap-3">

                <div className="w-14 h-14 rounded-full border border-pink-500/40 bg-black/40 backdrop-blur-md flex items-center justify-center text-pink-400 shadow-lg">
                  <Clock3 size={24} />
                </div>

                <div>
                  <h4 className="font-semibold">Flexible Scheduling</h4>

                  <p className="text-gray-400 text-sm">
                    Appointments that work for you
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

          {/* RIGHT FORM */}
          {/* RIGHT SIDE PREMIUM CARD */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  className="relative w-full max-w-full"
>

  {/* GLOW EFFECT */}
  <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-[40px]"></div>

  {/* CARD */}
  <div className="relative bg-black/35 backdrop-blur-2xl border border-pink-500/30 shadow-[0_0_60px_rgba(236,72,153,0.25)] rounded-[28px] md:rounded-[36px] p-5 sm:p-7 md:p-10 text-white overflow-hidden w-full">

    {/* LIGHT EFFECT */}
    <div className="absolute top-0 right-0 w-52 h-52 bg-pink-500/10 blur-3xl rounded-full"></div>

    <div className="relative z-10">

      {/* SMALL TAG */}
      <p className="uppercase tracking-[5px] text-pink-300 text-sm mb-4 font-semibold">
        PREMIUM HOME CARE
      </p>

      {/* TITLE */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5 md:mb-6 break-words">
        Experience A <span className="text-pink-500">Spotless Home</span>
        <br />
        Without The Stress
      </h2>

      {/* DESCRIPTION */}
      <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-7 md:leading-8 mb-8 md:mb-10">
        From recurring cleaning to deep luxury detailing,
        Karla's Cleaning LLC delivers reliable premium care
        tailored to your lifestyle and schedule.
      </p>

      {/* BENEFITS */}
      <div className="space-y-5 md:space-y-6 mb-10 md:mb-12">

        {/* BENEFIT 1 */}
        <div className="flex items-start gap-4">

          <div className="w-14 h-14 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center flex-shrink-0">
            <ShieldCheck className="text-pink-400" size={24} />
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-1">
              Trusted & Fully Insured
            </h4>

            <p className="text-gray-400 leading-7">
              Professional residential cleaning with dependable care
              and attention to detail every visit.
            </p>
          </div>

        </div>

        {/* BENEFIT 2 */}
        <div className="flex items-start gap-4">

          <div className="w-14 h-14 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center flex-shrink-0">
            <Sparkles className="text-pink-400" size={24} />
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-1">
              Luxury-Level Results
            </h4>

            <p className="text-gray-400 leading-7">
              We refresh every room with high-end detailed cleaning
              designed to make your home shine beautifully.
            </p>
          </div>

        </div>

        {/* BENEFIT 3 */}
        <div className="flex items-start gap-4">

          <div className="w-14 h-14 rounded-full bg-pink-500/10 border border-pink-500/30 flex items-center justify-center flex-shrink-0">
            <Clock3 className="text-pink-400" size={24} />
          </div>

          <div>
            <h4 className="font-semibold text-xl mb-1">
              Flexible Scheduling
            </h4>

            <p className="text-gray-400 leading-7">
              Weekly, biweekly, monthly or one-time appointments
              available across the Bay Area.
            </p>
          </div>

        </div>

      </div>

      {/* CTA BUTTONS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 mt-8 md:mt-10">

  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
    <h4 className="text-3xl font-bold text-pink-400">5★</h4>
    <p className="text-white font-semibold mt-2">
      Rated Cleaning Service
    </p>
    <span className="text-gray-300 text-sm">
      Trusted by Bay Area homeowners
    </span>
  </div>

  <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md">
    <h4 className="text-3xl font-bold text-pink-400">24h</h4>
    <p className="text-white font-semibold mt-2">
      Fast Response
    </p>
    <span className="text-gray-300 text-sm">
      Quick scheduling & support
    </span>
  </div>

</div>

    </div>

  </div>

</motion.div>

        </div>

      </section>
    </>
  );
}