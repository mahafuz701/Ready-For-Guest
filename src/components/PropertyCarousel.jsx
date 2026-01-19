export default function AutomationCarousel() {
  const features = [
    {
      title: "Smart Pricing Engine",
      desc:
        "Automatically optimise nightly rates 24/7 based on market demand, seasonality, local events and competitor pricing.",
      icon: "📈",
    },
    {
      title: "Channel Calendar Sync",
      desc:
        "Real-time calendar synchronisation across Airbnb, Booking.com and other channels to prevent double bookings.",
      icon: "📅",
    },
    {
      title: "Unified Inbox",
      desc:
        "Manage all guest messages from every booking site in one simple, centralised inbox.",
      icon: "🧩",
    },
    {
      title: "Mobile-Ready Dashboard",
      desc:
        "Stay in control on the go — manage pricing, bookings and guest communication from any device.",
      icon: "📱",
    },
    {
      title: "Automated Guest Messaging",
      desc:
        "Send instant, personalised messages to guests for check-in, house rules and FAQs automatically.",
      icon: "💬",
    },
    {
      title: "Performance Insights",
      desc:
        "Track occupancy, earnings and booking trends with clear dashboards and reporting tools.",
      icon: "📊",
    },
  ];

  return (
    <section className="bg-[#0B1A4A] py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <h2 className="text-white text-5xl font-extrabold leading-tight">
            Powerful automation.<br />
            <span className="text-blue-200">Zero hassle.</span>
          </h2>

          <p className="text-blue-100 text-lg leading-relaxed max-w-xl">
            ReadyForGuest gives you one intelligent platform to run your entire
            short-let business. From smart pricing and calendar sync to automated
            guest messaging and performance insights — everything works together
            seamlessly.
          </p>
        </div>

        {/* AUTO CAROUSEL */}
        <div className="relative">
          <div className="flex gap-8 animate-marquee whitespace-nowrap">

            {[...features, ...features].map((item, i) => (
              <div
                key={i}
                className="min-w-[300px] max-w-[300px] bg-[#F5FAFF] rounded-2xl p-8 shadow-lg hover:shadow-xl transition"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-2xl mb-6 shadow-sm">
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
