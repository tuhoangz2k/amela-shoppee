import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typography } from 'antd';
import { colors } from 'constants/index';

const { Title } = Typography;

export const ProductsHomePageWrap = styled.div``;

export const SwiperStyled = styled(Swiper)``;
export const SwiperSlideStyled = styled(SwiperSlide)``;
export const TitleStyled = styled(Title)`
  text-align: center;
  font-size: 28px !important;
  margin: 0;
  margin-bottom: 30px;
  color: ${colors.textColor} !important;
`;
