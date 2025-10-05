import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Waves, Mountain, Layers, Satellite } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import FloodMap from "@/components/FloodMap";
import LandslideMap from "@/components/LandslideMap";

const LiveMaps = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Satellite className="w-10 h-10 text-secondary" />
            <h1 className="text-4xl font-bold">Live Integrated Dashboard</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Comprehensive view of all risk monitoring systems
          </p>
        </div>

        <Tabs defaultValue="combined" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="combined" className="gap-2">
              <Layers className="w-4 h-4" />
              Combined View
            </TabsTrigger>
            <TabsTrigger value="flood" className="gap-2">
              <Waves className="w-4 h-4" />
              Flood Only
            </TabsTrigger>
            <TabsTrigger value="landslide" className="gap-2">
              <Mountain className="w-4 h-4" />
              Landslide Only
            </TabsTrigger>
            <TabsTrigger value="satellite" className="gap-2">
              <Satellite className="w-4 h-4" />
              Satellite View
            </TabsTrigger>
          </TabsList>

          <TabsContent value="combined" className="space-y-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="p-0 h-[400px] overflow-hidden relative">
                <div className="absolute top-4 left-4 z-[1000] pointer-events-none">
                  <Badge variant="default" className="gap-1 shadow-lg">
                    <Waves className="w-3 h-3" />
                    Flood Risk Layer
                  </Badge>
                </div>
                <FloodMap />
              </Card>

              <Card className="p-0 h-[400px] overflow-hidden relative">
                <div className="absolute top-4 left-4 z-[1000] pointer-events-none">
                  <Badge variant="outline" className="gap-1 shadow-lg bg-card">
                    <Mountain className="w-3 h-3" />
                    Landslide Risk Layer
                  </Badge>
                </div>
                <LandslideMap />
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Active Alerts Summary</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg bg-destructive/10 border border-destructive/30">
                  <div className="text-3xl font-bold text-destructive mb-1">3</div>
                  <p className="text-sm text-muted-foreground">High Risk Zones</p>
                </div>
                <div className="p-4 rounded-lg bg-warning/10 border border-warning/30">
                  <div className="text-3xl font-bold text-warning mb-1">7</div>
                  <p className="text-sm text-muted-foreground">Moderate Risk Zones</p>
                </div>
                <div className="p-4 rounded-lg bg-success/10 border border-success/30">
                  <div className="text-3xl font-bold text-success mb-1">12</div>
                  <p className="text-sm text-muted-foreground">Safe Zones</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="flood">
            <Card className="p-0 h-[600px] overflow-hidden">
              <FloodMap />
            </Card>
          </TabsContent>

          <TabsContent value="landslide">
            <Card className="p-0 h-[600px] overflow-hidden">
              <LandslideMap />
            </Card>
          </TabsContent>

          <TabsContent value="satellite">
            <Card className="p-0 h-[600px] overflow-hidden">
              <FloodMap />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default LiveMaps;
