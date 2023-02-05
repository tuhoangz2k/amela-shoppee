import { breakPonits, colors } from 'constants/index';
import styled from 'styled-components';
export const LeftComponentWrap = styled.div`
  width: 25%;
  padding-left: 15px;
  padding-right: 15px;
  @media (max-width: ${breakPonits.mdp}px) {
    display: none;
  }
`;
export const SpecialWrap = styled.div``;
export const SpecialItem = styled.div`
  display: flex;
  gap: 12px;
  border-bottom: 1px solid #eeeeee;
  margin-top: 5px;
`;
export const SpecialInfor = styled.div``;
export const SpecialImgWrap = styled.div`
  margin-top: 30px;
  overflow: hidden;
  &:hover img {
    transform: scale(1.1);
  }
`;
export const Img = styled.img`
  width: 100%;
  max-width: 100%;
  object-fit: cover;
  transition: all linear 0.3s;
`;

export const SpecialTitle = styled.h5`
  font-size: 18px;
  color: ${colors.textColor};
  margin: 0 0 20px 0;
`;
export const SpecialLabel = styled.p`
  font-size: 14px;
  margin: 0 0 10px 0;
`;
export const SpecialPrice = styled.p`
  color: ${colors.blue};
  font-weight: 500;
  margin: 10px 0 10px 0;
`;
