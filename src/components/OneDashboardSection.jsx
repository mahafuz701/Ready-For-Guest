export default function OneDashboardSection() {
  return (
    <section className="bg-[#0b1a3a] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-white text-5xl font-extrabold leading-tight mb-6">
              One dashboard. <br /> Every booking.
            </h2>

            <p className="text-blue-100 text-lg leading-relaxed mb-10 max-w-xl">
              With ReadyForGuest’s unified dashboard, you can manage all your
              bookings across platforms like Airbnb, Booking.com, Expedia,
              VRBO and more — all from a single, intuitive interface.  
              No more juggling tabs or spreadsheets.
            </p>

            <ul className="space-y-4 text-blue-100 text-base mb-10">
              <li className="flex items-start gap-3">
                <span className="mt-1 text-yellow-400">✔</span>
                Sync calendars across all channels to avoid double bookings
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-yellow-400">✔</span>
                Automate pricing and availability in real time
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-yellow-400">✔</span>
                See all reservations, rates and insights at a glance
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-yellow-400">✔</span>
                Respond and assist guests with 24/7 support
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 text-yellow-400">✔</span>
                Optimize your listings to get maximum bookings
              </li>
            </ul>

            <button className="bg-yellow-400 text-black px-10 py-3 font-semibold rounded-lg hover:bg-yellow-500 transition">
              Get started with ReadyForGuest
            </button>
          </div>

          {/* RIGHT – MOCK DASHBOARD CARD */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl p-6">

              {/* Metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-xs text-gray-500">Bookings</p>
                  <p className="font-bold text-gray-900">128</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-xs text-gray-500">Revenue</p>
                  <p className="font-bold text-gray-900">£9,852</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-xs text-gray-500">Occupancy</p>
                  <p className="font-bold text-green-600">73.4%</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-xs text-gray-500">Channels</p>
                  <p className="font-bold text-gray-900">30+</p>
                </div>
              </div>

              {/* Calendar Preview */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm font-semibold text-gray-700 mb-2">
                  Calendar Overview
                </p>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: 28 }).map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 rounded ${
                        idx % 7 === 0 ? "bg-red-400" : "bg-blue-400"
                      }`}
                    ></div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
