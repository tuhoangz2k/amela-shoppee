import { breakPonits } from 'constants/index';
import styled from 'styled-components';
export const CarouselLeftWrap = styled.div`
  width: 40%;
  & .carousel-container {
    overflow: hidden;
  }
  @media (max-width: ${breakPonits.md}px) {
    width: 100%;
  }
`;
