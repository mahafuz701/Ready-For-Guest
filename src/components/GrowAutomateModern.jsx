export default function GrowAutomateModern() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-br from-black via-neutral-900 to-black px-20 py-28 flex justify-center">

          {/* CENTER CONTENT */}
          <div className="relative z-10 max-w-2xl text-center flex flex-col items-center">
            <h2 className="text-white text-5xl md:text-6xl font-extrabold leading-tight mb-10">
              Grow & Automate <br />
              Your Short-Let Business
            </h2>

            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12">
              Manage pricing, bookings, calendars and guest communication from
              one simple platform. ReadyForGuest helps you increase occupancy,
              maximise revenue, and scale your short-let portfolio with ease.
            </p>

            <button
              onClick={() =>
                window.open(
                  "https://calendly.com/airoperate_onboarding/30mins",
                  "_blank"
                )
              }
              className="bg-white text-black px-12 py-4 rounded-xl font-semibold text-lg hover:bg-yellow-400 transition shadow-lg"
            >
              Book a Free Call →
            </button>

            <p className="mt-4 text-sm text-gray-400">
              Free consultation • No setup fees • Cancel anytime
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

