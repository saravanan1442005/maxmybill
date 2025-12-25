import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Showcase from "@/components/sections/Showcase";
import ContactForm from "@/components/sections/ContactForm";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Showcase />
      <Features />
      <ContactForm />
      <Footer />
    </main>
  );
}
