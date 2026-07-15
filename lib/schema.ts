import { SITE } from "@/lib/site-data";
import { SITE_URL } from "@/lib/env";

export function getPhysicianSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: SITE.name,
    jobTitle: SITE.profession,
    medicalSpecialty: "Neurosurgery",
    description: SITE.description,
    telephone: SITE.phone,
    email: SITE.email,
    url: SITE_URL,
    areaServed: SITE.locations.map((city) => ({
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "Country",
        name: "Italy",
      },
    })),
    knowsAbout: [
      "Cranial Neurosurgery",
      "Spinal Neurosurgery",
      "Functional Neurosurgery",
      "Vascular Neurosurgery",
      "Neuromodulation",
      "Vagus Nerve Stimulation",
      "Spinal Cord Stimulation",
      "Intrathecal Drug Delivery",
      "Neurosurgical Second Opinion",
    ],
    availableService: {
      "@type": "MedicalProcedure",
      name: "Neurosurgical Consultation",
    },
  };
}
