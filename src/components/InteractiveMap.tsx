import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, MapPin, Users, Clock } from "lucide-react";
import ImageCarousel from "./ImageCarousel";

// Import city images
import tunis1 from "@/assets/cities/tunis-1.jpg";
import tunis2 from "@/assets/cities/tunis-2.jpg";
import tunis3 from "@/assets/cities/tunis-3.jpg";
import sousse1 from "@/assets/cities/sousse-1.jpg";
import sousse2 from "@/assets/cities/sousse-2.jpg";
import sousse3 from "@/assets/cities/sousse-3.jpg";
import djerba1 from "@/assets/cities/djerba-1.jpg";
import djerba2 from "@/assets/cities/djerba-2.jpg";
import djerba3 from "@/assets/cities/djerba-3.jpg";
import kairouan1 from "@/assets/cities/kairouan-1.jpg";
import kairouan2 from "@/assets/cities/kairouan-2.jpg";
import kairouan3 from "@/assets/cities/kairouan-3.jpg";
import tozeur1 from "@/assets/cities/tozeur-1.jpg";
import tozeur2 from "@/assets/cities/tozeur-2.jpg";
import tozeur3 from "@/assets/cities/tozeur-3.jpg";

const destinations = [
  {
    id: 1,
    name: "Tunis",
    x: 50,
    y: 25,
    description: "Tunisia's vibrant capital blending ancient medina charm with modern French colonial elegance",
    highlights: ["Ancient Medina", "Bardo Museum", "French Quarter"],
    tripCount: 12,
    duration: "2-4 days",
    images: [tunis1, tunis2, tunis3],
  },
  {
    id: 2,
    name: "Sousse",
    x: 65,
    y: 35,
    description: "Historic coastal gem featuring medieval architecture and pristine Mediterranean beaches",
    highlights: ["Medina & Ribat", "Beautiful Beaches", "Archaeological Museum"],
    tripCount: 8,
    duration: "2-3 days",
    images: [sousse1, sousse2, sousse3],
  },
  {
    id: 3,
    name: "Kairouan",
    x: 60,
    y: 50,
    description: "Sacred city and UNESCO World Heritage site, known as the fourth holiest city in Islam",
    highlights: ["Great Mosque", "Traditional Crafts", "Carpet Weaving"],
    tripCount: 6,
    duration: "1-2 days",
    images: [kairouan1, kairouan2, kairouan3],
  },
  {
    id: 4,
    name: "Tozeur",
    x: 35,
    y: 75,
    description: "Gateway to the Sahara Desert featuring stunning oases and traditional desert architecture",
    highlights: ["Palm Oases", "Desert Architecture", "Sahara Access"],
    tripCount: 10,
    duration: "2-3 days",
    images: [tozeur1, tozeur2, tozeur3],
  },
  {
    id: 5,
    name: "Djerba",
    x: 70,
    y: 85,
    description: "Enchanting island paradise known for pristine beaches and authentic traditional culture",
    highlights: ["Traditional Villages", "Pottery Workshops", "Beach Resorts"],
    tripCount: 9,
    duration: "3-4 days",
    images: [djerba1, djerba2, djerba3],
  },
];

const InteractiveMap = () => {
  const [selectedDestination, setSelectedDestination] = useState<typeof destinations[0] | null>(null);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Discover Tunisia's Hidden Gems
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Click on any city to explore unique destinations, local experiences, and curated travel packages
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Modern Map Container */}
          <div className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 shadow-elevated border border-primary/10">
            {/* Map Shape - Modern Tunisia outline */}
            <div className="relative w-full h-[500px] mx-auto">
              <svg viewBox="0 0 300 200" className="w-full h-full drop-shadow-sm">
                {/* Tunisia outline with modern styling */}
                <defs>
                  <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                    <stop offset="50%" stopColor="hsl(var(--secondary))" stopOpacity="0.1" />
                    <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.1" />
                  </linearGradient>
                  <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.1"/>
                  </filter>
                </defs>
                
                <path
                  d="M80 40 L200 30 L220 60 L210 120 L160 160 L100 150 L60 100 Z"
                  fill="url(#mapGradient)"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  filter="url(#shadow)"
                  className="transition-all duration-300"
                />
                
                {/* Destination pins with modern design */}
                {destinations.map((dest) => (
                  <g key={dest.id} className="cursor-pointer">
                    {/* Pin shadow */}
                    <circle
                      cx={dest.x * 2 + 2}
                      cy={dest.y * 1.5 + 2}
                      r="12"
                      fill="rgba(0,0,0,0.1)"
                      className="transition-all duration-300"
                    />
                    {/* Pin background */}
                    <circle
                      cx={dest.x * 2}
                      cy={dest.y * 1.5}
                      r="12"
                      fill="hsl(var(--primary))"
                      className="hover:scale-125 transition-all duration-300 drop-shadow-lg"
                      onClick={() => setSelectedDestination(dest)}
                    />
                    {/* Pin center */}
                    <circle
                      cx={dest.x * 2}
                      cy={dest.y * 1.5}
                      r="6"
                      fill="white"
                      className="transition-all duration-300"
                      onClick={() => setSelectedDestination(dest)}
                    />
                    {/* Pin highlight */}
                    <circle
                      cx={dest.x * 2}
                      cy={dest.y * 1.5}
                      r="3"
                      fill="hsl(var(--primary))"
                      className="transition-all duration-300"
                      onClick={() => setSelectedDestination(dest)}
                    />
                    
                    {/* City label */}
                    <text
                      x={dest.x * 2}
                      y={dest.y * 1.5 + 25}
                      textAnchor="middle"
                      fill="hsl(var(--foreground))"
                      fontSize="12"
                      fontWeight="600"
                      className="pointer-events-none select-none"
                    >
                      {dest.name}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
            
            {/* Modern Map Legend */}
            <div className="mt-8 text-center border-t border-primary/10 pt-6">
              <p className="text-sm font-medium text-foreground mb-2">Interactive Travel Map</p>
              <div className="flex justify-center gap-6 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  Click to explore destinations
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  View image galleries
                </span>
                <span className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  Book your adventure
                </span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Destination Modal with Carousel */}
          {selectedDestination && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
              <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden animate-scale-in shadow-2xl">
                <div className="relative">
                  {/* Close Button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedDestination(null)}
                    className="absolute top-4 right-4 z-10 bg-black/20 hover:bg-black/40 text-white border-0 backdrop-blur-sm"
                  >
                    <X className="w-5 h-5" />
                  </Button>
                  
                  {/* Image Carousel */}
                  <ImageCarousel images={selectedDestination.images} autoplay={true} />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Destination Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>Tunisia • {selectedDestination.name}</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                        {selectedDestination.name}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {selectedDestination.description}
                      </p>
                      
                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="font-semibold mb-3 text-foreground">Key Highlights</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedDestination.highlights.map((highlight, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Trip Stats */}
                      <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{selectedDestination.tripCount} available trips</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{selectedDestination.duration} recommended</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="md:w-48 flex flex-col gap-3">
                      <Button variant="cta" size="lg" className="w-full">
                        View Trips
                      </Button>
                      <Button variant="outline" size="lg" className="w-full">
                        Learn More
                      </Button>
                      <Button variant="ghost" size="lg" className="w-full">
                        Save for Later
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;