import { useRef } from "react";
import SiteHeader from "./components/SiteHeader.jsx";
import HeroSection from "./components/HeroSection.jsx";
import MarketingPulseBar from "./components/MarketingPulseBar.jsx";
import TeamWorkspaceVideoSection from "./components/TeamWorkspaceVideoSection.jsx";
import ServicesSection from "./components/ServicesSection.jsx";
import DifferentialsSection from "./components/DifferentialsSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import LeadSection from "./components/LeadSection.jsx";
import PartnersSection from "./components/PartnersSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import FloatingWhatsapp from "./components/FloatingWhatsapp.jsx";
import { useRevealOnScroll } from "./hooks/useRevealOnScroll.js";

export default function App() {
  const heroRef = useRef(null);
  useRevealOnScroll();

  return (
    <>
      <a className="skip-link" href="#conteudo">
        Ir para o conteúdo
      </a>
      <SiteHeader heroSectionRef={heroRef} />
      <main id="conteudo">
        <HeroSection ref={heroRef} />
        <MarketingPulseBar />
        <TeamWorkspaceVideoSection />
        <ServicesSection />
        <DifferentialsSection />
        <AboutSection />
        <LeadSection />
        <PartnersSection />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingWhatsapp />
    </>
  );
}
