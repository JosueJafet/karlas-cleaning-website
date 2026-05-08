import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ContactHero from "../sections/contact/ContactHero";
import ContactInfo from "../sections/contact/ContactInfo";
import ContactForm from "../sections/contact/ContactForm";

function Contact() {
  return (
    <div className="bg-gradient-to-b from-[#050505] via-[#0b0710] to-black overflow-hidden text-white">

      <Navbar />

      <ContactHero />

      {/* CONTACT SECTION */}
      <section className="px-5 md:px-12 py-24">

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