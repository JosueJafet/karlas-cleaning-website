import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import ContactHero from "../sections/contact/ContactHero";
import ContactInfo from "../sections/contact/ContactInfo";
import ContactForm from "../sections/contact/ContactForm";

function Contact() {
  return (
    <div className="bg-gradient-to-b from-[#050505] via-[#0b0710] to-black overflow-hidden text-white">
      <SEO
  title="Contact Us | Karla's Cleaning LLC"
  description="Contact Karla's Cleaning LLC for premium residential cleaning services and free estimates across the Bay Area."
  keywords="contact cleaning company, free cleaning estimate, Bay Area residential cleaning"
/>
      <Navbar />

      <ContactHero />

      {/* CONTACT SECTION */}
      <section className="px-5 md:px-12 pt-36 pb-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          <ContactInfo />

          <ContactForm />

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Contact;