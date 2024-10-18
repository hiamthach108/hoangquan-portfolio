import React, { useState } from 'react';
import { Gallery, Image } from 'react-grid-gallery';
import Lightbox from 'yet-another-react-lightbox';

import { useWindowSize } from 'usehooks-ts';

interface Props {
  images: Image[];
}

const ImgGallery = ({ images }: Props) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

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
        onClick={(index) => {
          setSelectedImage(index);
          setLightboxOpen(true);
        }}
      ></Gallery>

      <Lightbox
        open={lightboxOpen}
        slides={images.map((image) => ({
          src: image.src,
          caption: image.caption,
        }))}
        index={selectedImage}
        close={() => setLightboxOpen(false)}
      />
    </>
  );
};

export default ImgGallery;
