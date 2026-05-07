import {
  Phone,
  ShieldCheck,
  Star,
  Sparkles,
  Mail,
  MapPin,
  Clock3,
  Calendar,
  BadgeCheck,
  Heart,
} from "lucide-react";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero3.jpeg";
import hero4 from "../assets/hero4.jpeg";
import hero5 from "../assets/hero5.jpeg";
import hero9 from "../assets/hero9.png";

function Home() {
  const gallery = [hero1, hero2, hero3, hero4, hero5];

  return (
    <div className="bg-gradient-to-b from-[#050505] via-[#0b0710] to-black overflow-x-hidden w-full">

      {/* NAVBAR */}
      <div className="absolute top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <Navbar />
      </div>

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

      {/* GALLERY */}
      <section className="bg-gradient-to-b from-[#050505] to-[#0d0712] px-5 md:px-12 py-24">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[5px] text-pink-400 text-sm mb-4 font-semibold">
            REAL CLIENT RESULTS
          </p>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Spotless Luxury Spaces
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-8">
            Premium residential cleaning designed to make every room feel fresh,
            elegant and beautifully maintained.
          </p>

        </div>
<div className="overflow-hidden relative">

  <div className="flex gap-6 animate-[scroll_25s_linear_infinite] w-max">

    {[...gallery, ...gallery].map((img, index) => (
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        key={index}
        src={img}
        alt="gallery"
        className="h-56 sm:h-64 md:h-80 w-[260px] sm:w-[300px] md:w-[320px] object-cover rounded-[24px] md:rounded-[30px] border border-white/10 hover:border-pink-500/50 shadow-2xl flex-shrink-0"
      />
    ))}

  </div>

</div>

      </section>

      {/* FOOTER */}
      <footer className="bg-gradient-to-b from-[#0d0712] to-black border-t border-white/10 px-5 md:px-12 py-16 text-white">

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-10 md:gap-12">

          {/* BRAND */}
          <div>

            <h3 className="text-4xl font-bold text-pink-500 mb-5">
              Karla's Cleaning LLC
            </h3>

            <p className="text-gray-400 leading-8 mb-8">
              Premium residential cleaning services delivering spotless homes,
              trusted care and flexible scheduling across the Bay Area.
            </p>

            <div className="flex gap-4">

              <div className="w-12 h-12 rounded-full border border-pink-500/40 flex items-center justify-center hover:bg-pink-500 transition cursor-pointer">
                <BadgeCheck />
              </div>

              <div className="w-12 h-12 rounded-full border border-pink-500/40 flex items-center justify-center hover:bg-pink-500 transition cursor-pointer">
                <Heart />
              </div>

            </div>

          </div>

          {/* LINKS */}
          <div>

            <h4 className="text-2xl font-semibold text-pink-400 mb-6">
              Quick Links
            </h4>

            <div className="flex flex-col gap-4 text-gray-300">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link>
            </div>

          </div>

          {/* HOURS */}
          <div>

            <h4 className="text-2xl font-semibold text-pink-400 mb-6">
              Business Hours
            </h4>

            <div className="space-y-5 text-gray-300">

              <div className="flex gap-3">

                <Clock3 />

                <div>
                  <p>Mon - Sat</p>
                  <p>7:00 AM - 7:00 PM</p>
                </div>

              </div>

              <div className="flex gap-3">

                <Calendar />

                <div>
                  <p>Sundays</p>
                  <p>By Appointment Only</p>
                </div>

              </div>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h4 className="text-2xl font-semibold text-pink-400 mb-6">
              Contact Info
            </h4>

            <div className="space-y-5 text-gray-300">

              <div className="flex items-center gap-3">
                <Phone size={20} />
                <p>+1 (408) 849-9404</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} />
                <p>karlarramos4@hotmail.com</p>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={20} />
                <p>Bay Area, California</p>
              </div>

            </div>

          </div>

          {/* REVIEW */}
          <div>

            <div className="border border-pink-500/40 rounded-3xl p-8 bg-gradient-to-b from-pink-500/10 to-transparent backdrop-blur-md text-center h-full flex flex-col justify-center">

              <div className="text-5xl mb-5">
                ⭐
              </div>

              <h4 className="text-2xl font-bold text-pink-400 mb-4">
                We love our clients!
              </h4>

              <p className="text-gray-300 leading-8 mb-5">
                Check out our 5-star reviews on Google.
              </p>

              <div className="text-yellow-400 text-3xl tracking-[6px]">
                ★★★★★
              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">

          <p>
            © 2025 Karla's Cleaning LLC. All rights reserved.
          </p>

          <div className="flex gap-6">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>

        </div>

      </footer>

    </div>
  );
}

export default Home;