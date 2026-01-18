import { useState } from "react";

const faqs = [
  {
    q: "What is the Houst Airbnb Partnership?",
    a: "The Houst Airbnb Partnership helps you start and scale a short-let business with expert guidance, automation tools, and operational support."
  },
  {
    q: "Who is the Houst Partnership for?",
    a: "The partnership is designed for new hosts, experienced Airbnb operators, and property managers looking to grow faster."
  },
  {
    q: "What kind of support does Houst provide?",
    a: "Houst provides pricing optimisation, guest communication, marketing support, operational tools, and expert account management."
  },
  {
    q: "How much can I make with the Houst Airbnb Partnership?",
    a: "Earnings vary depending on location and portfolio size, but partners benefit from optimised pricing and scalable income potential."
  },
  {
    q: "How do I start my Airbnb business with Houst?",
    a: "You can apply online, book a discovery call, and follow a step-by-step onboarding process guided by Houst experts."
  },
  {
    q: "Can I start without owning a property?",
    a: "Yes. Houst supports rent-to-rent and co-hosting models, allowing you to start without owning property."
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
            <h2 className="text-4xl font-extrabold leading-tight">
              FAQ – Airbnb <br /> Partnership
            </h2>
          </div>

          {/* RIGHT FAQ LIST */}
          <div className="lg:col-span-2 divide-y">

            {faqs.map((item, i) => (
              <div key={i} className="py-6">

                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-lg font-semibold">
                    {item.q}
                  </span>

                  <span className="text-2xl font-light">
                    {open === i ? "−" : "+"}
                  </span>
                </button>

                {open === i && (
                  <p className="mt-4 text-gray-600 max-w-3xl">
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
