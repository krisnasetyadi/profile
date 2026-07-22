import type { StaticImageData } from "next/image";
import AngularGridImage from "../public/images/angular-grid.png";
import LawFirmImage from "../public/images/law-firm.png";
import Cashnomy from "../public/images/cashnomy.png";
import Vovelia from "../public/images/vovelia-preview.png";

export type Project = {
  index: string;
  name: string;
  category: string;
  year: string;
  /** Public URL. Omit for confidential projects with no public link. */
  url?: string;
  /** Screenshot. Omit for confidential projects — a placeholder renders instead. */
  image?: StaticImageData;
  alt: string;
  featured: boolean;
  /** Under NDA: no screenshot, no public link, name/description may be generic. */
  confidential?: boolean;
  /** Optional one-line note shown on confidential cards (tech stack, role, etc.) */
  note?: string;
};

export const PROJECTS: Project[] = [
  {
    index: "01",
    name: "VOVELIA",
    category: "Digital Invitation",
    year: "2026",
    url: "https://vovelia.vercel.app/",
    image: Vovelia,
    alt: "Vovelia — Digital Wedding Invitation Platform",
    featured: true,
  },
  {
    index: "02",
    name: "CASHNOMY",
    category: "Finance App",
    year: "2026",
    url: "https://cashnomy.vercel.app",
    image: Cashnomy,
    alt: "Cashnomy — Personal Finance Dashboard",
    featured: true,
  },
  {
    index: "03",
    name: "ANGULAR GRID",
    category: "Dev Tool",
    year: "2023",
    url: "https://angular-grid-ivory.vercel.app/",
    image: AngularGridImage,
    alt: "Angular Grid — Spreadsheet App",
    featured: true,
  },
  {
    index: "04",
    name: "LAW FIRM",
    category: "Corporate Site",
    year: "2025",
    url: "https://paulusshpartners.com/",
    image: LawFirmImage,
    alt: "Law Firm — Corporate Website",
    featured: true,
  },
];

export function getFeaturedProjects(): Project[] {
  return PROJECTS.filter((p) => p.featured).sort((a, b) =>
    b.year.localeCompare(a.year),
  );
}

export function getAllProjects(): Project[] {
  return [...PROJECTS].sort((a, b) => b.year.localeCompare(a.year));
}
