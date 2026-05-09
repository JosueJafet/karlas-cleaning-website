import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import FAQHero from "../sections/faq/FAQhero";
import FAQAccordion from "../sections/faq/FAQAccordion";

function FAQ() {

  return (

    <div className="bg-black text-white overflow-hidden">
      <SEO
  title="Frequently Asked Questions | Karla's Cleaning LLC"
  description="Find answers to common questions about our cleaning services scheduling supplies policies and housekeeping options."
  keywords="cleaning FAQ, housekeeping questions, deep cleaning information, residential cleaning help"
/>

      <Navbar />

      <FAQHero />

      <FAQAccordion />

      <Footer />

    </div>

  );
}

export default FAQ;