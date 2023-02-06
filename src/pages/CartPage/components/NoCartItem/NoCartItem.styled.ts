import styled from 'styled-components';
import { Button } from 'antd';
import { colors } from 'constants/index';
export const NoCartWrap = styled.div`
  text-align: center;
`;
export const NoCartImg = styled.img`
  width: 20%;
`;
export const TextStyled = styled.p`
  font-size: 14px;
  color: #666;
  font-weight: 400;
`;
export const ButtonStyled = styled(Button)`
  width: 11.25em;
  background-color: ${colors.blue};
  color: white;
  font-weight: 500;
  height: 40px;
`;
