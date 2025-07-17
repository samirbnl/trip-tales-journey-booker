import Hero from "@/components/Hero";
import InteractiveMap from "@/components/InteractiveMap";
import TripSearch from "@/components/TripSearch";
import CallToAction from "@/components/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <InteractiveMap />
      <TripSearch />
      <CallToAction />
    </div>
  );
};

export default Index;
