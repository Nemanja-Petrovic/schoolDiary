import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";

const HeaderWrapper = styled.header`
  grid-column: 1 / -1;
  position: relative;
`;

const HeaderContent = styled.div`
  @media screen and (min-width: 768px) {
    grid-column: 1 / -1;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 1200px) {
    padding: 1rem 5%;
  }
`;
const LogoTitle = styled.h2`
  font-size: 2rem;
  color: var(--purple);
  transition: all 0.4s ease-in-out;
  &:hover {
    color: var(--purple-lite);
  }
`;

const Header = ({ toggleSidebar }) => {
  return (
    <HeaderWrapper className="grid">
      <HeaderContent>
        <LogoTitle>
          <Link to="/">
            school<span>Diary</span>
          </Link>
        </LogoTitle>
        <Button callback={toggleSidebar}> Menu </Button>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
