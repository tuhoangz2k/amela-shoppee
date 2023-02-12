import React, { useState } from 'react';
import {
  HomeOutlined,
  MobileOutlined,
  PhoneOutlined,
  MailOutlined,
  FacebookOutlined,
  TwitterOutlined,
  GooglePlusOutlined,
  YoutubeOutlined,
  DingdingOutlined,
} from '@ant-design/icons';
import {
  FooterWrapper,
  FooterBottom,
  TypographyStyled,
  SocialsContainer,
} from './Footer.styled';
import useViewport from 'hooks/useViewport ';
import { routePaths, colors } from 'constants/index';
import FooterMobile from './components/FooterBodyMobile';
import { Link } from 'react-router-dom';
import IconComp from 'components/IconComp';
import FooterBodyPC from './components/FooterBodyPC';
type Props = {};

const Contact = [
  { label: '71 Pennington Lane Vernon Rockville, CT 06066', Icon: <HomeOutlined /> },
  { label: '0123-456-789', Icon: <MobileOutlined /> },
  { label: '0123-456-789', Icon: <PhoneOutlined /> },
  { label: 'theme@demo.com', Icon: <MailOutlined /> },
];
const INFORMATION = [
  'About Us',
  'Delivery Information',
  'Privacy Policy',
  'Terms & Conditions',
  'Site Map',
];
const EXTRAS = ['Brands', 'Gift Certificates', 'Affiliate', 'Specials', 'Contact Us'];
const FooterSocials = [
  <FacebookOutlined />,
  <TwitterOutlined />,
  <GooglePlusOutlined />,
  <YoutubeOutlined />,
  <DingdingOutlined />,
];

const Footer: React.FC<Props> = ({}) => {
  const widthDevice = useViewport().width;
  const [isOpen, setIsOpen] = useState({
    isOpenContact: false,
    isOpenInfo: false,
    isOpenExtras: false,
  });
  return (
    <FooterWrapper>
      {widthDevice < 1024 ? (
        <FooterMobile
          Contact={Contact}
          INFORMATION={INFORMATION}
          EXTRAS={EXTRAS}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      ) : (
        <FooterBodyPC Contact={Contact} INFORMATION={INFORMATION} EXTRAS={EXTRAS} />
      )}
      <FooterBottom>
        <TypographyStyled>
          Powered By <Link to={routePaths.cart}>OpenCart</Link> Your Store © 2023
        </TypographyStyled>
        <SocialsContainer>
          {FooterSocials.map((icon, index) => (
            <IconComp Icon={icon} key={index} />
          ))}
        </SocialsContainer>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;
