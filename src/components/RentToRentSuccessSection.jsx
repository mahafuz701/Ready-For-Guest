export default function RentToRentSuccessSection() {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT – VIDEO */}
          <div className="w-full rounded-2xl overflow-hidden shadow-xl aspect-video bg-black">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/2g811Eo7K8U"
              title="Rent to Rent Airbnb Success"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          {/* RIGHT – CONTENT */}
          <div>
            <h2 className="text-4xl font-extrabold leading-tight mb-10">
              Turn Rent-to-Rent into a <br />
              Profitable Airbnb Business
            </h2>

            <ul className="space-y-8 mb-12">

              <li className="flex gap-4 items-start">
                <span className="text-xl">✓</span>
                <p>
                  <strong>Profitable Airbnb Arbitrage:</strong> Convert
                  rent-to-rent investments into high-yield Airbnb properties
                  using ReadyForGuest’s proven systems.
                </p>
              </li>

              <li className="flex gap-4 items-start">
                <span className="text-xl">🎯</span>
                <p>
                  <strong>Expert Hosting Support:</strong> Skip the guesswork —
                  get proven strategies, automation and expert guidance from
                  industry leaders.
                </p>
              </li>

              <li className="flex gap-4 items-start">
                <span className="text-xl">⚡</span>
                <p>
                  <strong>Seamless Scaling:</strong> Transition effortlessly
                  into short-lets with ReadyForGuest’s streamlined partnership.
                </p>
              </li>

            </ul>

            <button className="bg-black text-white px-12 py-4 rounded-xl font-semibold hover:bg-gray-900 transition">
              GET STARTED
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
