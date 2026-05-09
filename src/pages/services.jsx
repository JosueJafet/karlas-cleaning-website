import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import ServicesHero from "../sections/services/ServicesHero";
import ServicesGrid from "../sections/services/ServicesGrid";
import ServicesProcess from "../sections/services/ServicesProcess";

function Services() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <SEO
  title="Cleaning Services | Karla's Cleaning LLC"
  description="Explore our premium cleaning services including deep cleaning housekeeping recurring cleaning move in move out and post construction cleaning."
  keywords="cleaning services, housekeeping, recurring cleaning, move out cleaning, Bay Area cleaning"
/>

      <Navbar />

      <ServicesHero />

      <ServicesGrid />

      <ServicesProcess />

      <Footer />

    </div>
  );
}

export default Services;