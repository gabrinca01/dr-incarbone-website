"use client";

import L from "leaflet";
import { useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import type { ConsultationLocation } from "@/types";
import { textCardTitle, textSmall } from "@/lib/typography";
import "leaflet/dist/leaflet.css";

interface LocationsMapProps {
  locations: ConsultationLocation[];
}

const markerIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

function MapViewport({ locations }: { locations: ConsultationLocation[] }) {
  const map = useMap();

  useEffect(() => {
    const bounds = L.latLngBounds(
      locations.map(
        (location) =>
          [location.coordinates.lat, location.coordinates.lng] as [
            number,
            number,
          ],
      ),
    );

    map.fitBounds(bounds, {
      padding: [56, 56],
      maxZoom: 10,
    });

    const resizeTimer = window.setTimeout(() => {
      map.invalidateSize();
      map.fitBounds(bounds, {
        padding: [56, 56],
        maxZoom: 10,
      });
    }, 150);

    return () => window.clearTimeout(resizeTimer);
  }, [locations, map]);

  return null;
}

export function LocationsMap({ locations }: LocationsMapProps) {
  const defaultCenter: [number, number] = [45.5, 8.9];

  return (
    <div className="premium-card card-static overflow-hidden rounded-2xl">
      <div className="h-[380px] w-full sm:h-[440px] lg:h-[480px]">
        <MapContainer
          center={defaultCenter}
          zoom={9}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapViewport locations={locations} />
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={[location.coordinates.lat, location.coordinates.lng]}
              icon={markerIcon}
            >
              <Popup>
                <div className={textSmall}>
                  <p className={`${textCardTitle} text-primary`}>{location.city}</p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${location.coordinates.lat},${location.coordinates.lng}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex text-accent hover:underline"
                  >
                    Apri su Google Maps
                  </a>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
