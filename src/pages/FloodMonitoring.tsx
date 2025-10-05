import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { AlertCircle, Droplets } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import FloodMap from "@/components/FloodMap";

const FloodMonitoring = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const riskZones = [
    { name: "Kerala Coast", risk: "high", lat: "8.5241° N", lon: "76.9366° E", status: "Active Monitoring" },
    { name: "Mumbai Region", risk: "moderate", lat: "19.0760° N", lon: "72.8777° E", status: "Watch" },
    { name: "Assam Valley", risk: "high", lat: "26.2006° N", lon: "92.9376° E", status: "Warning Issued" },
    { name: "Gujarat Plains", risk: "low", lat: "22.2587° N", lon: "71.1924° E", status: "Safe" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Droplets className="w-10 h-10 text-primary" />
            <h1 className="text-4xl font-bold">Flood Monitoring System</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Real-time flood risk assessment using NASA's Global Flood Monitoring System
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="p-0 h-[600px] overflow-hidden">
              <FloodMap />
            </Card>
          </div>

          {/* Risk Zones List */}
          <div className="space-y-4">
            <Card className="p-4 bg-card/50">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-destructive" />
                Active Risk Zones
              </h3>
              <div className="space-y-3">
                {riskZones.map((zone, idx) => (
                  <Card
                    key={idx}
                    className={`p-4 cursor-pointer transition-all hover:scale-105 ${
                      selectedRegion === zone.name ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setSelectedRegion(zone.name)}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold">{zone.name}</h4>
                      <Badge
                        variant={
                          zone.risk === "high"
                            ? "destructive"
                            : zone.risk === "moderate"
                            ? "outline"
                            : "secondary"
                        }
                      >
                        {zone.risk.toUpperCase()}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mb-1">
                      {zone.lat}, {zone.lon}
                    </p>
                    <p className="text-sm text-primary">{zone.status}</p>
                  </Card>
                ))}
              </div>
            </Card>

            <Card className="p-4 bg-primary/10 border-primary/30">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Droplets className="w-4 h-4" />
                Data Sources
              </h4>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• NASA GPM IMERG Rainfall</li>
                <li>• MODIS Flood Detection</li>
                <li>• Sentinel-1 SAR Imagery</li>
                <li>• Ground Station Networks</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloodMonitoring;
