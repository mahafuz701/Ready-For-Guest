import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-gray-900 font-semibold"
      : "text-gray-700 hover:text-gray-900 transition-colors";

  const openCalendly = () => {
    window.open(
      "https://calendly.com/airoperate_onboarding/30mins?",
      "_blank"
    );
  };

  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO + BRAND */}
        <Link
          to="/"
          className={`flex items-center gap-3 transition ${
            isHome ? "opacity-100" : "opacity-80 hover:opacity-100"
          }`}
        >
          {/* ✅ LOGO IMAGE */}
          <div
            className={`w-12 h-12 rounded-xl overflow-hidden bg-white shadow-md flex items-center justify-center transition ${
              isHome ? "ring-2 ring-indigo-500" : ""
            }`}
          >
            <img
              src="/Home.png"
              alt="ReadyForGuest logo"
              className="w-full h-full object-contain p-1"
            />
          </div>

          <div className="leading-tight">
            <h1 className="text-base font-bold tracking-tight text-gray-900">
              Ready for Guest
            </h1>
            <p className="text-xs text-gray-500">
              Powered by AirOperate
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className={isActive("/")}>Home</Link>

          <Link
            to="/value-your-short-let"
            className={isActive("/value-your-short-let")}
          >
            Value your short-let
          </Link>

          <Link to="/pricing" className={isActive("/pricing")}>
            Pricing
          </Link>

          <Link to="/support" className={isActive("/support")}>
            24/7 Guest Support
          </Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <button
            onClick={openCalendly}
            className="hidden md:inline-flex bg-gray-900 text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-black transition shadow-sm"
          >
            Book a call
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-900 text-2xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-6 py-6 flex flex-col gap-5 text-sm font-medium">

            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={isActive("/")}
            >
              Home
            </Link>

            <Link
              to="/value-your-short-let"
              onClick={() => setOpen(false)}
              className={isActive("/value-your-short-let")}
            >
              Value your short-let
            </Link>

            <Link
              to="/pricing"
              onClick={() => setOpen(false)}
              className={isActive("/pricing")}
            >
              Pricing
            </Link>

            <Link
              to="/support"
              onClick={() => setOpen(false)}
              className={isActive("/support")}
            >
              24/7 Guest Support
            </Link>

            <button
              onClick={() => {
                setOpen(false);
                openCalendly();
              }}
              className="mt-4 inline-flex items-center justify-center bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-black transition"
            >
              Book a call
            </button>

          </nav>
        </div>
      )}
    </header>
  );
}
