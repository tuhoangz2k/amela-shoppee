import React from 'react';
import {
  NoOrderWrap,
  ContentWrap,
  ImageWrap,
  Image,
  TextContent,
} from './NoOrder.styled';
import imgs from 'assets/imgs';

type Props = {};

const NoOrder = (props: Props) => {
  return (
    <NoOrderWrap>
      <ContentWrap>
        <ContentWrap>
          <ImageWrap>
            <Image src={imgs.noOrder} />
          </ImageWrap>
          <TextContent>No orders yet</TextContent>
        </ContentWrap>
      </ContentWrap>
    </NoOrderWrap>
  );
};

export default NoOrder;
