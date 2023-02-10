export const PHONE_REGEX = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
export const IMAGE_BASE_LINK = 'http://vu.fresher.ameladev.click/uploads/';
export const options = [
  { value: 'asc', label: 'Asc' },
  { value: 'desc', label: 'Desc' },
];
export const Test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
export const treeData = [
  {
    title: 'All Categories',
    value: 'all',
  },
  {
    title: 'Women',
    value: 'women',
    children: [
      {
        title: 'Modest Fashion',
        value: 'modest',
        children: [
          {
            title: 'Baby Suit',
            value: 'baby',
          },
          {
            title: 'Jacket For Women',
            value: 'jacket',
          },
          {
            title: 'Jogers',
            value: 'jogers',
          },
          {
            title: 'T-shirt',
            value: 'tshirt',
          },
        ],
      },
      {
        title: 'Child',
        value: 'preppy',
      },
      {
        title: 'Office',
        value: 'w-office',
      },
      {
        title: 'Capree',
        value: 'capree',
      },
    ],
  },
  {
    title: 'Office Wear',
    value: 'office',
  },
  {
    title: 'products',
    value: 'products',
  },
];
