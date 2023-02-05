import { IProductList } from 'models';
import React from 'react';
import {
  ProductListWrap,
  ProductListTitle,
  SelectStyled,
  FilterWrap,
  ContainerProducts,
  PaginationStyled,
  ContainerStyled,
} from './ProductList.styled';
import CardProduct from 'components/CardProduct';

type Props = {
  products: Array<IProductList>;
  title: string;
};

const options = [
  { value: 'all', label: 'All' },
  { value: 'asc', label: 'Asc' },
  { value: 'desc', label: 'Desc' },
];

const ProductList: React.FC<Props> = ({ products, title }) => {
  return (
    <ProductListWrap>
      <ProductListTitle>{title}</ProductListTitle>
      <FilterWrap>
        <SelectStyled defaultValue={'all'} options={options} />
      </FilterWrap>
      <ContainerStyled>
        <ContainerProducts>
          {products.map((product) => (
            <CardProduct key={product.id} product={product}></CardProduct>
          ))}
        </ContainerProducts>
        <PaginationStyled defaultCurrent={1} pageSize={10} total={70} />
      </ContainerStyled>
    </ProductListWrap>
  );
};

export default ProductList;
