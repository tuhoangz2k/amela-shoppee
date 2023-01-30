import styled from 'styled-components';
import { Dropdown } from 'antd';

export const HeaderBodyWrap = styled.div`
  padding: 0 25px;
  position: fixed;
  display: flex;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: space-between;
  height: 82px;
`;
export const LogoWrap = styled.div``;
export const Logo = styled.img`
  width: 75px;
  height: 44px;
`;
export const ItemsWrap = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  list-style: none;
`;
export const Item = styled.li`
  padding: 0 15px;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
`;
export const DropdownStyle = styled(Dropdown)`
  padding: 0 15px;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  & .ant-space-item {
    font-family: Montserrat, sans-serif;
  }
`;
export const CustomDropdownContent = styled.nav`
  width: 200px;
`;
