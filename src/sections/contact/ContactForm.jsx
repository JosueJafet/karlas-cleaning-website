import { useRef, useState } from "react";

import { Sparkles } from "lucide-react";

import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function ContactForm() {

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
    <motion.form
      ref={form}
      onSubmit={sendEmail}
      initial={{ opacity: 0, x: 35 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative w-full"
    >

      {/* GLOW */}
      <div className="absolute inset-0 bg-pink-500/20 blur-3xl rounded-[40px]"></div>

      <div
        className="
          relative
          w-full
          max-w-full
          overflow-hidden
          bg-white/5
          border
          border-pink-500/20
          backdrop-blur-xl
          rounded-[35px]
          p-5
          sm:p-6
          md:p-10
          shadow-[0_0_60px_rgba(0,0,0,0.4)]
        "
      >

        <div className="text-center mb-10">

          <div className="w-16 h-16 rounded-full border border-pink-500/30 bg-black/40 flex items-center justify-center text-pink-400 mx-auto mb-5">
            <Sparkles size={28} />
          </div>

          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Free Estimate <span className="text-pink-500">Form</span>
          </h3>

          <p className="text-gray-400 text-lg">
            Fast response. No obligation.
          </p>

        </div>

        <div className="grid gap-5">

          <input
            name="name"
            placeholder="Full Name"
            required
            className="
              w-full
              min-w-0
              bg-black/30
              border
              border-white/10
              focus:border-pink-500
              outline-none
              p-5
              rounded-2xl
              text-white
              placeholder:text-gray-400
            "
          />

          <input
            name="email"
            placeholder="Email Address"
            required
            className="
              w-full
              min-w-0
              bg-black/30
              border
              border-white/10
              focus:border-pink-500
              outline-none
              p-5
              rounded-2xl
              text-white
              placeholder:text-gray-400
            "
          />

          <input
            name="phone"
            placeholder="Phone Number"
            required
            className="
              w-full
              min-w-0
              bg-black/30
              border
              border-white/10
              focus:border-pink-500
              outline-none
              p-5
              rounded-2xl
              text-white
              placeholder:text-gray-400
            "
          />

          <input
            name="address"
            placeholder="Service Address"
            required
            className="
              w-full
              min-w-0
              bg-black/30
              border
              border-white/10
              focus:border-pink-500
              outline-none
              p-5
              rounded-2xl
              text-white
              placeholder:text-gray-400
            "
          />

          <select
            name="service"
            required
            className="
              w-full
              min-w-0
              bg-black/30
              border
              border-white/10
              focus:border-pink-500
              outline-none
              p-5
              rounded-2xl
              text-white
            "
          >

            <option value="" className="text-black">
              Select Cleaning Service
            </option>

            <option className="text-black">
              One-Time Deep Cleaning Services
            </option>

            <option className="text-black">
              Recurring Cleaning Services
            </option>

            <option className="text-black">
              Move-in / Move-out Services
            </option>

            <option className="text-black">
              Housekeeping Services
            </option>

            <option className="text-black">
  Extra Inside Services
</option>

          </select>

          <textarea
            name="message"
            placeholder="Additional Notes / Preferred Date / Home Details..."
            className="
              w-full
              min-w-0
              bg-black/30
              border
              border-white/10
              focus:border-pink-500
              outline-none
              p-5
              rounded-2xl
              h-44
              text-white
              placeholder:text-gray-400
              resize-none
            "
          ></textarea>

          <button
            type="submit"
            disabled={sending}
            className="
              w-full
              bg-gradient-to-r
              from-pink-500
              to-pink-600
              hover:scale-[1.02]
              hover:shadow-[0_0_35px_rgba(236,72,153,0.45)]
              transition-all
              duration-300
              text-white
              p-5
              rounded-2xl
              shadow-xl
              font-semibold
              text-lg
            "
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
  );
}