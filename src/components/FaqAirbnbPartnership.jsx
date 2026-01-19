import { useState } from "react";

const faqs = [
  {
    q: "What is ReadyForGuest?",
    a: "ReadyForGuest is an all-in-one short-let management and automation platform that helps hosts maximise bookings, revenue, and guest satisfaction across multiple booking sites."
  },
  {
    q: "Who is ReadyForGuest for?",
    a: "ReadyForGuest is designed for new Airbnb hosts, experienced short-let operators, and property managers who want to grow their portfolio with less manual work."
  },
  {
    q: "What services does ReadyForGuest provide?",
    a: "We provide smart pricing, calendar synchronisation, unified inbox for guest messaging, listing optimisation, distribution to 30+ booking sites, and 24/7 guest support."
  },
  {
    q: "How does smart pricing work?",
    a: "Our smart pricing engine automatically adjusts your nightly rates based on demand, seasonality, local events, and market competition to maximise occupancy and revenue."
  },
  {
    q: "Will ReadyForGuest prevent double bookings?",
    a: "Yes. Our real-time calendar sync keeps all your booking platforms updated instantly, ensuring there are no clashes or double bookings."
  },
  {
    q: "Do you offer 24/7 guest support?",
    a: "Yes. Our team provides 24/7 guest messaging and telephone support to handle enquiries, check-ins, issues, and emergencies on your behalf."
  },
  {
    q: "Can I manage everything from one dashboard?",
    a: "Absolutely. You can manage listings, reservations, pricing, messages, and performance insights from a single, easy-to-use dashboard."
  },
  {
    q: "How do I get started with ReadyForGuest?",
    a: "You can sign up for free, connect your property, and book a call with our team for onboarding and personalised setup support."
  },
];

export default function FaqAirbnbPartnership() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-3 gap-20">

          {/* LEFT TITLE */}
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-extrabold leading-tight text-gray-900">
              FAQ – ReadyForGuest <br /> Platform
            </h2>

            <p className="mt-4 text-gray-600 max-w-sm">
              Everything you need to know about managing and growing your
              short-let business with ReadyForGuest.
            </p>
          </div>

          {/* RIGHT FAQ LIST */}
          <div className="lg:col-span-2 divide-y border-t border-gray-200">

            {faqs.map((item, i) => (
              <div key={i} className="py-6">

                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center text-left gap-6"
                >
                  <span className="text-lg font-semibold text-gray-900">
                    {item.q}
                  </span>

                  <span className="text-2xl font-light text-indigo-600">
                    {open === i ? "−" : "+"}
                  </span>
                </button>

                {open === i && (
                  <p className="mt-4 text-gray-600 max-w-3xl leading-relaxed">
                    {item.a}
                  </p>
                )}

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}
