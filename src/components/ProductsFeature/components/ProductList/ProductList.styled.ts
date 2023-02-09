import { colors, breakPonits } from 'constants/index';
import { Select, Pagination, Input, Button } from 'antd';

import styled from 'styled-components';
export const ProductListWrap = styled.div`
  flex: 1;
  color: ${colors.textColor};
`;

export const ProductListTitle = styled.h2`
  font-size: 28px;
`;
export const FilterWrap = styled.div`
  display: flex;
  padding: 15px 0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  margin-bottom: 30px;
`;

export const SelectStyled = styled(Select)`
  width: 120px;
  margin-left: auto;
`;
export const ContainerProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  @media (max-width: ${breakPonits.mdp}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${breakPonits.sm}px) {
    grid-template-columns: repeat(1, 1fr);
  }
  margin-bottom: 30px;
`;
export const PaginationStyled = styled(Pagination)``;

export const ContainerStyled = styled.div`
  text-align: center;
  margin-bottom: 30px;
`;
export const PriceSortWrap = styled.div`
  display: flex;
`;

export const InputStyled = styled(Input)``;
export const ButtonStyled = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
`;
