import { SingleMediaType } from "./base.type";

type PartnershipsType = {
  id: number;
  name: string;
  created_at: string;
  updated_at: string;
  single_media: SingleMediaType | null;
};

export type { PartnershipsType };
