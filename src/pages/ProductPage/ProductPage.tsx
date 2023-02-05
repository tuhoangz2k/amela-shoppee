import React from 'react';
import { Wrapper } from './ProductPage.styled';
import ProductsFeature from 'components/ProductsFeature';
import { products } from 'constants/index';

type Props = {};

const ProductPage = (props: Props) => {
  return (
    <Wrapper>
      <ProductsFeature products={products} />
    </Wrapper>
  );
};

export default ProductPage;
