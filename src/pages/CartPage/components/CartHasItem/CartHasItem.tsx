import React, { useState } from 'react';
import {
  CartHasItemWrap,
  CartInfoWrap,
  CartTitle,
  Img,
  ProductCartWrap,
  ProductInfo,
  ProductItem,
  ProductWrap,
  TitleColumn,
  ProductInfoWrap,
  TitleInfo,
  WrapDeleteButton,
  InputStyled,
  QuantityWrap,
  QuantityButtonStyled,
  WrapperBuy,
  BuyButton,
  TitleBuy,
  Container,
} from './CartHasItem.styled';
import { useAppSelector } from 'hooks/reduxHooks';
import { cartItemsSelector } from 'app/cartSelector';
import { Radio } from 'antd';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';

type Props = {};

const CartHasItem = (props: Props) => {
  const cartProducts = useAppSelector(cartItemsSelector);
  const total = 1000;
  const [selectAll, setSelectAll] = useState(true);
  console.log(cartProducts);
  return (
    <CartHasItemWrap>
      <CartTitle>Cart</CartTitle>
      <ProductCartWrap>
        <TitleColumn>
          <span>
            <Radio checked={selectAll} onClick={() => setSelectAll(!selectAll)}>
              Product
            </Radio>
          </span>
          <span>Unit Price</span>
          <span>Quantity</span>
          <span>Total Price</span>
          <DeleteOutlined className="pointer" />
        </TitleColumn>
        {cartProducts.map((product) => (
          <ProductItem key={product.id}>
            <ProductWrap>
              <Radio />
              <ProductInfoWrap>
                <Img src={product.imageLink} />
                <ProductInfo>
                  <TitleInfo color="black">{product.name}</TitleInfo>
                </ProductInfo>
              </ProductInfoWrap>
            </ProductWrap>
            <TitleInfo>${product.price}</TitleInfo>
            <QuantityWrap>
              <QuantityButtonStyled icon={<MinusOutlined />} />
              <InputStyled />
              <QuantityButtonStyled icon={<PlusOutlined />} />
            </QuantityWrap>
            <TitleInfo style={{ justifyContent: 'center' }}>
              ${product.price * product.quantity}
            </TitleInfo>
            <WrapDeleteButton>
              <DeleteOutlined className="pointer" />
            </WrapDeleteButton>
          </ProductItem>
        ))}
      </ProductCartWrap>
      <CartInfoWrap>
        <Container>
          <WrapperBuy>
            <TitleBuy>
              total: <span>${total}</span>
            </TitleBuy>
          </WrapperBuy>
          <BuyButton>Buy</BuyButton>
        </Container>
      </CartInfoWrap>
    </CartHasItemWrap>
  );
};

export default CartHasItem;
