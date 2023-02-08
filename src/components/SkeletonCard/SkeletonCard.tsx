import React from 'react';
import {
  SkeletonCardWrap,
  CardStyled,
  SkeletonStyled,
  SkeletonImage,
} from './SkeletonCard.styled';
const { Meta } = CardStyled;
type Props = {};

const SkeletonCard = (props: Props) => {
  return (
    <SkeletonCardWrap>
      <SkeletonImage active />
    </SkeletonCardWrap>
  );
};

export default SkeletonCard;
