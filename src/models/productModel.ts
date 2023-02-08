type Images = {
  id: number | string;
  product_id: number | string;
  image: string;
  created_at: string;
  updated_at: string;
};
export interface IProductList {
  id?: string | number;
  name: string;
  price: number;
  description: string;
  quantity: number;
  created_at?: string;
  updated_at?: string;
  image?: Images;
  discount: number | null;
}
export interface IProduct {
  id?: string | number;
  imageUrl: string;
  name: string;
  price: number;
  description: string;
  quantity: number;
  created_at?: string;
  updated_at?: string;
  images?: Array<Images>;
  discount: number | null;
}
