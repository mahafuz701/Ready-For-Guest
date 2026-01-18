export default function SuccessStorySection() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT – VIDEO */}
          <div className="w-full rounded-2xl overflow-hidden shadow-xl aspect-video bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2g811Eo7K8U"
              title="Airbnb success story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* RIGHT – CONTENT */}
          <div>
            <h2 className="text-4xl font-extrabold leading-tight mb-10">
              Scaling an Airbnb Business in Dublin <br />
              <span className="text-gray-900">A Success Story</span>
            </h2>

            <ul className="space-y-8 mb-12">

              <li className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-yellow-400 text-lg leading-none shadow-md">
                  🚀
                </div>
                <p>
                  <strong>Thriving Airbnb Business:</strong> Scaled from a small
                  portfolio to becoming a recognised short-let operator in
                  Dublin with ReadyForGuest support.
                </p>
              </li>

              <li className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-yellow-400 text-lg leading-none shadow-md">
                  💰
                </div>
                <p>
                  <strong>Low-Cost Entry:</strong> Started with minimal upfront
                  investment and grew faster through automation and expert
                  guidance.
                </p>
              </li>

              <li className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-yellow-400 text-lg leading-none shadow-md">
                  🌍
                </div>
                <p>
                  <strong>Brand Power:</strong> Leveraged ReadyForGuest’s trusted
                  reputation to attract premium guests and property owners.
                </p>
              </li>

              <li className="flex gap-5 items-start">
                <div className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-yellow-400 text-lg leading-none shadow-md">
                  📈
                </div>
                <p>
                  <strong>Fast-Track Growth:</strong> Expanded the portfolio
                  significantly faster than the average Airbnb host.
                </p>
              </li>

            </ul>

            <button className="bg-black text-white px-10 py-4 rounded-xl font-semibold hover:bg-gray-900 transition">
              Get Started
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
