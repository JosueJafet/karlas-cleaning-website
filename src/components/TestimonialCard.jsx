import { Star } from "lucide-react";
import { motion } from "framer-motion";

export default function TestimonialCard({
  name,
  review,
  service,
}) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-[32px] p-8 border border-pink-200/60 shadow-[0_15px_45px_rgba(236,72,153,0.12)] hover:shadow-[0_20px_60px_rgba(236,72,153,0.18)] transition-all duration-300 h-full"
    >
      <div className="flex items-center gap-1 text-yellow-400 mb-5">
        <Star fill="currentColor" size={20} />
        <Star fill="currentColor" size={20} />
        <Star fill="currentColor" size={20} />
        <Star fill="currentColor" size={20} />
        <Star fill="currentColor" size={20} />
      </div>

      <p className="text-gray-600 leading-8 text-lg mb-8">
        "{review}"
      </p>

      <div className="border-t border-gray-200 pt-5">
        <h4 className="text-xl font-bold text-black">
          {name}
        </h4>

        <p className="text-pink-500 font-medium mt-1">
          {service}
        </p>
      </div>
    </motion.div>
  );
}