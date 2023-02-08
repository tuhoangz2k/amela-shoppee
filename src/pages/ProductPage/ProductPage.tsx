import React from 'react';
import { Wrapper } from './ProductPage.styled';
import ProductsFeature from 'components/ProductsFeature';

type Props = {};

const ProductPage = (props: Props) => {
  return (
    <Wrapper>
      <ProductsFeature />
    </Wrapper>
  );
};

export default ProductPage;
