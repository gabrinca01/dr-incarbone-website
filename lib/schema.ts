import { SITE } from "@/lib/site-data";

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
    url: "https://www.giorgioincarbone.it",
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
      "Deep Brain Stimulation",
      "Vagus Nerve Stimulation",
      "Spinal Cord Stimulation",
      "Brain Tumors",
      "Neurosurgical Second Opinion",
    ],
    availableService: {
      "@type": "MedicalProcedure",
      name: "Neurosurgical Consultation",
    },
  };
}
