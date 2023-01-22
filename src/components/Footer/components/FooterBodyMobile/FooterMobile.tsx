import React from 'react';
import { Link } from 'react-router-dom';

import {
  FooterBodyMobile,
  MobileContainer,
  FooterContentMobile,
  FooterList,
  FooterInput,
  FooterButton,
} from './FooterMobile.styled';
import { DownOutlined } from '@ant-design/icons';

interface IsOpen {
  isOpenContact: boolean;
  isOpenInfo: boolean;
  isOpenExtras: boolean;
}

type Contact = {
  label: string;
  Icon: React.ReactNode;
};
type Props = {
  Contact: Array<Contact>;
  INFORMATION: Array<string>;
  EXTRAS: Array<string>;
  isOpen: IsOpen;
  setIsOpen: Function;
};

const FooterMobile: React.FC<Props> = ({
  Contact,
  INFORMATION,
  EXTRAS,
  isOpen,
  setIsOpen,
}) => {
  return (
    <FooterBodyMobile>
      <MobileContainer>
        <FooterContentMobile
          onClick={() =>
            setIsOpen((prev: any) => ({ ...prev, isOpenContact: !prev.isOpenContact }))
          }
        >
          CONTACT INFO
          <DownOutlined />
        </FooterContentMobile>
        <FooterList
          isOpen={isOpen.isOpenContact}
          className={isOpen.isOpenContact ? 'active' : ''}
        >
          {Contact.map((contact, index) => (
            <li key={`${contact.label}${index}`} style={{ margin: '0.75em 0' }}>
              {contact.Icon} <span>{contact.label}</span>
            </li>
          ))}
        </FooterList>
      </MobileContainer>
      <MobileContainer>
        <FooterContentMobile
          onClick={() =>
            setIsOpen((prev: any) => ({ ...prev, isOpenInfo: !prev.isOpenInfo }))
          }
        >
          INFORMATION
          <DownOutlined />
        </FooterContentMobile>
        <FooterList
          isOpen={isOpen.isOpenInfo}
          className={isOpen.isOpenInfo ? 'active' : ''}
        >
          {INFORMATION.map((info, index) => (
            <li key={`${info}${index}`} style={{ margin: '0.75em 0' }}>
              <Link to=".">{info}</Link>
            </li>
          ))}
        </FooterList>
      </MobileContainer>

      <MobileContainer>
        <FooterContentMobile
          onClick={() =>
            setIsOpen((prev: any) => ({ ...prev, isOpenExtras: !prev.isOpenExtras }))
          }
        >
          EXTRAS
          <DownOutlined />
        </FooterContentMobile>
        <FooterList
          isOpen={isOpen.isOpenExtras}
          className={isOpen.isOpenExtras ? 'active' : ''}
        >
          {EXTRAS.map((contact, index) => (
            <li key={`${contact}${index}`} style={{ margin: '0.75em 0' }}>
              <Link to=".">{contact}</Link>
            </li>
          ))}
        </FooterList>
      </MobileContainer>
      <MobileContainer>
        <FooterContentMobile>OUR NEWSLETTER</FooterContentMobile>
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
      </MobileContainer>
    </FooterBodyMobile>
  );
};

export default FooterMobile;
