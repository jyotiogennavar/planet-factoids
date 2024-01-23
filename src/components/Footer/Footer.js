import React from 'react';
import styled from 'styled-components';

import { COLORS, WEIGHTS, FONT_SIZES, FONT_FAMILY } from '../../constant';

function Footer() {
  return (
    <FooterBase>
      <SocialLinks>
        <p>You can find me here!  - </p>
        <Link href=''>Github</Link>
        <Link href=''>LinkedIn</Link>
      </SocialLinks>
      <Note>This fun project is made in React. Design by FrontendMentors</Note>
    </FooterBase>
  );
}

const baseTextStyle = `
  font-size: ${FONT_SIZES[200]};
  color: ${COLORS.gray[100]};
  font-weight: ${WEIGHTS.medium};
`;

const FooterBase = styled.div`
  font-family: ${FONT_FAMILY.fontText};
  display: flex ;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 2rem;
  color: ${COLORS.gray[100]};
  border-top: 1px solid ${COLORS.gray[100]};
`;

const SocialLinks = styled.div`
  ${baseTextStyle}
  display: flex;
  gap : 1rem;
`;

const Link = styled.a`
  text-decoration: none;
  color: ${COLORS.gray[100]};
`;

const Note = styled.p`
  ${baseTextStyle}
`;

export default Footer;
