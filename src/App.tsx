import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FloodMonitoring from "./pages/FloodMonitoring";
import LandslideMonitoring from "./pages/LandslideMonitoring";
import LiveMaps from "./pages/LiveMaps";
import Alerts from "./pages/Alerts";
import NotFound from "./pages/NotFound";
import AIChatbot from "./components/AIChatbot";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/flood-monitoring" element={<FloodMonitoring />} />
          <Route path="/landslide-monitoring" element={<LandslideMonitoring />} />
          <Route path="/live-maps" element={<LiveMaps />} />
          <Route path="/alerts" element={<Alerts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <AIChatbot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
