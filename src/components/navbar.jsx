import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO + BRAND */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-sm">
            🏠
          </div>
          <div className="leading-tight">
            <h1 className="text-base font-bold tracking-tight text-gray-900">
              Ready for Guest
            </h1>
            <p className="text-xs text-gray-500">
              Powered by AirOperate
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <a href="#" className="hover:text-gray-900 transition-colors">Home</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Value your short-let</a>
          <a href="#" className="hover:text-gray-900 transition-colors">Pricing</a>
          <a href="#" className="hover:text-gray-900 transition-colors">24/7 Guest Support</a>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* CTA */}
          <button className="hidden md:inline-flex bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-black transition shadow-sm">
            Book a call
          </button>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-900 text-2xl focus:outline-none"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="px-6 py-6 flex flex-col gap-5 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-gray-900">Home</a>
            <a href="#" className="hover:text-gray-900">Value your short-let</a>
            <a href="#" className="hover:text-gray-900">Pricing</a>
            <a href="#" className="hover:text-gray-900">24/7 Guest Support</a>

            <button className="mt-4 bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold">
              Book a call
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
