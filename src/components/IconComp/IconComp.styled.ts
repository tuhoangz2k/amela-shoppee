import styled from 'styled-components';
type Props = {
  width?: number;
  height?: number;
};
export const WrapIcon = styled.div`
  width: ${(prop: Props) => prop.width || 40}px;
  height: ${(prop: Props) => prop.height || 40}px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #ffffff21;
  cursor: pointer;
  &:hover {
    background-color: #fff;
  }
`;
