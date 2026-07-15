import { CategoriesFloat } from "@/components/CategoriesFloat";
import { ContactForm } from "@/components/ContactForm";
import { DirectorSection } from "@/components/DirectorSection";
import { Faq } from "@/components/Faq";
import { FloatingButtons } from "@/components/FloatingButtons";
import { FooterCta } from "@/components/FooterCta";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Statement } from "@/components/Statement";
import { Testimonials } from "@/components/Testimonials";
import { TrustMarquee } from "@/components/TrustMarquee";
import { WhyBand } from "@/components/WhyBand";
import { DIRECTORS } from "@/lib/content";

export default function Home() {
  return (
    <main id="top" className="bg-white">
      <Header />
      <Hero />
      <TrustMarquee />
      <Statement />
      <Services />
      <CategoriesFloat />
      <WhyBand />
      <div id="directors" className="scroll-mt-20 bg-white pt-20" />
      {DIRECTORS.map((director) => (
        <DirectorSection key={director.name} director={director} />
      ))}
      <Testimonials />
      <Faq />
      <ContactForm />
      <FooterCta />
      <FloatingButtons />
    </main>
  );
}
