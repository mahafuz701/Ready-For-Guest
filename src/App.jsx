import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";

// HOME SECTIONS
import HeroSection from "./components/HeroSection.jsx";
import PartnerTabs from "./components/PartnerTabs.jsx";
import OneDashboardSection from "./components/OneDashboardSection.jsx";
import SuccessStory from "./components/SuccessStory.jsx";
import MaximizeBusiness from "./components/MaximizeBusiness.jsx";
import GrowAutomateModern from "./components/GrowAutomateModern.jsx";
import SuccessStoryDublin from "./components/SuccessStoryDublin.jsx";
import MaximiseProfitsSection from "./components/MaximiseProfitsSection.jsx";
import ExpertSupportSection from "./components/ExpertSupportSection.jsx";
import RentToRentSuccessSection from "./components/RentToRentSuccessSection.jsx";
import FaqAirbnbPartnership from "./components/FaqAirbnbPartnership.jsx";
import AutomationSection from "./components/AutomationSection.jsx";
import PropertyCarouselUltra from "./components/PropertyCarouselUltra.jsx";
import BigPortfolioCTA from "./components/BigPortfolioCTA.jsx";
import ManageScaleSection from "./components/ManageScaleSection.jsx";

// VALUE SHORT-LET PAGE
import ValueShortLetSection from "./components/ValueShortLetSection.jsx";
import PricingSection from "./components/PricingSection.jsx";

// SUPPORT PAGE
import GuestSupportSection from "./components/GuestSupportSection.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <PartnerTabs />
              <OneDashboardSection />
              <SuccessStory />
              <MaximizeBusiness />
              <ExpertSupportSection />
              <GrowAutomateModern />
              <SuccessStoryDublin />
              <MaximiseProfitsSection />
              <RentToRentSuccessSection />
              <FaqAirbnbPartnership />
              <AutomationSection />
              <PropertyCarouselUltra />
              <BigPortfolioCTA />
              <ManageScaleSection />
            </>
          }
        />

        {/* VALUE YOUR SHORT-LET PAGE */}
        <Route
          path="/value-your-short-let"
          element={
            <>
              <ValueShortLetSection />
            </>
          }
        />

        {/* PRICING PAGE */}
        <Route
          path="/pricing"
          element={
            <>
              <PricingSection />
            </>
          }
        />

        {/* SUPPORT PAGE */}
        <Route
          path="/support"
          element={
            <>
              <GuestSupportSection />
            </>
          }
        />
      </Routes>
        <Footer />
    </Router>
  );
}
