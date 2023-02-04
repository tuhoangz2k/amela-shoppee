import { colors } from 'constants/index';
import styled from 'styled-components';
import { Typography } from 'antd';

const { Text, Title } = Typography;

export const CardWrap = styled.div`
  cursor: pointer;
  color: ${colors.textColor};
  text-align: center;
`;
export const ImageWrap = styled.div``;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
export const TextStyled = styled(Text)`
  font-size: 16px !important;
  color: ${colors.blue} !important;
  font-weight: 600;
`;
export const TitleStyled = styled(Title)`
  margin-top: 5px;
  margin-bottom: 5px;
  font-size: 16px !important;
  color: ${colors.textColor} !important;
  font-weight: 400;
`;
