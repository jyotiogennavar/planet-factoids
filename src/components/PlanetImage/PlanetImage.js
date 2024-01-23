import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS, FONT_SIZES, FONT_FAMILY} from '../../constant';

const PlanetImage = ({ images, selectedImage }) => {
  const getImageSrc = () => {
    switch (selectedImage) {
      case 'planet':
        return images.planet;
      case 'internal':
        return images.internal;
      case 'geology':
        return images.geology;
      default:
        return '';
    }
  };

  const imageSrc = getImageSrc();

  if (!imageSrc) {
    return <div>No image selected</div>;
  }

  return (
    <img
      src={imageSrc}
      alt={`${selectedImage} view of ${images.name}`}
      style={{ width: '100%', maxWidth: '400px' }}
    />
  );
};


export default PlanetImage;
