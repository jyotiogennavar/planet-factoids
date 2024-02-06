import React from 'react';
import styled from 'styled-components';

// import { COLORS, WEIGHTS, FONT_SIZES, FONT_FAMILY} from '../../constant';

const PlanetImage = ({src, alt}) => {

  return (
    <ImgWrapper>
     <img src={src} alt={alt}></img>
    </ImgWrapper>
   
  );
};


const ImgWrapper = styled.div`
   grid-area: planetImage;
   margin: 1rem auto;

   img {
    margin: auto;
    height: auto;
    max-width: 100%;
    padding-top: 10%;
   }

`

export default PlanetImage;
