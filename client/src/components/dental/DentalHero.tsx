import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, Star, Award, Shield } from "lucide-react";

interface DentalHeroProps {
  onScrollDown: () => void;
}

export default function DentalHero({ onScrollDown }: DentalHeroProps) {
  const handleBookAppointment = () => {
    window.location.hash = "#book-appointment";
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 z-10">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Hero badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <Badge variant="secondary" className="bg-secondary/90 text-secondary-foreground">
            <Star className="w-3 h-3 mr-1" />
            4.9/5 Google Rating
          </Badge>
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
            <Award className="w-3 h-3 mr-1" />
            CDCP Accepted
          </Badge>
          <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
            <Shield className="w-3 h-3 mr-1" />
            Direct Insurance Billing
          </Badge>
        </div>

        {/* Main hero content with glass morphism background */}
        <div className="backdrop-blur-sm bg-background/85 rounded-xl p-8 md:p-12 border border-border/50 shadow-2xl">
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-b from-primary to-primary/70 bg-clip-text text-transparent leading-tight"
            data-testid="hero-title"
          >
            Welcome to Absolute Dental
          </h1>
          <p className="text-lg md:text-xl mb-4 text-primary/90 font-medium">
            Your Trusted Smile Partner in Toronto
          </p>
          <p 
            className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8"
            data-testid="hero-description"
          >
            We blend modern technology with compassionate care for families in the GTA. 
            Over 10 years of providing personalized dentistry with advanced CEREC technology, 
            direct insurance billing, and multilingual staff.
          </p>

          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={handleBookAppointment}
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 text-lg"
              data-testid="button-book-now"
            >
              Book Your Appointment
            </Button>
            <Button 
              onClick={onScrollDown}
              variant="outline"
              size="lg"
              className="bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background/90 px-8 py-3 text-lg"
              data-testid="button-learn-more"
            >
              Learn More About Us
            </Button>
          </div>
        </div>

        {/* Quick highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          <div className="backdrop-blur-sm bg-background/70 rounded-lg p-4 border border-border/30">
            <h3 className="font-semibold text-primary mb-2">Advanced Technology</h3>
            <p className="text-sm text-muted-foreground">CEREC same-day crowns & digital X-rays</p>
          </div>
          <div className="backdrop-blur-sm bg-background/70 rounded-lg p-4 border border-border/30">
            <h3 className="font-semibold text-primary mb-2">Family Friendly</h3>
            <p className="text-sm text-muted-foreground">Comfortable care for all ages</p>
          </div>
          <div className="backdrop-blur-sm bg-background/70 rounded-lg p-4 border border-border/30">
            <h3 className="font-semibold text-primary mb-2">Emergency Care</h3>
            <p className="text-sm text-muted-foreground">Same-day urgent dental care available</p>
          </div>
        </div>

        {/* Animated scroll indicator */}
        <div className="flex flex-col items-center space-y-2 animate-bounce mt-12">
          <span className="text-sm text-muted-foreground">Discover our services</span>
          <ChevronDown className="w-5 h-5 text-muted-foreground" data-testid="icon-scroll-down" />
        </div>
      </div>
    </section>
  );
}