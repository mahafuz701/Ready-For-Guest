
export default function AutomationSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#0b1b4d] to-[#0a1740] py-28 text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Powerful automation. <br />
            <span className="text-white/90">Zero hassle.</span>
          </h2>

          <p className="text-lg text-white/80 max-w-xl">
            Manage your entire Airbnb operation from one simple platform.
            ReadyForGuest automates pricing, synchronises calendars across
            booking sites, and keeps every guest message organised in one
            unified inbox.
          </p>
        </div>

        {/* FEATURE CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* CARD 1 */}
          <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-xl">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
              📈
            </div>
            <h3 className="text-xl font-bold mb-3">Smart pricing</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Automatically adjust your nightly rates 24/7 based on demand,
              seasonality, local events, and market competition.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-xl">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-6">
              📅
            </div>
            <h3 className="text-xl font-bold mb-3">Calendar sync</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Real-time calendar syncing across Airbnb, Booking.com and more —
              no clashes, no double bookings.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-xl">
            <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center mb-6">
              🗂️
            </div>
            <h3 className="text-xl font-bold mb-3">One dashboard</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Control listings, reservations, guest messages and performance
              insights from a single, easy-to-use workspace.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-xl">
            <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center mb-6">
              📱
            </div>
            <h3 className="text-xl font-bold mb-3">Mobile control</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Stay in control on the go — manage bookings, pricing and guest
              communication directly from your mobile device.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
