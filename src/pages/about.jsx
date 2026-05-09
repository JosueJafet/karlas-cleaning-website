import AboutHero from "../sections/about/AboutHero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MissionSection from "../sections/about/MissionSection";
import WhyTrustUs from "../sections/about/WhyTrustUs";
import SEO from "../components/SEO";

function About() {
  return (
    <div className="bg-gradient-to-b from-[#050505] via-[#0b0710] to-black overflow-hidden">
      <SEO
  title="About Us | Karla's Cleaning LLC"
  description="Learn more about Karla's Cleaning LLC and our premium residential cleaning services designed for modern homes and busy lifestyles."
  keywords="about cleaning company, Bay Area cleaning professionals, residential cleaning experts"
/>
      <Navbar />
      <AboutHero />
      <MissionSection />
      <WhyTrustUs />

      <Footer />

    </div>
  );
}

export default About;