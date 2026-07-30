import type { ProjectItem, IndustryItem, FAQItem } from "@/lib/types";

export const projects: ProjectItem[] = [
  {
    id: "p1",
    title: "Industrial Plant Shutdown Scaffolding",
    category: "Industrial",
    scaffoldingType: "Cuplock",
    location: "Cement Plant, Madhya Pradesh",
    description: "Full-scale cuplock scaffolding for 15-day planned shutdown maintenance covering preheater tower, cooler section, and ducting access.",
    imageLabel: "[PROJECT PHOTO: Cuplock scaffolding at cement plant shutdown]",
    src: "/images/project-cement.jpg",
  },
  {
    id: "p2",
    title: "Commercial Building Facade Work",
    category: "Commercial",
    scaffoldingType: "H-Frame",
    location: "Commercial Complex, Uttar Pradesh",
    description: "H-Frame scaffolding system deployed for brickwork and plastering on a G+5 commercial building with 200m running facade.",
    imageLabel: "[PROJECT PHOTO: H-Frame scaffolding on commercial building facade]",
    src: "/images/project-facade.jpg",
  },
  {
    id: "p3",
    title: "Bridge Inspection & Repair Access",
    category: "Infrastructure",
    scaffoldingType: "Tubular (Tube & Coupler)",
    location: "Highway Bridge Project, Rajasthan",
    description: "Custom tubular scaffolding configuration for bridge pier and deck soffit access during structural inspection and repair works.",
    imageLabel: "[PROJECT PHOTO: Tubular scaffolding under bridge deck]",
    src: "/images/project-bridge.jpg",
  },
  {
    id: "p4",
    title: "High-Rise Residential Tower",
    category: "Residential",
    scaffoldingType: "Cuplock",
    location: "Residential Tower, NCR",
    description: "Cuplock scaffolding for G+18 residential tower construction — external access, material loading bays, and staircase towers.",
    imageLabel: "[PROJECT PHOTO: Cuplock scaffolding on high-rise residential tower]",
    src: "/images/project-residential.jpg",
  },
  {
    id: "p5",
    title: "Warehouse Construction Support",
    category: "Industrial",
    scaffoldingType: "H-Frame + Tubular",
    location: "Logistics Park, Haryana",
    description: "Hybrid H-Frame and tubular scaffolding for PEB warehouse construction — roof work access, mezzanine installation support.",
    imageLabel: "[PROJECT PHOTO: Scaffolding at warehouse construction site]",
  },
  {
    id: "p6",
    title: "Power Plant Boiler Area Access",
    category: "Industrial",
    scaffoldingType: "Tubular (Tube & Coupler)",
    location: "Thermal Power Plant, Chhattisgarh",
    description: "Complex tubular scaffolding around boiler drum area, economizer, and ducting with multiple working levels for refractory work.",
    imageLabel: "[PROJECT PHOTO: Tubular scaffolding in power plant boiler area]",
  },
];

export const industries: IndustryItem[] = [
  {
    id: "construction",
    title: "Construction & Real Estate",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
    description:
      "We support residential and commercial building construction projects with H-Frame, tubular, and cuplock scaffolding for all phases — from foundation to finishing. Our systems are designed for fast deployment and safe operation on active construction sites.",
    applications: [
      "Residential apartment towers and villa projects",
      "Commercial office buildings and retail complexes",
      "Mixed-use developments",
      "Renovation and re-cladding projects",
    ],
  },
  {
    id: "industrial",
    title: "Industrial & Manufacturing Plants",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    description:
      "Specialized scaffolding for cement, steel, chemical, and power plants — including shutdown/turnaround access, confined-space platforming, and equipment-specific configurations. We understand industrial safety protocols and work permit systems.",
    applications: [
      "Cement plant preheater towers and cooler access",
      "Steel plant furnace and mill area scaffolding",
      "Chemical plant vessel and column access",
      "Power plant boiler, turbine, and ESP access",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure / EPC Projects",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    description:
      "We partner with EPC contractors on large-scale infrastructure projects including bridges, flyovers, metro stations, and water treatment facilities. Our tube & coupler and cuplock systems handle the heavy loads and complex geometries these projects demand.",
    applications: [
      "Bridge pier and deck scaffolding",
      "Metro station and elevated corridor construction",
      "Water treatment and sewage treatment plants",
      "Dam and barrage maintenance access",
    ],
  },
  {
    id: "warehousing",
    title: "Warehousing & Logistics",
    icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4",
    description:
      "PEB warehouse and logistics park projects require efficient access solutions for roof work, mezzanine installation, and MEP fitting. We provide fast-mobilizing scaffolding packages designed for large-footprint warehouse construction schedules.",
    applications: [
      "PEB warehouse roof and wall panel installation",
      "Mezzanine floor and racking system access",
      "Sprinkler and MEP installation platforms",
      "Cold storage and food processing facility access",
    ],
  },
  {
    id: "commercial-fitout",
    title: "Commercial Fit-Out Projects",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    description:
      "Interior fit-out projects for offices, malls, hotels, and retail spaces require clean, non-marking scaffolding that can be rapidly set up and adjusted in occupied or semi-occupied environments. Our systems are designed for minimal footprint and clean operation.",
    applications: [
      "Office interior fit-out and ceiling work",
      "Mall atrium and high-ceiling retail access",
      "Hotel lobby and banquet hall renovation",
      "Airport terminal and metro station interiors",
    ],
  },
];

export const faqs: FAQItem[] = [
  {
    id: "f1",
    question: "What scaffolding systems do you offer?",
    answer:
      "We offer four main scaffolding systems: H-Frame scaffolding (modular, ideal for building facades and straight-line work), Tubular / Tube & Coupler scaffolding (highly flexible for complex geometries and industrial plants), Cuplock scaffolding (heavy-duty, high-capacity system for high-rise buildings and industrial applications), and comprehensive material supply with technical support on rent or sale basis.",
  },
  {
    id: "f2",
    question: "What areas do you serve?",
    answer:
      "We serve projects across India with a focus on construction and industrial hubs. Our operational reach covers major regions through planned mobilization. Contact our coordination team for specific location-based deployment feasibility and timelines.",
  },
  {
    id: "f3",
    question: "What are your rental terms and minimum duration?",
    answer:
      "We offer flexible rental periods — weekly, monthly, or full project-duration basis. The minimum rental duration depends on the material quantity and type. We work with clients to arrive at a commercially viable arrangement that suits their project timeline. Contact us with your requirements for a tailored quote.",
  },
  {
    id: "f4",
    question: "How quickly can you mobilize to a new project site?",
    answer:
      "Mobilization timelines depend on project location, material quantity, and system type. For standard H-Frame requirements within our primary operating regions, we can typically begin mobilization within 3-5 working days of order confirmation. Larger cuplock and tubular requirements may require additional lead time for material allocation and logistics.",
  },
  {
    id: "f5",
    question: "What safety standards do you follow?",
    answer:
      "We adhere to IS 3696 (Part 1) — the Indian Standard Safety Code for Scaffolds and Ladders — and align our practices with international OSHA scaffolding safety guidelines. Our crew follows a structured safety protocol: pre-use material inspection, toolbox talks before erection, mandatory PPE (helmets, harnesses, safety shoes, gloves), proper bracing and anchoring, and load capacity verification. For detailed information, visit our Safety & Compliance page.",
  },
  {
    id: "f6",
    question: "Do you provide on-site supervision during the project?",
    answer:
      "Yes. A dedicated site supervisor is assigned to every project involving erection and dismantling. The supervisor oversees safe erection practices, daily pre-use checks, crew coordination, and serves as the single point of contact for on-site technical queries throughout the scaffolding lifecycle on your project.",
  },
  {
    id: "f7",
    question: "What about billing — do you provide GST invoices?",
    answer:
      "Currently billed without GST — GST invoicing to be introduced soon. This does not affect service quality, material standards, or project execution in any way. For any billing-related queries, please contact our documentation team.",
  },
  {
    id: "f8",
    question: "What is the experience level of your erection crew?",
    answer:
      "Our erection teams consist of trained and experienced scaffolders and riggers who have worked on diverse project types — from residential buildings to industrial plants. All crew members undergo safety orientation, PPE training, and system-specific erection training before being deployed to project sites. The crew is supervised by experienced site supervisors who verify every structure before handover.",
  },
  {
    id: "f9",
    question: "Do you provide structural design and load calculations for scaffolding?",
    answer:
      "We provide load estimation and configuration planning as part of our erection service. For large-scale or complex projects requiring formal structural design calculations, we coordinate with qualified structural engineering associates. Please discuss your specific requirements with our team during inquiry.",
  },
  {
    id: "f10",
    question: "Can you work on projects where other contractors are also active?",
    answer:
      "Yes. Our teams are experienced in working on multi-contractor sites. We coordinate with the principal contractor or project manager to align our scaffolding activities with the overall site schedule, safety protocols, and work permit systems. Our crew is trained to operate within integrated site safety management frameworks.",
  },
];

export const clientIndustries: IndustryItem[] = [
  {
    id: "ci1",
    title: "Cement Plants",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    description: "Preheater tower, cooler, ducting, and silo access scaffolding",
    applications: [],
  },
  {
    id: "ci2",
    title: "Steel Plants",
    icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
    description: "Furnace, mill area, and material handling corridor access",
    applications: [],
  },
  {
    id: "ci3",
    title: "Power Plants",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    description: "Boiler, ESP, turbine hall, and chimney scaffolding",
    applications: [],
  },
  {
    id: "ci4",
    title: "Chemical & Refinery",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
    description: "Process column, vessel, and pipe-rack access platforms",
    applications: [],
  },
];

export const safetyStandards = [
  {
    title: "IS 3696 (Part 1) Compliance",
    description:
      "We follow the Indian Standard Safety Code for Scaffolds and Ladders (IS 3696 Part 1), which specifies safety requirements for the erection, use, and dismantling of scaffolding in construction and industrial settings. This includes material specifications, load ratings, bracing requirements, and safe work practices.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "OSHA Scaffolding Guidelines (International Benchmark)",
    description:
      "We align our safety practices with OSHA 1926 Subpart L scaffolding standards as an international best-practice benchmark — particularly for projects involving multinational EPC contractors or where client specifications reference OSHA requirements. This covers guardrail systems, fall protection, platform construction, and competent person inspections.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    title: "PPE Compliance",
    description:
      "Every crew member on our sites is equipped with and required to use full PPE: industrial safety helmets (IS 2925), full-body safety harnesses with lanyards for work above 2m height, safety shoes with steel toe caps, high-visibility safety vests, and heavy-duty work gloves. PPE usage is verified during pre-work toolbox talks and monitored by the site supervisor throughout the shift.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Trained & Experienced Rigging Crew",
    description:
      "Our erection teams are trained in scaffold assembly, bracing, anchoring, and load distribution. Crew members have hands-on experience across multiple project types and are briefed on site-specific hazards and access plans before beginning work. Refresher safety training is conducted periodically.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
  },
  {
    title: "Pre-Use Inspection Protocol",
    description:
      "Before any scaffold structure is handed over for use, our supervisor conducts a systematic pre-use inspection covering: material condition (no bent/damaged components), correct bracing pattern and tie-off, base plate and sole board placement, guardrail and toe-board installation, platform planking completeness, and load rating display. Inspections are documented in a checklist format.",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    title: "Load Capacity Adherence & Proper Bracing",
    description:
      "Every scaffold structure is built to a defined load category (light duty, medium duty, heavy duty, or special) with appropriate bracing patterns. We never exceed the rated load capacity of the system. Proper anchoring and tie-offs are installed at specified intervals based on structure height and configuration, in accordance with IS 3696 and system manufacturer guidelines.",
    icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
  },
];

export const differentiators = [
  {
    title: "Trained & Certified Crew",
    description:
      "Every scaffolder on our team undergoes system-specific training and safety orientation. Our crew is not casual labor — they are skilled scaffold erection professionals who understand load distribution, bracing geometry, and safe work practices.",
    icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z",
  },
  {
    title: "Safety-First Culture",
    description:
      "Safety is not an add-on — it's how we work. From pre-use material inspection to toolbox talks, PPE compliance, and documented handover checklists, safety runs through every stage of our process.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Faster Mobilization",
    description:
      "We maintain a ready inventory of scaffolding material across all systems — H-Frame, tubular, cuplock — enabling faster mobilization to your project site. Standard requirements within our operating region can begin deployment within days.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Transparent Documentation",
    description:
      "We provide documented material lists, inspection checklists, daily progress updates, and clear billing — so you always know exactly what's deployed, what's being used, and what's being billed. No surprises.",
    icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  },
  {
    title: "Multi-System Expertise",
    description:
      "Unlike contractors who only offer one system, we provide H-Frame, Tubular, and Cuplock scaffolding — and we recommend the right system for your specific project, not the one we happen to have in stock. Right system for the right application.",
    icon: "M4 7v10c0 2 1 3 3 3h10c2 0 3-1 3-3V7M4 7c0-2 1-3 3-3h10c2 0 3 1 3 3M4 7h16",
  },
  {
    title: "Process-Driven Execution",
    description:
      "Every project follows a structured workflow: inquiry → site survey → system recommendation → quotation → material allocation → mobilization → supervised erection → inspection handover → periodic review → planned dismantling. Engineering discipline applied to scaffolding services.",
    icon: "M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2",
  },
];
