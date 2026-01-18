import './App.css';
import Navbar from "./components/navbar.jsx";

import HeroSection from './components/herosectipon.jsx'
//import BookingSitesCarousel from './components/BookingSitesCarousel.jsx';
import PartnerTabs from './components/PartnerTabs.jsx';
import SuccessStory from './components/SuccessStory.jsx';
import MaximizeBusiness from './components/MaximizeBusiness.jsx';
import GrowAutomateModern from './components/GrowAutomateModern.jsx';
import SuccessStoryDublin from './components/SuccessStoryDublin.jsx';
import MaximiseProfitsSection from './components/MaximiseProfitsSection.jsx';
import RentToRentSuccessSection from './components/RentToRentSuccessSection.jsx';
import FaqAirbnbPartnership from './components/FaqAirbnbPartnership.jsx';
import BigPortfolioCTA from './components/BigPortfolioCTA';
import ManageScaleSection from './components/ManageScaleSection.jsx';


export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <PartnerTabs />
      <SuccessStory />
      <MaximizeBusiness />
      <GrowAutomateModern />
      <SuccessStoryDublin />
      <MaximiseProfitsSection />
      <RentToRentSuccessSection />
      <FaqAirbnbPartnership />
      <BigPortfolioCTA />
      <ManageScaleSection />
      </>
      
    
  )
}


