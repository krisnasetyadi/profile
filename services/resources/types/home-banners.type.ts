import { SingleMediaType } from "./base.type";

type HomeBannersType = {
  id: number;
  title: string;
  order: number;
  description: string;
  created_at: string;
  updated_at: string;
  highlights: string;
  single_media: SingleMediaType | null;
};

export type { HomeBannersType };
