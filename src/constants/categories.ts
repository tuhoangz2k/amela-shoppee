import { routePaths } from './routerPath';
type item = {
  label: string;
  path: string;
  children?: any[];
  key?: string;
};
interface ICategory {
  key?: string;
  label: string;
  path: string;
  children?: Array<item>;
}
export const categories: Array<ICategory> = [
  { label: 'HOME', path: routePaths.home },
  {
    label: 'Men',
    path: routePaths.men,
    key: 'men',
    children: [
      { label: 'HOODIES', path: routePaths.hoodies },
      { label: 'CASUAL', path: routePaths.casual },
    ],
  },
  {
    label: 'WOMEN',
    path: routePaths.women,
    key: 'women',
    children: [
      {
        label: 'MODEST FASHION',
        path: routePaths.hoodies,
        key: 'modest',
        children: [
          { key: 'baby', label: 'BABY SUIT', path: routePaths.home },
          { key: 'jackets', label: 'JACKETS FOR WOMEN', path: routePaths.home },
          { key: 'jogers', label: 'JOGERS', path: routePaths.home },
          { key: 'tshirts', label: 'T-SHIRTS', path: routePaths.home },
        ],
      },
      { label: 'PREPPY STYLE', path: routePaths.hoodies },
      { label: 'CHILD', path: routePaths.hoodies },
      { label: 'OFFICE', path: routePaths.hoodies },
      { label: 'CAPREE', path: routePaths.hoodies },
    ],
  },
  { label: 'OFFICE WEAR', path: routePaths.hoodies },
  { label: 'PRODUCTS', path: routePaths.products },
];
