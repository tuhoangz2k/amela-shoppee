export interface IProductList {
  id?: number | string;
  imageLink: string;
  name: string;
  price: number;
  to: string;
}
type Images = {
  id: number | string;
  product_id: number | string;
  image: string;
  created_at: string;
  updated_at: string;
};
export interface IProduct {
  imageUrl: string;
  name: string;
  price: number;
  description: string;
  quantity?: number;
  created_at?: string;
  updated_at?: string;
  images?: Array<Images>;
}
