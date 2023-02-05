import { breakPonits } from 'constants/index';
import styled from 'styled-components';
export const Wrapper = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 88%;
  @media (max-width: ${breakPonits.md}px) {
    width: 100%;
  }
`;
