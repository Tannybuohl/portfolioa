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
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Benefits />
        <Comparison />
        <Process />
        <DesignVsDev />
        <Pricing />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
