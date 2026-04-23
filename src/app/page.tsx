import { DestinationCarousel } from "@/components/destination-carousel";
import { FeaturesSection } from "@/components/features-section";
import { FloatingActions } from "@/components/floating-actions";
import { FooterSection } from "@/components/footer-section";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { PlansSection } from "@/components/plans-section";
import { QuoteSection } from "@/components/quote-section";
import { SiteHeader } from "@/components/site-header";
import { SuccessSection } from "@/components/success-section";
import { WhyChooseSection } from "@/components/why-choose-section";

export default function Home() {
  return (
    <div className="relative min-h-screen soft-grid text-[#101722]">
      <SiteHeader />
      <div className="mx-auto max-w-[1280px] px-3 pb-20 pt-2 md:px-5">
        <main className="space-y-8 pt-6 md:space-y-12">
          <HeroSection />
          <HowItWorksSection />
          <DestinationCarousel />
          <WhyChooseSection />
          <FeaturesSection />
          <SuccessSection />
          <PlansSection />
          <NewsletterSection />
          <QuoteSection />
        </main>

        <FooterSection />
      </div>
      <FloatingActions />
    </div>
  );
}
