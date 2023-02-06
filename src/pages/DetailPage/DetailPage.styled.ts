import { breakPonits } from 'constants/index';
import { Tabs } from 'antd';

import styled from 'styled-components';
export const DetailPageWrap = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  @media (max-width: ${breakPonits.md}px) {
    padding-left: 15px;
    padding-right: 15px;
  }
`;
export const ProductContainer = styled.div`
  display: flex;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  gap: 30px;
  @media (max-width: ${breakPonits.md}px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const ProductDetailBottom = styled.div``;
export const TabsStyled = styled(Tabs)``;
