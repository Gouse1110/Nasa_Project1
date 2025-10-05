import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Bell, Phone, MessageSquare, Mail, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const Alerts = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [language, setLanguage] = useState("english");

  const handleSubscribe = () => {
    if (phoneNumber) {
      toast.success("Alert subscription activated!", {
        description: `You will receive SMS alerts in ${language} at ${phoneNumber}`,
      });
    } else {
      toast.error("Please enter a phone number");
    }
  };

  const recentAlerts = [
    { time: "2 hours ago", type: "Flood", severity: "high", location: "Kerala Coast", message: "High flood risk detected. Immediate evacuation recommended." },
    { time: "5 hours ago", type: "Landslide", severity: "high", location: "Western Ghats", message: "Ground deformation detected. Alert issued to local authorities." },
    { time: "1 day ago", type: "Flood", severity: "moderate", location: "Mumbai Region", message: "Moderate flood risk. Monitor situation closely." },
    { time: "2 days ago", type: "Landslide", severity: "moderate", location: "Northeast Hills", message: "Minor ground movement detected. Continued monitoring." },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-10 h-10 text-destructive animate-pulse" />
            <h1 className="text-4xl font-bold">Alert & Notification System</h1>
          </div>
          <p className="text-muted-foreground text-lg">
            Real-time SMS, voice, and push notifications for high-risk zones
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Subscription Form */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="p-6 bg-card/50">
              <h3 className="font-semibold text-lg mb-4">Subscribe to Alerts</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div>
                  <Label htmlFor="language">Preferred Language</Label>
                  <Select value={language} onValueChange={setLanguage}>
                    <SelectTrigger id="language">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="hindi">हिंदी (Hindi)</SelectItem>
                      <SelectItem value="telugu">తెలుగు (Telugu)</SelectItem>
                      <SelectItem value="tamil">தமிழ் (Tamil)</SelectItem>
                      <SelectItem value="bengali">বাংলা (Bengali)</SelectItem>
                      <SelectItem value="marathi">मराठी (Marathi)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button onClick={handleSubscribe} className="w-full" variant="hero">
                  <Bell className="w-4 h-4 mr-2" />
                  Subscribe to Alerts
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-primary/10 border-primary/30">
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-success" />
                Alert Methods
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span>SMS Text Messages</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>Voice Call Alerts</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Bell className="w-4 h-4 text-primary" />
                  <span>Push Notifications</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>Email Updates</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Recent Alerts */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h3 className="font-semibold text-lg mb-4">Recent Alerts</h3>
              <div className="space-y-4">
                {recentAlerts.map((alert, idx) => (
                  <Card
                    key={idx}
                    className={`p-4 ${
                      alert.severity === "high"
                        ? "bg-destructive/10 border-destructive/30"
                        : "bg-warning/10 border-warning/30"
                    }`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge
                          variant={alert.severity === "high" ? "destructive" : "outline"}
                          className="gap-1"
                        >
                          {alert.type}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{alert.time}</span>
                      </div>
                      <Badge variant={alert.severity === "high" ? "destructive" : "secondary"}>
                        {alert.severity.toUpperCase()}
                      </Badge>
                    </div>
                    <h4 className="font-semibold mb-1">{alert.location}</h4>
                    <p className="text-sm text-muted-foreground">{alert.message}</p>
                  </Card>
                ))}
              </div>
            </Card>

            <Card className="p-6 mt-6 bg-gradient-to-br from-destructive/10 to-warning/10 border-destructive/30">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Bell className="w-5 h-5 text-destructive animate-pulse" />
                How Alerts Work
              </h3>
              <p className="text-muted-foreground mb-4">
                Our automated alert system monitors all risk zones 24/7. When a high-risk situation is detected:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>AI analyzes satellite data and detects potential threats</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Automated SMS alerts are sent to all subscribed numbers in affected areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Voice calls deliver urgent warnings in multiple languages</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-success mt-0.5" />
                  <span>Local authorities receive detailed reports for emergency response</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
