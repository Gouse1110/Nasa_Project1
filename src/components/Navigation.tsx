import { Link, useLocation } from "react-router-dom";
import { Waves, Mountain, Map, Bell, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/flood-monitoring", label: "Flood Monitoring", icon: Waves },
    { path: "/landslide-monitoring", label: "Landslide Monitoring", icon: Mountain },
    { path: "/live-maps", label: "Live Maps", icon: Map },
    { path: "/alerts", label: "Alerts & Notifications", icon: Bell },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Title */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary animate-pulse" />
            <span
              className="text-xl font-bold bg-gradient-to-r from-secondary via-primary to-success bg-clip-text text-transparent"
              aria-label="Earth Risk Monitor"
            >
              Earth Risk Monitor
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={isActive ? "default" : "ghost"}
                    size="sm"
                    className="gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden lg:inline">{item.label}</span>
                  </Button>
                </Link>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" asChild>
              <Link to="/live-maps">
                <Map className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
