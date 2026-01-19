export default function MaximiseProfitsSection() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-extrabold leading-tight mb-8">
              Maximise Your Airbnb <br />
              Profits with ReadyForGuest
            </h2>

            <p className="text-lg text-gray-600 max-w-xl mb-10">
              We optimise your Airbnb pricing, visibility and guest experience —
              so your listings attract more bookings and generate higher revenue.
              ReadyForGuest combines smart automation with expert support to
              help you scale faster and earn more.
            </p>

            <button
              onClick={() => window.open("/pricing", "_self")}
              className="bg-black text-white px-12 py-4 rounded-xl font-semibold hover:bg-gray-900 transition"
            >
              View Our Pricing
            </button>
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative w-full h-[520px]">

            {/* CIRCULAR IMAGES */}
            <img
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2"
              alt="Luxury apartment"
              className="absolute top-0 left-28 w-60 h-60 rounded-full object-cover shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
              alt="Modern living room"
              className="absolute top-10 right-0 w-44 h-44 rounded-full object-cover shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1618220179428-22790b461013"
              alt="Cozy bedroom"
              className="absolute bottom-24 left-0 w-40 h-40 rounded-full object-cover shadow-lg"
            />
            <img
              src="https://images.unsplash.com/photo-1505691723518-36a5ac3b2b8f"
              alt="Stylish interior"
              className="absolute bottom-0 right-24 w-52 h-52 rounded-full object-cover shadow-lg"
            />

            {/* FLOAT CARD – BOOKINGS */}
            <div className="absolute top-24 left-10 bg-white rounded-xl shadow-lg px-5 py-4 text-sm">
              <div className="flex gap-3 items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center leading-none">
                  🏠
                </div>
                <strong>112 total bookings</strong>
              </div>
              <p className="text-gray-600">
                Airbnb: 79 (70.54%) <br />
                Booking.com: 24 (21.42%) <br />
                Expedia: 9 (8.04%)
              </p>
            </div>

            {/* FLOAT CARD – TOTAL PROPERTIES */}
            <div className="absolute top-6 right-10 bg-white rounded-xl shadow-lg px-5 py-4 text-sm">
              <div className="flex gap-3 items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center leading-none">
                  🧾
                </div>
                <strong>Total properties</strong>
              </div>
              <p className="text-gray-600">
                Current portfolio: 38 <br />
                Upcoming onboardings: 6
              </p>
            </div>

            {/* FLOAT CARD – ACTIVITY */}
            <div className="absolute bottom-16 left-20 bg-white rounded-xl shadow-lg px-5 py-4 text-sm">
              <div className="flex gap-3 items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center leading-none">
                  📣
                </div>
                <strong>Activity log</strong>
              </div>
              <p className="text-gray-600">
                Guest support: Active <br />
                New enquiry: LDN-BTU801
              </p>
            </div>

            {/* FLOAT CARD – CLEANS */}
            <div className="absolute bottom-6 right-6 bg-white rounded-xl shadow-lg px-5 py-4 text-sm">
              <div className="flex gap-3 items-center mb-2">
                <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center leading-none">
                  🧹
                </div>
                <strong>Upcoming cleans</strong>
              </div>
              <p className="text-gray-600">
                16/10/2024 – Haddington Rd <br />
                23/10/2024 – Flat 30, Lancaster <br />
                05/11/2024 – Court Gardens
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
