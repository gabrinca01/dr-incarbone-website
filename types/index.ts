export interface NavLink {
  label: string;
  href: string;
}

export interface CredibilityItem {
  title: string;
  description: string;
}

export interface TimelineStep {
  step: number;
  title: string;
  description: string;
}

export interface ExcellenceItem {
  label: string;
  featured?: boolean;
}

export interface ScientificActivity {
  title: string;
  description: string;
  icon: "research" | "publications" | "congresses" | "courses";
}

export interface ClinicalArea {
  title: string;
  description: string;
  conditions: string[];
  icon: "cranial" | "vascular" | "spinal" | "functional";
}

export interface NeuromodulationTechnique {
  acronym: string;
  title: string;
  description: string;
  applications?: string[];
}

export interface EducationItem {
  institution: string;
  title: string;
  detail: string;
  year?: string;
}

export interface PublicationItem {
  title: string;
  context?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SurgicalStat {
  value: string;
  label: string;
}

export interface SurgicalSpecialization {
  title: string;
  conditions: string[];
  icon: ClinicalArea["icon"];
}

export interface PathologyCategory {
  id: "cranial" | "spinal" | "vascular" | "functional";
  label: string;
  title: string;
  conditions: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}
