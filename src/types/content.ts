export interface ServiceCard {
  title: string;
  description: string;
  prices: string[];
  icon: "hair" | "nail" | "lash";
}

export interface CategoryChip {
  label: string;
  image: string;
  chipColor: string;
  position: string;
  delay: string;
}

export interface WhyCard {
  title: string;
  description: string;
  icon: "person" | "tag" | "cafe";
}

export interface DirectorChecklistItem {
  text: string;
}

export interface Director {
  name: string;
  role: string;
  tagline: string;
  image: string;
  accent: "green" | "blue";
  checklist: string[];
  specialties: string[];
  reverse: boolean;
}

export interface Review {
  quote: string;
  author: string;
  service: string;
  image: string;
  cardColor: string;
}
