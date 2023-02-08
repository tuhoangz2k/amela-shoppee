import React from 'react';
import { CardWrap, ImageWrap, Img, TextStyled, TitleStyled } from './CardProduct.styled';
import { IProductList } from 'models';
import { IMAGE_BASE_LINK, routePaths } from 'constants/index';
import { Link } from 'react-router-dom';

type Props = {
  product: IProductList;
};

const CardProduct: React.FC<Props> = ({ product }) => {
  return (
    <CardWrap>
      <Link to={`${routePaths.products}/${product?.id}`}>
        <ImageWrap>
          <Img src={`${IMAGE_BASE_LINK}${product?.image?.image}`} />
        </ImageWrap>
      </Link>
      <TitleStyled level={5}>{product?.name}</TitleStyled>
      <TextStyled>$ {product?.price}</TextStyled>
    </CardWrap>
  );
};

export default CardProduct;
