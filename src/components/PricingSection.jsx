export default function PricingPage() {
  const services = [
    {
      title: "Optimise Your Listing",
      desc: "Improve your listing performance with professional pricing, photos, descriptions and positioning to attract more guests.",
      icon: "🛠️",
    },
    {
      title: "Channel Calendar Sync",
      desc: "Sync all your bookings across Airbnb, Booking.com and other platforms to avoid double bookings.",
      icon: "📅",
    },
    {
      title: "24/7 Guest Support",
      desc: "Round-the-clock guest messaging and telephone support to handle enquiries, issues and check-ins.",
      icon: "📞",
    },
    {
      title: "Automation Tools",
      desc: "Automate pricing, messaging, calendars and operations to save time and scale effortlessly.",
      icon: "🤖",
    },
    {
      title: "Worldwide Visibility",
      desc: "Get your property listed across multiple booking channels and reach millions of travellers.",
      icon: "🌍",
    },
    {
      title: "Unified Dashboard",
      desc: "Manage listings, bookings, guest messages and earnings from one central dashboard.",
      icon: "🧑‍💼",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== HERO ===== */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Flexible Pricing. <br className="hidden md:block" />
            Only Pay for What You Need.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            ReadyForGuest lets you build a custom hosting plan based on your needs.
            No setup fees. No long-term contracts. Total control over your costs.
          </p>
        </div>

        {/* ===== SUBSCRIBE BANNER ===== */}
        <div className="bg-[#1f2933] rounded-3xl py-14 px-6 md:px-12 text-center mb-24">
          <h2 className="text-2xl md:text-4xl font-extrabold text-yellow-400 mb-8 leading-snug">
            Only subscribe to what you need. <br />
            Prices start from GBP / USD 20
          </h2>

          <p className="text-white/80 mb-10 max-w-3xl mx-auto">
            Choose one service or combine multiple tools — from guest messaging
            and telephone support to pricing automation and channel management.
          </p>

          <div className="bg-white rounded-2xl shadow-lg py-8 px-6 flex justify-center">
            <button
              onClick={() =>
                window.open(
                  "https://calendly.com/airoperate_onboarding/30mins?month=2026-01",
                  "_blank"
                )
              }
              className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold px-8 py-3 md:px-10 md:py-4 rounded-lg text-base md:text-lg"
            >
              Subscribe to Guest Support
            </button>
          </div>
        </div>

        {/* ===== SERVICE GRID ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition p-8 border border-gray-100"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-2xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed">
                {item.desc}
              </p>

              <button
                onClick={() =>
                  window.open(
                    "https://calendly.com/airoperate_onboarding/30mins?month=2026-01",
                    "_blank"
                  )
                }
                className="mt-6 inline-flex items-center justify-center bg-indigo-600 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-indigo-700 transition"
              >
                Enquire About This Service
              </button>
            </div>
          ))}
        </div>

        {/* ===== INFO STRIP ===== */}
        <div className="bg-indigo-50 border border-indigo-100 rounded-3xl p-10 md:p-14 text-center mb-24">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Build Your Own Custom Hosting Plan
          </h2>

          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            With ReadyForGuest, you only pay for the services you need.
            Start small or go all-in with full automation, guest support and
            pricing optimisation — and scale as your portfolio grows.
          </p>
        </div>

        {/* ===== CTA ===== */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Ready to Get Started?
          </h2>

          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Book a free consultation and we’ll help you build a pricing plan
            tailored to your property and growth goals.
          </p>

          <button
            onClick={() =>
              window.open(
                "https://calendly.com/airoperate_onboarding/30mins?month=2026-01",
                "_blank"
              )
            }
            className="bg-gray-900 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-black transition shadow-md"
          >
            Book a Free Call
          </button>

          <p className="mt-4 text-sm text-gray-500">
            Free consultation • No setup fees • Cancel anytime • Airbnb compliant
          </p>
        </div>

      </div>
    </section>
  );
}
