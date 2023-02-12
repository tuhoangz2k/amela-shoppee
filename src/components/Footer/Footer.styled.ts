import styled from 'styled-components';
import { breakPonits, colors } from 'constants/index';

export const FooterWrapper = styled.footer`
  background: #252525;
  display: flex;
  flex-direction: column;
  color: white;
  padding-top: 2.5em;
`;
export const FooterBottom = styled.div`
  background-color: #0000001a;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 2.8125em;
  padding-right: 2.8125em;

  @media (max-width: ${breakPonits.lg - 1}px) {
    padding-left: 0.9375em;
    padding-right: 0.9375em;
    flex-direction: column;
  } ;
`;
export const TypographyStyled = styled.p`
  font-size: 14px;
  a {
    text-decoration: none;
    color: ${colors.blue};
  }
`;
export const SocialsContainer = styled.div`
  display: flex;
  gap: 10px;
`;
