export default function PropertyValuationSection() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Discover the Short-Let Value of Your Property
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Enter a few simple details and let our pricing engine estimate your
            potential short-let income using real market data and demand trends.
          </p>
        </div>

        {/* ===== FORM ===== */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 grid md:grid-cols-3 gap-6 items-end mb-24">

          <div>
            <label className="text-sm font-medium text-gray-600">
              Property Address
            </label>
            <input
              type="text"
              placeholder="Enter your property address"
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              className="mt-1 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-600">
              Bedrooms
            </label>
            <div className="mt-1 flex items-center border border-gray-300 rounded-lg px-4 py-3 justify-between">
              <button className="text-xl text-gray-500 hover:text-gray-700">
                −
              </button>
              <span className="font-semibold text-gray-800">1</span>
              <button className="text-xl text-gray-500 hover:text-gray-700">
                +
              </button>
            </div>
          </div>

          <div className="md:col-span-3">
            <button className="w-full bg-indigo-600 text-white rounded-lg font-semibold text-lg py-3 hover:bg-indigo-700 transition">
              Get Free Valuation
            </button>
            <p className="text-sm text-gray-500 text-center mt-3">
              Free valuation • No setup fees • Cancel anytime • Short-let compliant
            </p>
          </div>

        </div>

        {/* ===== HOW IT WORKS SECTION ===== */}
        <div className="bg-white rounded-3xl shadow-lg p-10 md:p-12 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT – TEXT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              How Our Pricing Engine Works
            </h2>

            <p className="text-gray-700 mb-6">
              Our pricing engine analyses multiple market and performance
              factors to give you a realistic overview of what your property
              could earn as a short-let.
            </p>

            <ul className="space-y-5 text-gray-700 leading-relaxed">
              <li className="flex gap-3">
                <span className="text-indigo-600 font-bold">01.</span>
                <span>
                  We trend monthly demand throughout the year to understand
                  seasonality and booking patterns — helping forecast expected
                  income.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-indigo-600 font-bold">02.</span>
                <span>
                  We define the expected occupancy rate for your specific
                  room or property type based on comparable listings.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-indigo-600 font-bold">03.</span>
                <span>
                  We recommend a pricing and hosting strategy and explain why
                  a particular option is best suited to your property.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="text-indigo-600 font-bold">04.</span>
                <span>
                  (+) Some bells and whistles — good-looking trend charts
                  specific to your property that add extra value to your
                  research.
                </span>
              </li>
            </ul>
          </div>

          {/* RIGHT – IMAGE (MARKET / TREND STYLE) */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-full h-full bg-indigo-100 rounded-2xl blur-xl opacity-70" />
            <img
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200"
              alt="Short-let market trend chart"
              className="relative z-10 w-full rounded-2xl shadow-xl object-cover"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
