import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const MobileMenuListWrap = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  width: 100%;
  max-height: 60vh;
  overflow-y: scroll;
  font-size: 14px;
`;
export const MobileItemLink = styled(Link)`
  display: flex;
  border-top: 1px solid #eee;
  height: 42px;
  align-items: center;
  font-weight: 600;
  align-items: center;
  justify-content: space-between;
  padding-left: ${(prop: { left?: number }) => (prop.left ? prop.left : 0)}px;
`;

export const ButtonShow = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 3em;
  margin-right: 10px;
`;
