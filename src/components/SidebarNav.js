import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

const Nav = styled.nav`
  text-transform: uppercase;
  transition: all 0.4s ease-in-out;
  color: white;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;
const NavList = styled.ul`
  transition: all 0.4s ease-in-out;
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 100%;
  border-radius: 0.4rem;
  overflow: hidden;
  background: #16a085;
  @media screen and (min-width: 768px) {
    flex-flow: row;
    width: 80%;
  }
  @media screen and (min-width: 1200px) {
    width: 55%;
  }
`;
const NavListItem = styled.li`
  width: 100%;
`;

const SidebarNav = () => {
  return (
    <Nav>
      <NavList>
        <NavListItem>
          <NavLink className="link" activeClassName="selected" to="/classes">
            Classes
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink className="link" activeClassName="selected" to="/students">
            Students
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink className="link" activeClassName="selected" to="/teachers">
            Teachers
          </NavLink>
        </NavListItem>
        <NavListItem>
          <NavLink className="link" activeClassName="selected" to="/form">
            Add members
          </NavLink>
        </NavListItem>
      </NavList>
    </Nav>
  );
};

export default SidebarNav;
