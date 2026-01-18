

export default function SuccessStory() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT – VIDEO */}
        <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/VIDEO_ID_HERE"
            title="Ready for Guest success story"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* RIGHT – CONTENT */}
        <div>
          <h2 className="text-4xl font-extrabold leading-tight mb-10">
            How Adrian Built a Thriving <br />
            Airbnb Business from Scratch
          </h2>

          <div className="space-y-6 mb-10">

            {/* ITEM */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold">
                📊
              </div>
              <p className="text-gray-700">
                <span className="font-semibold">
                  Zero to Airbnb Success:
                </span>{" "}
                Adrian started with no properties and, through Ready for
                Guest’s partnership, scaled to managing multiple profitable
                short-term rentals.
              </p>
            </div>

            {/* ITEM */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold">
                💰
              </div>
              <p className="text-gray-700">
                <span className="font-semibold">
                  Profitable in Months:
                </span>{" "}
                Within a short period, Adrian began generating consistent
                income by leveraging automated pricing, guest management, and
                expert support.
              </p>
            </div>

            {/* ITEM */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold">
                ⭐
              </div>
              <p className="text-gray-700">
                <span className="font-semibold">
                  Scalable Growth with Ready for Guest:
                </span>{" "}
                With professional tools, training, and ongoing guidance,
                Adrian built a sustainable Airbnb business designed to grow
                long-term.
              </p>
            </div>

          </div>

          {/* CTA */}
          <button className="bg-black text-white px-10 py-4 rounded-md font-semibold hover:bg-gray-900 transition">
            APPLY NOW
          </button>
        </div>

      </div>
    </section>
  );
}
