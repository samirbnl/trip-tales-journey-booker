import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

const destinations = [
  { id: 1, name: "Sidi Bou Said", x: 50, y: 25, description: "Blue and white hilltop village with stunning Mediterranean views" },
  { id: 2, name: "Sousse", x: 65, y: 35, description: "Historic medina and beautiful beaches" },
  { id: 3, name: "Kairouan", x: 60, y: 50, description: "Sacred city and UNESCO World Heritage site" },
  { id: 4, name: "Tozeur", x: 35, y: 75, description: "Gateway to the Sahara Desert with palm groves" },
  { id: 5, name: "Djerba", x: 70, y: 85, description: "Island paradise with traditional culture" },
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
        
        <div className="relative max-w-4xl mx-auto">
          {/* Map Container */}
          <div className="relative bg-gradient-to-br from-accent/20 to-accent/40 rounded-3xl p-8 shadow-elevated">
            {/* Map Shape - Hexagonal Tunisia outline */}
            <div className="relative w-full h-96 mx-auto">
              <svg viewBox="0 0 300 200" className="w-full h-full">
                {/* Tunisia outline */}
                <path
                  d="M80 40 L200 30 L220 60 L210 120 L160 160 L100 150 L60 100 Z"
                  fill="hsl(var(--secondary))"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  className="opacity-80"
                />
                
                {/* Destination pins */}
                {destinations.map((dest) => (
                  <g key={dest.id}>
                    <circle
                      cx={dest.x * 2}
                      cy={dest.y * 1.5}
                      r="8"
                      fill="hsl(var(--primary))"
                      className="cursor-pointer hover:scale-125 transition-transform duration-200 drop-shadow-lg"
                      onClick={() => setSelectedDestination(dest)}
                    />
                    <circle
                      cx={dest.x * 2}
                      cy={dest.y * 1.5}
                      r="4"
                      fill="white"
                      className="cursor-pointer"
                      onClick={() => setSelectedDestination(dest)}
                    />
                  </g>
                ))}
              </svg>
            </div>
            
            {/* Map Legend */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Interactive Map</p>
              <div className="flex justify-center gap-4 text-xs text-muted-foreground">
                <span>• Click pins to explore</span>
                <span>• Scroll for preview</span>
              </div>
            </div>
          </div>
          
          {/* Destination Details Modal */}
          {selectedDestination && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
              <Card className="w-full max-w-md animate-scale-in">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl">{selectedDestination.name}</CardTitle>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedDestination(null)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {selectedDestination.description}
                  </p>
                  <div className="flex gap-2">
                    <Button variant="default" className="flex-1">
                      View Tours
                    </Button>
                    <Button variant="outline" className="flex-1">
                      Learn More
                    </Button>
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