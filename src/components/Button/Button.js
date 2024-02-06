import React from "react";
import styled from "styled-components";

import { COLORS, WEIGHTS, FONT_SIZES, FONT_FAMILY } from "../../constant";

function Button({ number, children, onClick, ...rest }) {
  return (
    <ButtonWrapper onClick={onClick} {...rest}>
      <ButtonNumber>{number}</ButtonNumber>
      {children}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button`
  display: flex;
  gap: 1.75rem;
  align-items: center;
  width: 20rem;
  border: 1px solid ${COLORS.gray[200]};
  border-radius: 2px;
  padding: 0.75rem 1.5rem;
  font-family: ${FONT_FAMILY.fontText};
  font-size: ${FONT_SIZES.button};
  color: ${COLORS.white};
  font-weight: ${WEIGHTS.medium};
  letter-spacing: 0.16069rem;
  text-transform: uppercase;
  cursor: pointer;
  background: none;
  transition: background-color 0.3s ease;
  margin-bottom: 1rem;

  &:hover {
    background-color: ${COLORS.gray[200]};
  }

  &:focus {
    background-color: ${COLORS.cyan};
  }
`;

const ButtonNumber = styled.span`
  margin-right: 0.5rem;
  font-size: ${FONT_SIZES.button};
  color: ${COLORS.gray[100]};
`;

export default Button;
