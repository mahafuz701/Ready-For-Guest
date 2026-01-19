export default function AutomationSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#0b1b4d] to-[#0a1740] py-28 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-start">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Powerful automation. <br />
            <span className="text-white/90">Zero hassle.</span>
          </h2>

          <p className="text-lg text-white/80 max-w-xl leading-relaxed">
            Manage everything from one simple platform. Smart pricing adjusts
            your rates automatically based on demand, local events and
            competition. Calendar sync prevents double bookings across all
            platforms. Unified inbox keeps every guest message in one place.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* CARD 1 */}
          <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
              📈
            </div>
            <h3 className="text-xl font-bold mb-3">Smart pricing</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Automatically adjusts your nightly rates 24/7 based on demand,
              trends, seasonality, local events and market competition.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
              📅
            </div>
            <h3 className="text-xl font-bold mb-3">Calendar sync</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your calendars update instantly across every platform — no
              clashes, no double bookings, no manual work.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-6">
              🗂️
            </div>
            <h3 className="text-xl font-bold mb-3">One dashboard</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Manage all platforms, bookings, messages and performance from a
              single, simple workspace.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition">
            <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mb-6">
              📱
            </div>
            <h3 className="text-xl font-bold mb-3">Mobile control</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Stay on top of bookings, messages and pricing from anywhere with
              the mobile app.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
