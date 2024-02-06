import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";


import { COLORS, WEIGHTS, FONT_SIZES, FONT_FAMILY } from "../../constant";

const PlanetInfo = ({ name, overview, structure, geology }) => {
  const [currentView, setCurrentView] = useState("overview");

  return (
    <StyledPlanetInfo>
      <PlanetName>{name}</PlanetName>
      <PlanetContent>{overview.content}</PlanetContent>
      <Link> Wikipedia - 
       <WikiLink href={overview.source}></WikiLink>
      </Link>
      <Button number="01" onClick={() => setCurrentView("overview")}>
        Overview
      </Button>
      <Button number="02" onClick={() => setCurrentView("structure")}>
        Internal structure
      </Button>
      <Button number="03" onClick={() => setCurrentView("geology")}>
        Surface geology
      </Button>
    </StyledPlanetInfo>
  );
};

// Planet Information
const StyledPlanetInfo = styled.div`
  margin-bottom: 5rem;
  grid-area: planetInfo;
`;
const PlanetName = styled.h1`
  font-family: ${FONT_FAMILY.fontHeading};
  font-size: ${FONT_SIZES[600]};
  color: ${COLORS.white};
  font-weight: ${WEIGHTS.normal};
  text-transform: uppercase;
  margin-bottom: 1.44rem;
`;
const PlanetContent = styled.p`
  font-family: ${FONT_FAMILY.fontText};
  font-size: ${FONT_SIZES[200]};
  color: ${COLORS.white};
  margin-bottom: 1.5rem;
`;
const Link = styled.p`
  color: ${COLORS.gray[200]};
  font-family: ${FONT_FAMILY.fontText};
  font-size: ${FONT_SIZES[200]};
  margin-bottom: 2.5rem;
`;

const WikiLink = styled.a`
  text-decoration: none;
  font-family: ${FONT_FAMILY.fontText};
  font-size: ${FONT_SIZES[200]};
  color: ${COLORS.white};
  font-weight: ${WEIGHTS.medium};
`;

export default PlanetInfo;
