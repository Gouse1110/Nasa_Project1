import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const floodZones = [
  { name: "Kerala Coast", position: [8.5241, 76.9366] as [number, number], risk: "high", radius: 50000, color: "#ef4444" },
  { name: "Mumbai Region", position: [19.0760, 72.8777] as [number, number], risk: "moderate", radius: 40000, color: "#f97316" },
  { name: "Assam Valley", position: [26.2006, 92.9376] as [number, number], risk: "high", radius: 45000, color: "#ef4444" },
  { name: "Gujarat Plains", position: [22.2587, 71.1924] as [number, number], risk: "low", radius: 30000, color: "#22c55e" },
];

const FloodMap = () => {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapRef.current || !containerRef.current) return;

    const map = L.map(containerRef.current, {
      center: [20.5937, 78.9629],
      zoom: 5,
      zoomControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    floodZones.forEach((zone) => {
      const circle = L.circle(zone.position, {
        radius: zone.radius,
        color: zone.color,
        fillColor: zone.color,
        fillOpacity: 0.3,
        weight: 2,
      }).addTo(map);

      circle.bindPopup(
        `<div style="text-align:center">
          <h3 style="margin:0; font-weight:700">${zone.name}</h3>
          <p style="margin:4px 0">Risk Level: <strong style="text-transform:uppercase">${zone.risk}</strong></p>
          <p style="margin:0; font-size:12px; color:#6b7280">${zone.position[0].toFixed(4)}° N, ${zone.position[1].toFixed(4)}° E</p>
        </div>`
      );
    });

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return <div ref={containerRef} style={{ height: '100%', width: '100%', borderRadius: '12px' }} />;
};

export default FloodMap;
