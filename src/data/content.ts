import type { ProjectItem, IndustryItem, FAQItem, MaterialItem } from "@/lib/types";

/* ------------------------------------------------------------------ */
/*  PROJECTS                                                           */
/* ------------------------------------------------------------------ */

export const projects: ProjectItem[] = [
  {
    id: "p1",
    title: "Refinery Turnaround Access Package",
    category: "Oil & Gas",
    discipline: "Scaffolding",
    scope: "Cuplock + Tube & Coupler",
    location: "Refinery Complex, Gujarat",
    description:
      "Multi-level cuplock access around distillation columns and pipe racks for a planned turnaround, with tube & coupler infills where geometry did not permit modular bays.",
    highlights: [
      "Staircase towers for safe multi-level access",
      "Erected and handed over under client work permit system",
      "Sequenced dismantling on shutdown completion",
    ],
    src: "/images/project-refinery.jpg",
  },
  {
    id: "p2",
    title: "Cement Plant Preheater Shutdown",
    category: "Cement",
    discipline: "Scaffolding",
    scope: "Cuplock Scaffolding",
    location: "Cement Plant, Western India",
    description:
      "Full-height cuplock scaffolding across preheater tower, cooler section and ducting for a time-bound maintenance shutdown, mobilised at short notice.",
    highlights: [
      "Access at multiple cyclone stages",
      "Working platforms with guardrails and toe boards",
      "Daily scaffold inspection register maintained",
    ],
    src: "/images/project-cement.jpg",
  },
  {
    id: "p3",
    title: "Storage Tank Painting & Access",
    category: "Chemical",
    discipline: "Multi-discipline",
    scope: "Scaffolding + Protective Painting",
    location: "Tank Farm, Gujarat",
    description:
      "Ring scaffolding around a crude storage tank followed by surface preparation and a three-coat epoxy-PU protective system on the shell and roof.",
    highlights: [
      "Power tool cleaning to St 3 before priming",
      "Three-coat system with DFT recorded per coat",
      "Containment sheeting to control overspray",
    ],
    src: "/images/project-tank.jpg",
  },
  {
    id: "p4",
    title: "Process Piping Insulation & Cladding",
    category: "Petrochemical",
    discipline: "Insulation",
    scope: "Hot Insulation + Aluminium Cladding",
    location: "Petrochemical Plant, Gujarat",
    description:
      "Rockwool hot insulation on process and steam lines with aluminium sheet cladding, including bird-mouthed elbows and removable box covers at valves and flanges.",
    highlights: [
      "Cladding fabricated and formed on site",
      "Banding at specified pitch with sealed overlaps",
      "Removable covers at all inspection points",
    ],
    src: "/images/service-insulation.jpg",
  },
  {
    id: "p5",
    title: "Commercial Facade Access",
    category: "Building Construction",
    discipline: "Scaffolding",
    scope: "H-Frame Scaffolding",
    location: "Commercial Complex, Surat",
    description:
      "H-Frame scaffolding along a long running facade for external plastering, putty and painting works on a multi-storey commercial building.",
    highlights: [
      "Fast stacking on a repetitive straight run",
      "Full decking with MS challi at every lift",
      "Progressive raise following the finishing sequence",
    ],
    src: "/images/project-facade.jpg",
  },
  {
    id: "p6",
    title: "Bridge Soffit Inspection Access",
    category: "Infrastructure",
    discipline: "Scaffolding",
    scope: "Tube & Coupler",
    location: "Highway Bridge, Western India",
    description:
      "Suspended and underslung tube & coupler scaffolding for pier and deck soffit access during structural inspection and repair works.",
    highlights: [
      "Cantilever brackets off existing structure",
      "Continuous deck for inspection team access",
      "Traffic-side protection sheeting",
    ],
    src: "/images/project-bridge.jpg",
  },
  {
    id: "p7",
    title: "High-Rise Residential Tower",
    category: "Building Construction",
    discipline: "Scaffolding",
    scope: "Cuplock Scaffolding",
    location: "Residential Tower Project",
    description:
      "Cuplock external access, material loading bays and dedicated staircase towers for a high-rise residential tower through the structure and finishing phases.",
    highlights: [
      "Loading bays at alternate levels",
      "Tied back to structure at specified intervals",
      "Climbing lifts in step with slab casting",
    ],
    src: "/images/project-residential.jpg",
  },
  {
    id: "p8",
    title: "Structural Steel Protective Coating",
    category: "Industrial",
    discipline: "Painting",
    scope: "Surface Prep + Epoxy System",
    location: "Manufacturing Plant, Gujarat",
    description:
      "Surface preparation and anti-corrosive coating of structural steelwork and pipe racks, executed alongside running plant operations under permit.",
    highlights: [
      "Work sequenced around live plant areas",
      "Airless spray with brush touch-up at connections",
      "Coating history documented for handover",
    ],
    src: "/images/service-painting.jpg",
  },
];

export const projectCategories = [
  "All",
  "Oil & Gas",
  "Petrochemical",
  "Chemical",
  "Cement",
  "Industrial",
  "Infrastructure",
  "Building Construction",
];

/* ------------------------------------------------------------------ */
/*  CLIENTS — end-users served through principal contractors           */
/* ------------------------------------------------------------------ */

export const CLIENT_NOTE =
  "Kamal Engineering has executed scaffolding, painting and insulation work as a specialist sub-contractor at plants and project sites of the following organisations, engaged through their principal contractors.";

export const clients: Array<{ name: string; sector: string }> = [
  { name: "Reliance", sector: "Refining & Petrochemicals" },
  { name: "Adani", sector: "Ports, Power & Infrastructure" },
  { name: "IOCL", sector: "Refining & Marketing" },
  { name: "AM/NS India", sector: "Steel" },
  { name: "L&T", sector: "EPC & Construction" },
  { name: "Tata Projects", sector: "EPC & Construction" },
  { name: "Aditya Birla Group", sector: "Diversified Manufacturing" },
  { name: "Ambuja", sector: "Cement" },
  { name: "Atul Ltd", sector: "Chemicals" },
  { name: "Perstorp", sector: "Specialty Chemicals" },
  { name: "Aarti Industries", sector: "Specialty Chemicals" },
  { name: "KRIBHCO", sector: "Fertilisers" },
  { name: "Prestige Group", sector: "Real Estate" },
  { name: "Jobby Engineering", sector: "Industrial Contracting" },
];

/* ------------------------------------------------------------------ */
/*  INDUSTRIES                                                         */
/* ------------------------------------------------------------------ */

export const industries: IndustryItem[] = [
  {
    id: "oil-gas",
    title: "Oil, Gas & Refining",
    icon: "flame",
    description:
      "Refinery turnarounds run on a clock. We mobilise scaffolding crews for planned shutdowns, work inside the client's permit-to-work system, and hand over tagged access so maintenance teams can start on schedule rather than waiting on scaffold.",
    applications: [
      "Distillation column and vessel access",
      "Pipe rack and interconnecting piping scaffolds",
      "Heater, furnace and exchanger access",
      "Tank farm ring scaffolding and painting",
    ],
  },
  {
    id: "chemical",
    title: "Chemical & Petrochemical",
    icon: "beaker",
    description:
      "Chemical plants demand corrosion-aware material and disciplined housekeeping. We supply galvanised scaffold stock suited to aggressive environments and execute protective coating and insulation packages alongside the access work.",
    applications: [
      "Reactor and column internal platforming",
      "Chemical-resistant coating systems",
      "Cold insulation with vapour barriers",
      "Confined space access arrangements",
    ],
  },
  {
    id: "power-cement",
    title: "Power & Cement Plants",
    icon: "bolt",
    description:
      "Boiler, ESP, preheater and cooler areas involve congested steelwork and tight shutdown windows. Our tube & coupler capability lets us build access where a modular system simply will not fit, and dismantle it just as fast.",
    applications: [
      "Boiler drum, economiser and ducting access",
      "ESP and bag-house maintenance scaffolds",
      "Preheater tower and cyclone access",
      "Refractory work platforms",
    ],
  },
  {
    id: "steel-manufacturing",
    title: "Steel & Heavy Manufacturing",
    icon: "factory",
    description:
      "Mill, furnace and conveyor areas need access that respects live operations. We plan sequences around production, use permit-controlled work windows, and maintain the housekeeping standards heavy plants expect.",
    applications: [
      "Furnace and ladle area scaffolding",
      "Conveyor gallery and transfer tower access",
      "Structural steel protective painting",
      "Duct and stack insulation",
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure & EPC",
    icon: "bridge",
    description:
      "Bridges, flyovers, metro corridors and water treatment plants bring heavy loads and awkward geometry. Our tube & coupler and cuplock stock handles both, with tie and bracing arrangements planned for each structure.",
    applications: [
      "Bridge pier, deck and soffit access",
      "Metro station and elevated corridor works",
      "Water and sewage treatment plant structures",
      "Formwork shoring and birdcage decks",
    ],
  },
  {
    id: "building",
    title: "Building & Real Estate",
    icon: "building",
    description:
      "From G+5 commercial blocks to high-rise residential towers, we provide facade access that keeps the finishing trades moving — with loading bays, staircase towers and progressive raises matched to the site programme.",
    applications: [
      "External facade access for finishing trades",
      "Material loading bays and stair towers",
      "Slab shoring and support scaffolds",
      "Renovation and re-cladding access",
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  MATERIALS                                                          */
/* ------------------------------------------------------------------ */

export const materials: MaterialItem[] = [
  { group: "Cuplock System", name: "Standards (Verticals)", spec: "1.0m / 1.5m / 2.0m / 2.5m / 3.0m" },
  { group: "Cuplock System", name: "Ledgers (Horizontals)", spec: "0.6m / 0.9m / 1.2m / 1.5m / 1.8m / 2.5m" },
  { group: "Cuplock System", name: "Base Jack & U-Jack", spec: "Adjustable, 600mm typical" },
  { group: "Cuplock System", name: "Ladder & Stair Units", spec: "Integrated access bays" },
  { group: "Tube & Coupler", name: "MS Scaffolding Pipe", spec: "48.3mm OD, various lengths" },
  { group: "Tube & Coupler", name: "Right-Angle Coupler", spec: "Forged / pressed" },
  { group: "Tube & Coupler", name: "Swivel Coupler", spec: "For raking and bracing" },
  { group: "Tube & Coupler", name: "Sleeve & Joint Pin", spec: "Pipe end connection" },
  { group: "H-Frame System", name: "H-Frames", spec: "Standard heights with cross-brace" },
  { group: "H-Frame System", name: "Cross Braces", spec: "Locking pin type" },
  { group: "Decking", name: "MS Challi / Walkway", spec: "Perforated metal deck" },
  { group: "Decking", name: "Metal Planks & Battens", spec: "Full-width platform decking" },
  { group: "Formwork", name: "Adjustable Props", spec: "Telescopic, various ranges" },
  { group: "Formwork", name: "Spans & Soldiers", spec: "Slab and beam support" },
  { group: "Safety", name: "Guardrail, Mid-rail, Toe Board", spec: "Fitted at every working lift" },
  { group: "Safety", name: "Safety Netting & Sheeting", spec: "Debris containment" },
];

export const materialGroups = [
  "Cuplock System",
  "Tube & Coupler",
  "H-Frame System",
  "Decking",
  "Formwork",
  "Safety",
];

/* ------------------------------------------------------------------ */
/*  PROCESS                                                            */
/* ------------------------------------------------------------------ */

export const processSteps = [
  {
    step: "01",
    title: "Enquiry & Site Survey",
    description:
      "You share the scope, drawings or a site location. We visit, take measurements, assess ground conditions, tie points and access constraints, and understand your programme dates.",
    icon: "search",
  },
  {
    step: "02",
    title: "Proposal & Method",
    description:
      "You receive an itemised quotation with the proposed system, material take-off, manpower plan and a method statement covering sequence and safety arrangements.",
    icon: "document",
  },
  {
    step: "03",
    title: "Mobilisation",
    description:
      "On work order, material is inspected and despatched with an item-wise challan. Crew documentation, medicals and gate passes are processed in parallel so nothing holds up day one.",
    icon: "truck",
  },
  {
    step: "04",
    title: "Execution Under Permit",
    description:
      "Work proceeds under your permit-to-work system with daily toolbox talks. Scaffolds are tagged on completion and inspected on a documented cycle throughout the job.",
    icon: "shield",
  },
  {
    step: "05",
    title: "Handover & Demobilisation",
    description:
      "On completion we dismantle in sequence, reconcile material against the challan, clear the area and close out documentation for billing.",
    icon: "check",
  },
];

/* ------------------------------------------------------------------ */
/*  DIFFERENTIATORS                                                    */
/* ------------------------------------------------------------------ */

export const differentiators = [
  {
    title: "Three Disciplines, One Contractor",
    description:
      "Scaffolding, protective painting and thermal insulation from a single vendor — one work order, one point of contact, no interface gaps between trades.",
    icon: "layers",
  },
  {
    title: "Refinery-Grade Discipline",
    description:
      "Our crews are used to permit-to-work systems, gate pass procedures, toolbox talks and shutdown timelines at major plants — not just open construction sites.",
    icon: "shield",
  },
  {
    title: "Documented, Not Assumed",
    description:
      "Scaffold tags, inspection registers, DFT readings and material challans. Everything that should be on paper is on paper, ready for your audit.",
    icon: "document",
  },
  {
    title: "Fast Mobilisation",
    description:
      "Shutdown windows do not move. We keep material inspected and ready so crews and stock can reach site quickly when your dates are fixed.",
    icon: "bolt",
  },
  {
    title: "Material You Can Trust",
    description:
      "Bent, cracked or heavily corroded items are removed from circulation. What arrives at your site is stock we would put our own people on.",
    icon: "check",
  },
  {
    title: "Pan-India from Gujarat",
    description:
      "Based at Sayan, Surat — in the middle of Gujarat's refinery and chemical belt — and mobilising to project sites across India.",
    icon: "map",
  },
];

/* ------------------------------------------------------------------ */
/*  SAFETY                                                             */
/* ------------------------------------------------------------------ */

export const safetyPractices = [
  {
    title: "Permit-to-Work Compliance",
    description:
      "No work starts without a valid permit from the client. Height work, hot work and confined space entry each follow the site's own permit regime, and our supervisors are trained to read and honour permit conditions.",
    icon: "document",
  },
  {
    title: "100% Fall Protection at Height",
    description:
      "Full body harness with double lanyard is mandatory above 1.8m. Erectors clip to a lifeline or sound anchor point at all times, including during the erection and dismantling sequence itself.",
    icon: "shield",
  },
  {
    title: "Scaffold Tagging System",
    description:
      "Every completed scaffold carries a tag. Green means inspected and safe to use; red means incomplete or under modification. Tags are dated and signed, and no untagged scaffold is released to other trades.",
    icon: "tag",
  },
  {
    title: "Daily Toolbox Talks",
    description:
      "Each shift opens with a briefing covering the day's scope, specific hazards, PPE checks and the emergency plan. Attendance is recorded and available to the client's HSE team.",
    icon: "users",
  },
  {
    title: "Inspected Material Only",
    description:
      "Scaffold stock is checked before despatch and again on site. Bent standards, cracked welds, damaged couplers and split planks are quarantined and taken out of service.",
    icon: "check",
  },
  {
    title: "Trained & Documented Crew",
    description:
      "Erectors work under experienced supervisors, with height-work medical fitness records, induction training and site-specific orientation completed before entering the workface.",
    icon: "badge",
  },
];

export const safetyStandards = [
  {
    code: "IS 3696 (Part 1)",
    title: "Safety Code for Scaffolds & Ladders",
    note: "The Indian Standard we follow for scaffold erection practice, working platform width, guardrail heights and ladder access.",
  },
  {
    code: "IS 4014",
    title: "Code of Practice for Steel Tubular Scaffolding",
    note: "Reference for steel tubular scaffold members, couplers, spacing and bracing arrangements.",
  },
  {
    code: "BOCW Act, 1996",
    title: "Building & Other Construction Workers Act",
    note: "Statutory framework covering welfare, safety provisions and working conditions for construction workers in India.",
  },
  {
    code: "Client HSE Systems",
    title: "Site-Specific Requirements",
    note: "At every plant we adopt the client's own HSE manual, permit system, PPE matrix and induction requirements in full.",
  },
];

export const ppeList = [
  "Safety helmet with chin strap",
  "Full body harness with double lanyard",
  "Safety shoes with steel toe",
  "Hand gloves appropriate to task",
  "Safety goggles / face shield",
  "Hi-visibility jacket",
  "Dust mask or respirator for painting",
  "Ear protection in high-noise areas",
];

/* ------------------------------------------------------------------ */
/*  TESTIMONIAL-STYLE CAPABILITY STATEMENTS (not fabricated quotes)    */
/* ------------------------------------------------------------------ */

export const commitments = [
  {
    stat: "Zero",
    label: "Compromise on fall protection",
    detail: "Harness and anchorage discipline is non-negotiable on every Kamal Engineering workface.",
  },
  {
    stat: "24 hrs",
    label: "Typical quotation turnaround",
    detail: "Send us a scope and drawings; you get an itemised proposal back within a working day.",
  },
  {
    stat: "3-in-1",
    label: "Disciplines under one work order",
    detail: "Scaffolding, painting and insulation coordinated by a single contractor.",
  },
];

/* ------------------------------------------------------------------ */
/*  FAQ                                                                */
/* ------------------------------------------------------------------ */

export const faqs: FAQItem[] = [
  {
    category: "Getting Started",
    question: "How do I get a quotation from Kamal Engineering?",
    answer:
      "Send your scope through the enquiry form, on WhatsApp, or by phone. Share drawings, a rough sketch or even site photographs along with your target dates. For anything sizeable we will visit the site to take measurements and check access. You will normally receive an itemised quotation within one working day of the survey.",
  },
  {
    category: "Getting Started",
    question: "What information should I provide with my enquiry?",
    answer:
      "The more specific the better: type of work (scaffolding, painting, insulation or a combination), structure height and dimensions, duration required, site location, and whether it is a shutdown with fixed dates. If you have a client specification for coating or insulation, send that too — it determines the system and therefore the price.",
  },
  {
    category: "Getting Started",
    question: "Do you take small jobs, or only large contracts?",
    answer:
      "Both. We handle single-building facade scaffolds and short maintenance jobs as readily as multi-week plant shutdowns. Tell us the scope and we will tell you honestly whether we are the right fit.",
  },
  {
    category: "Scope & Capability",
    question: "Which scaffolding systems do you work with?",
    answer:
      "Cuplock for heavy-duty industrial and high-rise access, tube & coupler for irregular geometry and industrial plants, and H-Frame for straight-run building facades. We routinely combine systems on a single job where the structure demands it — for example cuplock main bays with tube & coupler infills around pipework.",
  },
  {
    category: "Scope & Capability",
    question: "Do you provide only material, or manpower as well?",
    answer:
      "Either. We supply material on monthly hire or on sale for contractors who have their own erection crew, and we also take complete labour-plus-material packages where we handle the entire access scope from survey through to dismantling.",
  },
  {
    category: "Scope & Capability",
    question: "Can you do painting and insulation along with the scaffolding?",
    answer:
      "Yes — that is one of our main advantages. Because we execute all three disciplines, the access, the coating and the insulation can run under one work order with one point of contact. It removes the coordination gaps that appear when three separate vendors are waiting on each other.",
  },
  {
    category: "Scope & Capability",
    question: "Where do you operate?",
    answer:
      "We are based at Sayan, Surat in Gujarat, in the middle of the state's refinery and chemical belt, and we mobilise to project sites across India. For sites outside Gujarat we factor transport and crew accommodation into the quotation transparently.",
  },
  {
    category: "Safety & Compliance",
    question: "What safety standards do you follow?",
    answer:
      "Our scaffold erection practice follows IS 3696 (Part 1) and IS 4014, and we operate within the BOCW Act framework. On plant sites we additionally adopt the client's own HSE manual, permit-to-work system, PPE matrix and induction requirements in full — the client's system always takes precedence.",
  },
  {
    category: "Safety & Compliance",
    question: "How do you ensure a scaffold is safe to use?",
    answer:
      "Every completed scaffold is tagged. A green tag means it has been inspected and is released for use; a red tag means it is incomplete or under modification and must not be used. Tags are dated and signed, and a scaffold inspection register is maintained through the life of the structure.",
  },
  {
    category: "Safety & Compliance",
    question: "Is your crew trained and insured?",
    answer:
      "Erectors work under experienced supervisors and complete site induction, height-work medical fitness and toolbox training before entering the workface. Statutory worker coverage is arranged as applicable to the contract. Specific documentation can be shared with your HSE and contracts teams on request.",
  },
  {
    category: "Safety & Compliance",
    question: "What PPE do your workers use?",
    answer:
      "Safety helmet with chin strap, full body harness with double lanyard for all work above 1.8m, steel-toe safety shoes, task-appropriate gloves, goggles or face shield, and hi-visibility jacket as standard. Respirators are added for painting work and ear protection in high-noise areas.",
  },
  {
    category: "Commercial",
    question: "How is scaffolding work priced?",
    answer:
      "It depends on the job. Common bases are per square metre of scaffold face area, per cubic metre for volumetric or birdcage scaffolds, per tonne per month for material hire, or a lump sum for a defined package. We state the basis clearly in the quotation so there is no ambiguity at billing.",
  },
  {
    category: "Commercial",
    question: "What are your payment and billing terms?",
    answer:
      "Terms are agreed in the work order before mobilisation. For longer contracts we typically raise running account bills against joint measurement, and for shorter jobs we bill on completion. Measurement sheets and supporting documentation accompany every invoice.",
  },
  {
    category: "Commercial",
    question: "How quickly can you mobilise?",
    answer:
      "For sites within Gujarat we can usually mobilise material and crew within a few days of a confirmed work order. Outside Gujarat it depends on transport distance and gate pass processing at the client's plant. If you have a fixed shutdown date, tell us early and we will plan backwards from it.",
  },
  {
    category: "Commercial",
    question: "Who do I contact for what?",
    answer:
      "For enquiries, quotations, work orders and billing documentation, contact Suraj Kumar on +91 8797304532. For site surveys, mobilisation and day-to-day execution matters, contact Gourav Yadav on +91 7979909712.",
  },
];

export const faqCategories = ["All", "Getting Started", "Scope & Capability", "Safety & Compliance", "Commercial"];
