import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { breakPonits } from 'constants/index';

export const NotFoundWrap = styled.div`
  position: relative;
  height: 100vh;
  background-color: #222;
`;
export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`;
export const ContainerTitle = styled.div`
  height: 158px;
  line-height: 153px;
`;
export const Title = styled.h1`
  color: #222;
  font-size: 220px;
  letter-spacing: 10px;
  margin: 0;
  font-weight: 700;
  text-shadow: 2px 2px 0 #c9c9c9, -2px -2px 0 #c9c9c9;
  @media (max-width: ${breakPonits.md}px) {
    font-size: 160px;
  }
`;
export const Light = styled.span`
  text-shadow: 2px 2px 0 #ffab00, -2px -2px 0 #ffab00, 0 0 8px #ff8700;
`;
export const Text = styled.p`
  color: #c9c9c9;
  font-size: 16px;
  font-weight: 400;
  margin-top: 20px;
  margin-bottom: 15px;
`;
export const LinkStyled = styled(Link)`
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  background: 0 0;
  color: #c9c9c9;
  border: 2px solid #c9c9c9;
  display: inline-block;
  padding: 10px 25px;
  font-weight: 700;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
`;
