import React, { useState } from 'react';
import {
  InfoComponentWrap,
  DescriptionsStyled,
  PriceText,
  QuantityWrapper,
  BuyProductWrap,
  QuantityInput,
  QuantityButton,
  AddToCartButton,
  OriginPrice,
  Discount,
} from './InfoComponent.styled';
import { Rate } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { IProduct } from 'models';
import { useAppDispatch } from 'hooks/reduxHooks';
import { addToCart } from 'pages/CartPage/cartSlice';
import { useSelector } from 'react-redux';
import { cartItemsSelector } from 'app/cartSelector';
type Props = {
  product: IProduct;
};

const InfoComponent: React.FC<Props> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const cartItems = useSelector(cartItemsSelector);
  const item =
    cartItems.length > 0 ? cartItems.find((item) => item?.id === product?.id) : 0;
  const CartQuantity = item ? item.cartQuantity : 0;
  const handleSetQuantity = (value: number) => {
    if (value === 0) return;
    if (value === -1 && quantity == 1) return;
    if (value > product.quantity) return;
    setQuantity(value);
  };
  const handleComputedQuantity = (value: number) => {
    if (value === 0) return;
    if (value === -1 && quantity == 1) return;
    setQuantity(quantity + value);
  };
  const handleAddtoCart = () => {
    if (CartQuantity && CartQuantity + quantity > product.quantity) return;
    dispatch(addToCart({ ...product, cartQuantity: quantity }));
  };
  return (
    <InfoComponentWrap>
      <DescriptionsStyled title="Product Info">
        <DescriptionsStyled.Item label="Name">{product?.name}</DescriptionsStyled.Item>
        <DescriptionsStyled.Item label="Rating">
          <Rate style={{ fontSize: 13 }} defaultValue={2} />
        </DescriptionsStyled.Item>
        <DescriptionsStyled.Item label="Shipping">Free Shipping</DescriptionsStyled.Item>
        <DescriptionsStyled.Item label="Quantity">
          {product?.quantity}
        </DescriptionsStyled.Item>
        <DescriptionsStyled.Item label="Price">
          <PriceText>
            {product?.discount ? (
              <>
                <OriginPrice>${product?.price}</OriginPrice>$
                {(product?.price - product?.price * (product?.discount / 100)).toFixed(2)}
              </>
            ) : (
              `$${product?.price}`
            )}

            <Discount>{product?.discount ? product?.discount : 0}%</Discount>
          </PriceText>
        </DescriptionsStyled.Item>
      </DescriptionsStyled>
      <BuyProductWrap>
        <QuantityWrapper>
          <QuantityButton
            onClick={() => handleComputedQuantity(-1)}
            icon={<MinusOutlined />}
          ></QuantityButton>
          <QuantityInput
            value={quantity}
            onChange={(e) => handleSetQuantity(Number(e.target.value))}
          />
          <QuantityButton
            onClick={() => {
              if (quantity === product?.quantity) return;
              if (CartQuantity && CartQuantity + quantity >= product.quantity) {
                return;
              }
              handleComputedQuantity(1);
            }}
            icon={<PlusOutlined />}
          ></QuantityButton>
        </QuantityWrapper>
        <AddToCartButton
          shape="round"
          onClick={handleAddtoCart}
          disabled={CartQuantity ? CartQuantity + quantity > product.quantity : false}
        >
          Add To Cart
        </AddToCartButton>
      </BuyProductWrap>
    </InfoComponentWrap>
  );
};

export default InfoComponent;
