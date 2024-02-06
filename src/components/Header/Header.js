// Header.js

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; 
import { COLORS, WEIGHTS, FONT_SIZES, FONT_FAMILY } from "../../constant";


import iconHamburger from 'assets/icon-hamburger.svg';


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

function Header() {
  return (
    <Navbar>
      <Logo to="/">The Planets</Logo>
      <Nav>
        {planetNames.map((planet) => (
          <NavLink key={planet} to={`/${planet.toLowerCase()}`}>
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
`;

const NavLink = styled(Link)`
  font-family: "League Spartan", sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[100]};
  font-weight: ${WEIGHTS.medium};
  font-size: ${FONT_SIZES[200]};

  &:hover {
    border-top: 1rem solid ${COLORS};
    color: ${COLORS.white};
  }
`;

export default Header;
