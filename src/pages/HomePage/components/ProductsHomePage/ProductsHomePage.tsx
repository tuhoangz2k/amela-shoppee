import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { breakPonits, Test } from 'constants/index';

import { Pagination, Navigation } from 'swiper';

import {
  ProductsHomePageWrap,
  TitleStyled,
  SwiperStyled,
  SwiperSlideStyled,
} from './ProductsHomePage.styled';

import CardProduct from 'components/CardProduct';
import useViewport from 'hooks/useViewport ';
import { IProductList } from 'models';
import SkeletonCard from 'components/SkeletonCard';
type Props = {
  title: string;
  products: Array<IProductList>;
  isLoading: boolean;
};

const ProductsHomePage: React.FC<Props> = ({ title, products = [], isLoading }) => {
  const widthDevice = useViewport().width;
  const [slide, setSlide] = useState(4);
  useEffect(() => {
    if (widthDevice >= breakPonits.lg) {
      setSlide(4);
    } else if (widthDevice < breakPonits.lg && widthDevice > breakPonits.md) {
      setSlide(3);
    } else {
      setSlide(1);
    }
  }, [widthDevice]);
  return (
    <ProductsHomePageWrap>
      <TitleStyled>{title}</TitleStyled>
      <SwiperStyled
        slidesPerView={slide}
        spaceBetween={15}
        modules={[Pagination, Navigation]}
        navigation={true}
        className="mySwiper"
      >
        {!isLoading &&
          products.map((product) => (
            <SwiperSlideStyled key={product.id}>
              <CardProduct product={product} />
            </SwiperSlideStyled>
          ))}
        {isLoading &&
          Test.map((product) => (
            <SwiperSlideStyled key={product}>
              <SkeletonCard />
            </SwiperSlideStyled>
          ))}
      </SwiperStyled>
    </ProductsHomePageWrap>
  );
};

export default ProductsHomePage;
