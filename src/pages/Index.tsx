import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { HighlightsSection } from "@/components/home/HighlightsSection";
import { FeaturesSection } from "@/components/home/FeaturesSection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { ExperienceSection } from "@/components/home/ExperienceSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { FAQSection } from "@/components/home/FAQSection";
import { RiderSection } from "@/components/home/RiderSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HighlightsSection />
      <FeaturesSection />
      <UseCasesSection />
      <ExperienceSection />
      <HowItWorksSection />
      <RiderSection />
      <FAQSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
