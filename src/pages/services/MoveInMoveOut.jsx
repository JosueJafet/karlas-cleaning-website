import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceFAQ from "../../components/ServiceFAQ";
import SEO from "../../components/SEO";


import {
  CheckSquare,
  Truck,
} from "lucide-react";

import moveImage from "../../assets/hero18.jpeg";

const moveBenefits = [
  "Perfect for moving into a fresh new home",
  "Detailed reset before handing over property",
  "Designed for empty homes and apartments",
  "Stress-free moving experience",
];

const allRooms = [
  "Cobwebs, ceilings, corners and under furniture",
  "Woodwork, ceiling fans and light fixtures",
  "Light switches and outlet plates",
  "Doors, frames and doorknobs",
  "Windowsills and air vents",
  "Furniture top, front and underneath dusted",
  "Decorative objects and picture frames",
  "Rugs and underneath vacuumed and mopped",
  "Baseboards hand cleaned",
  "Floors vacuumed including edging",
  "Floors vacuumed and wet mopped",
];

const kitchen = [
  "Appliances inside and outside",
  "Microwave inside and outside",
  "Stove surface",
  "Stove hood interior and exterior",
  "Backsplash and sink scrubbed, fixtures polished",
  "Countertops Wiped and Carved",
  "Inside Empthy Kitchen Cabinet exterior and interior handles wiped",
  "Trash cans emptied cleaned and bags replaced",
  "Runners vacuumed and mopped underneath",
  "Floors vacuumed and wet mopped",
];

const bathrooms = [
  "Exhaust fan vents and light fixtures dusted",
  "Sink faucets and mirrors cleaned and polished",
  "Chrome fixtures polished",
  "Inside Empthy bathroom Cabinet exterior and interior handles wiped",
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
    question: "What is included in move in / move out cleaning?",
    answer:
      "Our move cleaning includes detailed cleaning of kitchens bathrooms floors surfaces fixtures and hard-to-reach areas to prepare the home for new occupancy.",
  },

  {
    question: "Do I need to empty the property before cleaning?",
    answer:
      "Yes. Move in and move out cleanings are most effective when the property is empty or mostly cleared for full access to every area.",
  },

  {
    question: "Can this service help prepare a home for sale?",
    answer:
      "Absolutely. Many homeowners and property managers use this service to prepare homes for showings new tenants or final walkthroughs.",
  },

  {
    question: "How long does move cleaning usually take?",
    answer:
      "The duration depends on the size and condition of the property but most appointments take several hours for a complete detailed cleaning.",
  },
];

export default function MoveInMoveOut() {
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
              MOVE IN / MOVE OUT
            </p>

            <h1 className="text-5xl md:text-7xl font-black text-[#7a1535] leading-tight mb-8">

              A Fresh Start
              <br />
              For Your
              <br />

              <span className="text-pink-500">
                Next Chapter
              </span>

            </h1>

            <p className="text-gray-700 text-lg leading-9 mb-10">

              Whether you are moving into a new home or preparing to leave,
              our detailed cleaning service ensures every space feels fresh,
              spotless and ready.

            </p>

            <div className="space-y-5">

              {moveBenefits.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center">

                    <Truck
                      size={22}
                      className="text-pink-600"
                    />

                  </div>

                  <p className="text-gray-800 text-lg">
                    {item}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* IMAGE */}
          <div>

            <img
              src={moveImage}
              alt="Move In Move Out Cleaning"
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
              Move In / Move Out Checklist
            </h2>

            <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">

              Our move cleaning service helps make transitions smoother
              with detailed top-to-bottom cleaning for empty homes,
              apartments and rental properties.

            </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* ALL ROOMS */}
            <div className="bg-white rounded-[40px] p-10 shadow-md">

              <h3 className="text-3xl font-black text-[#7a1535] mb-10">
                All Rooms
              </h3>

              <div className="space-y-7">

                {allRooms.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >

                    <CheckSquare
                      size={22}
                      className="text-pink-500 mt-1 flex-shrink-0"
                    />

                    <p className="text-gray-700 text-lg leading-9">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* KITCHEN */}
            <div className="bg-white rounded-[40px] p-10 shadow-md">

              <h3 className="text-3xl font-black text-[#7a1535] mb-10">
                Kitchen
              </h3>

              <div className="space-y-7">

                {kitchen.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >

                    <CheckSquare
                      size={22}
                      className="text-pink-500 mt-1 flex-shrink-0"
                    />

                    <p className="text-gray-700 text-lg leading-9">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

            {/* BATHROOMS */}
            <div className="bg-white rounded-[40px] p-10 shadow-md">

              <h3 className="text-3xl font-black text-[#7a1535] mb-10">
                Bathrooms
              </h3>

              <div className="space-y-7">

                {bathrooms.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-4"
                  >

                    <CheckSquare
                      size={22}
                      className="text-pink-500 mt-1 flex-shrink-0"
                    />

                    <p className="text-gray-700 text-lg leading-9">
                      {item}
                    </p>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* EXTRA INSIDE SERVICES */}
<section className="pb-28 px-5 md:px-12">

  <div className="max-w-7xl mx-auto">

    <div className="text-center mb-20">

      <p className="uppercase tracking-[5px] text-pink-700 text-sm font-semibold mb-5">
        OPTIONAL ADD-ONS
      </p>

      <h2 className="text-5xl md:text-6xl font-black text-[#7a1535] mb-6">
        Extra Services
      </h2>

      <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-8">

        Personalized extra services available upon request
        for a more detailed and complete cleaning experience.

      </p>

    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

      {[

        {
          title: "Ceiling Fans",
          icon: "🌀",
        },

        {
          title: "Inside Windows Plus Track and Screen",
          icon: "🪟",
        },

        {
          title: "Sliding Glass Doors in and out Plus Track and Screen",
          icon: "🚪",
        },

        {
          title: "Wiping Down Blinds",
          icon: "✨",
        },

        {
          title: "Inside all Appliances exterior and interior",
          icon: "🎛️",
        },

        {
          title: "Patio Cleaning",
          icon: "🌿",
        },

        {
          title: "Garage Cleaning",
          icon: "🏠",
        },

      ].map((service, index) => (

        <div
          key={index}
          className="
            bg-white
            rounded-[35px]
            p-8
            shadow-md
            hover:shadow-2xl
            hover:-translate-y-2
            transition-all
            duration-300
            border
            border-pink-100
          "
        >

          <div className="
            w-16
            h-16
            rounded-2xl
            bg-pink-100
            flex
            items-center
            justify-center
            text-3xl
            mb-6
          ">

            {service.icon}

          </div>

          <h3 className="text-2xl font-black text-[#7a1535] leading-snug">

            {service.title}

          </h3>

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
            STRESS FREE MOVING
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">

            Leave Your Space
            <br />
            Spotless & Ready

          </h2>

          <p className="text-lg md:text-xl leading-9 max-w-3xl mx-auto mb-10 text-pink-100">

            Make moving easier with a premium detailed cleaning service
            designed for fresh starts and smooth transitions.

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

              Book Your Move Cleaning

            </button>

          </a>

        </div>

      </section>

      <ServiceFAQ
  title="Move Cleaning Questions"
  subtitle="Helpful information about move in and move out cleaning services scheduling and preparation."
  faqs={faqs}
/>

      <Footer />

    </div>
  );
}