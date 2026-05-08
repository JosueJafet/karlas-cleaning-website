import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {

  return (

    <a
      href="https://wa.me/14088499404"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-[999]
        group
      "
    >

      <div
        className="
          flex
          items-center
          gap-3
          bg-[#25D366]
          hover:bg-[#1ebe5d]
          text-white
          px-5
          py-4
          rounded-full
          shadow-[0_0_35px_rgba(37,211,102,0.45)]
          transition-all
          duration-300
          hover:scale-105
        "
      >

        <MessageCircle size={26} />

        <span className="font-semibold hidden sm:block">
          WhatsApp Us
        </span>

      </div>

    </a>

  );
}