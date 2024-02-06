import React from 'react';
import styled from 'styled-components';

const PageLayout = styled.div`
  margin: 10rem;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: 
    'planetImage planetImage planetInfo'
    'planetImage planetImage planetInfo'
    'planetStats planetStats planetStats';

  @media (max-width: 64rem) {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: 1fr;
    grid-template-areas:
      'planetImage'
      'planetInfo'
      'planetStats';
  }

  @media (max-width: 48rem) {
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: 1fr;
    grid-template-areas:
      'planetImage'
      'planetInfo'
      'planetStats';
  }
`;

export default PageLayout;
