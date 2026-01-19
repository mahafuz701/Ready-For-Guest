export default function MaximizeExact() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <div className="relative">

          {/* YELLOW BLOCK */}
          <div className="absolute -bottom-12 -left-12 w-[420px] h-[420px] bg-yellow-400 rounded-2xl"></div>

          {/* MAIN IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            className="relative z-10 rounded-2xl shadow-xl w-[420px]"
            alt="ReadyForGuest property"
          />

          {/* FLOAT CARD TOP */}
          <div className="absolute top-6 -left-8 bg-white rounded-xl shadow-lg p-4 w-[300px] z-20">
            <div className="flex gap-3 items-start">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                className="w-10 h-10 rounded-full"
                alt="Guest"
              />
              <div className="text-sm">
                <p className="font-semibold mb-1">Upcoming booking</p>
                <p className="font-semibold">Lucia Caparas · 4 nights</p>
                <p className="text-xs text-gray-600">
                  Check-in: Fri, Nov 1st 2024<br />
                  Check-out: Tue, Nov 5th 2024
                </p>
                <p className="text-xs font-semibold mt-1">
                  Airbnb revenue: £1,404.00
                </p>
              </div>
            </div>
          </div>

          {/* FLOAT CARD BOTTOM */}
          <div className="absolute bottom-0 right-0 bg-white rounded-xl shadow-lg p-4 w-[300px] z-20">
            <div className="flex gap-3 items-start">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                className="w-10 h-10 rounded-full"
                alt="Guest"
              />
              <div className="text-sm">
                <p className="font-semibold mb-1">Upcoming booking</p>
                <p className="font-semibold">Martin Thomas · 9 nights</p>
                <p className="text-xs text-gray-600">
                  Check-in: Fri, Nov 22nd 2024<br />
                  Check-out: Sun, Dec 1st 2024
                </p>
                <p className="text-xs font-semibold mt-1">
                  Airbnb revenue: £2,378.00
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div>
          <h2 className="text-4xl font-extrabold leading-tight mb-10">
            Maximise Your Airbnb <br />
            Business with ReadyForGuest
          </h2>

          <div className="space-y-6 mb-10">
            <div>
              <h4 className="font-semibold mb-1">
                Low-Risk, High-Reward Model
              </h4>
              <p className="text-gray-600">
                Grow your short-let business without heavy upfront costs or long-term contracts.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">
                All-in-One Hosting Platform
              </h4>
              <p className="text-gray-600">
                Manage bookings, pricing, calendars and guest messages from one dashboard.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">
                Scale Faster with Automation
              </h4>
              <p className="text-gray-600">
                Smart pricing, channel syncing and automated messaging help you grow 2–3× faster.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-1">
                Expert Support, 24/7
              </h4>
              <p className="text-gray-600">
                Our team handles guest communication and operational support around the clock.
              </p>
            </div>
          </div>

          <button
            onClick={() => window.open("/pricing", "_self")}
            className="bg-black text-white px-10 py-4 rounded-md font-semibold hover:bg-gray-900 transition"
          >
            View Our Pricing
          </button>
        </div>

      </div>
    </section>
  );
}
