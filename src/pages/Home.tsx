import { Link } from "react-router-dom";
import { Waves, Mountain, Map, Bell, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import earthHero from "@/assets/earth-hero.jpg";
import floodBefore from "@/assets/flood-before.jpg";
import floodAfter from "@/assets/flood-after.jpg";
import landslideBefore from "@/assets/landslide-before.jpg";
import landslideAfter from "@/assets/landslide-after.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${earthHero})` }}
        >
          <div className="absolute inset-0 gradient-space opacity-60" />
        </div>
        
        <div className="relative z-10 text-center space-y-6 px-4 max-w-4xl mx-auto">
          <div className="animate-float">
            <div className="w-20 h-20 mx-auto rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-6 glow-primary">
              <div className="w-12 h-12 rounded-full bg-primary animate-pulse-slow" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="gradient-earth bg-clip-text text-transparent">
              Earth Risk Monitor
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Advanced Flood & Landslide Detection using NASA InSAR Technology and AI-Powered Alerts
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            <Link to="/flood-monitoring" className="group">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary transition-all hover:scale-105">
                <Waves className="w-12 h-12 text-primary mx-auto mb-3 group-hover:animate-pulse" />
                <h3 className="font-semibold text-lg mb-2">Flood Monitoring</h3>
                <p className="text-sm text-muted-foreground">Real-time satellite tracking</p>
              </Card>
            </Link>

            <Link to="/landslide-monitoring" className="group">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-warning/30 hover:border-warning transition-all hover:scale-105">
                <Mountain className="w-12 h-12 text-warning mx-auto mb-3 group-hover:animate-pulse" />
                <h3 className="font-semibold text-lg mb-2">Landslide Detection</h3>
                <p className="text-sm text-muted-foreground">InSAR ground analysis</p>
              </Card>
            </Link>

            <Link to="/live-maps" className="group">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-secondary/30 hover:border-secondary transition-all hover:scale-105">
                <Map className="w-12 h-12 text-secondary mx-auto mb-3 group-hover:animate-pulse" />
                <h3 className="font-semibold text-lg mb-2">Live Maps</h3>
                <p className="text-sm text-muted-foreground">Integrated dashboard</p>
              </Card>
            </Link>

            <Link to="/alerts" className="group">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-destructive/30 hover:border-destructive transition-all hover:scale-105">
                <Bell className="w-12 h-12 text-destructive mx-auto mb-3 group-hover:animate-pulse" />
                <h3 className="font-semibold text-lg mb-2">Alert System</h3>
                <p className="text-sm text-muted-foreground">SMS & voice notifications</p>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Flood Impact Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 mb-4">
              <Waves className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-earth bg-clip-text text-transparent">
                Flood Disasters
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Floods can transform landscapes in hours. Our InSAR technology detects water accumulation 
              and ground saturation before catastrophic flooding occurs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={floodBefore} 
                  alt="Area before flood - peaceful community"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block px-3 py-1 bg-green-500/20 backdrop-blur-sm rounded-full text-green-400 text-sm font-semibold mb-2">
                    BEFORE
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Normal Conditions</h3>
                  <p className="text-muted-foreground">
                    Communities thriving, infrastructure intact, normal water levels
                  </p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={floodAfter} 
                  alt="Area after flood - devastating impact"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block px-3 py-1 bg-destructive/20 backdrop-blur-sm rounded-full text-destructive text-sm font-semibold mb-2">
                    AFTER
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Flood Impact</h3>
                  <p className="text-muted-foreground">
                    Submerged homes, displaced families, destroyed crops and infrastructure
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/flood-monitoring">
              <Button size="lg" className="group">
                Monitor Floods Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Landslide Impact Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-warning/20 mb-4">
              <Mountain className="w-8 h-8 text-warning" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-earth bg-clip-text text-transparent">
                Landslide Catastrophes
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Landslides strike with devastating speed. NASA InSAR detects millimeter-level ground 
              movements, providing crucial early warnings before slopes collapse.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={landslideBefore} 
                  alt="Mountain area before landslide"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block px-3 py-1 bg-green-500/20 backdrop-blur-sm rounded-full text-green-400 text-sm font-semibold mb-2">
                    BEFORE
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Stable Terrain</h3>
                  <p className="text-muted-foreground">
                    Scenic mountains, stable slopes, safe communities below
                  </p>
                </div>
              </div>
            </Card>

            <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={landslideAfter} 
                  alt="Area after landslide - massive destruction"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="inline-block px-3 py-1 bg-destructive/20 backdrop-blur-sm rounded-full text-destructive text-sm font-semibold mb-2">
                    AFTER
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Landslide Destruction</h3>
                  <p className="text-muted-foreground">
                    Collapsed slopes, buried villages, blocked roads and rivers
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center">
            <Link to="/landslide-monitoring">
              <Button size="lg" variant="secondary" className="group">
                Monitor Landslides Now
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Early Warning Matters</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our advanced monitoring system saves lives by providing critical advance notice
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm text-center">
              <div className="text-primary text-5xl font-bold mb-2">24/7</div>
              <h3 className="text-xl font-semibold mb-2">Continuous Monitoring</h3>
              <p className="text-muted-foreground">
                Real-time satellite data processing for immediate risk detection
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm text-center">
              <div className="text-warning text-5xl font-bold mb-2">mm</div>
              <h3 className="text-xl font-semibold mb-2">Precision Detection</h3>
              <p className="text-muted-foreground">
                InSAR technology detects ground movement with millimeter-level accuracy
              </p>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm text-center">
              <div className="text-destructive text-5xl font-bold mb-2">AI</div>
              <h3 className="text-xl font-semibold mb-2">Smart Alerts</h3>
              <p className="text-muted-foreground">
                Machine learning predicts risks and sends automated multi-language warnings
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
