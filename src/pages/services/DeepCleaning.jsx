import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceFAQ from "../../components/ServiceFAQ";
import SEO from "../../components/SEO";
import {
  CheckSquare,
  Sparkles,
} from "lucide-react";

import deepImage from "../../assets/hero1.jpeg";

const allRooms = [
  "Cobwebs, ceilings, corners and under furniture",
  "Woodwork, ceiling fans and light fixtures",
  "Light switches and outlet plates",
  "Doors, frames and doorknobs",
  "Windowsills and air vents",
  "Furniture top, front and underneath dusted",
  "Decorative objects and picture frames",
  "Upholstery and cushions vacuumed including under cushions",
  "Rugs and underneath vacuumed and mopped",
  "Baseboards cleaned",
  "Floors vacuumed including edging",
  "Floors vacuumed and wet mopped",
];

const kitchen = [
  "Appliances exterior",
  "Small appliances inside and outside",
  "Microwave inside and outside",
  "Stove surface",
  "Stove hood interior and exterior",
  "Backsplash and sink scrubbed, fixtures polished",
  "Countertops items removed surface and items wiped replaced",
  "Cabinet fronts and handles wiped",
  "Trash cans emptied cleaned and bags replaced",
  "Runners vacuumed and mopped underneath",
  "Floors vacuumed and wet mopped",
];

const bathrooms = [
  "Exhaust fan vents and light fixtures dusted",
  "Vanity items removed wiped and replaced",
  "Sink faucets and mirrors cleaned and polished",
  "Chrome fixtures polished",
  "Cabinet exterior and handles wiped",
  "Toilet cleaned and sanitized",
  "Showers and bathtubs washed scrubbed rinsed",
  "Grout scrubbed where needed",
  "Shower caddy and toiletries wiped",
  "Trash cans emptied cleaned and bags replaced",
  "Baseboards hand wiped",
  "Floor vacuumed and wet mopped",
];

const faqs = [
  {
    question: "How long does a deep cleaning service take?",
    answer:
      "The duration depends on the size and condition of the home, but most deep cleaning appointments take between 4 to 8 hours for detailed top-to-bottom service.",
  },

  {
    question: "Do I need to provide cleaning supplies?",
    answer:
      "No. Our team arrives fully equipped with professional products and tools needed to complete the cleaning efficiently and safely.",
  },

  {
    question: "How often should I schedule deep cleaning?",
    answer:
      "Most clients schedule deep cleaning every few months or before special occasions seasonal resets or moving situations.",
  },

  {
    question: "Is deep cleaning safe for pets and children?",
    answer:
      "Yes. We use safe professional cleaning methods and carefully clean around pets children and delicate household areas.",
  },
];

export default function DeepCleaning() {
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
              DEEP CLEANING SERVICE
            </p>

            <h1 className="text-5xl md:text-7xl font-black text-[#7a1535] leading-tight mb-8">

              Thorough Deep
              <br />
              Cleaning For
              <br />

              <span className="text-pink-500">
                Every Corner
              </span>

            </h1>

            <p className="text-gray-700 text-lg leading-9 mb-10">

              Our deep cleaning service goes beyond the surface to
              remove buildup, hidden dust and neglected dirt from
              every room in your home.

            </p>

            <div className="space-y-5">

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">

                  <Sparkles
                    size={22}
                    className="text-pink-600"
                  />

                </div>

                <p className="text-gray-800 text-lg">
                  Detailed top-to-bottom cleaning
                </p>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">

                  <Sparkles
                    size={22}
                    className="text-pink-600"
                  />

                </div>

                <p className="text-gray-800 text-lg">
                  Perfect for first-time or seasonal cleaning
                </p>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">

                  <Sparkles
                    size={22}
                    className="text-pink-600"
                  />

                </div>

                <p className="text-gray-800 text-lg">
                  Trusted insured cleaning professionals
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div>

            <img
              src={deepImage}
              alt="Deep Cleaning"
              className="
                w-full
                h-[650px]
                object-cover
                rounded-[40px]
                shadow-2xl
              "
            />

          </div>

        </div>

      </section>

      {/* CHECKLIST */}
      <section className="pb-28 px-5 md:px-12">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-20">

            <p className="uppercase tracking-[5px] text-pink-700 text-sm font-semibold mb-5">
              WHAT'S INCLUDED
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-[#7a1535] mb-6">
              Deep Cleaning Checklist
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">
              Every deep cleaning appointment is designed to refresh
              your entire home with detailed attention and premium care.
            </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ALL ROOMS */}
            <div className="bg-white rounded-[35px] p-10 shadow-md">

              <h3 className="text-3xl font-bold text-[#7a1535] mb-10">
                All Rooms
              </h3>

              <div className="space-y-5">

                {allRooms.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >

                    <CheckSquare
                      size={20}
                      className="text-pink-600 mt-1 flex-shrink-0"
                    />

                    <p className="text-gray-700 leading-7">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* KITCHEN */}
            <div className="bg-white rounded-[35px] p-10 shadow-md">

              <h3 className="text-3xl font-bold text-[#7a1535] mb-10">
                Kitchen
              </h3>

              <div className="space-y-5">

                {kitchen.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >

                    <CheckSquare
                      size={20}
                      className="text-pink-600 mt-1 flex-shrink-0"
                    />

                    <p className="text-gray-700 leading-7">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* BATHROOMS */}
            <div className="bg-white rounded-[35px] p-10 shadow-md">

              <h3 className="text-3xl font-bold text-[#7a1535] mb-10">
                Bathrooms
              </h3>

              <div className="space-y-5">

                {bathrooms.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >

                    <CheckSquare
                      size={20}
                      className="text-pink-600 mt-1 flex-shrink-0"
                    />

                    <p className="text-gray-700 leading-7">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

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
            READY FOR A FRESH HOME?
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">

            Let Us Transform
            <br />
            Your Space

          </h2>

          <p className="text-lg md:text-xl leading-9 max-w-3xl mx-auto mb-10 text-pink-100">

            Schedule your premium deep cleaning today and enjoy a
            spotless, refreshed and healthier home environment.

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

              Book Your Free Estimate

            </button>

          </a>

        </div>

      </section>
      <ServiceFAQ
  title="Deep Cleaning Questions"
  subtitle="Everything you may want to know before scheduling your deep cleaning appointment."
  faqs={faqs}
/>

      <Footer />

    </div>
  );
}