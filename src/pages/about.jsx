import AboutHero from "../sections/about/AboutHero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MissionSection from "../sections/about/MissionSection";
import WhyTrustUs from "../sections/about/WhyTrustUs";

function About() {
  return (
    <div className="bg-gradient-to-b from-[#050505] via-[#0b0710] to-black overflow-hidden">

      <Navbar />
      <AboutHero />
      <MissionSection />
      <WhyTrustUs />

      <Footer />

    </div>
  );
}

export default About;