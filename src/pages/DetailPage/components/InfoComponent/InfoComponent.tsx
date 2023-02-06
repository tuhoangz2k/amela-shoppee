import React from 'react';
import {
  InfoComponentWrap,
  DescriptionsStyled,
  PriceText,
  QuantityWrapper,
  BuyProductWrap,
  QuantityInput,
  QuantityButton,
  AddToCartButton,
} from './InfoComponent.styled';
import { Rate } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
type Props = {};

const InfoComponent = (props: Props) => {
  return (
    <InfoComponentWrap>
      <DescriptionsStyled title="Product Info">
        <DescriptionsStyled.Item label="Name">Zhou Maomao</DescriptionsStyled.Item>
        <DescriptionsStyled.Item label="Rating">
          <Rate style={{ fontSize: 13 }} defaultValue={2} />
        </DescriptionsStyled.Item>
        <DescriptionsStyled.Item label="Shipping">Free Shipping</DescriptionsStyled.Item>
        <DescriptionsStyled.Item label="Price">
          <PriceText>$1112</PriceText>
        </DescriptionsStyled.Item>
      </DescriptionsStyled>
      <BuyProductWrap>
        <QuantityWrapper>
          <QuantityButton icon={<MinusOutlined />}></QuantityButton>
          <QuantityInput defaultValue={1} />
          <QuantityButton icon={<PlusOutlined />}></QuantityButton>
        </QuantityWrapper>
        <AddToCartButton shape="round">Add To Cart</AddToCartButton>
      </BuyProductWrap>
    </InfoComponentWrap>
  );
};

export default InfoComponent;
