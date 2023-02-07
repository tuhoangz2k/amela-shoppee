import styled from 'styled-components';
import { Input, Button } from 'antd';
import { breakPonits, colors } from 'constants/index';
type TTitle = {
  color?: string;
  fontSize?: number;
  fontWeight?: number;
};
export const CartTitle = styled.h3``;
export const CartHasItemWrap = styled.div`
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  gap: 20px;
  padding-bottom: 60px;
  grid-template-columns: repeat(4, 1fr);
  & .pointer {
    cursor: pointer;
  }
  @media (max-width: ${breakPonits.sm}px) {
    width: 100%;
    display: block;
  }
`;
export const ProductCartWrap = styled.div`
  grid-column: 1 / span 3;
`;
export const CartInfoWrap = styled.div`
  grid-column: 4 / span 4;
  @media (max-width: ${breakPonits.sm}px) {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: hidden;
  }
`;

export const TitleColumn = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr 20px;
  gap: 10px;
  background-color: white;
  padding: 15px 10px;
`;

export const ProductItem = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 10px;

  grid-template-columns: 3fr 1fr 1fr 1fr 20px;
  padding: 15px 10px;
  background-color: white;
`;
export const ProductWrap = styled.div`
  display: flex;
  height: 90px;
`;
export const ProductInfoWrap = styled.div`
  display: flex;
`;
export const TitleInfo = styled.p`
  display: flex;
  align-items: center;

  color: ${(prop: TTitle) => prop.color};
  font-size: ${(prop: TTitle) => prop.fontSize || 16}px;
  font-weight: ${(prop: TTitle) => prop.fontWeight || 400}px;
`;
export const ProductInfo = styled.div`
  display: flex;
`;
export const Img = styled.img`
  height: 100%;
  object-fit: cover;
`;
export const WrapDeleteButton = styled.span`
  display: flex;
  align-items: center;
`;

export const QuantityWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const InputStyled = styled(Input)`
  flex: 1;
  padding-left: 0;
  padding-right: 0;

  text-align: center;
`;
export const QuantityButtonStyled = styled(Button)`
  width: 30px;
`;

export const WrapperBuy = styled.div`
  background-color: white;
  padding: 0.5rem;
  @media (max-width: ${breakPonits.sm}px) {
    display: flex;
    align-items: center;
    height: 50px !important;
    width: 50%;
  }
`;
export const TitleBuy = styled.p`
  display: flex;
  align-items: center;
  & span {
    color: ${colors.red};
    font-size: 22px;
    margin-left: auto;
  }
`;
export const BuyButton = styled(Button)`
  background-color: ${colors.red};
  width: 100% !important;
  color: white;
  margin-top: 20px;
  @media (max-width: ${breakPonits.sm}px) {
    margin: 0;
    display: block;
    width: unset !important;
    height: 50px !important;
    width: 50% !important;
    border-radius: unset;
  }
`;
export const Container = styled.div`
  @media (max-width: ${breakPonits.sm}px) {
    display: flex;
  }
`;
