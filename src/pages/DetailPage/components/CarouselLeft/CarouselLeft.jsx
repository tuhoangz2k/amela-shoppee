import React from 'react';
import { Carousel } from 'react-carousel-minimal';
import { CarouselLeftWrap } from './CarouselLeftWrap.styled';
const data = [
  {
    image:
      'https://opencart.mahardhi.com/MT01/adi/image/cache/catalog/product/1-1025x1400.jpg',
  },
  {
    image:
      'https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg',
  },
  {
    image:
      'https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg',
  },
  {
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg',
  },
];

const CarouselLeft = ({}) => {
  return (
    <CarouselLeftWrap>
      <Carousel
        data={data}
        width="100%"
        height="auto"
        radius="10px"
        slideNumber={true}
        captionPosition="bottom"
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="100px"
      />
    </CarouselLeftWrap>
  );
};

export default CarouselLeft;
