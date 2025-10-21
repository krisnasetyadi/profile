import { Seo, SingleMediaType, TagType } from "./base.type";

type ArticleListResponseType = {
  current_page: number;
  data: ArticleType[];
  first_page_url: string;
  from: number;
  last_page: number;
  last_page_url: string;
  links: {
    url: string | null;
    label: string;
    active: boolean;
  }[];
  next_page_url: string | null;
  path: string;
  per_page: number;
  prev_page_url: string | null;
  to: number;
  total: number;
};

type ArticleType = {
  id: number;
  category: string;
  slug: string;
  excerpt: string;
  title: string;
  article_url: string;
  author: string;
  description_html: string;
  media_type: string;
  video_url: string | null;
  published_date: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
  description_json: string;
  single_media: SingleMediaType;
  seo: Seo;
  tags: TagType[];
};

export type { ArticleListResponseType, ArticleType };
