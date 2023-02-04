import React from 'react';
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
  ContentContainer,
  TittleStyled,
  SubBanner,
  SubnavBannerList,
  SubnavBannerItem,
  ButtonStyled,
  SubImage,
  SectionStyled,
  BannerStyled,
  ParallaxBanner,
  BannerLogoWrap,
  DescriptionWrap,
  Text,
  BannerButton,
} from './HomePage.styled';
import { GlobalOutlined, RetweetOutlined, RocketOutlined } from '@ant-design/icons';
import ProductsHomePage from './components/ProductsHomePage';
import Feedback from './components/Feedback';
import { Customer } from './components/Feedback/FeedBack';
import Partners from './components/Partners';

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

const banner = [
  { imageSrc: imgs.subBanner1, label: 'Fashion' },
  { imageSrc: imgs.subBanner2, label: 'Accessories' },
  { imageSrc: imgs.subBanner3, label: 'Men' },
];
const produtcs = [
  { imageLink: imgs.casual, name: 'casual shirt', price: 1000, to: '/' },
  { imageLink: imgs.ladiesShirt, name: 'ladies shirt', price: 1000, to: '/' },
  { imageLink: imgs.tshirt, name: 'hoodies', price: 1000, to: '/' },
  { imageLink: imgs.fancytop, name: 'fancy top', price: 1000, to: '/' },
  { imageLink: imgs.shorttshirt, name: 'short shirt', price: 1000, to: '/' },
];
const customerFeedback: Array<Customer> = [
  {
    avatar: imgs.customer,
    author: 'RAMBO',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
  },
  {
    avatar: imgs.customer,
    author: 'RAMBO',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
  },
  {
    avatar: imgs.customer,
    author: 'RAMBO',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters',
  },
];
const partners = [
  { imgLink: imgs.partner1 },
  { imgLink: imgs.partner2 },
  { imgLink: imgs.partner3 },
  { imgLink: imgs.partner4 },
  { imgLink: imgs.partner5 },
  { imgLink: imgs.partner6 },
  { imgLink: imgs.partner7 },
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
            {banner.map((ban) => (
              <SubnavBannerItem key={ban.label}>
                <SubImage src={ban.imageSrc} />
                <ButtonStyled>{ban.label}</ButtonStyled>
              </SubnavBannerItem>
            ))}
          </SubnavBannerList>
        </ContentContainer>
      </SubBanner>
      <SectionStyled>
        <ContentContainer>
          <ProductsHomePage title="TOP PRODUCTS" products={produtcs} />
        </ContentContainer>
      </SectionStyled>
      <BannerStyled>
        <SectionStyled>
          <ContentContainer>
            <ParallaxBanner>
              <BannerLogoWrap>
                <img src={imgs.logoImg} alt="" />
              </BannerLogoWrap>
              <DescriptionWrap>
                <Text>
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </Text>
                <Text>
                  It was popularised in the 1960s with the release of Letraset sheets
                  containing Lorem Ipsum passages, like Aldus PageMaker including versions
                  of Lorem Ipsum.
                </Text>
              </DescriptionWrap>
              <BannerButton shape="round">Show Now</BannerButton>
            </ParallaxBanner>
          </ContentContainer>
        </SectionStyled>
      </BannerStyled>
      <SectionStyled>
        <ContentContainer>
          <ProductsHomePage title="LATEST" products={produtcs} />
        </ContentContainer>
      </SectionStyled>
      <SectionStyled bg="#f8f8f8;">
        <ContentContainer>
          <Feedback title="OUR CUSTOMER SAY" customers={customerFeedback} />
        </ContentContainer>
      </SectionStyled>
      <SectionStyled bg="#f8f8f8;">
        <ContentContainer>
          <Partners partners={partners} />
        </ContentContainer>
      </SectionStyled>
    </Wrapper>
  );
};

export default HomePage;
