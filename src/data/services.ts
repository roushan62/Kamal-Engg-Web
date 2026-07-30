import type { ServiceItem } from "@/lib/types";

export const services: ServiceItem[] = [
  {
    id: "erection-dismantling",
    slug: "erection-dismantling",
    discipline: "Scaffolding",
    title: "Scaffolding Erection & Dismantling",
    short:
      "Full-cycle scaffold access — survey, load planning, erection, tagging, inspection and safe dismantling with material recovery.",
    description:
      "We take complete responsibility for the access scaffold lifecycle. Our supervisors carry out a site survey and load assessment, prepare a sketch and material take-off, mobilise a trained crew, and erect the structure to IS 3696 practice. Every completed scaffold is handed over with a Scafftag (green/red) system, and dismantling is done in reverse sequence with full material accounting so nothing is lost from your site.",
    icon: "hammer",
    image: "/images/service-erection.jpg",
    features: [
      "Site survey, sketching and material take-off",
      "Load class assessment — light, medium and heavy duty",
      "Trained erectors working under full body harness at all times",
      "Green / red Scafftag handover and daily inspection register",
      "Sequenced dismantling with material reconciliation",
      "Shutdown and turnaround mobilisation at short notice",
    ],
    bestFor: [
      "Refinery & petrochemical turnarounds",
      "Plant maintenance shutdowns",
      "Building construction access",
      "Bridge and infrastructure works",
    ],
    specs: [
      { label: "Standard", value: "IS 3696 (Part 1) practice" },
      { label: "Crew", value: "Supervisor + erectors + helpers" },
      { label: "Handover", value: "Scafftag + inspection checklist" },
    ],
  },
  {
    id: "cuplock",
    slug: "cuplock",
    discipline: "Scaffolding",
    title: "Cuplock Scaffolding System",
    short:
      "Node-point modular system for heavy-duty industrial and high-rise access — fastest erection cycle per man-hour.",
    description:
      "Cuplock is our preferred system for industrial plants and high-rise work. The top-cup / bottom-cup node locks up to four ledgers in a single hammer blow, so erection is substantially faster than tube & coupler and needs fewer loose fittings to control. Galvanised standards and ledgers resist corrosion in coastal and chemical environments — an important consideration for Gujarat's plant belt.",
    icon: "cuplock",
    image: "/images/service-cuplock.jpg",
    features: [
      "Galvanised standards in 1.0m, 1.5m, 2.0m, 2.5m and 3.0m lengths",
      "Ledgers from 0.6m to 2.5m at standard 500mm lift intervals",
      "Base jacks and U-jacks for uneven ground and formwork support",
      "Integrated ladder access bays and stair towers",
      "Doubles as birdcage support and shoring for slab formwork",
      "Minimal loose fittings — lower material loss on site",
    ],
    bestFor: [
      "Refinery columns and vessel access",
      "High-rise external access",
      "Slab shoring and birdcage decks",
      "Boiler and furnace internals",
    ],
    specs: [
      { label: "Node", value: "Top-cup / bottom-cup, 4-way" },
      { label: "Finish", value: "Hot-dip galvanised / painted" },
      { label: "Lift", value: "500mm module" },
    ],
  },
  {
    id: "tubular",
    slug: "tubular",
    discipline: "Scaffolding",
    title: "Tubular (Tube & Coupler) Scaffolding",
    short:
      "Maximum geometric freedom for irregular structures, pipe racks, cantilevers and one-off industrial configurations.",
    description:
      "Where a modular system cannot follow the geometry, tube and coupler takes over. Using MS pipes with right-angle, swivel and sleeve couplers, we can build to any angle, span any obstruction and cantilever off existing steelwork. This is the system we reach for around pipe racks, under bridge soffits, inside vessels and anywhere the structure refuses to be rectangular.",
    icon: "pipe",
    image: "/images/service-tubular.jpg",
    features: [
      "MS pipes with right-angle, swivel, sleeve and putlog couplers",
      "Cantilever, suspended and bracket scaffolds off existing steel",
      "Confined-space and vessel-internal platforming",
      "Bridge soffit, pier and underslung access",
      "Custom raking and bridging over live plant equipment",
      "Ties and bracing designed to the specific structure",
    ],
    bestFor: [
      "Pipe rack and duct access",
      "Bridge soffits and piers",
      "Vessel and column internals",
      "Irregular or curved structures",
    ],
    specs: [
      { label: "Tube", value: "MS pipe, 48.3mm OD" },
      { label: "Couplers", value: "Right-angle, swivel, sleeve, putlog" },
      { label: "Strength", value: "Site-specific tie & bracing plan" },
    ],
  },
  {
    id: "h-frame",
    slug: "h-frame",
    discipline: "Scaffolding",
    title: "H-Frame Scaffolding",
    short:
      "Pre-fabricated frame system for fast, repeatable facade access on buildings — lowest cost per square metre.",
    description:
      "For straight-run building facades, H-Frame is the most economical answer. Pre-welded frames with cross-braces stack quickly, need very little skilled labour, and give a consistent working width. We use it for plastering, brickwork, painting and finishing on residential and commercial buildings, and as a mobile tower for internal work.",
    icon: "frame",
    image: "/images/service-hframe.jpg",
    features: [
      "Pre-welded frames with locking cross-braces",
      "Adjustable base plates and castor wheels for mobile towers",
      "MS challi and metal decks for a full working platform",
      "Very fast stacking — low skilled-labour requirement",
      "Guardrails, mid-rails and toe boards fitted as standard",
      "Ideal for repetitive straight-run facades",
    ],
    bestFor: [
      "Residential & commercial facades",
      "Plastering and painting access",
      "Internal mobile towers",
      "Warehouse and shed work",
    ],
    specs: [
      { label: "Frame", value: "Standard 1.7m / 2.0m heights" },
      { label: "Bay", value: "1.8m – 2.4m typical" },
      { label: "Deck", value: "MS challi / metal plank" },
    ],
  },
  {
    id: "industrial-painting",
    slug: "industrial-painting",
    discipline: "Painting",
    title: "Industrial Protective Painting",
    short:
      "Surface preparation and protective coating for tanks, structures, pipelines and plant equipment — with DFT records.",
    description:
      "Coating fails at the surface preparation stage, not the paint stage. We prepare to the specified standard — power tool cleaning to St 2/St 3 or abrasive blasting to Sa 2½ — then apply the client's specified system, typically an epoxy primer, epoxy intermediate and polyurethane finish. Wet film and dry film thickness are checked and recorded at each coat, so you get a documented coating history rather than a promise.",
    icon: "brush",
    image: "/images/service-painting.jpg",
    features: [
      "Surface preparation: power tool cleaning and abrasive blasting",
      "Epoxy primer, intermediate and PU finish systems",
      "Airless spray, conventional spray, brush and roller application",
      "WFT / DFT measurement recorded coat by coat",
      "Anti-corrosive, heat-resistant and chemical-resistant systems",
      "Structural steel, tanks, pipelines and equipment",
    ],
    bestFor: [
      "Storage tank internals & externals",
      "Structural steel and pipe racks",
      "Plant equipment and vessels",
      "Line marking and colour coding",
    ],
    specs: [
      { label: "Prep", value: "St 2 / St 3 / Sa 2½" },
      { label: "System", value: "Epoxy + PU as per client spec" },
      { label: "QC", value: "DFT gauge readings logged" },
    ],
  },
  {
    id: "thermal-insulation",
    slug: "thermal-insulation",
    discipline: "Insulation",
    title: "Thermal & Cold Insulation",
    short:
      "Hot and cold insulation for piping, vessels and equipment with aluminium or GI cladding, finished to spec.",
    description:
      "Heat loss costs money every hour a line runs uninsulated. We execute hot insulation using rockwool, mineral wool, ceramic wool and calcium silicate, and cold insulation using PUF, nitrile rubber and thermocol systems with proper vapour barriers. Everything is finished with aluminium or GI sheet cladding, properly bird-mouthed at elbows and banded at the specified pitch — because neat cladding is what actually keeps water out.",
    icon: "layers",
    image: "/images/service-insulation.jpg",
    features: [
      "Hot insulation: rockwool, mineral wool, ceramic wool, calcium silicate",
      "Cold insulation: PUF, nitrile rubber, thermocol with vapour barrier",
      "Aluminium and GI sheet cladding, fabricated on site",
      "Elbows, tees, valves and flanges — removable box covers",
      "Personnel protection and acoustic insulation",
      "Banding at specified pitch with sealed overlaps",
    ],
    bestFor: [
      "Process piping and steam lines",
      "Vessels, columns and exchangers",
      "Chilled water and refrigeration lines",
      "Boiler and furnace ducting",
    ],
    specs: [
      { label: "Hot", value: "Rockwool / LRB / ceramic wool" },
      { label: "Cold", value: "PUF / nitrile with vapour barrier" },
      { label: "Cladding", value: "Aluminium 0.5–0.8mm / GI" },
    ],
  },
  {
    id: "supply-hire",
    slug: "supply-hire",
    discipline: "Scaffolding",
    title: "Material Supply & Hire",
    short:
      "Scaffolding material on monthly rent or outright sale — inspected, tagged and delivered to your site.",
    description:
      "If you have your own crew and only need material, we supply on monthly hire or on sale. Stock is inspected before despatch, bent or damaged items are pulled out of circulation, and everything is delivered with a signed challan showing item-wise counts so reconciliation at the end of hire is straightforward. Top-up deliveries during a running job are handled on the same rate.",
    icon: "truck",
    image: "/images/yard-materials.jpg",
    features: [
      "Cuplock standards, ledgers, base jacks and U-jacks",
      "MS pipes, couplers, clamps and joint pins",
      "H-frames, cross braces, MS challi and metal decks",
      "Adjustable props, spans and shuttering accessories",
      "Item-wise delivery challan and return reconciliation",
      "Monthly hire or outright purchase",
    ],
    bestFor: [
      "Contractors with in-house erection crew",
      "Short-term top-up requirements",
      "Long-duration site hire",
      "One-time material purchase",
    ],
    specs: [
      { label: "Basis", value: "Monthly hire or sale" },
      { label: "Delivery", value: "Item-wise signed challan" },
      { label: "Condition", value: "Pre-despatch inspection" },
    ],
  },
];

export function getService(slug: string) {
  return services.find((s) => s.slug === slug);
}

export const disciplines: Array<{
  name: "Scaffolding" | "Painting" | "Insulation";
  tagline: string;
  blurb: string;
  icon: string;
  image: string;
  href: string;
}> = [
  {
    name: "Scaffolding",
    tagline: "Safe access, engineered",
    blurb:
      "Cuplock, tube & coupler and H-Frame systems erected, tagged, inspected and dismantled by trained crews.",
    icon: "cuplock",
    image: "/images/service-cuplock.jpg",
    href: "/services#erection-dismantling",
  },
  {
    name: "Painting",
    tagline: "Protection that lasts",
    blurb:
      "Surface preparation and protective coating systems with documented DFT readings at every coat.",
    icon: "brush",
    image: "/images/service-painting.jpg",
    href: "/services#industrial-painting",
  },
  {
    name: "Insulation",
    tagline: "Energy kept where it belongs",
    blurb:
      "Hot and cold insulation with aluminium or GI cladding, finished neatly and banded to specification.",
    icon: "layers",
    image: "/images/service-insulation.jpg",
    href: "/services#thermal-insulation",
  },
];
