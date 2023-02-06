import React from 'react';
import {
  FooterBodyWrap,
  ContentWrap,
  ContentLabel,
  FooterInput,
  FooterButton,
  TextStyled,
  TextOur,
} from './FooterBodyPC.styled';

type Contact = {
  label: string;
  Icon: React.ReactNode;
};
type Props = {
  Contact: Array<Contact>;
  INFORMATION: Array<string>;
  EXTRAS: Array<string>;
};

const FooterBodyPC: React.FC<Props> = ({ Contact, INFORMATION, EXTRAS }) => {
  return (
    <FooterBodyWrap>
      <ContentWrap span={2} start={2}>
        <ContentLabel>CONTACT INFO</ContentLabel>
        {Contact.map((contact, index) => (
          <TextStyled key={`${contact.label}${index}`}>
            {contact.Icon} <span>{contact.label}</span>
          </TextStyled>
        ))}
      </ContentWrap>

      <ContentWrap start={4}>
        <ContentLabel>INFORMATION</ContentLabel>
        {INFORMATION.map((contact, index) => (
          <TextStyled key={`${contact}${index}`}>
            <span>{contact}</span>
          </TextStyled>
        ))}
      </ContentWrap>

      <ContentWrap start={5}>
        <ContentLabel>EXTRAS</ContentLabel>
        {EXTRAS.map((contact, index) => (
          <TextStyled key={`${contact}${index}`}>
            <span>{contact}</span>
          </TextStyled>
        ))}
      </ContentWrap>
      <ContentWrap start={6} span={2}>
        <ContentLabel>OUR NEWSLETTER</ContentLabel>
        <TextOur>
          Sign up for our newsletter to get the latest news, announcements and special.
        </TextOur>
        <FooterInput placeholder="Enter Email Address" />
        <FooterButton shape="round">SUBSCRIBE</FooterButton>
      </ContentWrap>
    </FooterBodyWrap>
  );
};

export default FooterBodyPC;
