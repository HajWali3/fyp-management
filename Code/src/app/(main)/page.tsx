import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import FeaturedCourses from "@/components/ui/FeaturedCourses";
import Footer from "@/components/ui/Footer";
import Instructors from "@/components/ui/Instructors";
import TestimonialCards from "@/components/ui/TestimonialCards";
import UpcomingWebinars from "@/components/ui/UpcomingWebinars";
import WhyChooseUs from "@/components/ui/WhyChooseUs";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.9] antialiased bg-grid-white/[0.02] ">
      <Navbar />
      <HeroSection />
      <FeaturedCourses />
      <WhyChooseUs />
      <TestimonialCards />
      <UpcomingWebinars />
      <Instructors />
      <Footer />
    </main>
  );
}
