import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";

import { COLORS, WEIGHTS, FONT_SIZES, FONT_FAMILY } from "../../constant";

const PlanetInfo = ({ name, overview, structure, geology, onImageChange, images, focusColor }) => {
  const [currentView, setCurrentView] = useState("overview");

  const getContent = () => {
    switch (currentView) {
      case "overview":
        return overview;
      case "structure":
        return structure;
      case "geology":
        return geology;
      default:
        return overview; // Default to overview if currentView is not recognized
    }
  };

  const currentContent = getContent();

  return (
    <StyledPlanetInfo>
      <PlanetName>{name}</PlanetName>
      <PlanetContent>{currentContent.content}</PlanetContent>
      <Link>
        {" "}
        Wikipedia -<WikiLink href={currentContent.source}></WikiLink>
      </Link>
      <Button
        number="01"
        onClick={() => {
          setCurrentView("overview");
          onImageChange(images.planet);
        }}
        focusColor={focusColor} 
      >
        Overview
      </Button>
      <Button
        number="02"
        onClick={() => {
          setCurrentView("structure");
          onImageChange(images.internal); // Change the image to internal structure image when structure button is clicked
        }}
        focusColor={focusColor} 
      >
        Internal Structure
      </Button>
      <Button
        number="03"
        onClick={() => {
          setCurrentView("geology");
          onImageChange(images.geology); // Change the image to geology image when geology button is clicked
        }}
        focusColor={focusColor} 
      >
        Surface Geology
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
