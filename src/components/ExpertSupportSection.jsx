export default function ExpertSupportSection() {
  return (
    <section className="bg-sky-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 grid lg:grid-cols-2 gap-10 items-center">

          {/* LEFT – IMAGE + FLOATING CARDS */}
          <div className="relative">

            {/* MAIN IMAGE */}
            <div className="rounded-2xl overflow-hidden h-[420px]">
              <img
                src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1200"
                alt="Property expert support"
                className="w-full h-full object-cover"
              />
            </div>

            {/* LISTING SCORE */}
            <div className="absolute -top-4 right-4 bg-blue-600 text-white px-5 py-4 rounded-2xl shadow-lg">
              <p className="text-3xl font-extrabold">94%</p>
              <p className="text-xs opacity-90">Listing score</p>
            </div>

            {/* MARKET TRENDS */}
            <div className="absolute bottom-20 -left-4 bg-white rounded-2xl shadow-lg p-4 w-56">
              <h4 className="font-bold mb-2 text-sm">Market trends</h4>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span>Demand</span>
                  <span className="font-semibold text-green-600">92%</span>
                </div>
                <div className="flex justify-between">
                  <span>Competition</span>
                  <span className="font-semibold text-yellow-600">Medium</span>
                </div>
                <div className="flex justify-between">
                  <span>Seasonality</span>
                  <span className="font-semibold text-blue-600">Rising</span>
                </div>
              </div>
            </div>

            {/* CHAT BUBBLE */}
            <div className="absolute -bottom-4 left-8 bg-blue-500 text-white px-5 py-2 rounded-full shadow-lg text-xs">
              Your expert replied · 1 min ago
            </div>
          </div>

          {/* RIGHT – CONTENT */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4">
              Expert support. <br />
              <span className="text-gray-900">Real results.</span>
            </h2>

            <p className="text-gray-600 text-base mb-6 leading-relaxed">
              Every ReadyForGuest partner is matched with a dedicated Property
              Expert and AI pricing engine that understands your local market
              inside out. We analyse real-time demand, optimise your pricing,
              and automate availability to maximise bookings and revenue.
            </p>

            <h4 className="font-bold text-base mb-3">
              What your expert + AI does:
            </h4>

            <ul className="space-y-2 text-gray-700 text-sm">
              <li className="flex gap-3">
                <span className="text-blue-600">✓</span>
                Reviews and optimises your listing performance
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">✓</span>
                Monitors market trends and adjusts pricing automatically
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">✓</span>
                Provides proactive revenue recommendations
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">✓</span>
                Syncs calendars across 30+ booking platforms
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600">✓</span>
                Responds instantly with AI + human expert support
              </li>
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
}
