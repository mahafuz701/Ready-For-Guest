export default function HeroSection() {
  return (
    <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 py-28 grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}
        <div>
          <span className="inline-block mb-4 text-sm font-semibold tracking-widest text-slate-500 uppercase">
            Short-Let Growth Platform
          </span>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            Grow & Automate Your <br />
            <span className="text-indigo-600">Airbnb Business</span>
          </h1>

          <p className="text-lg text-slate-600 max-w-xl mb-10 leading-relaxed">
            Turn your short-let into a high-performing, revenue-generating
            business. Whether you’re launching your first property or scaling a
            portfolio, ReadyForGuest gives you automation, expert tools and
            hands-on support to maximise earnings.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">

            <a
              href="/pricing"
              className="px-10 py-4 rounded-xl font-semibold border border-slate-300 hover:bg-white transition text-center"
            >
              Our Pricing
            </a>
            
            

 
          

            <a
              href="/value-your-short-let"
              className="px-10 py-4 rounded-xl font-semibold border border-slate-300 hover:bg-white transition text-center"
            >
              Value Your Short-Let
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE + FLOATING CARDS */}
        <div className="relative">

          {/* MAIN IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400"
            alt="Short-let hosting dashboard"
            className="rounded-3xl shadow-2xl w-full object-cover"
          />

          {/* FLOAT CARD 1 */}
          <div className="absolute top-12 -left-10 bg-white/90 backdrop-blur shadow-xl rounded-2xl px-6 py-4 flex gap-3 items-start">
            <span className="text-emerald-500 text-xl">🧹</span>
            <div>
              <p className="font-semibold text-sm">Cleaning scheduled</p>
              <p className="text-xs text-slate-500 leading-snug">
                Today, 11:30 AM<br />
                Camden Town, London
              </p>
            </div>
          </div>

          {/* FLOAT CARD 2 */}
          <div className="absolute top-36 right-6 bg-white/90 backdrop-blur shadow-xl rounded-2xl px-6 py-4 flex gap-3 items-start">
            <span className="text-indigo-500 text-xl">💷</span>
            <div>
              <p className="font-semibold text-sm">Payment received</p>
              <p className="text-xs text-slate-500 leading-snug">
                £1,248.40<br />
                Booking #RFG-10239
              </p>
            </div>
          </div>

          {/* FLOAT CARD 3 */}
          <div className="absolute bottom-20 -left-8 bg-white/90 backdrop-blur shadow-xl rounded-2xl px-6 py-4 flex gap-3 items-start">
            <span className="text-sky-500 text-xl">💬</span>
            <div>
              <p className="font-semibold text-sm">New guest message</p>
              <p className="text-xs text-slate-500 leading-snug">
                Sarah M.<br />
                “Hi, what time is check-in?”
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* STATS BAR */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white/90 backdrop-blur shadow-xl rounded-2xl grid md:grid-cols-3 text-center py-12 mt-12 border">

          <div>
            <h3 className="text-4xl font-extrabold tracking-tight">30+ sites</h3>
            <p className="text-sm text-slate-500 mt-3 max-w-xs mx-auto">
              One listing distributed across 30+ booking platforms
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold tracking-tight">24/7</h3>
            <p className="text-sm text-slate-500 mt-3 max-w-xs mx-auto">
              Guest messaging & telephone support
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-extrabold tracking-tight">+20%</h3>
            <p className="text-sm text-slate-500 mt-3 max-w-xs mx-auto">
              Average revenue uplift with smart pricing
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

