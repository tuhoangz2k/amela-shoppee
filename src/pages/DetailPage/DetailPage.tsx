import React from 'react';
import { TabsProps, Skeleton } from 'antd';
import { DetailPageWrap, ProductContainer, TabsStyled } from './DetailPage.styled';
import CarouselLeft from './components/CarouselLeft/CarouselLeft';
import InfoComponent from './components/InfoComponent/InfoComponent';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import productsApi from 'api/productsApi';
type Props = {};

const DetailPage = (props: Props) => {
  const id = useParams().id;
  const productDetail = useQuery({
    queryKey: ['product', id],
    queryFn: (context) => {
      return productsApi.getProductById(context.queryKey[1] as string);
    },
    staleTime: 60 * 5 * 1000,
  });
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `DESCRIPTION`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: '2',
      label: `REVIEWS`,
      children: `Content of Tab Pane 2`,
    },
  ];
  const onChange = (key: string) => {
    console.log(key);
  };
  return (
    <DetailPageWrap>
      <ProductContainer>
        <CarouselLeft images={productDetail.data?.data?.images} />
        <InfoComponent product={productDetail.data?.data} />
      </ProductContainer>
      <TabsStyled defaultActiveKey="1" items={items} onChange={onChange} />
    </DetailPageWrap>
  );
};
export default DetailPage;
