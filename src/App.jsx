import NavBar from './components/NavBar';
import { ScrollTrigger, ScrollSmoother } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import HeroSection from './sections/HeroSection';
import MessageSection from './sections/MessageSection';
import FlavorSection from './sections/FlavorSection';
import NutritionSection from './sections/NutritionSection';
import BenefitSection from './sections/BenefitSection';
import TestimonialSection from './sections/TestimonialSection';
import FooterSection from './sections/FooterSection';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth:3,
      effects:true,
    })
  });
  
  return (<main>
    <NavBar/>
    <div id="smooth-wrapper">
      <div id="smooth-content">

        <HeroSection/>
        <MessageSection/>
        <FlavorSection/>
        {/* <NutritionSection/> */}
        <BenefitSection/>
        <TestimonialSection/>
        {/* <FooterSection/> */}
        {/* <div className="h-dvh border border-red-500"></div> */}
      </div>
    </div>
    
    
  </main>
    
  )
}

export default App