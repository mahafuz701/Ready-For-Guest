import { useState } from "react";

const tabs = [
  {
    id: "none",
    label: "No properties yet",
    title: "Start your short-let business with confidence",
    text:
      "Thinking about launching your own Airbnb or short-let business but not sure where to begin? ReadyForGuest supports you from day one — from sourcing your first property to building a profitable hosting operation.",
    points: [
      "Step-by-step onboarding and training",
      "Guidance to secure your first short-let property",
      "Help with compliance, pricing and setup",
      "Ongoing support to grow your portfolio",
    ],
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
  },
  {
    id: "1-5",
    label: "1–5 Properties",
    title: "Build a profitable hosting foundation",
    text:
      "Perfect for new and growing hosts who want to maximise revenue while keeping operations simple and automated.",
    points: [
      "Smart pricing optimisation",
      "Unified guest messaging",
      "Cleaning & turnover coordination",
      "Performance insights and reporting",
    ],
    image:
      "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
  },
  {
    id: "6-10",
    label: "6–10 Properties",
    title: "Professional management at scale",
    text:
      "Run multiple listings efficiently with ReadyForGuest’s automation tools and expert operational support.",
    points: [
      "Dedicated account guidance",
      "Advanced analytics & reporting",
      "Operational workflows & automations",
      "Growth and pricing strategy",
    ],
    image:
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
  },
  {
    id: "10+",
    label: "10+ Properties",
    title: "Enterprise-level partnership",
    text:
      "Designed for professional operators and property managers scaling large portfolios across multiple locations.",
    points: [
      "Enterprise pricing strategies",
      "Multi-location portfolio support",
      "Priority guest services",
      "Custom growth and revenue planning",
    ],
    image:
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
  },
];

export default function PartnerTabs() {
  const [active, setActive] = useState(tabs[0]);

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <h2 className="text-4xl font-extrabold mb-4">
          Who is ReadyForGuest for?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-12">
          Whether you're launching your first Airbnb or managing a growing
          portfolio, ReadyForGuest is built to support hosts at every stage —
          with automation, tools and expert guidance tailored to your needs.
        </p>

        {/* TABS */}
        <div className="bg-gray-100 rounded-lg p-2 flex gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActive(tab)}
              className={`flex-1 py-3 text-sm font-semibold rounded-md transition
                ${
                  active.id === tab.id
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-white"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="bg-gray-50 rounded-xl p-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* IMAGE */}
            <img
              src={active.image}
              alt={active.title}
              className="w-full h-[460px] object-cover rounded-md"
            />

            {/* TEXT */}
            <div>
              <h3 className="text-3xl font-extrabold mb-6">
                {active.title}
              </h3>

              <p className="text-gray-700 mb-8 leading-relaxed">
                {active.text}
              </p>

              <ul className="space-y-4 mb-8">
                {active.points.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="w-5 h-5 mt-1 rounded-full bg-black text-white text-xs flex items-center justify-center">
                      ✓
                    </span>
                    <span className="text-gray-800">{point}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => window.open("/pricing", "_self")}
                className="bg-black text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-900 transition"
              >
                View Our Pricing
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
