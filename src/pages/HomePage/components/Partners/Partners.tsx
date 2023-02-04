import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode } from 'swiper';
import { PartnerWrap, ImageWrap, ImageStyled } from './Partner.styled';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import useViewport from 'hooks/useViewport ';
import { breakPonits } from 'constants/index';
type Props = {
  partners: Array<{ imgLink: string }>;
};

const Partners: React.FC<Props> = ({ partners }) => {
  const widthDevice = useViewport().width;
  const [slide, setSlide] = useState(5);
  useEffect(() => {
    if (widthDevice >= breakPonits.lg) {
      setSlide(5);
    } else if (widthDevice <= breakPonits.sm) {
      setSlide(2);
    } else {
      setSlide(4);
    }
  }, [widthDevice]);
  return (
    <PartnerWrap>
      <Swiper
        slidesPerView={slide}
        spaceBetween={15}
        loop={true}
        freeMode={true}
        modules={[Pagination, FreeMode]}
        className="mySwiper"
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <ImageWrap>
              <ImageStyled src={partner.imgLink} />
            </ImageWrap>
          </SwiperSlide>
        ))}
      </Swiper>
    </PartnerWrap>
  );
};

export default Partners;
