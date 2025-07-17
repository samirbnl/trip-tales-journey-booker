import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X, MapPin, Users, Clock } from "lucide-react";
import ImageCarousel from "./ImageCarousel";

// Import all city images
import tunis1 from "@/assets/cities/tunis-1.jpg";
import tunis2 from "@/assets/cities/tunis-2.jpg";
import tunis3 from "@/assets/cities/tunis-3.jpg";
import ariana1 from "@/assets/cities/ariana-1.jpg";
import ariana2 from "@/assets/cities/ariana-2.jpg";
import ariana3 from "@/assets/cities/ariana-3.jpg";
import benArous1 from "@/assets/cities/ben-arous-1.jpg";
import benArous2 from "@/assets/cities/ben-arous-2.jpg";
import benArous3 from "@/assets/cities/ben-arous-3.jpg";
import manouba1 from "@/assets/cities/manouba-1.jpg";
import manouba2 from "@/assets/cities/manouba-2.jpg";
import manouba3 from "@/assets/cities/manouba-3.jpg";
import bizerte1 from "@/assets/cities/bizerte-1.jpg";
import bizerte2 from "@/assets/cities/bizerte-2.jpg";
import bizerte3 from "@/assets/cities/bizerte-3.jpg";
import nabeul1 from "@/assets/cities/nabeul-1.jpg";
import nabeul2 from "@/assets/cities/nabeul-2.jpg";
import nabeul3 from "@/assets/cities/nabeul-3.jpg";
import zaghouan1 from "@/assets/cities/zaghouan-1.jpg";
import zaghouan2 from "@/assets/cities/zaghouan-2.jpg";
import zaghouan3 from "@/assets/cities/zaghouan-3.jpg";
import beja1 from "@/assets/cities/beja-1.jpg";
import beja2 from "@/assets/cities/beja-2.jpg";
import beja3 from "@/assets/cities/beja-3.jpg";
import jendouba1 from "@/assets/cities/jendouba-1.jpg";
import jendouba2 from "@/assets/cities/jendouba-2.jpg";
import jendouba3 from "@/assets/cities/jendouba-3.jpg";
import kef1 from "@/assets/cities/kef-1.jpg";
import kef2 from "@/assets/cities/kef-2.jpg";
import kef3 from "@/assets/cities/kef-3.jpg";
import siliana1 from "@/assets/cities/siliana-1.jpg";
import siliana2 from "@/assets/cities/siliana-2.jpg";
import siliana3 from "@/assets/cities/siliana-3.jpg";
import sousse1 from "@/assets/cities/sousse-1.jpg";
import sousse2 from "@/assets/cities/sousse-2.jpg";
import sousse3 from "@/assets/cities/sousse-3.jpg";
import monastir1 from "@/assets/cities/monastir-1.jpg";
import monastir2 from "@/assets/cities/monastir-2.jpg";
import monastir3 from "@/assets/cities/monastir-3.jpg";
import mahdia1 from "@/assets/cities/mahdia-1.jpg";
import mahdia2 from "@/assets/cities/mahdia-2.jpg";
import mahdia3 from "@/assets/cities/mahdia-3.jpg";
import kairouan1 from "@/assets/cities/kairouan-1.jpg";
import kairouan2 from "@/assets/cities/kairouan-2.jpg";
import kairouan3 from "@/assets/cities/kairouan-3.jpg";
import kasserine1 from "@/assets/cities/kasserine-1.jpg";
import kasserine2 from "@/assets/cities/kasserine-2.jpg";
import kasserine3 from "@/assets/cities/kasserine-3.jpg";
import sidiBouzid1 from "@/assets/cities/sidi-bouzid-1.jpg";
import sidiBouzid2 from "@/assets/cities/sidi-bouzid-2.jpg";
import sidiBouzid3 from "@/assets/cities/sidi-bouzid-3.jpg";
import sfax1 from "@/assets/cities/sfax-1.jpg";
import sfax2 from "@/assets/cities/sfax-2.jpg";
import sfax3 from "@/assets/cities/sfax-3.jpg";
import gabes1 from "@/assets/cities/gabes-1.jpg";
import gabes2 from "@/assets/cities/gabes-2.jpg";
import gabes3 from "@/assets/cities/gabes-3.jpg";
import medenine1 from "@/assets/cities/medenine-1.jpg";
import medenine2 from "@/assets/cities/medenine-2.jpg";
import medenine3 from "@/assets/cities/medenine-3.jpg";
import tataouine1 from "@/assets/cities/tataouine-1.jpg";
import tataouine2 from "@/assets/cities/tataouine-2.jpg";
import tataouine3 from "@/assets/cities/tataouine-3.jpg";
import gafsa1 from "@/assets/cities/gafsa-1.jpg";
import gafsa2 from "@/assets/cities/gafsa-2.jpg";
import gafsa3 from "@/assets/cities/gafsa-3.jpg";
import tozeur1 from "@/assets/cities/tozeur-1.jpg";
import tozeur2 from "@/assets/cities/tozeur-2.jpg";
import tozeur3 from "@/assets/cities/tozeur-3.jpg";
import kebili1 from "@/assets/cities/kebili-1.jpg";
import kebili2 from "@/assets/cities/kebili-2.jpg";
import kebili3 from "@/assets/cities/kebili-3.jpg";
import djerba1 from "@/assets/cities/djerba-1.jpg";
import djerba2 from "@/assets/cities/djerba-2.jpg";
import djerba3 from "@/assets/cities/djerba-3.jpg";

const destinations = [
  // Northern Tunisia
  {
    id: 1,
    name: "Tunis",
    x: 150,
    y: 40,
    description: "Tunisia's vibrant capital blending ancient medina charm with modern French colonial elegance",
    highlights: ["Ancient Medina", "Bardo Museum", "French Quarter"],
    tripCount: 12,
    duration: "2-4 days",
    images: [tunis1, tunis2, tunis3],
  },
  {
    id: 2,
    name: "Ariana",
    x: 145,
    y: 35,
    description: "Modern suburban governorate with beautiful parks and proximity to the capital",
    highlights: ["Residential Areas", "Green Spaces", "Modern Architecture"],
    tripCount: 4,
    duration: "1-2 days",
    images: [ariana1, ariana2, ariana3],
  },
  {
    id: 3,
    name: "Ben Arous",
    x: 155,
    y: 45,
    description: "Industrial and residential region with traditional markets and authentic neighborhoods",
    highlights: ["Traditional Souks", "Industrial Heritage", "Local Markets"],
    tripCount: 3,
    duration: "1 day",
    images: [benArous1, benArous2, benArous3],
  },
  {
    id: 4,
    name: "Manouba",
    x: 140,
    y: 42,
    description: "Agricultural region known for olive groves and traditional rural Tunisian life",
    highlights: ["Olive Groves", "Rural Culture", "Historic Sites"],
    tripCount: 2,
    duration: "1 day",
    images: [manouba1, manouba2, manouba3],
  },
  {
    id: 5,
    name: "Bizerte",
    x: 130,
    y: 25,
    description: "Historic coastal city with beautiful harbor, ancient medina, and Mediterranean charm",
    highlights: ["Historic Harbor", "Medina & Kasbah", "Coastal Beauty"],
    tripCount: 7,
    duration: "2-3 days",
    images: [bizerte1, bizerte2, bizerte3],
  },
  {
    id: 6,
    name: "Nabeul",
    x: 170,
    y: 50,
    description: "Famous pottery center with beautiful beaches and traditional ceramic workshops",
    highlights: ["Pottery Workshops", "Beautiful Beaches", "Traditional Crafts"],
    tripCount: 8,
    duration: "2-3 days",
    images: [nabeul1, nabeul2, nabeul3],
  },
  {
    id: 7,
    name: "Zaghouan",
    x: 160,
    y: 60,
    description: "Mountainous region with Roman aqueduct ruins and natural springs",
    highlights: ["Roman Aqueduct", "Mountain Villages", "Natural Springs"],
    tripCount: 4,
    duration: "1-2 days",
    images: [zaghouan1, zaghouan2, zaghouan3],
  },
  // Northwestern Tunisia
  {
    id: 8,
    name: "Beja",
    x: 110,
    y: 50,
    description: "Agricultural heartland with wheat fields and authentic rural communities",
    highlights: ["Agricultural Heritage", "Rural Markets", "Historic Sites"],
    tripCount: 3,
    duration: "1-2 days",
    images: [beja1, beja2, beja3],
  },
  {
    id: 9,
    name: "Jendouba",
    x: 90,
    y: 45,
    description: "Mountainous region near Algeria with cork oak forests and nature reserves",
    highlights: ["Nature Parks", "Mountain Villages", "Forest Landscapes"],
    tripCount: 5,
    duration: "2-3 days",
    images: [jendouba1, jendouba2, jendouba3],
  },
  {
    id: 10,
    name: "Kef",
    x: 100,
    y: 55,
    description: "Mountain city with Roman ruins and traditional Berber architecture",
    highlights: ["Roman Ruins", "Mountain Views", "Traditional Architecture"],
    tripCount: 4,
    duration: "1-2 days",
    images: [kef1, kef2, kef3],
  },
  {
    id: 11,
    name: "Siliana",
    x: 120,
    y: 65,
    description: "Agricultural region with ancient Roman ruins of Makthar and olive groves",
    highlights: ["Roman Ruins", "Olive Groves", "Rural Heritage"],
    tripCount: 3,
    duration: "1-2 days",
    images: [siliana1, siliana2, siliana3],
  },
  // Central Coast
  {
    id: 12,
    name: "Sousse",
    x: 175,
    y: 75,
    description: "Historic coastal gem featuring medieval architecture and pristine Mediterranean beaches",
    highlights: ["Medina & Ribat", "Beautiful Beaches", "Archaeological Museum"],
    tripCount: 8,
    duration: "2-3 days",
    images: [sousse1, sousse2, sousse3],
  },
  {
    id: 13,
    name: "Monastir",
    x: 180,
    y: 80,
    description: "Coastal resort city with historic ribat fortress and luxury marina",
    highlights: ["Historic Ribat", "Marina & Beaches", "Resort Amenities"],
    tripCount: 7,
    duration: "2-3 days",
    images: [monastir1, monastir2, monastir3],
  },
  {
    id: 14,
    name: "Mahdia",
    x: 185,
    y: 85,
    description: "Historic fishing port with beautiful beaches and traditional maritime culture",
    highlights: ["Fishing Port", "Historic Medina", "Coastal Beauty"],
    tripCount: 6,
    duration: "2-3 days",
    images: [mahdia1, mahdia2, mahdia3],
  },
  // Central Tunisia
  {
    id: 15,
    name: "Kairouan",
    x: 160,
    y: 90,
    description: "Sacred city and UNESCO World Heritage site, known as the fourth holiest city in Islam",
    highlights: ["Great Mosque", "Traditional Crafts", "Carpet Weaving"],
    tripCount: 6,
    duration: "1-2 days",
    images: [kairouan1, kairouan2, kairouan3],
  },
  {
    id: 16,
    name: "Kasserine",
    x: 135,
    y: 95,
    description: "Mountainous region with ancient Roman ruins and traditional highland communities",
    highlights: ["Roman Heritage", "Mountain Landscapes", "Rural Culture"],
    tripCount: 4,
    duration: "1-2 days",
    images: [kasserine1, kasserine2, kasserine3],
  },
  {
    id: 17,
    name: "Sidi Bouzid",
    x: 155,
    y: 105,
    description: "Agricultural heartland with olive groves and traditional farming communities",
    highlights: ["Agricultural Heritage", "Rural Markets", "Traditional Farming"],
    tripCount: 2,
    duration: "1 day",
    images: [sidiBouzid1, sidiBouzid2, sidiBouzid3],
  },
  // Eastern Tunisia
  {
    id: 18,
    name: "Sfax",
    x: 190,
    y: 100,
    description: "Major commercial port city with historic medina and industrial heritage",
    highlights: ["Historic Medina", "Commercial Port", "Urban Culture"],
    tripCount: 5,
    duration: "2 days",
    images: [sfax1, sfax2, sfax3],
  },
  {
    id: 19,
    name: "Gabes",
    x: 185,
    y: 115,
    description: "Unique coastal oasis where desert meets the Mediterranean Sea",
    highlights: ["Coastal Oasis", "Spice Markets", "Beach & Desert"],
    tripCount: 6,
    duration: "2-3 days",
    images: [gabes1, gabes2, gabes3],
  },
  // Southern Tunisia
  {
    id: 20,
    name: "Medenine",
    x: 200,
    y: 125,
    description: "Southern desert region with traditional Berber architecture and ancient granaries",
    highlights: ["Berber Architecture", "Ancient Ksour", "Desert Culture"],
    tripCount: 5,
    duration: "2-3 days",
    images: [medenine1, medenine2, medenine3],
  },
  {
    id: 21,
    name: "Tataouine",
    x: 205,
    y: 140,
    description: "Famous Star Wars filming location with dramatic desert landscapes and Berber villages",
    highlights: ["Star Wars Sites", "Berber Villages", "Desert Adventures"],
    tripCount: 8,
    duration: "2-4 days",
    images: [tataouine1, tataouine2, tataouine3],
  },
  {
    id: 22,
    name: "Gafsa",
    x: 145,
    y: 125,
    description: "Mining region with ancient Roman heritage and desert oases",
    highlights: ["Mining Heritage", "Roman Ruins", "Desert Oases"],
    tripCount: 3,
    duration: "1-2 days",
    images: [gafsa1, gafsa2, gafsa3],
  },
  {
    id: 23,
    name: "Tozeur",
    x: 125,
    y: 135,
    description: "Gateway to the Sahara Desert featuring stunning oases and traditional desert architecture",
    highlights: ["Palm Oases", "Desert Architecture", "Sahara Access"],
    tripCount: 10,
    duration: "2-3 days",
    images: [tozeur1, tozeur2, tozeur3],
  },
  {
    id: 24,
    name: "Kebili",
    x: 160,
    y: 145,
    description: "Deep Sahara oasis with authentic nomadic culture and vast desert landscapes",
    highlights: ["Sahara Oasis", "Nomadic Culture", "Desert Expeditions"],
    tripCount: 7,
    duration: "3-4 days",
    images: [kebili1, kebili2, kebili3],
  },
  // Djerba (Island)
  {
    id: 25,
    name: "Djerba",
    x: 210,
    y: 130,
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
            Discover All Tunisia Governorates
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore all 24 governorates of Tunisia - from Mediterranean coasts to Saharan deserts, each with unique cultures and experiences
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Enhanced Map Container for All Governorates */}
          <div className="relative bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-8 shadow-elevated border border-primary/10">
            {/* Expanded Map Shape - Tunisia with all governorates */}
            <div className="relative w-full h-[600px] mx-auto">
              <svg viewBox="0 0 350 200" className="w-full h-full drop-shadow-sm">
                {/* Tunisia outline with enhanced styling */}
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
                
                {/* Enhanced Tunisia outline */}
                <path
                  d="M90 25 L220 20 L240 35 L235 50 L220 65 L210 80 L200 95 L195 110 L205 125 L210 140 L200 155 L180 165 L160 160 L140 150 L120 140 L100 125 L85 110 L80 95 L75 80 L70 65 L75 50 L85 35 Z"
                  fill="url(#mapGradient)"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  filter="url(#shadow)"
                  className="transition-all duration-300"
                />
                
                {/* All governorate pins with enhanced design */}
                {destinations.map((dest) => (
                  <g key={dest.id} className="cursor-pointer">
                    {/* Pin shadow */}
                    <circle
                      cx={dest.x + 2}
                      cy={dest.y + 2}
                      r="8"
                      fill="rgba(0,0,0,0.1)"
                      className="transition-all duration-300"
                    />
                    {/* Pin background */}
                    <circle
                      cx={dest.x}
                      cy={dest.y}
                      r="8"
                      fill="hsl(var(--primary))"
                      className="hover:scale-125 transition-all duration-300 drop-shadow-lg"
                      onClick={() => setSelectedDestination(dest)}
                    />
                    {/* Pin center */}
                    <circle
                      cx={dest.x}
                      cy={dest.y}
                      r="4"
                      fill="white"
                      className="transition-all duration-300"
                      onClick={() => setSelectedDestination(dest)}
                    />
                    {/* Pin highlight */}
                    <circle
                      cx={dest.x}
                      cy={dest.y}
                      r="2"
                      fill="hsl(var(--primary))"
                      className="transition-all duration-300"
                      onClick={() => setSelectedDestination(dest)}
                    />
                    
                    {/* City label - only show for major cities to avoid clutter */}
                    {[1, 5, 12, 15, 23, 25].includes(dest.id) && (
                      <text
                        x={dest.x}
                        y={dest.y + 20}
                        textAnchor="middle"
                        fill="hsl(var(--foreground))"
                        fontSize="10"
                        fontWeight="600"
                        className="pointer-events-none select-none"
                      >
                        {dest.name}
                      </text>
                    )}
                  </g>
                ))}
              </svg>
            </div>
            
            {/* Enhanced Map Legend */}
            <div className="mt-8 text-center border-t border-primary/10 pt-6">
              <p className="text-sm font-medium text-foreground mb-3">Complete Tunisia Travel Map</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-muted-foreground">
                <span className="flex items-center justify-center gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  24 Governorates to explore
                </span>
                <span className="flex items-center justify-center gap-1">
                  <div className="w-2 h-2 bg-secondary rounded-full"></div>
                  Click any pin for image galleries
                </span>
                <span className="flex items-center justify-center gap-1">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  From Mediterranean to Sahara
                </span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Destination Modal with Carousel - EXACT SAME FUNCTIONALITY */}
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
                  
                  {/* Image Carousel - EXACT SAME COMPONENT */}
                  <ImageCarousel images={selectedDestination.images} autoplay={true} />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Destination Info - EXACT SAME LAYOUT */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <MapPin className="w-4 h-4" />
                        <span>Tunisia • {selectedDestination.name} Governorate</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                        {selectedDestination.name}
                      </h3>
                      
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {selectedDestination.description}
                      </p>
                      
                      {/* Highlights - EXACT SAME COMPONENT */}
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
                      
                      {/* Trip Stats - EXACT SAME COMPONENT */}
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
                    
                    {/* Action Buttons - EXACT SAME FUNCTIONALITY */}
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