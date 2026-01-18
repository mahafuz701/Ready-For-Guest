export default function PropertyCarouselUltra() {
  const properties = [
    {
      title: "Hillside Country Cottage",
      location: "Hosted with ReadyForGuest",
      image:
        "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1200",
    },
    {
      title: "Modern View Cabin",
      location: "Hosted with ReadyForGuest",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    },
    {
      title: "Coastal Holiday Home",
      location: "Hosted with ReadyForGuest",
      image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200",
    },
    {
      title: "Luxury City Retreat",
      location: "Hosted with ReadyForGuest",
      image:
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1200",
    },
    {
      title: "Premium Lodge Stay",
      location: "Hosted with ReadyForGuest",
      image:
        "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200",
    },
  ];

  return (
    <section className="bg-white py-28 overflow-hidden">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Ready to increase <br /> your bookings?
          </h2>

          <div className="text-left lg:text-right">
            <p className="text-gray-600 mb-4">
              Free to list. No setup fees. <br />
              Start earning more today.
            </p>

            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Get started
            </button>
          </div>
        </div>
      </div>

      {/* AUTO CAROUSEL */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-[200%] gap-6 animate-marquee hover:[animation-play-state:paused] px-6">

          {[...properties, ...properties].map((item, i) => (
            <div
              key={i}
              className="relative min-w-[280px] md:min-w-[340px] h-[420px] rounded-2xl overflow-hidden shadow-lg group"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

              {/* text */}
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                <p className="text-sm opacity-90">{item.location}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
