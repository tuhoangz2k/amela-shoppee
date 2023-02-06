import styled from 'styled-components';
import { Button, Checkbox, Form, Input } from 'antd';
import { breakPonits, colors } from 'constants/index';
export const RegisterformContainer = styled.div`
  width: 100%;
  border-radius: 0.5em;
  padding: 1.5em 0.75em;
  overflow: hidden;
`;

export const RegisterLabel = styled.h5`
  font-size: 20px;
  font-weight: 600;
  margin: 1em 0;
  text-align: center;
  color: white;
`;

export const FormStyled = styled(Form)`
  flex: 1;
  height: 100%;
  & .ant-form-item-explain-error {
    text-shadow: 1px 1px #000;
    font-weight: 700;
  }
  & .ant-form-item-required {
    text-shadow: 1px 1px #000;
    color: white !important;
  }
  & label {
    width: 120px !important;
  }
`;
export const LabelNavigate = styled.div`
  color: white;
  text-align: center;
  font-size: 16px;
  margin-bottom: 1em;
  text-shadow: 1px 1px #000;
  font-weight: 600;
  & a {
    color: ${colors.blue};
  }
  & a:hover {
    opacity: 0.7;
  }
`;
export const InputStyled = styled(Input)``;
export const CheckboxStyled = styled(Checkbox)``;
export const ButtonWrapperStyled = styled.div`
  display: flex;
`;
export const ButtonStyled = styled(Button)`
  margin-left: auto;
  margin-right: auto;
  width: 11.25em;
  border-radius: 40px;
  &:disabled {
    background: #1677ff !important;
    color: white !important;
    opacity: 0.8;
  }
  @media (max-width: ${breakPonits.sm}px) {
    width: 100%;
    height: 2.625em;
  }
  @media (min-width: ${breakPonits.sm}px) and (max-width: ${breakPonits.lg}px) {
    width: 12.5em;
    height: 2.5em;
  }
`;
