import styled from 'styled-components';
import { colors } from 'constants/index';
import { Dropdown } from 'antd';
import { breakPonits } from 'constants/index';

export const HeaderTopWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5625em;
  height: 45px;
  background-color: white;
  border-bottom: 1px solid #eee;
`;
export const HeaderSupportLabel = styled.div``;
export const HeaderTopNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  @media (max-width: ${breakPonits.sm}px) {
    width: 100%;
  }
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  gap: 4px;
  font-size: 14px;
  height: 45px;
  cursor: ${(props: { hover?: boolean }) => props.hover && 'pointer'};
  transition: all linear 0.3s;
  &:hover {
    color: ${(props: { hover?: boolean }) => props.hover && colors.blue};
  }
  &.auth::before {
    content: '';
    display: block;
    position: absolute;
    right: -4px;
    top: 50%;
    height: 16px;
    width: 1px;
    background-color: #ccc;
    transform: translateY(-50%);
  }
  font-weight: 500;
`;
export const DropdownStyled = styled(Dropdown)``;
export const UserAvatarWrap = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  overflow: hidden;
`;
export const UserAvatar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
