import CareerPathsSection from "@/components/home/CareerPathsSection";
import CollegeSearchSection from "@/components/home/CollegeSearchSection";
import HeroSection from "@/components/home/HeroSection";
import SucessStats from "@/components/home/SucessStats";

export default function page() {
  return (
    <>
      <HeroSection />
      <SucessStats />
      <CollegeSearchSection />
      <CareerPathsSection />
    </>
  );
}
