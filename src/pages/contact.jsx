import { useRef, useState } from "react";

import {
  Phone,
  Mail,
  Clock3,
  MapPin,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  const form = useRef();

  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);

    emailjs
      .sendForm(
        "service_z7wbbcl",
        "template_6cwnaor",
        form.current,
        "UiBvByEFFe4dkAwW5"
      )
      .then(
        () => {
          setSending(false);
          setSent(true);
          form.current.reset();
        },
        (error) => {
          setSending(false);

          alert("Something went wrong. Please try again.");

          console.log(error.text);
        }
      );
  };

  return (
    <div className="bg-gradient-to-b from-[#050505] via-[#0b0710] to-black overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative pt-40 pb-24 px-5 md:px-12 overflow-hidden">

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-full h-full bg-pink-500/10 blur-3xl"></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">

          <p className="uppercase tracking-[6px] text-xs md:text-sm mb-6 text-pink-300 font-semibold">
            CONTACT KARLA'S CLEANING LLC
          </p>

          <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-8">
            Request Your <br />
            Personalized Cleaning <br />
            <span className="text-pink-500">Estimate</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 leading-10 max-w-4xl mx-auto">
            We proudly serve Bay Area homes with dependable premium
            residential cleaning. Fill out the form below and we will
            contact you shortly with pricing and scheduling options.
          </p>

        </div>

      </section>

      {/* CONTENT */}
      <section className="px-5 md:px-12 pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* LEFT */}
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
                      karla@wwwkarlascleaning.com
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
                      Monday - Saturday | 7:00 AM - 7:00 PM
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
                home care and attention to every detail. We focus
                on making your home feel cleaner, healthier and
                more comfortable every visit.
              </p>

              <div className="flex flex-wrap gap-4">

                <div className="bg-black/30 border border-white/10 rounded-2xl px-5 py-3 text-white">
                  Trusted Professionals
                </div>

                <div className="bg-black/30 border border-white/10 rounded-2xl px-5 py-3 text-white">
                  Flexible Scheduling
                </div>

                <div className="bg-black/30 border border-white/10 rounded-2xl px-5 py-3 text-white">
                  Detailed Cleaning
                </div>

              </div>

            </div>

          </motion.div>

          {/* FORM */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* GLOW */}
            <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-[40px]"></div>

            <div className="relative bg-white/5 border border-pink-500/20 backdrop-blur-xl rounded-[35px] p-8 md:p-10 shadow-[0_0_60px_rgba(0,0,0,0.4)]">

              <div className="text-center mb-10">

                <div className="w-16 h-16 rounded-full border border-pink-500/30 bg-black/40 flex items-center justify-center text-pink-400 mx-auto mb-5">
                  <Sparkles size={28} />
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  Free Estimate <span className="text-pink-500">Form</span>
                </h3>

                <p className="text-gray-400 text-lg">
                  Fast response. No obligation.
                </p>

              </div>

              <div className="grid gap-5">

                <input
                  name="name"
                  className="bg-black/30 border border-white/10 focus:border-pink-500 outline-none p-5 rounded-2xl text-white placeholder:text-gray-400"
                  placeholder="Full Name"
                  required
                />

                <input
                  name="email"
                  className="bg-black/30 border border-white/10 focus:border-pink-500 outline-none p-5 rounded-2xl text-white placeholder:text-gray-400"
                  placeholder="Email Address"
                  required
                />

                <input
                  name="phone"
                  className="bg-black/30 border border-white/10 focus:border-pink-500 outline-none p-5 rounded-2xl text-white placeholder:text-gray-400"
                  placeholder="Phone Number"
                  required
                />

                <input
                  name="address"
                  className="bg-black/30 border border-white/10 focus:border-pink-500 outline-none p-5 rounded-2xl text-white placeholder:text-gray-400"
                  placeholder="Service Address"
                  required
                />

                <select
                  name="service"
                  className="bg-black/30 border border-white/10 focus:border-pink-500 outline-none p-5 rounded-2xl text-white"
                  required
                >
                  <option value="" className="text-black">
                    Select Cleaning Service
                  </option>

                  <option className="text-black">
                    Standard Cleaning
                  </option>

                  <option className="text-black">
                    Deep Cleaning
                  </option>

                  <option className="text-black">
                    Move In / Move Out
                  </option>

                  <option className="text-black">
                    Post Construction
                  </option>

                  <option className="text-black">
                    Carpet Cleaning
                  </option>

                  <option className="text-black">
                    Extra Inside Services
                  </option>

                </select>

                <textarea
                  name="message"
                  className="bg-black/30 border border-white/10 focus:border-pink-500 outline-none p-5 rounded-2xl h-44 text-white placeholder:text-gray-400"
                  placeholder="Additional Notes / Preferred Date / Home Details..."
                ></textarea>

                <button
                  type="submit"
                  disabled={sending}
                  className="bg-gradient-to-r from-pink-500 to-pink-600 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(236,72,153,0.45)] transition-all duration-300 text-white p-5 rounded-2xl shadow-xl font-semibold text-lg"
                >
                  {sending
                    ? "Sending Request..."
                    : "Submit Estimate Request ✨"}
                </button>

                {sent && (
                  <p className="text-green-400 font-semibold text-center text-lg">
                    ✅ Request sent successfully! We will contact you shortly.
                  </p>
                )}

              </div>

            </div>

          </motion.form>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Contact;