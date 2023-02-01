import React, { useState } from 'react';
import {
  SearchInputWrap,
  CategoriesWrap,
  SearchStyled,
  Container,
  ButtonClose,
} from './SearchInput.styled';
import { TreeSelect } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
type Props = {
  onToggle: Function;
};

const treeData = [
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

const SearchInput: React.FC<Props> = ({ onToggle }) => {
  const [value, setValue] = useState<string>('all');
  const onChange = (newValue: string) => {
    console.log(newValue);
    setValue(newValue);
  };
  const onSearch = (value: string) => console.log(value);
  return (
    <SearchInputWrap>
      <Container>
        <CategoriesWrap>
          <TreeSelect
            value={value}
            dropdownStyle={{ maxHeight: 600, overflow: 'auto', minWidth: 200 }}
            treeData={treeData}
            placeholder="Please select"
            treeDefaultExpandAll
            onChange={onChange}
          />
        </CategoriesWrap>
        <SearchStyled placeholder="Search" allowClear onSearch={onSearch} />
        <ButtonClose onClick={() => onToggle(false)}>
          <CloseOutlined style={{ fontSize: 20 }} />
        </ButtonClose>
      </Container>
    </SearchInputWrap>
  );
};

export default SearchInput;
