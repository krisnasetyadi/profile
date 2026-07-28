import type { StaticImageData } from "next/image";
import AngularGridImage from "../public/images/work/angular-grid.png";
import LawFirmImage from "../public/images/work/law-firm.png";
import Cashnomy from "../public/images/work/cashnomy.png";
import Vovelia from "../public/images/work/vovelia-preview.png";
import DocuLensImage from "../public/images/work/doculens.png";

export type Project = {
  index: string;
  name: string;
  category: string;
  year: string;
  /** Public URL. Omit for confidential or not-yet-published projects. */
  url?: string;
  /** Screenshot. Omit for confidential or in-progress projects — a placeholder renders instead. */
  image?: StaticImageData;
  alt: string;
  /** Short problem → solution blurb, 1-2 sentences. Shown in the expanded row/card. */
  description?: string;
  featured: boolean;
  /** Under NDA: no screenshot, no public link, name/description may be generic. */
  confidential?: boolean;
  /** Still being built — no public link/screenshot yet, but not confidential. */
  inProgress?: boolean;
  /** Optional one-line note shown on cards without a screenshot (tech stack, role, etc.) */
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
    description:
      "A digital invitation platform — create and share event invitations online, with RSVP and guest details in one link, no printed cards needed.",
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
    description:
      "A personal finance app for budgeting, wallet tracking, savings plans, and bill-splitting — with support for arisan (rotating savings groups) and debt tracking.",
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
    description:
      "A spreadsheet-style data grid built in Angular — sortable, filterable, editable rows for working with large tabular datasets.",
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
    description:
      "A corporate website for a law firm — practice area overviews, team profiles, and a contact/inquiry flow.",
    featured: true,
  },
  {
    index: "05",
    name: "DOCULENS",
    category: "RAG / AI Assistant",
    year: "2026",
    url: "https://doculens-ui-beta.vercel.app/",
    image: DocuLensImage,
    alt: "DocuLens — Retrieval-Augmented Generation document Q&A system",
    description:
      "A Retrieval-Augmented Generation (RAG) system for document Q&A — hybrid search across PDFs, database records, and chat logs to surface answers fast.",
    featured: true,
    inProgress: true,
    note: "Personal RAG project, shortlisted for an internal innovation showcase at Moonlay. Live beta — still under active development.",
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

export function projectSlug(project: Project): string {
  return project.name.toLowerCase().replace(/\s+/g, "-");
}

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => projectSlug(p) === slug);
}
