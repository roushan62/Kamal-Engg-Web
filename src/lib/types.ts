export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  description: string;
  useCases: string[];
  specifications: string[];
  features: string[];
  imageLabel: string;
  src?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  scaffoldingType: string;
  location: string;
  description: string;
  imageLabel: string;
  src?: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  icon: string;
  description: string;
  applications: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  phone: string;
  department: string;
}

export interface NavLink {
  label: string;
  href: string;
}
