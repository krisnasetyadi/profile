import { SingleMediaType, TagType } from "./base.type";

type LegalServiceType = {
  id: number;
  title: string;
  sub_title: string;
  order: number;
  description_html: string;
  description_json: string;
  created_at: string;
  updated_at: string;
  single_media: SingleMediaType | null;
  seo: {
    model_id: number;
    model_type: string;
  };
  tags: TagType[];
};

export type { LegalServiceType };
