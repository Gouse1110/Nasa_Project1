import { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const landslideZones = [
  { name: "Western Ghats", position: [15.3173, 75.7139] as [number, number], deformation: "12mm", risk: "high", radius: 40000, color: "#ef4444" },
  { name: "Himalayan Region", position: [30.0668, 79.0193] as [number, number], deformation: "7mm", risk: "moderate", radius: 50000, color: "#f97316" },
  { name: "Northeast Hills", position: [25.5788, 91.8933] as [number, number], deformation: "15mm", risk: "high", radius: 35000, color: "#ef4444" },
  { name: "Central Highlands", position: [23.4732, 77.9479] as [number, number], deformation: "3mm", risk: "low", radius: 30000, color: "#22c55e" },
];

const LandslideMap = () => {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapRef.current || !containerRef.current) return;

    const map = L.map(containerRef.current, {
      center: [23.5937, 78.9629],
      zoom: 5,
      zoomControl: true,
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map);

    landslideZones.forEach((zone) => {
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
          <p style="margin:4px 0">Deformation: <strong>${zone.deformation}</strong></p>
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

export default LandslideMap;
