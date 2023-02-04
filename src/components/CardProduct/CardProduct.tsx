import React from 'react';
import { CardWrap, ImageWrap, Img, TextStyled, TitleStyled } from './CardProduct.styled';

type Product = {
  imageLink: string;
  name: string;
  price: number;
  to: string;
};

type Props = {
  product: Product;
};

const CardProduct: React.FC<Props> = ({ product }) => {
  return (
    <CardWrap>
      <ImageWrap>
        <Img src={product.imageLink} />
      </ImageWrap>
      <TitleStyled level={5}>{product.name}</TitleStyled>
      <TextStyled>$ {product.price}</TextStyled>
    </CardWrap>
  );
};

export default CardProduct;
