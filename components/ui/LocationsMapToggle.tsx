"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { textSmall } from "@/lib/typography";
import type { ConsultationLocation } from "@/types";

const LocationsMap = dynamic(
  () =>
    import("@/components/ui/LocationsMap").then((module) => module.LocationsMap),
  {
    ssr: false,
    loading: () => (
      <div className={`premium-card card-static flex h-[380px] items-center justify-center rounded-2xl ${textSmall} text-muted sm:h-[440px] lg:h-[480px]`}>
        Caricamento mappa...
      </div>
    ),
  },
);

interface LocationsMapToggleProps {
  locations: ConsultationLocation[];
}

export function LocationsMapToggle({ locations }: LocationsMapToggleProps) {
  const [isOpen, setIsOpen] = useState(false);
  const mapLocations = locations.filter((location) => location.confirmed);

  return (
    <div className="mt-10">
      <div className="flex justify-center">
        <Button
          type="button"
          variant="secondary"
          size="sm"
          aria-expanded={isOpen}
          aria-controls="locations-map-panel"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? "Nascondi mappa" : "Visualizza mappa delle sedi"}
        </Button>
      </div>

      {isOpen && (
        <div
          id="locations-map-panel"
          className="mx-auto mt-6 w-full max-w-5xl animate-fade-up"
        >
          <LocationsMap locations={mapLocations} />
        </div>
      )}
    </div>
  );
}
