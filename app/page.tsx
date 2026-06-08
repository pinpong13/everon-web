import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatsIncluded from "@/components/WhatsIncluded";
import HowItWorks from "@/components/HowItWorks";
import Tiers from "@/components/Tiers";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <WhatsIncluded />
        <HowItWorks />
        <Tiers />
        <Events />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <ContactForm />
        <About />
      </main>
      <Footer />
    </>
  );
}
