import { Card, Skeleton } from 'antd';

import styled from 'styled-components';
export const SkeletonCardWrap = styled.div`
  cursor: pointer;
  height: 400px;
`;
export const CardStyled = styled(Card)`
  width: 100% !important;
`;
export const SkeletonStyled = styled(Skeleton)`
  width: 100% !important;
`;
export const SkeletonImage = styled(Skeleton.Image)`
  width: 100% !important;
  height: 100% !important;
`;
