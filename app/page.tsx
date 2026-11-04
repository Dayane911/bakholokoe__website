import Hero from "@/components/home/Hero";
import AboutPreview from "@/components/home/AboutPreview";
import FeaturedSections from "@/components/home/FeaturedSections";
import Statistics from "@/components/home/Statistics";
import GalleryPreview from "@/components/home/GalleryPreview";

export default function Home() {
  return (
    <main>
      <Hero />

      <AboutPreview />

      <FeaturedSections />

      <Statistics />

      <GalleryPreview />
    </main>
  );
}