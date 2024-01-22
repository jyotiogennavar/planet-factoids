import React from 'react';
import styled from 'styled-components';
import { COLORS, WEIGHTS, FONT_SIZES } from '../../constant';

const planetNames = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

function Header() {
  return (
    <Navbar>
      <Logo>The Planets</Logo>
      <Nav>
        {planetNames.map((planet) => (
          <NavLink key={planet} href={`/${planet.toLowerCase()}`}>
            {planet}
          </NavLink>
        ))}
      </Nav>
    </Navbar>
  )
}

const Navbar = styled.div`
 padding: 1.6rem 2rem;
 
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${COLORS.gray[100]};
`

const Logo = styled.p`
font-family: 'Antonio', sans-serif;
  font-size: ${FONT_SIZES[400]};
  color: ${COLORS.white};
  text-transform: uppercase;
  font-weight: ${WEIGHTS.normal};
`

const Nav = styled.div`
  display: flex;
  gap: 2rem;
 
`

const NavLink = styled.a`
  font-family: 'League Spartan', sans-serif;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[100]};
  font-weight: ${WEIGHTS.medium};
  font-size: ${FONT_SIZES[200]};

  &:hover {
    color: ${COLORS.white};
  }
`

export default Header;

/* <Nav>
<NavLink href='/mercury'>Mercury</NavLink>
<NavLink href='/venus'>venus</NavLink>
<NavLink href='/earth'>earth</NavLink>
<NavLink href='/mars'>mars</NavLink>
<NavLink href='/jupiter'>jupiter</NavLink>
<NavLink href='/saturn'>saturn</NavLink>
<NavLink href='/uranus'>uranus</NavLink>
<NavLink href='/neptune'>neptune</NavLink>
</Nav> */