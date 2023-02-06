import React from 'react';
import type { TabsProps } from 'antd';
import { DetailPageWrap, ProductContainer, TabsStyled } from './DetailPage.styled';
import CarouselLeft from './components/CarouselLeft/CarouselLeft';
import InfoComponent from './components/InfoComponent/InfoComponent';
type Props = {};

const DetailPage = (props: Props) => {
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
        <CarouselLeft />
        <InfoComponent />
      </ProductContainer>
      <TabsStyled defaultActiveKey="1" items={items} onChange={onChange} />
    </DetailPageWrap>
  );
};
export default DetailPage;
