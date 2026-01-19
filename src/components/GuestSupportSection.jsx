export default function GuestSupportSection() {
  const features = [
    {
      title: "24/7 Guest Messaging",
      desc: "We handle all guest messages across Airbnb, Booking.com, Vrbo and direct bookings — so you never miss a single enquiry or booking opportunity.",
      icon: "💬",
    },
    {
      title: "Telephone Support",
      desc: "Our trained support team answers guest calls around the clock, resolving issues quickly and professionally on your behalf.",
      icon: "📞",
    },
    {
      title: "Automated & Smart Replies",
      desc: "Instant automated responses for common questions like check-in, Wi-Fi and parking — keeping response times fast and guests satisfied.",
      icon: "🤖",
    },
    {
      title: "Personalised Guest Care",
      desc: "Friendly human support that delivers a premium guest experience, helping you earn better reviews and more repeat bookings.",
      icon: "⭐",
    },
  ];

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== HEADER ===== */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Guest Messaging & <br className="hidden md:block" />
            Telephone Support
          </h2>

          <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Deliver a five-star guest experience without lifting a finger.
            ReadyForGuest manages all guest communication for you — 24/7,
            across every booking channel.
          </p>
        </div>

        {/* ===== HERO IMAGE ===== */}
        <div className="flex justify-center mb-20">
          <img
            src="https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?q=80&w=1400"
            alt="Guest messaging and support team"
            className="w-full max-w-5xl rounded-3xl shadow-2xl object-cover"
          />
        </div>

        {/* ===== FEATURE GRID ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-24">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50 rounded-3xl p-10 shadow-md hover:shadow-xl transition"
            >
              <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-2xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* ===== CTA ===== */}
        <div className="text-center">
          <p className="text-gray-700 text-lg md:text-xl mb-8">
            Want stress-free guest communication and better reviews?
          </p>

          <button
            onClick={() =>
              window.open(
                "https://calendly.com/airoperate_onboarding/30mins",
                "_blank"
              )
            }
            className="inline-flex items-center justify-center bg-gray-900 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:bg-black transition shadow-lg"
          >
            Book a Free Call
          </button>

          <p className="mt-4 text-sm text-gray-500">
            24/7 support • Faster replies • Higher guest ratings
          </p>
        </div>

      </div>
    </section>
  );
}
