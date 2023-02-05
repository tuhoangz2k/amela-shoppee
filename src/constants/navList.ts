import type { MenuProps } from 'antd';
import { routePaths } from 'constants/index';

interface navType {
  label: string;
  path: string;
  items?: MenuProps['items'];
}
export const navList: Array<navType> = [
  { label: 'Home', path: routePaths.home },

  {
    label: 'MEN',
    path: routePaths.men,
    items: [
      {
        key: 'hoodies',
        label: 'hoodies',
        onClick: ({ key }) => {
          console.log(key);
        },
      },
      {
        key: 'casual',
        label: 'casual',
        onClick: ({ key }) => {
          console.log(key);
        },
      },
    ],
  },
  {
    label: 'WOMEN',
    path: routePaths.women,
    items: [
      {
        key: 'modest',
        label: 'MODEST FASHION',
        onClick: ({ key }) => {
          console.log(key);
        },
        children: [
          { key: 'baby', label: 'BABY SUIT' },
          { key: 'jackets', label: 'JACKETS FOR WOMEN' },
          { key: 'jogers', label: 'JOGERS' },
          { key: 'tshirts', label: 'T-SHIRTS' },
        ],
      },
      {
        onClick: ({ key }) => {
          console.log(key);
        },
        key: 'preppy',
        label: 'PREPPY STYLE',
      },
      {
        key: 'child',
        label: 'CHILD',
      },
      {
        key: 'office',
        label: 'OFFICE',
      },
      {
        key: 'capree',
        label: 'CAPREE',
      },
    ],
  },
  { label: 'OFFICE WEAR', path: routePaths.home },
  { label: 'PRODUCTS', path: routePaths.products },
];
