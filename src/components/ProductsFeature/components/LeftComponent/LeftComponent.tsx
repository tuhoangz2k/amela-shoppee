import React from 'react';
import {
  Img,
  LeftComponentWrap,
  SpecialImgWrap,
  SpecialInfor,
  SpecialItem,
  SpecialLabel,
  SpecialPrice,
  SpecialTitle,
  SpecialWrap,
} from './LeftComponent.styled';
import { Rate } from 'antd';
import { colors } from 'constants/index';
import imgs from 'assets/imgs';
type Props = {};
const specials = [
  {
    id: '123',
    label: 'hoodies',
    rating: 3,
    price: 120,
    url: 'https://opencart.mahardhi.com/MT01/adi/image/cache/catalog/product/10-80x109.jpg',
  },
  {
    id: '456',
    label: 'ladies shirt',
    rating: 4,
    price: 230,
    url: 'https://opencart.mahardhi.com/MT01/adi/image/cache/catalog/product/1-80x109.jpg',
  },
];

const LeftComponent = (props: Props) => {
  return (
    <LeftComponentWrap>
      <SpecialWrap>
        <SpecialTitle>SPECIALS</SpecialTitle>
        {specials.map((special) => (
          <SpecialItem key={special.id}>
            <SpecialImgWrap>
              <Img src={special.url} />
            </SpecialImgWrap>
            <SpecialInfor>
              <SpecialLabel>{special.label}</SpecialLabel>
              <Rate
                defaultValue={special.rating}
                disabled
                style={{ color: colors.blue, fontSize: 16 }}
              />
              <SpecialPrice>${special.price}</SpecialPrice>
            </SpecialInfor>
          </SpecialItem>
        ))}
      </SpecialWrap>
      <SpecialImgWrap>
        <Img src={imgs.leftbanner} />
      </SpecialImgWrap>
    </LeftComponentWrap>
  );
};

export default LeftComponent;
