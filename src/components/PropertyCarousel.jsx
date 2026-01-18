export default function AutomationCarousel() {
  const features = [
    {
      title: "Smart pricing",
      desc:
        "Automatically adjust your Airbnb prices 24/7 based on demand, seasonality, and local competition.",
      icon: "📈",
    },
    {
      title: "Calendar sync",
      desc:
        "Instant calendar updates across Airbnb, Booking.com, and more — no clashes, no double bookings.",
      icon: "📅",
    },
    {
      title: "One dashboard",
      desc:
        "Manage bookings, guest messages, and performance from one simple, unified workspace.",
      icon: "🧩",
    },
    {
      title: "Mobile control",
      desc:
        "Stay on top of pricing, bookings, and guests from anywhere using our mobile-ready platform.",
      icon: "📱",
    },
  ];

  return (
    <section className="bg-[#0B1A4A] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <h2 className="text-white text-5xl font-extrabold leading-tight">
            Powerful automation.<br />Zero hassle.
          </h2>

          <p className="text-blue-100 text-lg leading-relaxed max-w-xl">
            Manage everything from one simple platform. Smart pricing adjusts
            your rates automatically, calendar sync prevents double bookings,
            and a unified inbox keeps every guest message in one place.
          </p>
        </div>

        {/* AUTO CAROUSEL */}
        <div className="relative">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">

            {[...features, ...features].map((item, i) => (
              <div
                key={i}
                className="min-w-[280px] max-w-[280px] bg-[#F5FAFF] rounded-2xl p-8 shadow-lg"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl mb-6">
                  {item.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
