import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Star, Clock, Users, ChevronLeft, ChevronRight } from "lucide-react";
import medinaTour from "@/assets/medina-tour.jpg";
import saharaAdventure from "@/assets/sahara-adventure.jpg";
import coastalTunisia from "@/assets/coastal-tunisia.jpg";

const experiences = [
  {
    id: 1,
    title: "Medina Cultural Tour",
    location: "Tunis & Kairouan",
    description: "Discover ancient medina traditional crafts and Islamic architecture",
    price: 185,
    rating: 4.8,
    duration: "2 days",
    groupSize: "6-10 people",
    image: medinaTour,
  },
  {
    id: 2,
    title: "Sahara Desert Adventure",
    location: "Tozeur & Douz",
    description: "Camel trekking, luxury desert camps, and unforgettable sunsets",
    price: 320,
    rating: 4.9,
    duration: "3 days",
    groupSize: "4-8 people",
    image: saharaAdventure,
  },
  {
    id: 3,
    title: "Coastal Paradise Tour",
    location: "Djerba & Sousse",
    description: "Pristine beaches, traditional crafts, and Mediterranean culture",
    price: 240,
    rating: 4.7,
    duration: "2 days",
    groupSize: "8-12 people",
    image: coastalTunisia,
  },
];

const TripSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextExperience = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const prevExperience = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const currentExperience = experiences[currentIndex];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Search Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Find Your Perfect Trip
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Search through our curated collection of authentic Tunisian experiences
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search destinations or experiences..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 h-14 text-lg rounded-full shadow-card"
            />
          </div>
        </div>

        {/* Popular Experiences */}
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold text-foreground">Popular Experiences</h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevExperience}
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextExperience}
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Experience Card */}
          <Card className="overflow-hidden shadow-elevated hover:shadow-glow transition-all duration-300 animate-fade-in">
            <div className="md:flex">
              {/* Image */}
              <div className="md:w-1/2 relative">
                <img
                  src={currentExperience.image}
                  alt={currentExperience.title}
                  className="w-full h-64 md:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    ${currentExperience.price}
                  </span>
                </div>
              </div>

              {/* Content */}
              <CardContent className="md:w-1/2 p-6 flex flex-col justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">
                    {currentExperience.location}
                  </div>
                  <h4 className="text-2xl font-bold mb-3 text-foreground">
                    {currentExperience.title}
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    {currentExperience.description}
                  </p>

                  {/* Experience Details */}
                  <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-accent fill-current" />
                      <span>{currentExperience.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{currentExperience.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{currentExperience.groupSize}</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button variant="cta" className="flex-1">
                    Book Now
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Details
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {experiences.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentIndex ? 'bg-primary' : 'bg-muted'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TripSearch;