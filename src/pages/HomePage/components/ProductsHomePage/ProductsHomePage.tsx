import React, { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { breakPonits } from 'constants/index';

import { Pagination, Navigation } from 'swiper';

import {
  ProductsHomePageWrap,
  TitleStyled,
  SwiperStyled,
  SwiperSlideStyled,
} from './ProductsHomePage.styled';

import CardProduct from 'components/CardProduct';
import useViewport from 'hooks/useViewport ';

type Product = {
  imageLink: string;
  name: string;
  price: number;
  to: string;
};
type Props = {
  title: string;
  products: Array<Product>;
};

const ProductsHomePage: React.FC<Props> = ({ title, products }) => {
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
        {products.map((product) => (
          <SwiperSlideStyled key={product.name}>
            <CardProduct product={product} />
          </SwiperSlideStyled>
        ))}
      </SwiperStyled>
    </ProductsHomePageWrap>
  );
};

export default ProductsHomePage;
