


export default function HeroSection() {
    return (
        <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 text-sm font-semibold tracking-widest text-slate-500 uppercase">
            Airbnb Growth Platform
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Start & Scale Your Airbnb <br />
            <span className="text-indigo-600">Business with Houst</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-xl mb-10 leading-relaxed">
            Turn your Airbnb business into a revenue-generating machine.
            Whether you're new to short-term rentals or scaling an existing
            portfolio, we provide automation, expert tools and hands-on
            support to maximise earnings.
          </p>

          <div className="flex gap-4">
            <button className="bg-black text-white px-10 py-4 rounded-xl font-semibold hover:bg-slate-900 transition shadow-lg">
              Apply Now
            </button>
            <button className="px-10 py-4 rounded-xl font-semibold border hover:bg-white transition">
              Learn More
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE + FLOATING CARDS */}
        <div className="relative">

          {/* MAIN IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Airbnb hosts"
            className="rounded-3xl shadow-2xl w-full"
          />

          {/* FLOAT CARD 1 */}
          <div className="absolute top-12 -left-10 bg-white/90 backdrop-blur shadow-xl rounded-2xl px-6 py-4 flex gap-3 items-start">
            <span className="text-yellow-500 text-xl">📦</span>
            <div>
              <p className="font-semibold text-sm">New clean request</p>
              <p className="text-xs text-slate-500 leading-snug">
                06 Aug 2024<br />
                Thomas More St
              </p>
            </div>
          </div>

          {/* FLOAT CARD 2 */}
          <div className="absolute top-36 right-6 bg-white/90 backdrop-blur shadow-xl rounded-2xl px-6 py-4 flex gap-3 items-start">
            <span className="text-yellow-500 text-xl">💰</span>
            <div>
              <p className="font-semibold text-sm">Payment received</p>
              <p className="text-xs text-slate-500 leading-snug">
                £980.79<br />
                Invoice #58234
              </p>
            </div>
          </div>

          {/* FLOAT CARD 3 */}
          <div className="absolute bottom-20 -left-8 bg-white/90 backdrop-blur shadow-xl rounded-2xl px-6 py-4 flex gap-3 items-start">
            <span className="text-yellow-500 text-xl">✉️</span>
            <div>
              <p className="font-semibold text-sm">New guest message</p>
              <p className="text-xs text-slate-500 leading-snug">
                Chris Jackson<br />
                “Hi there, could you…”
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* STATS BAR */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white/90 backdrop-blur shadow-xl rounded-2xl grid md:grid-cols-3 text-center py-12 mt-12 border">

          <div>
            <h3 className="text-4xl font-extrabold tracking-tight">24 homes</h3>
            <p className="text-sm text-slate-500 mt-3 max-w-xs mx-auto">
              Avg. properties managed after 1 year
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold tracking-tight">1–2 months</h3>
            <p className="text-sm text-slate-500 mt-3 max-w-xs mx-auto">
              Time to first earnings through Airbnb hosting
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold tracking-tight">20%</h3>
            <p className="text-sm text-slate-500 mt-3 max-w-xs mx-auto">
              Average Airbnb commission for partners
            </p>
          </div>

        </div>
      </div>
    </section>
    )
}
