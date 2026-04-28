import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Industries from "./components/Industries";
import Work from "./components/Work";
import Process from "./components/Process";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Mac from "./components/Mac";
import Earth from "./components/Earth";



export default function Home() {
  return (
    <main className="bg-background text-text min-h-screen font-sans">
      <Navbar />
      <Hero /> 
      <Services />
      <Industries />
      <Work />
      <Earth />
      <Process />
      <Testimonials />
      <Mac />
      <FAQ />
      <CTA />
      <ContactForm />
      <Footer />
    </main>
  );
}
