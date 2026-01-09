import CustomCarousel from "./components/Swiper";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import FeaturedProjects from "./components/FeaturedProjects";

export default function Home() {
  return (
    <section className="">
      <div className="flex flex-col md:flex-row gap-10 mb-15">
        <Hero className="w-full" />
        <CustomCarousel className="w-full" />
      </div>
      <Tabs className="w-full" />
      <FeaturedProjects />
    </section>
  );
}
