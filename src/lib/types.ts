export type Discipline = "Scaffolding" | "Painting" | "Insulation";

export interface ServiceItem {
  id: string;
  slug: string;
  discipline: Discipline;
  title: string;
  short: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  bestFor: string[];
  specs?: Array<{ label: string; value: string }>;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  discipline: Discipline | "Multi-discipline";
  scope: string;
  location: string;
  description: string;
  highlights: string[];
  src: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  applications: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface MaterialItem {
  name: string;
  spec: string;
  group: string;
}
