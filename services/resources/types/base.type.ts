type ResponseResult<T> = {
  data: T[];
};

type ObjectResponseResult<T> = {
  data: T;
};

type SingleMediaType = {
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
  manipulations: any[];
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

type TagType = {
  id: number;
  name: string;
  display_name: string;
  created_at: string;
  updated_at: string;
  pivot: {
    taggable_type: string;
    taggable_id: number;
    tag_id: number;
  };
};

type Seo = {
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
export type {
  ResponseResult,
  ObjectResponseResult,
  SingleMediaType,
  TagType,
  Seo,
};
