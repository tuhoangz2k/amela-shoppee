import React, { useState } from 'react';
import {
  SearchInputWrap,
  CategoriesWrap,
  SearchStyled,
  Container,
  ButtonClose,
} from './SearchInput.styled';
import { TreeSelect } from 'antd';
import { routePaths, treeData } from 'constants/index';
import { CloseOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';
type Props = {
  onToggle: Function;
};

const SearchInput: React.FC<Props> = ({ onToggle }) => {
  const [value, setValue] = useState<string>('all');
  const navigated = useNavigate();
  const onChange = (newValue: string) => {
    setValue(newValue);
  };
  const [searchInputValue, setsearchInputValue] = useState('');
  const onSearch = (value: string) => {
    navigated({
      pathname: routePaths.products,
      search: queryString.stringify({ search: value }),
    });
  };
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
        <SearchStyled
          placeholder="Search"
          allowClear
          onSearch={onSearch}
          value={searchInputValue}
          onChange={(e) => setsearchInputValue(e.target.value)}
        />
        <ButtonClose onClick={() => onToggle(false)}>
          <CloseOutlined style={{ fontSize: 20 }} />
        </ButtonClose>
      </Container>
    </SearchInputWrap>
  );
};

export default SearchInput;
