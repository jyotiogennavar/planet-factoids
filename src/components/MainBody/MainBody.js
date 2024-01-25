import React from 'react';
import styled from 'styled-components';


import PlanetStats from '../PlanetStats/PlanetStats';
import PlanetInfo from '../PlanetInfo/PlanetInfo';


function MainBody() {
  return (
    <Grid>
      <PlanetImg>
         <img src='./assets/planet-mercury.svg' alt=''></img>
      </PlanetImg>
      <PlanetInfo/>
      <PlanetStats/>
        
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




export default MainBody;
 