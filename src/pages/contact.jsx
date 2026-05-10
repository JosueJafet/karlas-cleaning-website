import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import ContactHero from "../sections/contact/ContactHero";
import ContactInfo from "../sections/contact/ContactInfo";
import ContactForm from "../sections/contact/ContactForm";
import paypalQR from "../assets/paypalqr.png";

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

            {/* PAYMENT METHODS */}
      <section className="px-5 md:px-12 pb-28">

        <div className="
          max-w-7xl
          mx-auto
          bg-white/5
          border
          border-pink-500/20
          rounded-[40px]
          p-8
          md:p-14
          backdrop-blur-xl
        ">

          <div className="text-center mb-14">

            <p className="uppercase tracking-[5px] text-pink-400 text-sm font-semibold mb-4">

              SECURE PAYMENTS

            </p>

            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">

              Payment
              <span className="text-pink-500">
                {" "}Methods
              </span>

            </h2>

            <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-8">

              We offer convenient and secure payment options
              for all residential cleaning services.

            </p>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

            {/* VENMO */}
            <div className="
              bg-black/30
              border
              border-pink-500/20
              rounded-[30px]
              p-8
              text-center
            ">

              <div className="
                w-20
                h-20
                rounded-full
                bg-pink-500/10
                flex
                items-center
                justify-center
                mx-auto
                mb-6
              ">

                <span className="text-3xl">
                  💸
                </span>

              </div>

              <h3 className="text-3xl font-black text-white mb-4">

                Venmo

              </h3>

              <p className="text-gray-400 leading-8 mb-8">

                Send payments quickly and securely through Venmo.

              </p>

              <a
                href="https://venmo.com/u/Karlaramos2010"
                target="_blank"
                rel="noopener noreferrer"
              >

                <button className="
                  bg-pink-500
                  hover:bg-pink-600
                  transition-all
                  duration-300
                  px-8
                  py-4
                  rounded-2xl
                  font-bold
                  text-white
                  w-full
                ">

                  Pay with Venmo

                </button>

              </a>

            </div>

            {/* PAYPAL */}
            <div className="
              bg-black/30
              border
              border-pink-500/20
              rounded-[30px]
              p-8
              text-center
            ">

              <div className="
                w-20
                h-20
                rounded-full
                bg-pink-500/10
                flex
                items-center
                justify-center
                mx-auto
                mb-6
              ">

                <span className="text-3xl">
                  🅿️
                </span>

              </div>

              <h3 className="text-3xl font-black text-white mb-5">

                PayPal

              </h3>

              <p className="text-gray-400 leading-8 mb-8">

                Scan the QR code below to send secure payments via PayPal.

              </p>

              <div className="
                bg-white
                rounded-3xl
                p-4
                inline-block
              ">

                <img
                  src={paypalQR}
                  alt="PayPal QR"
                  className="w-52 mx-auto rounded-2xl"
                />

              </div>

            </div>

            {/* CHECKS */}
            <div className="
              bg-black/30
              border
              border-pink-500/20
              rounded-[30px]
              p-8
              text-center
            ">

              <div className="
                w-20
                h-20
                rounded-full
                bg-pink-500/10
                flex
                items-center
                justify-center
                mx-auto
                mb-6
              ">

                <span className="text-3xl">
                  🧾
                </span>

              </div>

              <h3 className="text-3xl font-black text-white mb-4">

                Checks

              </h3>

              <p className="text-gray-400 leading-8">

                We also accept personal and business checks
                for residential cleaning appointments.

              </p>

            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}

export default Contact;