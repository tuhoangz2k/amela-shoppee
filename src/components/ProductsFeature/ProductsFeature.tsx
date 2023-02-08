import React, { useState } from 'react';
import { Wrapper } from './ProductsFeature.styled';
import { IProductList } from 'models';
import LeftComponent from './components/LeftComponent';
import ProductList from './components/ProductList';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import productsApi from 'api/productsApi';
import queryString from 'query-string';

type Props = {};

const ProductsFeature: React.FC<Props> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const productListQuery = useQuery({
    queryKey: ['products', location.search],
    queryFn: () => productsApi.getProductList(queryString.parse(location.search)),
  });

  return (
    <Wrapper>
      <LeftComponent />
      <ProductList
        products={productListQuery.data?.data.data}
        title="Products"
        isLoading={productListQuery.isLoading}
      />
    </Wrapper>
  );
};

export default ProductsFeature;
