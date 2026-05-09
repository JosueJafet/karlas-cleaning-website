import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServiceFAQ from "../../components/ServiceFAQ";
import SEO from "../../components/SEO";

import {
  Hammer,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

import constructionImage from "../../assets/hero13.jpg";

const constructionBenefits = [
  {
    title: "Dust & Debris Removal",
    description:
      "Detailed removal of construction dust residue and leftover debris.",
    icon: Hammer,
  },

  {
    title: "Luxury Finish Cleaning",
    description:
      "Careful polishing and detailed surface cleaning for a flawless presentation.",
    icon: Sparkles,
  },

  {
    title: "Safe & Detailed Service",
    description:
      "Professional post-renovation cleaning designed for newly completed spaces.",
    icon: ShieldCheck,
  },
];

const faqs = [
  {
    question: "What is post construction cleaning?",
    answer:
      "Post construction cleaning removes dust debris residue and buildup left behind after remodeling renovation or construction projects.",
  },

  {
    question: "Do you remove fine construction dust?",
    answer:
      "Yes. We carefully clean surfaces floors fixtures and hard-to-reach areas to eliminate fine dust and construction residue.",
  },

  {
    question: "Is this service available for newly renovated homes?",
    answer:
      "Absolutely. This service is designed specifically for homes apartments offices and spaces that have recently completed renovation or construction work.",
  },

  {
    question: "How long does post construction cleaning take?",
    answer:
      "The duration depends on the size of the property and the amount of residue remaining after construction but detailed cleaning may take several hours.",
  },
];

export default function PostConstruction() {
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
              POST CONSTRUCTION CLEANING
            </p>

            <h1 className="text-5xl md:text-7xl font-black text-[#7a1535] leading-tight mb-8">

              Final Touches
              <br />

              <span className="text-pink-500">
                After Renovation
              </span>

            </h1>

            <p className="text-gray-700 text-lg leading-9 mb-10">

              After remodeling or construction projects,
              we provide detailed luxury cleaning to remove dust,
              residue and leave every surface move-in ready.

            </p>

            <div className="space-y-7">

              {constructionBenefits.map((item, index) => {

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
              src={constructionImage}
              alt="Post Construction Cleaning"
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

      {/* DETAIL SECTION */}
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-[#faf7f5] rounded-[30px] p-8 border border-[#efe5e5]">

              <h3 className="text-2xl font-black text-[#7a1535] mb-5">
                Fine Dust Removal
              </h3>

              <p className="text-gray-700 text-lg leading-8">

                Detailed removal of dust from floors, walls,
                windows, fixtures and hard-to-reach surfaces.

              </p>

            </div>

            <div className="bg-[#faf7f5] rounded-[30px] p-8 border border-[#efe5e5]">

              <h3 className="text-2xl font-black text-[#7a1535] mb-5">
                Detailed Surface Cleaning
              </h3>

              <p className="text-gray-700 text-lg leading-8">

                Careful cleaning of countertops, cabinetry,
                trim work and newly installed finishes.

              </p>

            </div>

            <div className="bg-[#faf7f5] rounded-[30px] p-8 border border-[#efe5e5]">

              <h3 className="text-2xl font-black text-[#7a1535] mb-5">
                Ready To Enjoy
              </h3>

              <p className="text-gray-700 text-lg leading-8">

                We leave the property polished clean and ready
                for occupancy or final presentation.

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
            POST RENOVATION DETAILING
          </p>

          <h2 className="text-5xl md:text-6xl font-black leading-tight mb-8">

            Reveal Your Newly
            <br />
            Finished Space

          </h2>

          <p className="text-lg md:text-xl leading-9 max-w-3xl mx-auto mb-10 text-pink-100">

            Professional post construction cleaning designed
            to remove dust residue and showcase every detail beautifully.

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

              Schedule Post Construction Cleaning

            </button>

          </a>

        </div>

      </section>
    
<ServiceFAQ
  title="Post Construction Questions"
  subtitle="Helpful information about post renovation cleaning dust removal and detailed finishing services."
  faqs={faqs}
/>
              
      <Footer />

    </div>
  );
}