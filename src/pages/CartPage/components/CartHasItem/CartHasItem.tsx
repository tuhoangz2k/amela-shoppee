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
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { cartItemTotal, cartItemsSelector } from 'app/cartSelector';
import { Radio } from 'antd';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import {
  computedToCart,
  setQuantityToCartById,
  removeToCart,
} from 'pages/CartPage/cartSlice';

type Props = {};

const CartHasItem = (props: Props) => {
  const cartProducts = useAppSelector(cartItemsSelector);
  const dispatch = useAppDispatch();
  const total = useAppSelector(cartItemTotal);
  const [selectAll, setSelectAll] = useState(true);

  const handlePlusOrSubtract = (id: string | number, n: number) => {
    dispatch(computedToCart({ id: id, quantity: n }));
  };

  const handleSetQuantity = (id: string | number, n: number) => {
    if (0) return;
    dispatch(setQuantityToCartById({ id: id, quantity: n }));
  };

  const handleRemoveProduct = (id: string | number) => {
    dispatch(removeToCart({ id }));
  };

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
              <QuantityButtonStyled
                icon={<MinusOutlined />}
                onClick={() => {
                  if (product.quantity <= 1) return;
                  handlePlusOrSubtract(product.id, -1);
                }}
              />
              <InputStyled
                value={product.quantity}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  if (value <= 0 || !value) return;
                  handleSetQuantity(product.id, value);
                }}
              />
              <QuantityButtonStyled
                icon={<PlusOutlined />}
                onClick={() => handlePlusOrSubtract(product.id, +1)}
              />
            </QuantityWrap>
            <TitleInfo style={{ justifyContent: 'center' }}>
              ${product.price * product.quantity}
            </TitleInfo>
            <WrapDeleteButton onClick={() => handleRemoveProduct(product.id)}>
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
