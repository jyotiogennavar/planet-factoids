// Header.js

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS, WEIGHTS, FONT_SIZES, FONT_FAMILY } from "../../constant";

// import iconHamburger from 'assets/icon-hamburger.svg';

const planetNames = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

const Header = ({focusColor}) => {
  return (
    <Navbar>
      <Logo to="/">The Planets</Logo>
      <Nav>
        {planetNames.map((planet) => (
          <NavLink key={planet} to={`/${planet.toLowerCase()}`} focusColor={focusColor}>
            {planet}
          </NavLink>
        ))}
      </Nav>
    </Navbar>
  );
}

const Navbar = styled.div`
  padding: 1.6rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${COLORS.gray[100]};
`;

const Logo = styled(Link)`
  font-family: ${FONT_FAMILY.fontHeading};
  font-size: ${FONT_SIZES[400]};
  color: ${COLORS.white};
  text-transform: uppercase;
  font-weight: ${WEIGHTS.normal};
  text-decoration: none;
`;

const Nav = styled.div`
  display: flex;
  gap: 2rem;
  flex-flow: row nowrap ;

  @media (max-width:768px) {
    flex-flow: column nowrap;
  } 
`;

const NavLink = styled(Link)`

  position: relative; /* Ensure proper stacking context for pseudo-element */
  font-family: "League Spartan", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[100]};
  font-weight: ${WEIGHTS.medium};
  font-size: ${FONT_SIZES[200]};
  overflow: hidden; /* Ensure pseudo-element doesn't overflow */

  &:hover {
    
    color: ${COLORS.white};
  }

   /* Create the underline effect using a pseudo-element */
   &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.25rem;
    background-color:  ${props => props.focusColor};; /* Use dynamic color */
    transform: scaleX(0); 
    transform-origin: bottom left;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1); /* Expand the underline on hover */
  }
`;

export default Header;
