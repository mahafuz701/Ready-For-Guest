import { useState } from "react";

const tabs = [
  {
    id: "none",
    label: "No properties yet",
    title: "Turn your idea into a thriving business",
    text:
      "Thinking about becoming a property manager but not sure where to start? Whether you're new to short-term lets or still researching your first step, we'll guide you through every stage - from finding your first property to becoming a confident, profitable partner. We'll give you:",
    points: [
      "Clear, step-by-step training to get started",
      "Expert help setting up your first property",
      "Support with regulation, finance and planning",
      "Long-term guidance to help you grow your portfolio",
    ],
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6",
  },
  {
    id: "1-5",
    label: "1-5 Properties",
    title: "Build a profitable hosting foundation",
    text:
      "Perfect for hosts starting to scale with confidence and support.",
    points: [
      "Pricing optimisation",
      "Guest communication",
      "Cleaning & maintenance",
      "Performance insights",
    ],
    image:
      "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
  },
  {
    id: "6-10",
    label: "6-10 Properties",
    title: "Professional management at scale",
    text:
      "Run multiple properties efficiently with automation and expert support.",
    points: [
      "Dedicated account support",
      "Advanced reporting",
      "Operational workflows",
      "Growth planning",
    ],
    image:
      "https://images.unsplash.com/photo-1560185127-6ed189bf02f4",
  },
  {
    id: "10+",
    label: "10+ Properties",
    title: "Enterprise-level partnership",
    text:
      "Designed for large portfolios aiming for consistent, scalable growth.",
    points: [
      "Enterprise pricing strategy",
      "Multi-location support",
      "Priority guest services",
      "Custom portfolio planning",
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
          Who can become a partner?
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mb-12">
          Whether you're just starting out or managing 20+ listings, Houst is
          built to support hosts at every step – with tools and guidance
          designed around your real needs.
        </p>

        {/* TABS (same width + centered like screenshot) */}
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

        {/* CONTENT WRAPPER */}
        <div className="bg-gray-50 rounded-xl ">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* IMAGE */}
            <img
              src={active.image}
              alt=""
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

              <button className="bg-black text-white px-8 py-4 rounded-md font-semibold hover:bg-gray-900 transition">
                LEARN HOW TO GET STARTED
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

