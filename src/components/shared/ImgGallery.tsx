import React from 'react';
import { Gallery, Image } from 'react-grid-gallery';

import { useWindowSize } from 'usehooks-ts';

interface Props {
  images: Image[];
}

const ImgGallery = ({ images }: Props) => {
  const screen = useWindowSize();
  const renderRowHeight = () => {
    if (screen.width < 768) {
      return 180;
    } else if (screen.width < 1024) {
      return 240;
    } else if (screen.width < 1280) {
      return 320;
    } else {
      return 400;
    }
  };

  return (
    <>
      <Gallery
        enableImageSelection={false}
        images={images}
        rowHeight={renderRowHeight()}
      ></Gallery>
    </>
  );
};

export default ImgGallery;
