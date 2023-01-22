import styled from 'styled-components';
import { Input, Button } from 'antd';
export const FooterBodyMobile = styled.div``;
export const FooterContentMobile = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.75em;
  transition: width 2s, height 2s, background-color 2s, transform 2s;
  font-weight: 700;
`;
export const FooterList = styled.ul`
  /* height: ${(prop: { isOpen: boolean }) => (prop.isOpen ? 'auto' : 0)}; */

  height: 0;
  overflow: hidden;
  transition: all linear 2s;
  list-style: none;
  padding-left: 0;
  color: #acacac;
  &.active {
    height: auto;
  }
  & a {
    color: unset;
    text-decoration: none;
    font-size: 14px;
  }
`;
export const FooterInput = styled(Input)`
  display: block;
  height: 44px;
  border-radius: 40px;
  margin-bottom: 1.5em;
`;

export const FooterButton = styled(Button)`
  background-color: #0e5ba4;
  width: 9.56em;
  height: 3.15em;
  border: none;
  color: white;
`;

export const MobileContainer = styled.div`
  padding-left: 0.9375em;
  padding-right: 0.9375em;
`;

export const FooterBodyPC = styled.div``;
