import About from "@/components/about";
import BottomCTA from "@/components/bottom-cta";
import FAQs from "@/components/faqs";
import Hero from "@/components/hero";
import Packages from "@/components/packages";
import Services from "@/components/services";

export default function Home() {
  return (
    <main>
      <Hero />
      <Packages />
      <About />
      <Services />
      <FAQs />
      <BottomCTA />
    </main>
  );
}
