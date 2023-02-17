import React, { useMemo, useState } from 'react';
import { Wrapper } from './ProductsFeature.styled';
import LeftComponent from './components/LeftComponent';
import ProductList from './components/ProductList';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import productsApi from 'api/productsApi';
import queryString from 'query-string';
import { options } from 'constants/index';

type Props = {};

const ProductsFeature: React.FC<Props> = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [priceSort, setPriceSort] = useState({ price_from: 1, price_to: 0 });
  const filter = useMemo(() => queryString.parse(location.search), [location.search]);

  const productListQuery = useQuery({
    queryKey: ['products', location.search],
    queryFn: () => productsApi.getProductList(filter),
  });

  const handleOnchange = (value: string) => {
    navigate({
      search: queryString.stringify({ ...filter, price: value, page: 1 }),
    });
  };

  const handleApplyPrice = () => {
    if (priceSort.price_from > priceSort.price_to) return;
    navigate({
      search: queryString.stringify({ ...filter, ...priceSort, page: 1 }),
    });
  };

  const handleChanPage = (page: number) => {
    navigate({
      search: queryString.stringify({ ...filter, page }),
    });
  };

  return (
    <Wrapper>
      <LeftComponent />
      <ProductList
        products={productListQuery.data?.data.data}
        total={productListQuery.data?.data.total}
        title="Products"
        isLoading={productListQuery.isLoading}
        options={options}
        priceSort={priceSort}
        setPriceSort={setPriceSort}
        handleOnchange={handleOnchange}
        handleApplyPrice={handleApplyPrice}
        handleChanPage={handleChanPage}
      />
    </Wrapper>
  );
};

export default ProductsFeature;
