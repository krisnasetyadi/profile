import { SingleMediaType, Seo } from "./base.type";

type MembersType = {
  id: number;
  name: string;
  position: string;
  experience: string;
  biography_html: string;
  biography_json: {
    [key: string]: any;
  };
  created_at: string;
  updated_at: string;
  slug: string;
  educations: {
    id: number;
    educationable_type: string;
    educationable_id: number;
    institution: string;
    major: string;
    graduation_year: number;
    created_at: string;
    updated_at: string;
  }[];
  seo: Seo;
  single_media: SingleMediaType | null;
};

export type { MembersType };
