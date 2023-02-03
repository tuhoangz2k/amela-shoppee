import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, History, Autoplay } from 'swiper';
import { routePaths, colors } from 'constants/index';
import imgs from 'assets/imgs';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css';
import {
  Wrapper,
  SwiperStyled,
  SwiperSlideStyled,
  BannerWrap,
  BannerImg,
  BannerLink,
  PolicyWrap,
  PolicyItem,
  PolicyInfo,
  PolicyContainer,
  TextStyled,
  ProductTabWrap,
  ContentContainer,
  TittleStyled,
  SubBanner,
  SubnavBannerList,
  SubnavBannerItem,
  ButtonStyled,
  SubImage,
  BannerOverlay,
} from './HomePage.styled';
import { GlobalOutlined, RetweetOutlined, RocketOutlined } from '@ant-design/icons';

const policyList = [
  {
    label: 'FREE SHIPPING',
    describe: 'Order Over $99',
    key: 1,
    Icon: (
      <RocketOutlined
        style={{
          fontSize: 28,
          color: colors.blue,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    ),
  },
  {
    label: 'MONEY BACK',
    describe: '30 Days Return',
    key: 2,
    Icon: (
      <RetweetOutlined
        style={{
          fontSize: 28,
          color: colors.blue,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    ),
  },
  {
    label: '24/7 SUPPORT',
    describe: 'ODedicated Support',
    key: 3,
    Icon: (
      <GlobalOutlined
        style={{
          fontSize: 28,
          color: colors.blue,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />
    ),
  },
];

type Props = {};
const HomePage = (props: Props) => {
  return (
    <Wrapper>
      <BannerWrap>
        <SwiperStyled
          navigation={true}
          modules={[Navigation, History, Autoplay]}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
          slidesPerView={1}
          loop={true}
          spaceBetween={30}
        >
          <SwiperSlideStyled>
            <BannerLink to={routePaths.women}>
              <BannerImg src={imgs.bannerFashionFade} />
            </BannerLink>
          </SwiperSlideStyled>
          <SwiperSlideStyled>
            <BannerLink to={routePaths.men}>
              <BannerImg src={imgs.BannerMenShop} />
            </BannerLink>
          </SwiperSlideStyled>
        </SwiperStyled>
      </BannerWrap>
      <PolicyWrap>
        <PolicyContainer>
          {policyList.map((policy) => (
            <PolicyItem key={policy.key}>
              {policy.Icon}
              <PolicyInfo>
                <TextStyled weight={700} hover="pointer">
                  {policy.label}
                </TextStyled>
                <TextStyled>{policy.describe}</TextStyled>
              </PolicyInfo>
            </PolicyItem>
          ))}
        </PolicyContainer>
      </PolicyWrap>
      <SubBanner>
        <ContentContainer>
          <TittleStyled level={2}>SHOP BY BRAND</TittleStyled>
          <SubnavBannerList>
            <SubnavBannerItem>
              <SubImage src={imgs.subBanner1} />
              <ButtonStyled>Fashion</ButtonStyled>
              <BannerOverlay className="overlay" />
            </SubnavBannerItem>
          </SubnavBannerList>
        </ContentContainer>
      </SubBanner>
    </Wrapper>
  );
};

export default HomePage;
