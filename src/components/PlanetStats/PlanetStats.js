import React from "react";
import styled from "styled-components";

import { COLORS, WEIGHTS, FONT_SIZES, FONT_FAMILY } from "../../constant";

const PlanetStats = () => {
  return (
    <StyledPlanetStats>
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
    </StyledPlanetStats>
  );
};

const StyledPlanetStats = styled.div`
  /* border: 1px solid peachpuff; */

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.88rem;
  grid-area: planetStats;
`;
const StatWrapper = styled.div`
  border: 1px solid ${COLORS.gray[200]};
  border-radius: 2px;

  padding: 1.25rem 1.5rem;
  width: 16rem;
  height: 8rem;
`;

const StatName = styled.p`
  font-size: ${FONT_SIZES[100]};
  font-weight: ${WEIGHTS.medium};
  color: ${COLORS.gray[100]};
  letter-spacing: 0.0625rem;
  text-transform: uppercase;
`;
const StatNum = styled.p`
  font-family: ${FONT_FAMILY.fontHeading};
  font-size: ${FONT_SIZES[500]};
  font-weight: ${WEIGHTS.normal};
  text-transform: uppercase;
  color: ${COLORS.white};
`;

export default PlanetStats;
