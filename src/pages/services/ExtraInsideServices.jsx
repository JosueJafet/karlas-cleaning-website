import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import SEO from "../../components/SEO";

import {
  Sparkles,
  Refrigerator,
  BedDouble,
  Blinds,
  CookingPot,
  Warehouse,
  DoorOpen,
  Bed,
} from "lucide-react";

const extras = [
  {
    title: "Inside Fridge",
    icon: Refrigerator,
  },

  {
    title: "Inside Oven",
    icon: CookingPot,
  },

  {
    title: "Inside Empthy Kitchen Cabinets",
    icon: DoorOpen,
  },

  {
    title: "Inside Empthy Bathroom Cabinets",
    icon: DoorOpen,
  },

  {
    title: "Ceiling Fans",
    icon: Sparkles,
  },

  {
  title: "Baseboards Handed Cleaned",
  icon: Sparkles,
},

  {
    title: "Inside Windows Plus Track and Screen",
    icon: Sparkles,
  },

  {
    title: "Sliding Glass Doors in and out Plus Track and Screen",
    icon: DoorOpen,
  },

  {
    title: "Wiping Down Blinds",
    icon: Blinds,
  },

  {
    title: "Appliances Cleaned exterior and interior (Ovens,microwaves, freezer,etc)",
    icon: Sparkles,
  },

  {
    title: "Making Beds",
    icon: Bed,
  },


  {
    title: "Patio Cleaning",
    icon: Sparkles,
  },

  {
    title: "Garage Cleaning",
    icon: Warehouse,
  },
];

export default function ExtraInsideServices() {

  return (

    <div className="bg-[#f7f4f2] overflow-hidden">

      <SEO
        title="Extra Inside Services | Karla's Cleaning LLC"
        description="Optional add-on cleaning services including inside fridge oven cabinets windows blinds garage patio and more."
        keywords="inside fridge cleaning, oven cleaning, cabinet cleaning, patio cleaning, garage cleaning"
      />

      <Navbar />

      {/* HERO */}
      <section className="pt-40 pb-24 px-5 md:px-12">

        <div className="max-w-6xl mx-auto text-center">

          <p className="uppercase tracking-[5px] text-pink-700 text-sm font-semibold mb-5">

            OPTIONAL ADD-ON SERVICES

          </p>

          <h1 className="text-5xl md:text-7xl font-black text-[#7a1535] leading-tight mb-8">

            Extra Inside
            <br />

            <span className="text-pink-500">
              Services
            </span>

          </h1>

          <p className="text-gray-700 text-lg md:text-xl leading-9 max-w-3xl mx-auto">

            Personalized extra services available upon request
            for a more detailed and complete luxury cleaning experience.

          </p>

        </div>

      </section>

      {/* SERVICES GRID */}
      <section className="pb-32 px-5 md:px-12">

        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {extras.map((service, index) => {

              const Icon = service.icon;

              return (

                <div
                  key={index}
                  className="
                    bg-white
                    rounded-[35px]
                    p-10
                    shadow-md
                    hover:shadow-2xl
                    hover:-translate-y-2
                    transition-all
                    duration-300
                    border
                    border-pink-100
                    min-h-[320px]
                  "
                >

                  <div className="
                    w-20
                    h-20
                    rounded-3xl
                    bg-pink-100
                    flex
                    items-center
                    justify-center
                    mb-8
                  ">

                    <Icon
                      size={38}
                      className="text-pink-600"
                    />

                  </div>

                  <h3 className="
  text-2xl
  md:text-3xl
  font-black
  text-[#7a1535]
  leading-tight
  break-words
">

                    {service.title}

                  </h3>

                </div>

              );

            })}

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

            PERSONALIZED CLEANING

          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">

            Add More Detail
            <br />
            To Your Cleaning

          </h2>

          <p className="text-lg md:text-xl leading-9 max-w-3xl mx-auto mb-10 text-pink-100">

            Upgrade your cleaning appointment with optional
            detailed add-on services tailored to your home's needs.

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

              Request Free Estimate

            </button>

          </a>

        </div>

      </section>

      <Footer />

    </div>

  );
}