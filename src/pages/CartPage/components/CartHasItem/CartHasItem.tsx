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
  CheckboxStyled,
} from './CartHasItem.styled';
import { useAppDispatch, useAppSelector } from 'hooks/reduxHooks';
import { cartItemTotal, cartItemsSelector, isChekedAll } from 'app/cartSelector';
import { DeleteOutlined, MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import {
  computedToCart,
  setQuantityToCartById,
  removeToCart,
  changeCartChecked,
  toggleCheckedAll,
  removeAll,
} from 'pages/CartPage/cartSlice';
import { IMAGE_BASE_LINK, routePaths } from 'constants/index';
import { useNavigate } from 'react-router-dom';
import ModalComp from 'components/ModalComp';
import { useQueryClient } from '@tanstack/react-query';

type Props = {};

const CartHasItem = (props: Props) => {
  const cartProducts = useAppSelector(cartItemsSelector);
  const navigated = useNavigate();
  const queryClient = useQueryClient();
  const isLogin = !!queryClient.getQueryData(['user']);
  const dispatch = useAppDispatch();
  const total = useAppSelector(cartItemTotal);
  const isCheckAll = useAppSelector(isChekedAll);
  const [open, setOpen] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);

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
  const handleOnchange = (id: number | string) => {
    dispatch(changeCartChecked(id));
  };
  const handleToggleAll = (value: boolean) => {
    dispatch(toggleCheckedAll(value));
  };
  const handleRemoveAll = () => {
    dispatch(removeAll());
  };

  const handleBuy = () => {
    if (!isLogin) {
      setOpenLoginModal(true);
    } else {
      navigated(routePaths.payment);
    }
  };

  return (
    <>
      <CartHasItemWrap>
        <CartTitle>Cart</CartTitle>
        <ProductCartWrap>
          <TitleColumn>
            <span>
              <CheckboxStyled
                checked={isCheckAll}
                onChange={() => handleToggleAll(!isCheckAll)}
              >
                Product
              </CheckboxStyled>
            </span>
            <span>Unit Price</span>
            <span>Quantity</span>
            <span>Total Price</span>
            <DeleteOutlined className="pointer" onClick={() => setOpen(true)} />
          </TitleColumn>
          {cartProducts.map((product, index) => (
            <ProductItem key={product.id}>
              <ProductWrap>
                <CheckboxStyled
                  onChange={(e) => handleOnchange(product.id as number)}
                  checked={product.isCkecked}
                />
                <ProductInfoWrap>
                  <Img src={`${IMAGE_BASE_LINK}${product?.images?.[0]?.['image']}`} />
                  <ProductInfo>
                    <TitleInfo color="black">{product.name}</TitleInfo>
                  </ProductInfo>
                </ProductInfoWrap>
              </ProductWrap>
              <TitleInfo>
                $
                {product.discount
                  ? (product?.price - product?.price * (product?.discount / 100)).toFixed(
                      1,
                    )
                  : product.price}
              </TitleInfo>
              <QuantityWrap>
                <QuantityButtonStyled
                  icon={<MinusOutlined />}
                  onClick={() => {
                    if (product.cartQuantity <= 1) return;
                    handlePlusOrSubtract(product.id as string, -1);
                  }}
                />
                <InputStyled
                  value={product.cartQuantity}
                  onChange={(e) => {
                    const value = Number(e.target.value);
                    if (value <= 0 || !value) return;
                    if (value > product.quantity) return;

                    handleSetQuantity(product.id as string, value);
                  }}
                />
                <QuantityButtonStyled
                  icon={<PlusOutlined />}
                  onClick={() => {
                    if (product.cartQuantity === product.quantity) return;
                    handlePlusOrSubtract(product.id as string, +1);
                  }}
                />
              </QuantityWrap>
              <TitleInfo style={{ justifyContent: 'center' }}>
                $
                {product.discount
                  ? product.cartQuantity *
                    (product.price - (product.price * product.discount) / 100)
                  : product.price * product.cartQuantity}
              </TitleInfo>
              <WrapDeleteButton onClick={() => handleRemoveProduct(product.id as string)}>
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
            <BuyButton onClick={handleBuy}>Buy</BuyButton>
          </Container>
        </CartInfoWrap>
      </CartHasItemWrap>
      <ModalComp
        open={open}
        handleOk={handleRemoveAll}
        setOpen={setOpen}
        title="Delete Product Item"
        content="Do you want to delete all products"
        submitLabel="Delete All"
      />
      <ModalComp
        open={openLoginModal}
        handleOk={() => navigated(routePaths.login)}
        setOpen={setOpenLoginModal}
        title="Warning"
        content="You need to login to buy products"
        submitLabel="Login"
      />
    </>
  );
};

export default CartHasItem;
