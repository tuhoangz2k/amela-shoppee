import React from 'react';
import {
  FooterBodyWrap,
  ContentWrap,
  ContentLabel,
  FooterInput,
  FooterButton,
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
          <p
            key={`${contact.label}${index}`}
            style={{ margin: '0 0 1em 0', fontSize: 14 }}
          >
            {contact.Icon} <span>{contact.label}</span>
          </p>
        ))}
      </ContentWrap>

      <ContentWrap start={4}>
        <ContentLabel>INFORMATION</ContentLabel>
        {INFORMATION.map((contact, index) => (
          <p key={`${contact}${index}`} style={{ margin: '0 0 1em 0', fontSize: 14 }}>
            <span>{contact}</span>
          </p>
        ))}
      </ContentWrap>

      <ContentWrap start={5}>
        <ContentLabel>EXTRAS</ContentLabel>
        {EXTRAS.map((contact, index) => (
          <p key={`${contact}${index}`} style={{ margin: '0 0 1em 0', fontSize: 14 }}>
            <span>{contact}</span>
          </p>
        ))}
      </ContentWrap>
      <ContentWrap start={6} span={2}>
        <ContentLabel>OUR NEWSLETTER</ContentLabel>
        <li
          style={{
            margin: '0.75em 0',
            listStyle: 'none',
            color: '#acacac',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '24px',
          }}
        >
          Sign up for our newsletter to get the latest news, announcements and special.
        </li>
        <FooterInput placeholder="Enter Email Address" />
        <FooterButton shape="round">SUBSCRIBE</FooterButton>
      </ContentWrap>
    </FooterBodyWrap>
  );
};

export default FooterBodyPC;
