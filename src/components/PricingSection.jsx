export default function PricingPage() {
  return (
    <section className="relative w-full bg-gradient-to-b from-slate-50 via-white to-slate-100 py-32 overflow-hidden">
      
      {/* GLOW BACKDROP */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[1100px] bg-indigo-300/20 rounded-full blur-[180px]" />

      <div className="relative w-full px-6 md:px-12 lg:px-20">

        <div className="relative max-w-6xl mx-auto">

          {/* RIGHT – CONTENT (NOW CENTERED & FULL WIDTH FEEL) */}
          <div className="relative">

            {/* TITLE */}
            <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight text-center">
              Deal Package : ONLINE Property Management
            </h2>

            {/* PRICE */}
            <div className="flex justify-center items-end gap-3 mb-10">
              <p className="text-5xl md:text-6xl font-extrabold text-indigo-600">
                80,00 €
              </p>
              <p className="text-lg md:text-xl text-gray-500 font-semibold">
                / month / Property
              </p>
            </div>

            {/* INTRO */}
            <p className="text-gray-700 mb-10 leading-relaxed max-w-4xl mx-auto text-center">
              Deal Package: Enjoy a hassle-free operation with our comprehensive online
              property management service. Our package includes:
            </p>

            {/* FEATURES */}
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-14 gap-y-6 text-gray-700 mb-14 max-w-5xl mx-auto text-base">
              <li>• Dynamic Pricing</li>
              <li>• Property Optimization</li>
              <li>• Direct Bookings Management</li>
              <li>• Calendar Synchronization</li>
              <li>• 24/7 Telephone Support for Guests</li>
              <li>• 24/7 Chat Support for Guests</li>
            </ul>

            {/* SAVE STRIP */}
            <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-8 mb-16 max-w-4xl mx-auto">
              <p className="text-gray-800 leading-relaxed text-center text-lg">
                With us, you’ll save <strong>30% on overall management costs</strong>. Let us handle every
                aspect of your property management so you can focus on what matters most.
              </p>
            </div>

            {/* PACKAGE DESCRIPTION CARD */}
            <div className="relative bg-white rounded-[32px] p-10 md:p-14 shadow-[0_40px_120px_rgba(0,0,0,0.12)] mb-16 border border-gray-200 max-w-5xl mx-auto">

              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-semibold px-5 py-2 rounded-full tracking-widest">
                PACKAGE DESCRIPTION
              </div>

              <p className="text-gray-700 mb-8 leading-relaxed text-center">
                Enjoy a hassle-free operation with our comprehensive online property management
                service. We take care of every aspect of managing your property, allowing you
                to focus on what matters most. Our all-inclusive package offers:
              </p>

              <div className="space-y-5 text-gray-700 text-sm md:text-base leading-relaxed">

                <p>
                  <strong>Dynamic Pricing:</strong> Maximize your revenue with our advanced pricing
                  algorithms that adjust rates based on market demand and competition.
                </p>

                <p>
                  <strong>Property Optimization:</strong> Ensure your property stands out with
                  professional listings, high-quality photos, and compelling descriptions that
                  attract more guests.
                </p>

                <p>
                  <strong>Direct Bookings Management:</strong> Simplify the booking process by
                  handling direct reservations, reducing reliance on third-party platforms,
                  and increasing your profits.
                </p>

                <p>
                  <strong>Calendar Synchronization:</strong> Seamlessly sync all your booking
                  calendars to avoid double bookings and manage your availability efficiently.
                </p>

                <p>
                  <strong>24/7 Telephone Support for Guests:</strong> Provide exceptional guest
                  experiences with round-the-clock phone support, addressing any issues or
                  inquiries promptly.
                </p>

                <p>
                  <strong>24/7 Chat Support for Guests:</strong> Enhance guest satisfaction with
                  instant chat support, available any time to assist with questions or concerns.
                </p>

                <p className="pt-4">
                  By choosing our services, you will save 30% on overall management costs compared
                  to traditional property management solutions. Let us handle every detail of your
                  property management, ensuring a smooth and profitable operation.
                </p>

              </div>

            </div>

            {/* CTA BAR */}
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <button className="relative group bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition text-white px-16 py-5 rounded-2xl font-semibold text-lg shadow-[0_20px_60px_rgba(79,70,229,0.45)]">
                Subscribe
                <span className="absolute inset-0 rounded-2xl ring-2 ring-white/20 group-hover:ring-white/40 transition" />
              </button>

              <button className="bg-gray-900 hover:bg-black transition text-white px-16 py-5 rounded-2xl font-semibold text-lg shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
                Book a Call
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
