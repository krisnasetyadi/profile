import { Seo } from "./base.type";

export type EducationType = {
  id: number;
  educationable_type: "App\\Models\\ExecutiveMember";
  educationable_id: number;
  institution: string;
  major: string;
  graduation_year: number;
  created_at: string;
  updated_at: string;
};

export type SingleMediaType = {
  id: number;
  model_type: string;
  model_id: number;
  uuid: string;
  collection_name: string;
  name: string;
  file_name: string;
  mime_type: string;
  disk: string;
  conversions_disk: string;
  size: number;
  manipulations: any[]; // or Record<string, any>[] if structured
  custom_properties: any[];
  generated_conversions: {
    preview: boolean;
  };
  responsive_images: any[];
  order_column: number;
  created_at: string;
  updated_at: string;
  original_url: string;
  preview_url: string;
};

type ExecutiveMemberType = {
  id: number;
  name: string;
  position: string;
  experience: string;
  biography_html: string;
  biography_json: string;
  order: number;
  slug: string;
  created_at: string;
  updated_at: string;
  educations: EducationType[];
  seo: Seo;
  single_media: SingleMediaType;
};

export type { ExecutiveMemberType };
