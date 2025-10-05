import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  text: string;
  isUser: boolean;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hello! I'm your AI assistant for flood and landslide monitoring. Ask me about NASA data, current risks, or safety tips.", isUser: false }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      let response = "I can help you with information about floods, landslides, NASA data, and safety measures. Please ask a specific question!";
      
      const lowerInput = input.toLowerCase();
      if (lowerInput.includes("flood")) {
        response = "Flood monitoring uses real-time satellite data from NASA's Global Flood Monitoring System. High-risk zones are marked in red on the flood monitoring map. Would you like to see current flood risks in a specific region?";
      } else if (lowerInput.includes("landslide")) {
        response = "Landslide detection uses InSAR (Interferometric Synthetic Aperture Radar) technology to detect ground deformation. Areas with significant movement are highlighted in red. Check the Landslide Monitoring page for detailed analysis.";
      } else if (lowerInput.includes("nasa")) {
        response = "We integrate multiple NASA Earth observation systems including GPM IMERG for rainfall data, Earthdata for SAR imagery, and real-time satellite feeds for comprehensive monitoring.";
      } else if (lowerInput.includes("safe") || lowerInput.includes("tip")) {
        response = "Safety tips: 1) Move to higher ground during floods 2) Avoid areas marked red on risk maps 3) Enable SMS alerts 4) Keep emergency supplies ready 5) Follow local authority instructions.";
      }

      setMessages(prev => [...prev, { text: response, isUser: false }]);
    }, 1000);

    setInput("");
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 shadow-2xl glow-primary"
        size="icon"
        variant="hero"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    );
  }

  return (
    <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl border-primary/50 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-border bg-card/50">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
          <h3 className="font-semibold">AI Assistant</h3>
        </div>
        <Button
          onClick={() => setIsOpen(false)}
          variant="ghost"
          size="icon"
          className="h-8 w-8"
        >
          <X className="w-4 h-4" />
        </Button>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  msg.isUser
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="p-4 border-t border-border">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex gap-2"
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about floods, landslides, or safety..."
            className="flex-1"
          />
          <Button type="submit" size="icon" variant="hero">
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </Card>
  );
};

export default AIChatbot;
