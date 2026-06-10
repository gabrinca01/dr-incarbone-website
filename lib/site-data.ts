import type {
  ClinicalArea,
  CredibilityItem,
  EducationItem,
  ExcellenceItem,
  FAQItem,
  NavLink,
  NeuromodulationTechnique,
  PathologyCategory,
  PublicationItem,
  ScientificActivity,
  StatItem,
  SurgicalSpecialization,
  SurgicalStat,
  TimelineStep,
} from "@/types";

export const SITE = {
  name: "Dr. Giorgio Incarbone",
  shortName: "Dr. Incarbone",
  profession: "Neurochirurgo",
  tagline: "Neurochirurgia Cranica, Spinale e Funzionale",
  description:
    "Diagnosi, consulenza specialistica e trattamento avanzato delle patologie del cervello, della colonna vertebrale e del sistema nervoso.",
  specializations: [
    "Neurochirurgia Cranica",
    "Neurochirurgia Spinale",
    "Neurochirurgia Funzionale",
    "Neurochirurgia Vascolare",
    "Neuromodulazione",
  ],
  phone: "+39 338 575 3053",
  phoneHref: "tel:+393385753053",
  email: "giorgioincarbone@gmail.com",
  emailHref: "mailto:giorgioincarbone@gmail.com",
  locations: ["Milano", "Novara"],
  locationsLabel: "Milano • Novara",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Chi sono", href: "#chi-sono" },
  { label: "Specializzazioni", href: "#specializzazioni-chirurgiche" },
  { label: "Patologie", href: "#patologie-trattate" },
  { label: "Esperienza", href: "#esperienza-operatoria" },
  { label: "Contatti", href: "#contatti" },
];

export const SURGICAL_STATS: SurgicalStat[] = [
  { value: "946+", label: "Interventi Neurochirurgici" },
  { value: "424+", label: "Primo Operatore" },
  { value: "522+", label: "Secondo Operatore" },
];

export const EXCELLENCE_ITEMS: ExcellenceItem[] = [
  { label: "Neurochirurgia Cranica", featured: true },
  { label: "Neurochirurgia Spinale", featured: true },
  { label: "Neurochirurgia Funzionale", featured: true },
  { label: "Neurochirurgia Vascolare", featured: true },
  { label: "Neuromodulazione", featured: true },
  { label: "Second Opinion Specialistica" },
];

export const SURGICAL_SPECIALIZATIONS: SurgicalSpecialization[] = [
  {
    title: "Neurochirurgia Cranica",
    icon: "cranial",
    conditions: [
      "Gliomi",
      "Meningiomi",
      "Metastasi cerebrali",
      "Adenomi ipofisari",
      "Schwannomi",
      "Craniofaringiomi",
    ],
  },
  {
    title: "Neurochirurgia Vascolare",
    icon: "vascular",
    conditions: [
      "Aneurismi cerebrali",
      "MAV",
      "Fistole artero-venose durali",
    ],
  },
  {
    title: "Neurochirurgia Spinale",
    icon: "spinal",
    conditions: [
      "Ernia cervicale",
      "Ernia lombare",
      "Stenosi vertebrale",
      "Tumori spinali",
    ],
  },
  {
    title: "Neurochirurgia Funzionale",
    icon: "functional",
    conditions: [
      "DBS",
      "VNS",
      "SCS",
      "Dolore cronico",
      "Parkinson",
      "Epilessia",
    ],
  },
];

export const PATHOLOGY_CATEGORIES: PathologyCategory[] = [
  {
    id: "cranial",
    label: "Cranica",
    title: "Patologie craniche",
    conditions: [
      "Gliomi",
      "Meningiomi",
      "Metastasi cerebrali",
      "Adenomi ipofisari",
      "Schwannomi",
      "Craniofaringiomi",
      "Tumori della base cranica",
      "Idrocefalo",
      "Nevralgia del trigemino",
    ],
  },
  {
    id: "spinal",
    label: "Spinale",
    title: "Patologie spinali",
    conditions: [
      "Ernia cervicale",
      "Ernia lombare",
      "Stenosi vertebrale",
      "Tumori spinali",
      "Mielopatia cervicale",
      "Spondilolistesi",
    ],
  },
  {
    id: "vascular",
    label: "Vascolare",
    title: "Patologie vascolari",
    conditions: [
      "Aneurismi cerebrali",
      "MAV",
      "Fistole artero-venose durali",
      "Emorragia subaracnoidea",
    ],
  },
  {
    id: "functional",
    label: "Funzionale",
    title: "Patologie funzionali",
    conditions: [
      "Parkinson",
      "Tremore essenziale",
      "Distonia",
      "Epilessia farmacoresistente",
      "Dolore cronico",
      "Spasticità",
      "DBS",
      "VNS",
      "SCS",
    ],
  },
];

export const CLINICAL_AREAS: ClinicalArea[] = [
  {
    title: "Neurochirurgia Cranica",
    description:
      "Trattamento chirurgico delle patologie del cervello e delle strutture intracraniche, con approccio microchirurgico e pianificazione personalizzata.",
    icon: "cranial",
    conditions: [
      "Gliomi",
      "Meningiomi",
      "Metastasi cerebrali",
      "Adenomi ipofisari",
      "Schwannomi",
      "Craniofaringiomi",
    ],
  },
  {
    title: "Neurochirurgia Vascolare",
    description:
      "Gestione delle patologie vascolari del sistema nervoso centrale, dalla diagnosi alla strategia terapeutica chirurgica o endovascolare.",
    icon: "vascular",
    conditions: [
      "Aneurismi cerebrali",
      "MAV",
      "Fistole artero-venose durali",
    ],
  },
  {
    title: "Neurochirurgia Spinale",
    description:
      "Interventi sulla colonna vertebrale e sul midollo spinale per patologie degenerative, traumatiche e tumorali.",
    icon: "spinal",
    conditions: [
      "Ernia cervicale",
      "Ernia lombare",
      "Stenosi vertebrale",
      "Tumori spinali",
    ],
  },
  {
    title: "Neurochirurgia Funzionale",
    description:
      "Approccio specialistico alle patologie del movimento, dell'epilessia e del dolore cronico refrattario ai trattamenti convenzionali.",
    icon: "functional",
    conditions: [
      "DBS",
      "VNS",
      "SCS",
      "Dolore cronico",
      "Parkinson",
      "Epilessia",
    ],
  },
];

export const NEUROMODULATION_TECHNIQUES: NeuromodulationTechnique[] = [
  {
    acronym: "DBS",
    title: "Deep Brain Stimulation",
    description:
      "Stimolazione cerebrale profonda per il trattamento di Parkinson, tremore essenziale, distonia e sindromi del movimento selezionate. Tecnica di riferimento nella neurochirurgia funzionale moderna.",
    applications: ["Parkinson", "Tremore essenziale", "Distonia"],
  },
  {
    acronym: "VNS",
    title: "Vagus Nerve Stimulation",
    description:
      "Stimolazione del nervo vago per patologie neurologiche selezionate, con monitoraggio accurato dell'efficacia terapeutica e validazione scientifica dei risultati nel tempo.",
    applications: ["Epilessia farmacoresistente", "Patologie neurologiche selezionate"],
  },
  {
    acronym: "SCS",
    title: "Spinal Cord Stimulation",
    description:
      "Neuromodulazione midollare per il trattamento del dolore cronico refrattario e di specifiche sindromi dolorose neuropatiche e viscerali.",
    applications: ["Dolore cronico", "Sindromi dolorose neuropatiche"],
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    institution: "Università La Sapienza di Roma",
    title: "Laurea Magistrale in Medicina e Chirurgia",
    detail: "110/110 e lode",
  },
  {
    institution: "Università La Sapienza di Roma",
    title: "Abilitazione professionale",
    detail: "Esame di Stato superato",
  },
  {
    institution: "Università degli Studi di Pavia",
    title: "Specializzazione in Neurochirurgia",
    detail: "50/50",
  },
];

export const WHY_CHOOSE_ITEMS: CredibilityItem[] = [
  {
    title: "Esperienza Operatoria Documentata",
    description:
      "Oltre 946 interventi neurochirurgici, con ruolo di primo operatore in più di 424 procedure di elevata complessità.",
  },
  {
    title: "Approccio Multidisciplinare",
    description:
      "Collaborazione con neurologi, neuroradiologi, oncologi e fisiatri per definire percorsi terapeutici integrati e condivisi.",
  },
  {
    title: "Tecniche Avanzate",
    description:
      "Microchirurgia, neurochirurgia vascolare, neuromodulazione DBS, VNS e SCS con pianificazione preoperatoria personalizzata.",
  },
  {
    title: "Percorso Personalizzato",
    description:
      "Ogni paziente riceve una valutazione dedicata, con spiegazioni chiare e decisioni terapeutiche costruite insieme.",
  },
];

export const STATS: StatItem[] = [
  { value: "946+", label: "Interventi neurochirurgici" },
  { value: "5", label: "Aree di specializzazione" },
  { value: "50+", label: "Pubblicazioni scientifiche" },
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: 1,
    title: "Prima Visita",
    description:
      "Incontro clinico approfondito per comprendere la storia del paziente, i sintomi e le esigenze terapeutiche.",
  },
  {
    step: 2,
    title: "Valutazione Diagnostica",
    description:
      "Analisi di immagini, referti e documentazione clinica per definire un inquadramento diagnostico preciso.",
  },
  {
    step: 3,
    title: "Pianificazione del Trattamento",
    description:
      "Definizione della strategia più appropriata — chirurgica, neuromodulatrice o conservativa — con spiegazione chiara al paziente.",
  },
  {
    step: 4,
    title: "Intervento o Monitoraggio",
    description:
      "Esecuzione dell'intervento neurochirurgico o attivazione di un protocollo di sorveglianza clinica e radiologica.",
  },
  {
    step: 5,
    title: "Follow-up Specialistico",
    description:
      "Controlli periodici post-operatori con valutazione dell'evoluzione clinica, funzionale e radiologica.",
  },
];

export const SCIENTIFIC_ACTIVITIES: ScientificActivity[] = [
  {
    title: "Pubblicazioni",
    description:
      "Contributi a riviste scientifiche internazionali su neurochirurgia vascolare, neuromodulazione, neuro-oncologia e patologia spinale.",
    icon: "publications",
  },
  {
    title: "Congressi",
    description:
      "Partecipazione a congressi nazionali e internazionali di neurochirurgia con presentazioni e aggiornamento continuo.",
    icon: "congresses",
  },
  {
    title: "Corsi specialistici",
    description:
      "Formazione avanzata e aggiornamento su tecniche microchirurgiche, neuromodulazione e neurochirurgia funzionale.",
    icon: "courses",
  },
  {
    title: "Attività di ricerca",
    description:
      "Impegno nella ricerca clinica con focus su aneurismi cerebrali, neuromodulazione, dolore viscerale e patologia spinale.",
    icon: "research",
  },
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    title: "Cotinine levels influence the risk of rupture of brain aneurysms",
    context: "Neurochirurgia vascolare",
  },
  {
    title: "VNS Therapy: validation of efficiency of therapy",
    context: "Neuromodulazione",
  },
  {
    title: "Neuromodulation in visceral pain",
    context: "Neurochirurgia funzionale",
  },
  {
    title: "Cauda equina cavernoma at level L1",
    context: "Neurochirurgia spinale",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Quando rivolgersi a un neurochirurgo?",
    answer:
      "È opportuno consultare un neurochirurgo in presenza di diagnosi di patologie cerebrali, spinali, vascolari o del sistema nervoso, sintomi neurologici persistenti, o quando si necessita di una valutazione specialistica per definire l'indicazione chirurgica o neuromodulatrice.",
  },
  {
    question: "Quando richiedere una seconda opinione?",
    answer:
      "Una seconda opinione è consigliabile quando la diagnosi è complessa, quando sono state proposte diverse opzioni terapeutiche, o quando si desidera un parere indipendente prima di una decisione importante.",
  },
  {
    question: "Quali esami portare alla visita?",
    answer:
      "Portare tutte le immagini RM o TC (cerebrali o spinali), i referti radiologici e anatomo-patologici, la documentazione di eventuali interventi precedenti e un elenco dei farmaci in uso.",
  },
  {
    question: "Come prenotare una consulenza?",
    answer:
      "È possibile prenotare compilando il modulo di contatto, inviando un'email a giorgioincarbone@gmail.com o telefonando al +39 338 575 3053. Il team risponderà per fissare un appuntamento a Milano o Novara.",
  },
];
