export interface IQueryParamsURL {
  page?: number | string;
  limit?: number | string;
  sort?: string;
  search?: string;
  time?: 'newest' | 'oldest';
}
