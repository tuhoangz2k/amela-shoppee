import React from 'react';
import { Wrapper } from './ProductsFeature.styled';
import { IProductList } from 'models';
import LeftComponent from './components/LeftComponent';
import ProductList from './components/ProductList';

type Props = {
  products: Array<IProductList>;
};

const ProductsFeature: React.FC<Props> = ({ products }) => {
  return (
    <Wrapper>
      <LeftComponent />
      <ProductList products={products} title="Products" />
    </Wrapper>
  );
};

export default ProductsFeature;
