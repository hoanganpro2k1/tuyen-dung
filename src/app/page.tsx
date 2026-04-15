import ScrollAnimationInit from "./components/ScrollAnimationInit";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import StatsBar from "./components/StatsBar";
import AboutSection from "./components/AboutSection";
import PolicySection from "./components/PolicySection";
import CTABanner from "./components/CTABanner";
import PositionsSection from "./components/PositionsSection";
import ApplySection from "./components/ApplySection";
import CompanyInfoSection from "./components/CompanyInfoSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <ScrollAnimationInit />
      <Header />
      <main>
        <HeroSection />
        <StatsBar />
        <AboutSection />
        <PolicySection />
        <CTABanner />
        <PositionsSection />
        <ApplySection />
        <CompanyInfoSection />
      </main>
      <Footer />
    </>
  );
}
