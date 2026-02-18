import Hero from "./components/Hero";
import SoluctionSection from "./components/SoluctionSection";
import ImplementationSection from "./components/ImplementationSection";
import ServicesSection from "./components/ServicesSection";
import MethodologySection from "./components/MethodologySection";
import WhyChoosingUs from "./components/WhyChoosingUs";
import BenefitsSection from "./components/BenefitsSection";
import AppSection from "./components/AppSection";
import ResultsSection from "./components/ResultsSection";
import RisksSection from "./components/RisksSection";
import PlanSection from "./components/PlansSection";
import DiagnosticSection from "./components/DiagnosticSection";
import Footer from "./components/Footer";
import ReformaSection from "./components/ReformaSection";

export default function Home() {
  return (
    <>
      <Hero />
      <ReformaSection />
      <SoluctionSection />
      <ImplementationSection />
      <ServicesSection />
      <MethodologySection />
      <WhyChoosingUs />
      <BenefitsSection />
      <AppSection />
      <ResultsSection />
      <RisksSection />
      <PlanSection />
      <DiagnosticSection />
      <Footer />
    </>
  );
}
