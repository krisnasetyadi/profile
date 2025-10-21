import { Seo, SingleMediaType, TagType } from "./base.type";

export type RelatedArticleType = {
  id: number;
  category: string;
  slug: string;
  title: string;
  article_url: string;
  author: string | null;
  description_html: string;
  media_type: "image" | "video";
  video_url: string | null;
  published_date: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  description_json: string;
  excerpt: string | null;
  single_media: SingleMediaType | null;
  seo: Seo | null;
  tags: TagType[];
};
