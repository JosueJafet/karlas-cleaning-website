import {
  Phone,
  Mail,
  Clock3,
  MapPin,
  Calendar,
  BadgeCheck,
  Heart,
} from "lucide-react";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0d0712] to-black border-t border-white/10 text-white px-5 md:px-12 py-16 overflow-hidden">

      <div className="max-w-[1700px] mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">

          {/* BRAND */}
          <div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
              Karla's <span className="text-pink-500">Cleaning LLC</span>
            </h3>

            <p className="text-gray-400 leading-8 mb-8">
              Premium residential cleaning services delivering spotless homes,
              trusted care and flexible scheduling across the Bay Area.
            </p>

            {/* SOCIALS */}
            <div className="flex gap-4">

              <div className="w-12 h-12 rounded-full border border-pink-500/40 flex items-center justify-center bg-black/30 backdrop-blur-md hover:bg-pink-500 hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg">
                <BadgeCheck size={20} />
              </div>

              <div className="w-12 h-12 rounded-full border border-pink-500/40 flex items-center justify-center bg-black/30 backdrop-blur-md hover:bg-pink-500 hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg">
                <Heart size={20} />
              </div>

            </div>

          </div>

          {/* LINKS */}
          <div>

            <h4 className="text-2xl font-semibold text-pink-400 mb-6">
              Quick Links
            </h4>

            <div className="flex flex-col gap-4 text-gray-300">

              <Link
                to="/"
                className="hover:text-pink-400 transition duration-300"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="hover:text-pink-400 transition duration-300"
              >
                About
              </Link>

              <Link
                to="/services"
                className="hover:text-pink-400 transition duration-300"
              >
                Services
              </Link>

              <Link
                to="/faq"
                className="hover:text-pink-400 transition duration-300"
              >
                FAQ
              </Link>

              <Link
                to="/contact"
                className="hover:text-pink-400 transition duration-300"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* HOURS */}
          <div>

            <h4 className="text-2xl font-semibold text-pink-400 mb-6">
              Business Hours
            </h4>

            <div className="space-y-5 text-gray-300">

              <div className="flex gap-3">

                <Clock3 size={20} className="text-pink-400 mt-1" />

                <div>
                  <p>Mon - Fri</p>
                  <p>8:00 AM - 5:00 PM</p>
                </div>

              </div>

              <div className="flex gap-3">

                <Calendar size={20} className="text-pink-400 mt-1" />

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
                <Phone size={18} className="text-pink-400" />
                <p>+1 (408) 849-9404</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-pink-400" />
                <p>karlaramos4@hotmail.com</p>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={18} className="text-pink-400" />
                <p>Bay Area, California</p>
              </div>

            </div>

          </div>

          {/* REVIEW CARD */}
          <div>

            <div className="border border-pink-500/40 rounded-3xl p-8 bg-gradient-to-b from-pink-500/10 to-transparent backdrop-blur-md text-center h-full flex flex-col justify-center shadow-[0_0_40px_rgba(236,72,153,0.12)]">

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

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">

          <p>
            © 2026 Karla's Cleaning LLC. All rights reserved.
          </p>

          <div className="flex gap-6">

            <p className="hover:text-pink-400 transition cursor-pointer">
              Privacy Policy
            </p>

            <p className="hover:text-pink-400 transition cursor-pointer">
              Terms & Conditions
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;