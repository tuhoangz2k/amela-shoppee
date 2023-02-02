import styled from 'styled-components';
import { colors } from 'constants/index';
import { Avatar } from 'antd';
import { Typography } from 'antd';
const { Title, Paragraph, Text, Link } = Typography;

export const AccountNavCompWrap = styled.div`
  border: 1px solid ${colors.borderColor};
  height: 100%;
`;
export const AvatarWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;
export const ParagraphProfile = styled(Paragraph)`
  font-size: 16px;
  font-weight: 500;
  text-align: center;
`;
export const AvatarStyled = styled(Avatar)``;

export const NavigateAccount = styled.ul`
  padding-top: 1.5em;
  padding-bottom: 1.5em;
`;
export const NavigateItem = styled.li`
  & a {
    display: block;
    padding: 0.4em 1.6em;
    height: 100%;
  }
`;
