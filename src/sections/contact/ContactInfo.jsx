import {
  Phone,
  Mail,
  Clock3,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import { motion } from "framer-motion";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -35 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="space-y-8"
    >

      {/* CONTACT CARD */}
      <div className="bg-white/5 border border-pink-500/20 backdrop-blur-xl rounded-[35px] p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.35)]">

        <h3 className="text-4xl md:text-5xl font-bold text-white mb-10">
          Get In <span className="text-pink-500">Touch</span>
        </h3>

        <div className="space-y-8 text-lg">

          <div className="flex items-center gap-5">

            <div className="w-14 h-14 rounded-full border border-pink-500/30 bg-black/40 flex items-center justify-center text-pink-400">
              <Phone size={24} />
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-1">
                Phone Number
              </p>

              <p className="text-white">
                +1 (408) 849-9404
              </p>
            </div>

          </div>

          <div className="flex items-center gap-5">

            <div className="w-14 h-14 rounded-full border border-pink-500/30 bg-black/40 flex items-center justify-center text-pink-400">
              <Mail size={24} />
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-1">
                Email Address
              </p>

              <p className="text-white break-all">
                karlaramos4@hotmail.com
              </p>
            </div>

          </div>

          <div className="flex items-center gap-5">

            <div className="w-14 h-14 rounded-full border border-pink-500/30 bg-black/40 flex items-center justify-center text-pink-400">
              <Clock3 size={24} />
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-1">
                Working Hours
              </p>

              <p className="text-white">
                Monday - Saturday
              </p>
            </div>

          </div>

          <div className="flex items-center gap-5">

            <div className="w-14 h-14 rounded-full border border-pink-500/30 bg-black/40 flex items-center justify-center text-pink-400">
              <MapPin size={24} />
            </div>

            <div>
              <p className="text-gray-400 text-sm mb-1">
                Service Area
              </p>

              <p className="text-white">
                Bay Area, California
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* WHY US */}
      <div className="bg-gradient-to-b from-pink-500/10 to-transparent border border-pink-500/20 backdrop-blur-xl rounded-[35px] p-8 md:p-10 shadow-[0_0_50px_rgba(236,72,153,0.12)]">

        <div className="flex items-center gap-4 mb-6">

          <div className="w-14 h-14 rounded-full border border-pink-500/30 bg-black/40 flex items-center justify-center text-pink-400">
            <ShieldCheck size={24} />
          </div>

          <h4 className="text-3xl font-bold text-white">
            Why Clients Love Us
          </h4>

        </div>

        <p className="text-gray-300 leading-9 text-lg mb-8">
          Fast communication, flexible appointments, trusted
          home care and attention to every detail.
        </p>

      </div>

    </motion.div>
  );
}

