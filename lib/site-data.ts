import type {
  AdditionalService,
  ConsultationLocation,
  ClinicalArea,
  CredibilityItem,
  EducationItem,
  ExcellenceItem,
  FAQItem,
  NavLink,
  NeuromodulationTechnique,
  PathologyCategory,
  ProfessionalExperience,
  PublicationItem,
  ScientificActivity,
  StatItem,
  SurgicalSpecialization,
  SurgicalStat,
  TimelineStep,
} from "@/types";

export const CONSULTATION_LOCATIONS: ConsultationLocation[] = [
  {
    id: "milano",
    city: "Milano",
    coordinates: { lat: 45.464203, lng: 9.189982 },
    bookingNote:
      "Struttura, sito e numero dedicato in definizione. Per prenotare usare i contatti generali.",
    confirmed: false,
  },
  {
    id: "arese",
    city: "Arese",
    coordinates: { lat: 45.552106, lng: 9.077707 },
    bookingNote:
      "Struttura, sito e numero dedicato in definizione. Per prenotare usare i contatti generali.",
    confirmed: false,
  },
  {
    id: "novara",
    city: "Novara",
    coordinates: { lat: 45.446944, lng: 8.621667 },
    bookingNote:
      "Struttura, sito e numero dedicato in definizione. Per prenotare usare i contatti generali.",
    confirmed: false,
  },
];

export const SITE = {
  name: "Dr. Giorgio Incarbone",
  shortName: "Dr. Incarbone",
  profession: "Neurochirurgo",
  tagline: "Neurochirurgia Cranica, Spinale e Funzionale / Neuromodulatoria",
  description:
    "Diagnosi, consulenza specialistica e trattamento delle patologie del sistema nervoso centrale e della colonna vertebrale.",
  specializations: [
    "Neurochirurgia Cranica",
    "Neurochirurgia Spinale",
    "Neurochirurgia Funzionale / Neuromodulatoria",
    "Neurochirurgia Vascolare",
  ],
  phone: "+39 338 575 3053",
  phoneHref: "tel:+393385753053",
  email: "giorgio.incarbone@asst-fbf-sacco.it",
  emailHref: "mailto:giorgio.incarbone@asst-fbf-sacco.it",
  locations: CONSULTATION_LOCATIONS.map((location) => location.city),
  locationsLabel: CONSULTATION_LOCATIONS.map((location) => location.city).join(" • "),
  cvHref: "/curriculum-dr-incarbone.pdf",
};

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "Chi sono", href: "#chi-sono" },
  { label: "Aree di competenza", href: "#specializzazioni-chirurgiche" },
  { label: "Patologie", href: "#patologie-trattate" },
  { label: "Esperienza", href: "#esperienza-operatoria" },
];

export const SURGICAL_STATS: SurgicalStat[] = [
  { value: "1330+", label: "Interventi Neurochirurgici" },
  { value: "630+", label: "Interventi da Primo Operatore" },
];

export const EXCELLENCE_ITEMS: ExcellenceItem[] = [
  { label: "Neurochirurgia Cranica", featured: true },
  { label: "Neurochirurgia Spinale", featured: true },
  { label: "Neurochirurgia Funzionale / Neuromodulatoria", featured: true },
  { label: "Neurochirurgia Vascolare", featured: true },
];

export const SURGICAL_SPECIALIZATIONS: SurgicalSpecialization[] = [
  {
    title: "Neurochirurgia Cranica",
    icon: "cranial",
    conditions: [
      "Asportazione di neoformazioni cerebrali benigne e maligne",
      "Derivazione ventricolo-peritoneale",
      "Derivazione spino-peritoneale",
      "Terzoventricolocisternostomia",
      "Approcci ventricoloscopici",
      "Decompressione della fossa cranica posteriore",
      "Osteosintesi delle fratture della teca cranica",
      "Cranioplastica",
    ],
  },
  {
    title: "Neurochirurgia Vascolare",
    icon: "vascular",
    conditions: [
      "Diagnosi e trattamento delle fistole artero-venose durali",
      "Diagnosi e trattamento delle malformazioni artero-venose",
      "Rimozione degli angiomi cavernosi",
    ],
  },
  {
    title: "Neurochirurgia Spinale",
    icon: "spinal",
    conditions: [
      "Erniectomia lombare con approccio endoscopico",
      "Erniectomia e artrodesi cervicale anteriore e posteriore",
      "Decompressione del canale vertebrale",
      "Artrodesi lombare posteriore o circonferenziale (TLIF)",
      "Artrodesi cervicale posteriore con approcci combinati",
      "Cifoplastica",
      "Vertebroplastica",
      "Asportazione di tumori spinali",
    ],
  },
  {
    title: "Neurochirurgia Funzionale / Neuromodulazione",
    icon: "functional",
    conditions: [
      "SCS (Spinal Cord Stimulation)",
      "VNS (Vagus Nerve Stimulation)",
      "Infusore intratecale",
      "Decompressione del nervo trigemino",
    ],
  },
];

export const PATHOLOGY_CATEGORIES: PathologyCategory[] = [
  {
    id: "cranial",
    label: "Cranica",
    title: "Patologie craniche",
    conditions: [
      { label: "Gliomi cerebrali" },
      { label: "Metastasi cerebrali" },
      { label: "Meningiomi cerebrali" },
      { label: "Schwannomi" },
      { label: "Adenomi ipofisari" },
      { label: "Craniofaringiomi" },
      { label: "Cisti della tasca di Rathke" },
      { label: "Idrocefalo normoteso" },
      { label: "Idrocefalo ostruttivo" },
      { label: "Patologia traumatica cranica" },
    ],
  },
  {
    id: "spinal",
    label: "Spinale",
    title: "Patologie spinali",
    conditions: [
      { label: "Ernia del disco cervicale" },
      { label: "Ernia del disco dorsale" },
      { label: "Ernia del disco lombare" },
      { label: "Stenosi del canale vertebrale cervicale" },
      { label: "Stenosi del canale vertebrale lombare" },
      { label: "Spondilolistesi" },
      { label: "Spondiloartrosi" },
      { label: "Mielopatia cervicale" },
      { label: "Fratture vertebrali" },
      { label: "Cedimenti somatici vertebrali" },
      { label: "Spondilodisciti" },
      {
        label: "Tumori spinali",
        subItems: ["Ependimomi", "Schwannomi spinali", "Meningiomi spinali"],
      },
    ],
  },
  {
    id: "vascular",
    label: "Vascolare",
    title: "Patologie vascolari",
    conditions: [
      { label: "Aneurismi cerebrali" },
      { label: "MAV" },
      { label: "Fistole artero-venose durali" },
      { label: "Angiomi cavernosi" },
    ],
  },
  {
    id: "functional",
    label: "Funzionale / Neuromodulazione",
    title: "Patologie funzionali e neuromodulazione",
    conditions: [
      { label: "Epilessia farmacoresistente" },
      { label: "Dolore cronico" },
      { label: "Spasticità" },
      { label: "Depressione farmacoresistente" },
    ],
  },
];

export const CLINICAL_AREAS: ClinicalArea[] = [
  {
    title: "Neurochirurgia Cranica",
    description:
      "Trattamento chirurgico delle patologie del sistema nervoso centrale, con approccio microchirurgico e pianificazione personalizzata.",
    icon: "cranial",
    conditions: [
      "Asportazione di neoformazioni cerebrali benigne e maligne",
      "Derivazione ventricolo-peritoneale",
      "Approcci ventricoloscopici",
      "Cranioplastica",
    ],
  },
  {
    title: "Neurochirurgia Vascolare",
    description:
      "Gestione delle patologie vascolari del sistema nervoso centrale, dalla diagnosi alla strategia terapeutica chirurgica.",
    icon: "vascular",
    conditions: [
      "Fistole artero-venose durali",
      "Malformazioni artero-venose",
      "Angiomi cavernosi",
    ],
  },
  {
    title: "Neurochirurgia Spinale",
    description:
      "Interventi sulla colonna vertebrale e sul midollo spinale per patologie degenerative, traumatiche e tumorali.",
    icon: "spinal",
    conditions: [
      "Erniectomia lombare endoscopica",
      "Decompressione del canale vertebrale",
      "Artrodesi lombare e cervicale",
      "Asportazione di tumori spinali",
    ],
  },
  {
    title: "Neurochirurgia Funzionale / Neuromodulazione",
    description:
      "Approccio specialistico alle patologie refrattarie ai trattamenti convenzionali mediante neuromodulazione e chirurgia funzionale.",
    icon: "functional",
    conditions: [
      "SCS",
      "VNS",
      "Infusore intratecale",
      "Decompressione del nervo trigemino",
    ],
  },
];

export const NEUROMODULATION_TECHNIQUES: NeuromodulationTechnique[] = [
  {
    acronym: "VNS",
    title: "Vagus Nerve Stimulation",
    description:
      "Stimolazione del nervo vago per patologie neurologiche selezionate, con monitoraggio accurato dell'efficacia terapeutica nel tempo.",
    applications: [
      "Epilessia farmacoresistente",
      "Depressione resistente ai farmaci",
    ],
  },
  {
    acronym: "SCS",
    title: "Spinal Cord Stimulation",
    description:
      "Neuromodulazione midollare per il trattamento del dolore cronico refrattario e di specifiche sindromi dolorose neuropatiche.",
    applications: ["Dolore cronico", "Sindromi dolorose neuropatiche"],
  },
  {
    acronym: "II",
    title: "Infusore Intratecale",
    description:
      "Dispositivo medico impiantabile utilizzato per somministrare piccolissime e precise dosi di farmaco direttamente nel liquido cerebrospinale (liquor) che circonda il midollo spinale e il cervello.",
    applications: ["Spasticità", "Dolore cronico"],
  },
];

export const ADDITIONAL_SERVICES: AdditionalService[] = [
  {
    title: "Second Opinion Specialistica",
    description:
      "Valutazione neurochirurgica indipendente su diagnosi, indicazione operativa e piano terapeutico, anche per casi già in trattamento presso altre strutture. Un confronto specialistico utile per conferma, rivalutazione o chiarimento su situazioni complesse.",
  },
  {
    title: "Infiltrazioni della colonna vertebrale",
    description:
      "Trattamenti mininvasivi che prevedono l'iniezione di farmaci vicino alle strutture nervose o articolari responsabili del dolore. Utilizzate per ridurre l'infiammazione e migliorare la sintomatologia dolorosa, con un effetto che può durare diversi mesi.",
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

export const PROFESSIONAL_EXPERIENCES: ProfessionalExperience[] = [
  {
    location: "Novara",
    detail: "Attività neurochirurgica in ambito ospedaliero e consulenze specialistiche.",
  },
  {
    location: "Vigevano",
    detail: "Patologia spinale mini invasiva.",
  },
];

export const WHY_CHOOSE_ITEMS: CredibilityItem[] = [
  {
    title: "Esperienza Chirurgica",
    description:
      "Oltre 1330 interventi neurochirurgici complessivi, con più di 630 procedure svolte da primo operatore.",
  },
  {
    title: "Approccio Multidisciplinare",
    description:
      "Collaborazione con neurologi, neuroradiologi, oncologi, fisiatri e altri colleghi neurochirurghi per definire percorsi terapeutici integrati e condivisi.",
  },
  {
    title: "Tecniche Avanzate",
    description:
      "Endoscopia ventricolare, chirurgia mininvasiva spinale e neuromodulazione (VNS, SCS, infusore intratecale) con pianificazione preoperatoria personalizzata.",
  },
  {
    title: "Percorso Personalizzato",
    description:
      "Ogni paziente riceve una valutazione dedicata, con spiegazioni chiare e decisioni terapeutiche costruite insieme.",
  },
];

export const STATS: StatItem[] = [
  { value: "1330+", label: "Interventi neurochirurgici" },
  { value: "630+", label: "Interventi da primo operatore" },
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
      "Formazione e aggiornamento su tecniche microchirurgiche, neuromodulazione e chirurgia mininvasiva spinale.",
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
    context: "Neuromodulazione",
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
      "È opportuno consultare un neurochirurgo in presenza di diagnosi di patologie del sistema nervoso centrale o della colonna vertebrale, sintomi neurologici persistenti, o quando si necessita di una valutazione specialistica per definire l'indicazione chirurgica o neuromodulatrice.",
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
      "È possibile prenotare compilando il modulo di contatto, inviando un'email a giorgio.incarbone@asst-fbf-sacco.it o telefonando al +39 338 575 3053. Nella sezione Sedi di consulenza trovi mappa, link e recapiti aggiornati per Milano, Arese e Novara.",
  },
];
