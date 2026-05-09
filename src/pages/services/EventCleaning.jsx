import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceFAQ from "../../components/ServiceFAQ";
import SEO from "../../components/SEO";
import {
  PartyPopper,
  Sparkles,
  Clock3,
} from "lucide-react";

import eventImage from "../../assets/hero12.jpg";

const eventServices = [
  {
    title: "Before Event Preparation",
    description:
      "We prepare your home or venue so every room looks polished elegant and guest-ready.",
    icon: Sparkles,
  },

  {
    title: "After Event Cleanup",
    description:
      "Detailed post-event cleaning to restore your space quickly and beautifully.",
    icon: PartyPopper,
  },

  {
    title: "Flexible Scheduling",
    description:
      "Convenient cleaning appointments before or after gatherings special occasions and celebrations.",
    icon: Clock3,
  },
];

const faqs = [
  {
    question: "Do you offer cleaning before and after events?",
    answer:
      "Yes. We provide both pre-event preparation cleaning and post-event cleanup services depending on your needs and schedule.",
  },

  {
    question: "What types of events do you support?",
    answer:
      "We assist with private gatherings celebrations dinner parties family events and other residential special occasions.",
  },

  {
    question: "Can event cleaning be scheduled on weekends?",
    answer:
      "Absolutely. We offer flexible scheduling options including weekends and special event coordination whenever possible.",
  },

  {
    question: "How quickly can cleanup be completed after an event?",
    answer:
      "Our team works efficiently to restore your home or venue quickly while maintaining detailed high-quality cleaning standards.",
  },
];

export default function EventCleaning() {
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
              EVENT CLEANING SERVICES
            </p>

            <h1 className="text-5xl md:text-7xl font-black text-[#7a1535] leading-tight mb-8">

              Celebrate Without
              <br />

              <span className="text-pink-500">
                The Stress
              </span>

            </h1>

            <p className="text-gray-700 text-lg leading-9 mb-10">

              Whether you're hosting a private gathering,
              celebration or special occasion, we help keep
              your space elegant spotless and guest-ready.

            </p>

            <div className="space-y-7">

              {eventServices.map((item, index) => {

                const Icon = item.icon;

                return (

                  <div
                    key={index}
                    className="flex items-start gap-5"
                  >

                    <div className="w-14 h-14 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">

                      <Icon
                        size={24}
                        className="text-pink-600"
                      />

                    </div>

                    <div>

                      <h3 className="text-2xl font-bold text-[#7a1535] mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-700 text-lg leading-8">
                        {item.description}
                      </p>

                    </div>

                  </div>

                );
              })}

            </div>

          </div>

          {/* IMAGE */}
          <div>

            <img
              src={eventImage}
              alt="Event Cleaning"
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

      {/* DETAILS */}
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

          <div className="text-center mb-16">

            <p className="uppercase tracking-[5px] text-pink-700 text-sm font-semibold mb-5">
              PERFECT FOR
            </p>

            <h2 className="text-5xl md:text-6xl font-black text-[#7a1535] leading-tight">
              Gatherings & Special
              <br />
              Occasions
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-[#faf7f5] rounded-[30px] p-8 border border-[#efe5e5]">

              <h3 className="text-2xl font-black text-[#7a1535] mb-5">
                Private Events
              </h3>

              <p className="text-gray-700 text-lg leading-8">

                Elegant cleaning support before or after
                birthday parties family gatherings and celebrations.

              </p>

            </div>

            <div className="bg-[#faf7f5] rounded-[30px] p-8 border border-[#efe5e5]">

              <h3 className="text-2xl font-black text-[#7a1535] mb-5">
                Luxury Presentation
              </h3>

              <p className="text-gray-700 text-lg leading-8">

                We help create a polished welcoming atmosphere
                so your guests feel comfortable and impressed.

              </p>

            </div>

            <div className="bg-[#faf7f5] rounded-[30px] p-8 border border-[#efe5e5]">

              <h3 className="text-2xl font-black text-[#7a1535] mb-5">
                Fast Cleanup
              </h3>

              <p className="text-gray-700 text-lg leading-8">

                Efficient post-event cleanup so you can relax
                and enjoy your beautifully restored home.

              </p>

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
            EVENT READY CLEANING
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">

            Enjoy Your Event
            <br />
            We Handle The Cleanup

          </h2>

          <p className="text-lg md:text-xl leading-9 max-w-3xl mx-auto mb-10 text-pink-100">

            Premium cleaning support before and after your
            special events so your home always looks flawless.

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

              Book Event Cleaning

            </button>

          </a>

        </div>

      </section>

      <ServiceFAQ
  title="Event Cleaning Questions"
  subtitle="Helpful answers about event preparation cleanup scheduling and special occasion cleaning services."
  faqs={faqs}
/>

      <Footer />

    </div>
  );
}