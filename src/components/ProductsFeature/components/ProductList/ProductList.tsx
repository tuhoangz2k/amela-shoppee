import { IProductList } from 'models';
import React from 'react';
import SkeletonCard from 'components/SkeletonCard';
import {
  ProductListWrap,
  ProductListTitle,
  SelectStyled,
  FilterWrap,
  ContainerProducts,
  PaginationStyled,
  ContainerStyled,
  PriceSortWrap,
  InputStyled,
  ButtonStyled,
} from './ProductList.styled';
import { Test } from 'constants/index';
import CardProduct from 'components/CardProduct';
type Props = {
  products: Array<IProductList>;
  title: string;
  isLoading: boolean;
  total: number;
  options: Array<any>;
  handleOnchange: Function;
  setPriceSort: Function;
  priceSort: any;
  handleApplyPrice: Function;
  handleChanPage: Function;
};

const ProductList: React.FC<Props> = ({
  products = [],
  title,
  isLoading,
  total = 70,
  options = [],
  handleOnchange,
  priceSort,
  setPriceSort,
  handleApplyPrice,
  handleChanPage,
}) => {
  const handlePageOnchange = (page: number, size: number) => {
    handleChanPage(page);
  };
  return (
    <ProductListWrap>
      <ProductListTitle>{title}</ProductListTitle>
      <FilterWrap>
        <PriceSortWrap>
          <InputStyled
            placeholder="from"
            value={priceSort.price_from}
            onChange={(e) => setPriceSort({ ...priceSort, price_from: e.target.value })}
          />
          <InputStyled
            placeholder="to"
            value={priceSort.price_to}
            onChange={(e) => setPriceSort({ ...priceSort, price_to: e.target.value })}
          />
          <ButtonStyled type="primary" onClick={() => handleApplyPrice()}>
            Apply
          </ButtonStyled>
        </PriceSortWrap>
        <SelectStyled
          defaultValue={'asc'}
          options={options}
          onChange={(value) => handleOnchange(value)}
        />
      </FilterWrap>
      <ContainerStyled>
        <ContainerProducts>
          {!isLoading &&
            products?.map((product) => (
              <CardProduct key={product.id} product={product}></CardProduct>
            ))}
          {isLoading &&
            Test.map((item, index) => <SkeletonCard key={`${item}${index}`} />)}
        </ContainerProducts>
        <PaginationStyled
          defaultCurrent={1}
          pageSize={12}
          total={total}
          onChange={handlePageOnchange}
        />
      </ContainerStyled>
    </ProductListWrap>
  );
};

export default ProductList;
