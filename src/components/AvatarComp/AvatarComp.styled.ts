import styled from 'styled-components';
type PropsStyled = {
  width: number;
  height: number;
};
export const ImageStyled = styled.img`
  width: ${(props: PropsStyled) => props.width}px;
  height: ${(props: PropsStyled) => props.height}px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;
