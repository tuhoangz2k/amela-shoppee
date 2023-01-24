import styled from 'styled-components';
import Images from 'assets/imgs';
import { breakPonits } from 'constants/index';
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  background: center/cover url(${Images.authImg}) no-repeat;
  font-size: 16px;
`;
export const FormWrapper = styled.div`
  width: 40%;
  padding-top: 1.25em;
  display: flex;
  align-items: center;
  @media (max-width: ${breakPonits.sm}px) {
    width: 95%;
  }
  @media (min-width: ${breakPonits.sm + 1}px) and (max-width: ${breakPonits.lg - 1}px) {
    width: 60%;
  }
`;
