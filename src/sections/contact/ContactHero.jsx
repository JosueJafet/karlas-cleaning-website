export default function ContactHero() {
  return (
    <section className="relative pt-40 pb-24 px-5 md:px-12 overflow-hidden">

      {/* GLOW */}
      <div className="absolute top-0 left-0 w-full h-full bg-pink-500/10 blur-3xl"></div>

      <div className="relative z-10 text-center max-w-5xl mx-auto">

        <p className="uppercase tracking-[6px] text-xs md:text-sm mb-6 text-pink-300 font-semibold">
          CONTACT KARLA'S CLEANING LLC
        </p>

        <h2 className="text-5xl md:text-7xl font-bold text-white leading-[1.05] mb-8">
          Request Your <br />
          Personalized Cleaning <br />
          <span className="text-pink-500">Estimate</span>
        </h2>

        <p className="text-lg md:text-xl text-gray-300 leading-10 max-w-4xl mx-auto">
          We proudly serve Bay Area homes with dependable premium
          residential cleaning. Fill out the form below and we will
          contact you shortly with pricing and scheduling options.
        </p>

      </div>

    </section>
  );
}