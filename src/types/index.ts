export interface Project {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'landscape' | 'interior';
  description: string;
  images: string[];
  location: string;
  year: number;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}