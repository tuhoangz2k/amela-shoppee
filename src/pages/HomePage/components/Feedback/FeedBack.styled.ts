import styled from 'styled-components';
import { colors, breakPonits } from 'constants/index';
export const FeedBackWrap = styled.div``;
export const CustomerAvatarWrap = styled.div`
  text-align: center;
  margin-top: 26px;
`;
export const ContenWrap = styled.div`
  width: 600px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #666;
  line-height: 24px;
  font-weight: 400;

  @media (max-width: ${breakPonits.sm}px) {
    width: 330px;
  }
`;
export const CustomerAvatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;
export const Description = styled.p``;
export const Author = styled.p`
  font-weight: 600;
  font-size: 15px;
  color: ${colors.textColor};
  padding-bottom: 20px;
`;
