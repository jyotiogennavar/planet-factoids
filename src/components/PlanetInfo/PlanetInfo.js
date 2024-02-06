import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import PlanetData from "../../data.json";

import { COLORS, WEIGHTS, FONT_SIZES, FONT_FAMILY } from "../../constant";

const PlanetInfo = () => {
  const [currentView, setCurrentView] = useState("overview");

  // const { name, overview, structure, geology } = PlanetData;

  // const renderContent = () => {
  //   switch (currentView) {
  //     case "overview":
  //       return overview;
  //     case "structure":
  //       return structure;
  //     case "geology":
  //       return geology;
  //     default:
  //       return overview; // Default to overview if the view is not recognized
  //   }
  // };

  // const { content, source } = renderContent();

  return (
    <StyledPlanetInfo>

      <PlanetContent>Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.</PlanetContent>
      <Link> Wikipedia - 
       <WikiLink href="https://en.wikipedia.org/wiki/Mercury_(planet)"></WikiLink>
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
