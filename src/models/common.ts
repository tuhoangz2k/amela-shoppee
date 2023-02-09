export interface IQueryParamsURL {
  page?: number | string;
  limit?: number | string;
  sort?: string;
  search?: string;
  time?: 'newest' | 'oldest';
  price?: 'asc' | 'desc';
}

export interface IPayment {
  name: string;
  phone: string;
  address: string;
  total_price: number;
  obj: [{ product_id: number | string; quantity: number }];
}
