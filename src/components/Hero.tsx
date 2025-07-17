import { Button } from "@/components/ui/button";
import { MapPin, Star, Users } from "lucide-react";
import heroImage from "@/assets/hero-tunisia.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Tunisia landscape" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Explore Tunisia
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-accent mb-8">
            Like Never Before
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
            Discover ancient medinas, pristine beaches, and Saharan adventures
            with our curated travel experiences
          </p>
          
          {/* Stats */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-accent" />
              <span className="text-lg font-medium">50+ Destinations</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent" />
              <span className="text-lg font-medium">4.9/5 Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              <span className="text-lg font-medium">10K+ Travelers</span>
            </div>
          </div>
          
          <Button 
            variant="hero" 
            size="xl"
            className="animate-scale-in"
          >
            Start Your Journey →
          </Button>
        </div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;