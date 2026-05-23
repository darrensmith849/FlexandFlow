import Header from "./components/Header";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="overflow-hidden">
        <Hero />
        <Benefits />
        <About />
        <Schedule />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
