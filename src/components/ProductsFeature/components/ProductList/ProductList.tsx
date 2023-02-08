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
} from './ProductList.styled';
import { options, Test } from 'constants/index';
import CardProduct from 'components/CardProduct';
import { useQueryClient } from '@tanstack/react-query';

type Props = {
  products: Array<IProductList>;
  title: string;
  isLoading: boolean;
};

const ProductList: React.FC<Props> = ({ products = [], title, isLoading }) => {
  return (
    <ProductListWrap>
      <ProductListTitle>{title}</ProductListTitle>
      <FilterWrap>
        <SelectStyled defaultValue={'all'} options={options} />
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
        <PaginationStyled defaultCurrent={1} pageSize={10} total={70} />
      </ContainerStyled>
    </ProductListWrap>
  );
};

export default ProductList;
