import React from 'react';
import { WrapIcon } from './IconComp.styled';

type Props = {
  Icon: React.ReactNode;
  width?: number;
  height?: number;
};

const IconComp: React.FC<Props> = ({ Icon, width, height }) => {
  return (
    <WrapIcon width={width} height={height}>
      {Icon}
    </WrapIcon>
  );
};

export default IconComp;
