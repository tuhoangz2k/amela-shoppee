export interface OrderList {
  created_at: string;
  id: number | string;
  user_id: number | string;
  status: number;
  total_price: number;
  updated_at: string;
  key?: string;
}
