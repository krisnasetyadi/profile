import { TagType } from "./base.type";

export type OtherLegalServiceType = {
  id: number;
  title: string;
  sub_title: string;
  description_html: string;
  description_json: string;
  created_at: string;
  updated_at: string;
  seo: {
    id: number;
    model_type: string;
    model_id: number;
    description: string;
    title: string;
    image: string | null;
    author: string | null;
    robots: string | null;
    canonical_url: string | null;
    created_at: string;
    updated_at: string;
  };
  tags: TagType[];
};
