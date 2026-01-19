export default function SuccessStorySection() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT – VIDEO */}
          <div className="w-full rounded-3xl overflow-hidden shadow-2xl aspect-video bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2g811Eo7K8U"
              title="ReadyForGuest success story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* RIGHT – CONTENT */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-10">
              Scaling a Short-Let Business in Dublin <br />
              <span className="text-gray-900">A ReadyForGuest Success Story</span>
            </h2>

            <ul className="space-y-8 mb-12">

              <li className="flex gap-5 items-start">
                <div className="text-2xl leading-none">🚀</div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Thriving Short-Let Business:</strong> Scaled from a
                  small portfolio into a recognised short-term rental operator
                  in Dublin with ReadyForGuest’s automation and support.
                </p>
              </li>

              <li className="flex gap-5 items-start">
                <div className="text-2xl leading-none">💰</div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Low-Cost Entry:</strong> Started with minimal upfront
                  investment and accelerated growth using ReadyForGuest’s
                  pricing engine and channel management tools.
                </p>
              </li>

              <li className="flex gap-5 items-start">
                <div className="text-2xl leading-none">🌍</div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Brand Power:</strong> Leveraged ReadyForGuest’s trusted
                  platform and distribution network to attract premium guests
                  and property owners.
                </p>
              </li>

              <li className="flex gap-5 items-start">
                <div className="text-2xl leading-none">📈</div>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Fast-Track Growth:</strong> Expanded the portfolio far
                  faster than the average host by automating pricing, calendar
                  sync and guest messaging.
                </p>
              </li>

            </ul>

            <button
              onClick={() =>
                window.open(
                  "https://calendly.com/airoperate_onboarding/30mins?month=2026-01",
                  "_blank"
                )
              }
              className="bg-black text-white px-10 py-4 rounded-xl font-semibold hover:bg-gray-900 transition shadow-lg"
            >
              Book a Free Call
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
