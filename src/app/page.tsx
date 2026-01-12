import { Navbar, Footer } from "@/components/layout";
import {
  Hero,
  Services,
  Portfolio,
  Benefits,
  Comparison,
  Process,
  DesignVsDev,
  Pricing,
  Testimonials,
  About,
  Contact,
  Stats,
  TrustedBy,
  CaseStudies,
  QuoteCalculator,
} from "@/components/sections";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";
import { StickyMobileCTA } from "@/components/ui/StickyMobileCTA";
import { ScrollProgress } from "@/components/ui/ScrollProgress";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <Stats />
        <Services />
        <CaseStudies />
        <Portfolio />
        <Benefits />
        <Comparison />
        <Process />
        <DesignVsDev />
        <Pricing />
        <QuoteCalculator />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyMobileCTA />
    </>
  );
}
