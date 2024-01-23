import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS, FONT_SIZES, FONT_FAMILY} from '../../constant';
import Button from '../Button/Button';


function MainBody() {
  return (
    <Grid>
      <PlanetImg>
         <img src='./assets/planet-mercury.svg'></img>
      </PlanetImg>

      <PlanetInformation>
        <PlanetName>Mercury</PlanetName>
        <PlanetContent>Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.</PlanetContent>
        <Link>Source : <WikiLink href=''> Wikipedia</WikiLink></Link>  
        <Button number="01" onClick >Overview</Button> 
        <Button number="02" onClick >Internal structure</Button> 
        <Button number="03" onClick >surface geology</Button> 
      </PlanetInformation> 

      <PlanetNum>
        <StatWrapper>
          <StatName>ROTATION TIME</StatName>
          <StatNum>58.6 days</StatNum>
        </StatWrapper>
        <StatWrapper>
          <StatName>REVOLUTION TIME</StatName>
          <StatNum>87.97 days</StatNum>
        </StatWrapper>
        <StatWrapper>
          <StatName>radius</StatName>
          <StatNum>2,439.7 km</StatNum>
        </StatWrapper>
        <StatWrapper>
          <StatName>AVERAGE TEMP.</StatName>
          <StatNum>430°c</StatNum>
        </StatWrapper>
      </PlanetNum>  
     
        
    </Grid>
  );
}

const Grid = styled.div`
  margin: 10rem;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);

  grid-template-areas: 
    'planetImage planetImage planetInfo'
    'planetImage planetImage planetInfo'
    'planetStats planetStats planetStats'
  ;

  @media (max-width: 64rem) {
    /* Tablet view */
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 1fr;
    grid-template-areas:
      'planetImage'
      'planetInfo'
      'planetStats';
  }

  @media (max-width: 48rem) {
    /* Mobile view */
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    grid-template-areas:
      'planetImage'
      'planetInfo'
      'planetStats';
  }
`

const PlanetImg = styled.div`
   /* border: 1px solid yellow; */
   grid-area: planetImage;
   margin-bottom: 5rem;

   img {
    margin: auto;
    height: auto;
    max-width: 100%;
    padding-top: 10%;
   }

`


// Planet Information
const PlanetInformation = styled.div`
  /* border: 1px solid green; */
  margin-bottom: 5rem;
  grid-area: planetInfo;
`
const PlanetName = styled.h1`
  font-family: ${FONT_FAMILY.fontHeading};
  font-size: ${FONT_SIZES[600]};
  color: ${COLORS.white};
  font-weight: ${WEIGHTS.normal};
  text-transform: uppercase;
  margin-bottom: 1.44rem;
`
const PlanetContent = styled.p`
  font-family: ${FONT_FAMILY.fontText};
  font-size: ${FONT_SIZES[200]};
  color: ${COLORS.white};
  margin-bottom: 1.5rem;
  `
  const Link = styled.p`
    color: ${COLORS.gray[200]};
    font-family: ${FONT_FAMILY.fontText};
    font-size: ${FONT_SIZES[200]};
    margin-bottom: 2.5rem;
  `

  const WikiLink = styled.a`
    text-decoration: none;
    font-family: ${FONT_FAMILY.fontText};
    font-size: ${FONT_SIZES[200]};
    color: ${COLORS.white};
    font-weight: ${WEIGHTS.medium};
  `

// Planet Stats
const PlanetNum = styled.div`
  /* border: 1px solid peachpuff; */

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.88rem;
  grid-area: planetStats;
`

const StatWrapper = styled.div`
  border: 1px solid ${COLORS.gray[200]};
  border-radius: 2px;

  padding: 1.25rem 1.5rem;
  width: 16rem;
  height: 8rem;
`

const StatName = styled.p`
  font-size: ${FONT_SIZES[100]};
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[100]};
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
`
const StatNum = styled.p`
  font-family: ${FONT_FAMILY.fontHeading};
  font-size: ${FONT_SIZES[500]};
  font-weight: ${WEIGHTS.normal};
  text-transform: uppercase;
  color: ${COLORS.white};
`
export default MainBody;
 