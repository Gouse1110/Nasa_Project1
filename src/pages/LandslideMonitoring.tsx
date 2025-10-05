import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mountain, AlertTriangle, Activity } from "lucide-react";
import LandslideMap from "@/components/LandslideMap";

const LandslideMonitoring = () => {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  const deformationZones = [
    { name: "Western Ghats", deformation: "12mm", risk: "high", status: "Critical", trend: "Increasing" },
    { name: "Himalayan Region", deformation: "7mm", risk: "moderate", status: "Monitoring", trend: "Stable" },
    { name: "Northeast Hills", deformation: "15mm", risk: "high", status: "Alert", trend: "Increasing" },
    { name: "Central Highlands", deformation: "3mm", risk: "low", status: "Normal", trend: "Stable" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Mountain className="w-10 h-10 text-warning" />
            <h1 className="text-4xl font-bold">Landslide Risk Detection</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            InSAR-based ground deformation monitoring for landslide prediction
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map Area */}
          <div className="lg:col-span-2">
            <Card className="p-0 h-[600px] overflow-hidden">
              <LandslideMap />
            </Card>
          </div>

          {/* Deformation Zones */}
          <div className="space-y-4">
            <Card className="p-4 bg-card/50">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                Deformation Zones
              </h3>
              <div className="space-y-3">
                {deformationZones.map((zone, idx) => (
                  <Card
                    key={idx}
                    className={`p-4 cursor-pointer transition-all hover:scale-105 ${
                      selectedZone === zone.name ? "ring-2 ring-warning" : ""
                    }`}
                    onClick={() => setSelectedZone(zone.name)}
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
                    <div className="space-y-1">
                      <p className="text-sm">
                        <span className="text-muted-foreground">Deformation:</span>{" "}
                        <span className="text-warning font-semibold">{zone.deformation}</span>
                      </p>
                      <p className="text-sm">
                        <span className="text-muted-foreground">Status:</span>{" "}
                        <span className="text-primary">{zone.status}</span>
                      </p>
                      <p className="text-sm">
                        <span className="text-muted-foreground">Trend:</span>{" "}
                        <span className={zone.trend === "Increasing" ? "text-destructive" : "text-success"}>
                          {zone.trend}
                        </span>
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>

            <Card className="p-4 bg-warning/10 border-warning/30">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <Activity className="w-4 h-4" />
                InSAR Technology
              </h4>
              <p className="text-sm text-muted-foreground mb-2">
                Interferometric Synthetic Aperture Radar analyzes phase differences in radar signals to detect ground movement.
              </p>
              <ul className="text-sm space-y-1 text-muted-foreground">
                <li>• Sentinel-1 SAR Data</li>
                <li>• ALOS-2 PALSAR</li>
                <li>• TerraSAR-X Imagery</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandslideMonitoring;
