export default function BigPortfolioCTAModern() {
  return (
    <section className="bg-white py-15">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative rounded-[40px] bg-gradient-to-br from-gray-50 to-white p-20 shadow-[0_40px_120px_rgba(0,0,0,0.08)]">

          <div className="grid lg:grid-cols-2 gap-24 items-center">

            {/* IMAGE */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-yellow-400 rounded-[28px] opacity-90" />
              <img
                src="https://images.unsplash.com/photo-1523217582562-09d0def993a6"
                alt="Luxury apartments"
                className="relative z-10 w-full h-[520px] object-cover rounded-[28px] shadow-2xl"
              />
            </div>

            {/* CONTENT */}
            <div className="max-w-xl">
              <h2 className="text-5xl font-extrabold leading-tight mb-8">
                Got <span className="text-yellow-400">25+</span> properties? <br />
                Let’s think <span className="underline decoration-yellow-400">bigger.</span>
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-12">
                Scale your Airbnb business with confidence. ReadyForGuest helps
                high-volume operators streamline operations, boost occupancy,
                and unlock portfolio-level growth with expert support.
              </p>

              <button className="group inline-flex items-center gap-3 bg-black text-white px-12 py-5 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 hover:bg-gray-900 hover:shadow-xl">
                APPLY NOW
                <span className="text-lg transition-transform group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
