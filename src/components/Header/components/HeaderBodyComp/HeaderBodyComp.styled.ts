import styled from 'styled-components';
import { Dropdown } from 'antd';

export const HeaderBodyWrap = styled.div`
  padding: 0 25px;
  position: sticky;
  display: flex;
  left: 0;
  right: 0;
  top: 0;
  align-items: center;
  justify-content: space-between;
  height: 82px;
  background-color: white;
  z-index: 10;
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
  position: relative;
  padding: 10px 15px;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
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

export const QuantityCart = styled.span`
  position: absolute;
  right: 4px;
  top: 2px;
  width: 18px;
  height: 18px;
  background-color: #333333;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
`;

export const CustomDropdownContent = styled.nav`
  width: 200px;
`;

export const SearchWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100%;
`;
