import Navbar from "../components/Navbar";
import Testimonials from "../sections/home/Testimonials";
import HeroSection from   "../sections/home/HeroSection";
import WhyChooseUs from "../sections/home/WhyChooseUs";
import BeforeAfterSection from "../sections/home/BeforeAfterSection";
import SEO from "../components/SEO";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  Calendar,
  BadgeCheck,
  Heart,
} from "lucide-react";

import { Link } from "react-router-dom";
import GalleryPreview from "../sections/home/GalleryPreview";

function Home() {

  return (
    <div className="bg-gradient-to-b from-[#050505] via-[#0b0710] to-black overflow-x-hidden w-full">

      {/* NAVBAR */}
      <div className="absolute top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
      <SEO
  title="Karla's Cleaning LLC | Premium Residential Cleaning Services"
  description="Luxury residential cleaning services in the Bay Area including deep cleaning recurring cleaning move in / move out and housekeeping services."
  keywords="cleaning services Bay Area, residential cleaning, housekeeping services, luxury cleaning company, deep cleaning"
/>
        <Navbar />
      </div>

      <HeroSection />

      <GalleryPreview />
      <BeforeAfterSection />
      <Testimonials />
      <WhyChooseUs />

      {/* FOOTER */}
      <footer className="bg-gradient-to-b from-[#0d0712] to-black border-t border-white/10 px-5 md:px-12 py-16 text-white">

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-10 md:gap-12">

          {/* BRAND */}
          <div>

            <h3 className="text-4xl font-bold text-pink-500 mb-5">
              Karla's Cleaning LLC
            </h3>

            <p className="text-gray-400 leading-8 mb-8">
              Premium residential cleaning services delivering spotless homes,
              trusted care and flexible scheduling across the Bay Area.
            </p>

            <div className="flex gap-4">

              <div className="w-12 h-12 rounded-full border border-pink-500/40 flex items-center justify-center hover:bg-pink-500 transition cursor-pointer">
                <BadgeCheck />
              </div>

              <div className="w-12 h-12 rounded-full border border-pink-500/40 flex items-center justify-center hover:bg-pink-500 transition cursor-pointer">
                <Heart />
              </div>

            </div>

          </div>

          {/* LINKS */}
          <div>

            <h4 className="text-2xl font-semibold text-pink-400 mb-6">
              Quick Links
            </h4>

            <div className="flex flex-col gap-4 text-gray-300">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact</Link>
            </div>

          </div>

          {/* HOURS */}
          <div>

            <h4 className="text-2xl font-semibold text-pink-400 mb-6">
              Business Hours
            </h4>

            <div className="space-y-5 text-gray-300">

              <div className="flex gap-3">

                <Clock3 />

                <div>
                  <p>Monday - Friday</p>
                  <p>8:00 AM - 5:00 PM</p>
                </div>

              </div>

              <div className="flex gap-3">

                <Calendar />

                <div>
                  <p>Saturday - Sunday</p>
                  <p>CLOSED</p>
                </div>

              </div>

            </div>

          </div>

          {/* CONTACT */}
          <div>

            <h4 className="text-2xl font-semibold text-pink-400 mb-6">
              Contact Info
            </h4>

            <div className="space-y-5 text-gray-300">

              <div className="flex items-center gap-3">
                <Phone size={20} />
                <p>+1 (408) 849-9404</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} />
                <p>karlarramos4@hotmail.com</p>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={20} />
                <p>Bay Area, California</p>
              </div>

            </div>

          </div>

          {/* REVIEW */}
          <div>

            <div className="border border-pink-500/40 rounded-3xl p-8 bg-gradient-to-b from-pink-500/10 to-transparent backdrop-blur-md text-center h-full flex flex-col justify-center">

              <div className="text-5xl mb-5">
                ⭐
              </div>

              <h4 className="text-2xl font-bold text-pink-400 mb-4">
                We love our clients!
              </h4>

              <p className="text-gray-300 leading-8 mb-5">
                Check out our 5-star reviews on Google.
              </p>

              <div className="text-yellow-400 text-3xl tracking-[6px]">
                ★★★★★
              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">

          <p>
            © 2025 Karla's Cleaning LLC. All rights reserved.
          </p>

          <div className="flex gap-6">
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>

        </div>

      </footer>

    </div>
  );
}

export default Home;