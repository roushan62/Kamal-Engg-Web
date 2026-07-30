export const COMPANY = {
  name: "Kamal Engineering",
  shortName: "Kamal Engg",
  legalLine: "Scaffolding • Painting • Insulation",
  tagline: "Scaffolding, Painting & Insulation Services for India's Refineries, Plants & Infrastructure",
  description:
    "Kamal Engineering is a multi-discipline industrial services contractor from Sayan, Surat (Gujarat) delivering scaffolding erection & dismantling, industrial protective painting and thermal insulation for refineries, chemical plants, power stations and construction projects across India.",
  email: "sales.kamalengg01@gmail.com",
  phone: {
    primary: "+91 8797304532",
    secondary: "+91 7979909712",
  },
  whatsapp: "918797304532",
  address: {
    line1: "Sayan, Surat",
    line2: "Gujarat 394130, India",
    city: "Surat",
    state: "Gujarat",
    country: "India",
    postalCode: "394130",
  },
  hours: "Monday – Saturday, 9:00 AM – 7:00 PM IST",
  serviceArea: "Pan-India — Gujarat, Maharashtra, Rajasthan, MP, UP, Odisha, Jharkhand & more",
  siteUrl: "https://kamalengineering.vercel.app",
  mapQuery: "Sayan, Surat, Gujarat 394130",
} as const;

export const TEAM: Array<{
  name: string;
  role: string;
  phone: string;
  department: string;
  focus: string;
}> = [
  {
    name: "Suraj Kumar",
    role: "Documentation & Client Relations",
    phone: "8797304532",
    department: "Commercial",
    focus:
      "Enquiries, quotations, work orders, billing documentation, measurement sheets and client coordination.",
  },
  {
    name: "Gourav Yadav",
    role: "Site Operations & Execution",
    phone: "7979909712",
    department: "Operations",
    focus:
      "Site surveys, manpower mobilisation, scaffold erection planning, work permits and day-to-day site execution.",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Safety", href: "/safety" },
  { label: "FAQ", href: "/faq" },
] as const;

export const STATS: Array<{
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}> = [
  { value: 50, suffix: "+", label: "Projects Executed", sublabel: "Across plants & construction sites" },
  { value: 5, suffix: "+", label: "Years in the Field", sublabel: "Refinery & plant experience" },
  { value: 3, suffix: "", label: "Core Disciplines", sublabel: "Scaffolding, painting, insulation" },
  { value: 100, suffix: "%", label: "Permit Compliance", sublabel: "Work executed under client PTW" },
];
