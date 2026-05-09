import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceFAQ from "../../components/ServiceFAQ";
import SEO from "../../components/SEO";

import {
  Sparkles,
  ShieldCheck,
  Home,
} from "lucide-react";

import housekeepingImage from "../../assets/hero4.jpeg";

const supportItems = [
  {
    title: "Laundry and linens",
    description:
      "From washing and ironing to preparing fresh comfortable beds.",
  },

  {
    title: "Kitchen support",
    description:
      "Dishwashing, polishing surfaces and helping maintain an organized kitchen.",
  },

  {
    title: "Household organization",
    description:
      "Tidying rooms, organizing closets and keeping essentials in order.",
  },
];

const faqs = [
  {
    question: "What does housekeeping service include?",
    answer:
      "Our housekeeping services may include detailed cleaning organization laundry assistance bed preparation and personalized household upkeep depending on your needs.",
  },

  {
    question: "Can housekeeping services be customized?",
    answer:
      "Yes. Every household has different routines and priorities so we tailor housekeeping visits around your preferences and lifestyle.",
  },

  {
    question: "How often can housekeeping be scheduled?",
    answer:
      "We offer flexible scheduling including weekly multiple-times-per-week and custom recurring housekeeping arrangements.",
  },

  {
    question: "Do I need to provide cleaning products?",
    answer:
      "No. Our team arrives fully equipped with professional supplies and products needed for detailed housekeeping care.",
  },
];

export default function Housekeeping() {
  return (
    <div className="bg-[#f7f4f2] overflow-hidden">

        <SEO
  title="Deep Cleaning Services | Karla's Cleaning LLC"
  description="Professional deep cleaning services for luxury homes and apartments in the Bay Area. Detailed top-to-bottom cleaning tailored to your home."
  keywords="deep cleaning services, luxury cleaning, residential cleaning, Bay Area cleaning, detailed house cleaning"
/>

      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 px-5 md:px-12">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <p className="uppercase tracking-[5px] text-pink-700 text-sm font-semibold mb-5">
              HOUSEKEEPING SERVICES
            </p>

            <h1 className="text-5xl md:text-7xl font-black text-[#7a1535] leading-tight mb-8">

              Personalized
              <br />

              <span className="text-pink-500">
                Luxury Care
              </span>

              <br />
              For Your Home

            </h1>

            <p className="text-gray-700 text-lg leading-9 mb-10">

              Our housekeeping service combines detailed cleaning,
              organization and daily home support designed for
              busy lifestyles and premium residences.

            </p>

            <div className="space-y-6">

              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">

                  <Sparkles
                    size={24}
                    className="text-pink-600"
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-[#7a1535] mb-2">
                    Customized Cleaning
                  </h3>

                  <p className="text-gray-700 leading-8 text-lg">

                    We tailor every visit based on your preferences,
                    routines and household needs.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">

                  <ShieldCheck
                    size={24}
                    className="text-pink-600"
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-[#7a1535] mb-2">
                    Trusted Professionals
                  </h3>

                  <p className="text-gray-700 leading-8 text-lg">

                    Reliable discreet and highly detailed housekeeping
                    for high-end homes and private properties.

                  </p>

                </div>

              </div>

              <div className="flex items-start gap-4">

                <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">

                  <Home
                    size={24}
                    className="text-pink-600"
                  />

                </div>

                <div>

                  <h3 className="text-2xl font-bold text-[#7a1535] mb-2">
                    Fine Finish Care
                  </h3>

                  <p className="text-gray-700 leading-8 text-lg">

                    Extra attention for delicate surfaces hardwood floors,
                    luxury furniture and decorative details.

                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* IMAGE */}
          <div>

            <img
              src={housekeepingImage}
              alt="Housekeeping Service"
              className="
                w-full
                h-[700px]
                object-cover
                rounded-[40px]
                shadow-2xl
              "
            />

          </div>

        </div>

      </section>

      {/* SUPPORT SECTION */}
      <section className="pb-28 px-5 md:px-12">

        <div className="
          max-w-7xl
          mx-auto
          bg-white
          rounded-[40px]
          p-10
          md:p-16
          shadow-xl
        ">

          <div className="mb-14">

            <p className="uppercase tracking-[5px] text-pink-700 text-sm font-semibold mb-5">
              SOME WAYS WE HELP
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-[#7a1535] leading-tight">
              Everyday Support
              <br />
              With Luxury Attention
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {supportItems.map((item, index) => (

              <div
                key={index}
                className="
                  bg-[#faf7f5]
                  rounded-[30px]
                  p-8
                  border
                  border-[#efe5e5]
                "
              >

                <h3 className="text-2xl font-black text-[#7a1535] mb-5">
                  {item.title}
                </h3>

                <p className="text-gray-700 text-lg leading-8">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="pb-28 px-5 md:px-12">

        <div className="
          max-w-6xl
          mx-auto
          bg-gradient-to-r
          from-pink-600
          to-pink-500
          rounded-[40px]
          px-8
          md:px-16
          py-20
          text-center
          text-white
        ">

          <p className="uppercase tracking-[5px] text-sm mb-5 font-semibold">
            PREMIUM HOUSEKEEPING
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">

            Enjoy A Beautifully
            <br />
            Maintained Home

          </h2>

          <p className="text-lg md:text-xl leading-9 max-w-3xl mx-auto mb-10 text-pink-100">

            Experience dependable luxury housekeeping designed
            to simplify your lifestyle and keep every room fresh,
            organized and elegant.

          </p>

          <a href="/contact">

            <button className="
              bg-white
              text-pink-600
              hover:bg-pink-100
              transition-all
              duration-300
              px-10
              py-5
              rounded-2xl
              text-lg
              font-bold
              shadow-xl
            ">

              Schedule Housekeeping

            </button>

          </a>

        </div>

      </section>

      <ServiceFAQ
  title="Housekeeping Questions"
  subtitle="Helpful answers about personalized housekeeping services scheduling and home care."
  faqs={faqs}
/>

      <Footer />

    </div>
  );
}