import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import FAQHero from "../sections/faq/FAQhero";
import FAQAccordion from "../sections/faq/FAQAccordion";

function FAQ() {

  return (

    <div className="bg-black text-white overflow-hidden">

      <Navbar />

      <FAQHero />

      <FAQAccordion />

      <Footer />

    </div>

  );
}

export default FAQ;