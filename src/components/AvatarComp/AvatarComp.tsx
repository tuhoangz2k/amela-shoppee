import React from 'react';
import { ImageStyled } from './AvatarComp.styled';
type Props = {
  width: number;
  height: number;
  src: string;
};

const AvatarComp: React.FC<Props> = ({ width, height, src }) => {
  return <ImageStyled width={width} height={height} src={src} alt="anyway" />;
};

export default AvatarComp;
