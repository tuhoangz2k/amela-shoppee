import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import {
  Author,
  CustomerAvatar,
  CustomerAvatarWrap,
  Description,
  FeedBackWrap,
  ContenWrap,
} from './FeedBack.styled';
import { TitleStyled } from '../ProductsHomePage/ProductsHomePage.styled';
export type Customer = {
  avatar: string;
  description: string;
  author: string;
};
type Props = {
  title: string;
  customers: Array<Customer>;
};

const FeedBack: React.FC<Props> = ({ title, customers }) => {
  return (
    <FeedBackWrap>
      <TitleStyled>{title}</TitleStyled>
      <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
        {customers.map((customer, index) => (
          <SwiperSlide key={index}>
            <ContenWrap>
              <CustomerAvatarWrap>
                <CustomerAvatar src={customer.avatar} />
              </CustomerAvatarWrap>
              <Description>"{customer.description}"</Description>
              <Author>-{customer.author}</Author>
            </ContenWrap>
          </SwiperSlide>
        ))}
      </Swiper>
    </FeedBackWrap>
  );
};

export default FeedBack;
