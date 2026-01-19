export default function Footer() {
  const openCalendly = () => {
    window.open(
      "https://calendly.com/airoperate_onboarding/30mins?",
      "_blank"
    );
  };

  return (
    <footer className="bg-[#0b0f14] text-gray-300 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* ===== TOP GRID ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* LOGO */}
              <div className="w-12 h-12 rounded-xl overflow-hidden bg-white shadow-md flex items-center justify-center">
                <img
                  src="/Home.png"
                  alt="ReadyForGuest logo"
                  className="w-full h-full object-contain p-1"
                />
              </div>

              <div>
                <h3 className="text-white font-semibold text-lg">
                  Ready for Guest
                </h3>
                <p className="text-xs text-gray-400">
                  Powered by Ready for Guest
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-400 max-w-sm">
              Helping short-let hosts maximise bookings, automate operations,
              and grow revenue with expert support and smart technology.
            </p>

            <p className="text-sm mt-4 text-gray-400">
              Ready for Guest <br />
              Reg. No: 11075311 (UK)
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Company
            </h4>

            <ul className="space-y-3 text-sm">
              <li><a href="/" className="hover:text-white transition">Home</a></li>
              <li><a href="/value-your-short-let" className="hover:text-white transition">Value your short-let</a></li>
              <li><a href="/pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="/support" className="hover:text-white transition">24/7 Guest Support</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Services
            </h4>

            <ul className="space-y-3 text-sm">
              <li>Listing Optimisation</li>
              <li>Channel Calendar Sync</li>
              <li>Dynamic Pricing</li>
              <li>Guest Messaging</li>
              <li>Telephone Support</li>
              <li>Automation Tools</li>
            </ul>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              Quick Links
            </h4>

            <ul className="space-y-4 text-sm">
              <li>
                <button
                  onClick={openCalendly}
                  className="inline-flex items-center justify-center bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition shadow-sm"
                >
                  Book a Call
                </button>
              </li>

              <li>
                <a href="/pricing" className="hover:text-white transition">
                  View Pricing
                </a>
              </li>

              <li>
                <a href="/value-your-short-let" className="hover:text-white transition">
                  Free Property Valuation
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* ===== DIVIDER ===== */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">

          {/* LEFT */}
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Ready for Guest. All rights reserved.
          </p>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            <a href="#" className="text-xs text-gray-500 hover:text-white transition">
              Terms & Conditions
            </a>

            <a href="#" className="text-xs text-gray-500 hover:text-white transition">
              Privacy Policy
            </a>

            <button className="bg-white text-black px-5 py-2 rounded-full text-xs font-semibold shadow hover:bg-gray-200 transition">
              Chat with us
            </button>

          </div>

        </div>

      </div>
    </footer>
  );
}
