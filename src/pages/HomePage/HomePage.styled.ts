import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typography, Button } from 'antd';

import { breakPonits, colors } from 'constants/index';
const { Text, Title } = Typography;

export const Wrapper = styled.div``;
export const SwiperStyled = styled(Swiper)`
  & .swiper-button-next,
  & .swiper-button-prev {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.7);
    align-items: center;
    justify-content: center;
    /* top: 50%;
    transform: translateY(-50%); */
  }
  & .swiper-button-next::after,
  & .swiper-button-prev::after {
    font-size: 24px;
    color: white;
  }
`;
export const SwiperSlideStyled = styled(SwiperSlide)`
  min-height: auto;
`;
export const BannerWrap = styled.div``;
export const BannerLink = styled(Link)`
  min-height: 300px;
  display: block;
  height: 100%;
`;
export const BannerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  min-height: 300px;
`;

export const PolicyWrap = styled.div`
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 3px rgb(0 0 0 / 6%);
  @media (max-width: ${breakPonits.sm}px) {
    padding: 20px 15px;
  }
`;
export const PolicyContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (min-width: ${breakPonits['2xl']}px) {
    max-width: 1140px;
  }
  @media (min-width: ${breakPonits.lg}px) {
    max-width: 980px;
  }
  @media (max-width: ${breakPonits.lg - 1}px) {
    width: 940px;
  }
  @media (min-width: ${breakPonits.md}px) {
    width: 750px;
  }
  @media (max-width: ${breakPonits.sm}px) {
    flex-direction: column;
    align-items: center;
  }
`;
export const PolicyItem = styled.div`
  display: flex;
  gap: 15px;
  width: 180px;
`;
export const PolicyInfo = styled.div``;
export const TextStyled = styled(Text)`
  display: block;
  font-size: 14;
  font-weight: ${(prop: { weight?: number; hover?: string }) =>
    prop.weight ? prop.weight : 400};
  cursor: ${(prop: { hover?: string; weight?: number }) => prop.hover && prop.hover};
`;

export const SubBanner = styled.section`
  padding-top: 80px;
  @media (max-width: ${breakPonits.md}px) {
    padding-top: 40px;
  }
`;

export const ProductTabWrap = styled.section`
  padding-top: 80px;
  @media (max-width: ${breakPonits.md}px) {
    padding-top: 40px;
  }
`;
export const ContentContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
`;

export const TittleStyled = styled(Title)`
  margin-top: 0;
  margin-bottom: 30px;
  font-size: 28px !important;
  text-align: center;
  color: ${colors.textColor} !important;
`;

export const SubnavBannerList = styled.div`
  display: flex;
  gap: 30px;
`;
export const SubnavBannerItem = styled.div`
  width: 33.3333%;
  position: relative;
  &:hover .overlay {
    display: block;
  }
`;
export const SubImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
export const ButtonStyled = styled(Button)`
  position: absolute;
  z-index: 4;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-radius: unset;
  width: 110px;
  height: 40px;
`;
export const BannerOverlay = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0, 7);
  height: 100%;
`;
