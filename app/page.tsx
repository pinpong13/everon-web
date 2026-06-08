import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatsIncluded from "@/components/WhatsIncluded";
import Tiers from "@/components/Tiers";
import Events from "@/components/Events";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
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
        <Tiers />
        <Events />
        <WhyUs />
        <Testimonials />
        <ContactForm />
        <About />
      </main>
      <Footer />
    </>
  );
}
