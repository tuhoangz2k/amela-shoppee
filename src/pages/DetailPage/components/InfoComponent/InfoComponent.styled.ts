import styled from 'styled-components';
import { Descriptions, Input, Button } from 'antd';
import { breakPonits, colors } from 'constants/index';
export const InfoComponentWrap = styled.div`
  flex: 1;
`;

export const DescriptionsStyled = styled(Descriptions)`
  & .ant-descriptions-item-content {
    align-items: center !important;
  }
  & .ant-descriptions-item {
    width: 100% !important;
  }
  & .ant-descriptions-item-label {
    align-items: center !important;
  }
  @media (max-width: ${breakPonits.md}px) {
    text-align: center;
  }
`;
export const PriceText = styled.p`
  font-size: 26px;
  color: ${colors.blue};
  margin: 0;
`;
export const BuyProductWrap = styled.div`
  display: flex;
  @media (max-width: ${breakPonits.md}px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;
export const QuantityWrapper = styled.div`
  display: flex;
  width: 130px;
  @media (max-width: ${breakPonits.md}px) {
    width: 150px;
  }
`;
export const QuantityInput = styled(Input)`
  flex: 1;
  text-align: center;
  border-radius: unset;
  padding-left: 0;
  padding-right: 0;
`;
export const QuantityButton = styled(Button)`
  border-radius: unset;
  width: 40px !important;
  height: 40px;
`;
export const AddToCartButton = styled(Button)`
  background-color: ${colors.blue};
  height: 40px;
  width: 150px !important;
  color: white;
  transition: all linear 0.5s;
  margin-left: 10px;
  &:hover {
    background-color: #2b83d7;
    color: white !important;
  }
`;
