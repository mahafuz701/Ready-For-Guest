export default function ManageScaleSection() {
  return (
    <section className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* QUICK LINKS */}
        <div className="mb-24 text-center">
          <h3 className="text-5xl font-extrabold mb-12">
            Quick Links
          </h3>

          <div className="flex flex-wrap justify-center gap-8">
            {[
              "Partner with Houst",
              "Revenue Calculator",
              "Property Managers",
              "Houst Prospectus",
              "FAQs",
            ].map((item, i) => (
              <span
                key={i}
                className="px-10 py-4 rounded-full bg-yellow-400 text-base font-semibold hover:bg-yellow-300 transition cursor-pointer"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* MAIN FEATURE BLOCK */}
        <div className="relative rounded-[48px] bg-yellow-400 px-20 py-28 overflow-hidden">

          <div className="grid lg:grid-cols-2 gap-24 items-center">

            {/* LEFT CONTENT */}
            <div className="max-w-2xl">
              <h2 className="text-6xl font-extrabold leading-tight mb-10">
                Manage & Scale <br />
                Your Airbnb Business
              </h2>

              <p className="text-xl text-gray-900 leading-relaxed mb-14">
                Track bookings, earnings, and occupancy in real time.
                The ReadyForGuest Partner Dashboard helps you optimise pricing
                and maximise revenue effortlessly.
              </p>

              {/* CENTERED BUTTON */}
              <div className="flex justify-start">
                <button className="bg-black text-white px-14 py-5 rounded-2xl text-lg font-semibold hover:bg-gray-900 transition">
                  APPLY NOW
                </button>
              </div>
            </div>

            {/* RIGHT DASHBOARD MOCK */}
            <div className="relative">

              {/* FLOAT CARD – BOOKINGS */}
              <div className="absolute -left-12 top-14 bg-white rounded-2xl shadow-xl p-6 w-64 z-20">
                <p className="text-sm font-semibold mb-2">Bookings</p>
                <p className="text-2xl font-extrabold">112 total bookings</p>
                <p className="text-xs text-gray-500 mt-1">+2.0%</p>
              </div>

              {/* FLOAT CARD – COMMISSION */}
              <div className="absolute right-0 top-0 bg-white rounded-2xl shadow-xl p-6 w-64 z-20">
                <p className="text-sm font-semibold mb-2">Commission</p>
                <p className="text-2xl font-extrabold">£35,546.78</p>
                <p className="text-xs text-green-600 mt-1">+12.5%</p>
              </div>

              {/* LAPTOP */}
              <div className="relative z-10 bg-black rounded-3xl p-4 shadow-[0_40px_120px_rgba(0,0,0,0.4)]">
                <div className="bg-white rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                    alt="Dashboard preview"
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
