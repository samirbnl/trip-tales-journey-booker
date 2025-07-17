import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-cta">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Your Tunisian Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who have discovered the magic of Tunisia with 
            our expertly crafted experiences
          </p>
          
          <Button 
            variant="hero" 
            size="xl"
            className="animate-scale-in"
          >
            Start Planning Your Trip
          </Button>
          
          <div className="mt-8 text-white/80 text-sm">
            <p>✓ Expert local guides • ✓ 24/7 support • ✓ Best price guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;