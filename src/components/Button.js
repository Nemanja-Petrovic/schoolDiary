import React from "react";
import styled from "styled-components/macro";

export const StyledButton = styled.button`
  font-family: inherit;
  font-size: 1rem;
  background: var(--purple);
  border: none;
  border-radius: 2rem;
  padding: 0.9rem 1.5rem;
  color: white;
  display: none;
  box-shadow: 0 0.2rem 0.4rem rgba(0, 0, 0, 0.3);
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  &:hover {
    background: var(--purple-lite);
  }
  &:focus-visible {
    outline: none;
  }
  @media screen and (min-width: 768px) {
    display: inline-block;
  }
`;

const Button = ({ callback, children }) => {
  if (callback) {
    return <StyledButton onClick={() => callback()}>{children}</StyledButton>;
  }

  return <StyledButton>{children}</StyledButton>;
};

export default Button;
