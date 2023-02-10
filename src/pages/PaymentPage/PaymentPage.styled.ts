import styled from 'styled-components';
import { Form, Button, Input } from 'antd';
import { breakPonits, colors } from 'constants/index';
export const PaymentWrap = styled.div`
  display: flex;
  max-width: 85%;
  margin-left: auto;
  margin-right: auto;
  min-height: 600px;
  gap: 15px;
  @media (max-width: ${breakPonits.sm}px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const FormStyled = styled(Form)`
  flex: 1;
  margin-top: 120px;
`;
export const ButtonStyled = styled(Button)``;
export const InputStyled = styled(Input)``;
export const TotalWrap = styled.div`
  margin-top: 120px;
  width: 30%;
  @media (max-width: ${breakPonits.sm}px) {
    width: 100%;
    margin-top: 20px;
  }
`;
export const Total = styled.p`
  margin: unset;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  color: ${colors.blue};
  font-weight: 600px;
  font-size: 24px;
`;
export const TitleTotal = styled.p`
  margin: unset;
  background: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.blue};
  font-weight: 600px;
  font-size: 24px;
`;
