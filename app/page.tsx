import CustomCarousel from "./components/Swiper";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import TimeLine from "./components/TimeLine";

export default function Home() {
  return (
    <section className="">
      <div className="flex flex-col lg:flex-row gap-10">
        <Hero className="w-full" />
        <CustomCarousel className="w-full" />
      </div>
      <Tabs className="w-full" />
      <p className="text-center m-5">
        ONE PIECE Hackathons, Meetups, Conferences — All in One Place
      </p>
      <p className="text-center m-5">
        Hackathons, Meetups, Conferences — All in One Place
      </p>
      <p className="text-center m-5">
        Hackathons, Meetups, Conferences — All in One Place
      </p>
      <p className="text-center m-5">
        Hackathons, Meetups, Conferences — All in One Place
      </p>

      <p className="text-center m-5">
        Hackathons, Meetups, Conferences — All in One Place
      </p>
      <p className="text-center m-5">
        Hackathons, Meetups, Conferences — All in One Place
      </p>

      <h1 className="text-center">
        The Hub For Every Dev <br /> Event You Cant Miss
      </h1>
      <p className="text-center m-5">
        Hackathons, Meetups, Conferences — All in One Place
      </p>

      <div className="mt-20 space-y-7"></div>
    </section>
  );
}
