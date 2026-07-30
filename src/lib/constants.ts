export const COMPANY = {
  name: "Kamal Engineering",
  shortName: "Kamal Engg",
  tagline: "Engineered Scaffolding Solutions for India's Construction & Industrial Projects",
  email: "sales.kamalengg01@gmail.com",
  phone: {
    primary: "+91 8797304532",
    secondary: "+91 7979909712",
  },
} as const;

export const TEAM: Array<{
  name: string;
  role: string;
  phone: string;
  department: string;
}> = [
  {
    name: "Suraj Kumar",
    role: "Documentation & Client Relations",
    phone: "8797304532",
    department: "Documentation & Client Coordination",
  },
  {
    name: "Gourav Yadav",
    role: "Site Operations & Execution",
    phone: "7979909712",
    department: "Operations & Site Execution",
  },
];

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Safety", href: "/safety" },
  { label: "Projects", href: "/projects" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
] as const;

export const STATS = [
  {
    value: 120,
    suffix: "+",
    label: "Projects Completed",
    note: "[UPDATE WITH REAL DATA]",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    value: 2500,
    suffix: " MT",
    label: "Scaffolding Deployed",
    note: "[UPDATE WITH REAL DATA]",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    value: 8,
    suffix: "+",
    label: "Years Industry Experience",
    note: "[UPDATE WITH REAL DATA]",
    icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
  },
  {
    value: 100,
    suffix: "%",
    label: "Safety Compliance Record",
    note: "[UPDATE WITH REAL DATA]",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
];
