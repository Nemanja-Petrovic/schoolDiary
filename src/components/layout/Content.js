import React from "react";
import SchoolContextProvider from "../../context/SchoolContext";
import SidebarNav from "../SidebarNav";
import SidebarRoutes from "../SidebarRoutes";
import AboutSchool from "./AboutSchool";
import styled from "styled-components/macro";

const ContentWrapper = styled.div`
  margin: 0 0 3rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  background: white;
  border-radius: 1rem;
  @media screen and (min-width: 768px) {
    margin: 3rem 0;
  }
`;

const Content = ({ isSidebarToggled }) => {
  return (
    <div>
      <ContentWrapper>
        <AboutSchool />
        {isSidebarToggled && (
          <SchoolContextProvider>
            <SidebarNav />
            <SidebarRoutes />
          </SchoolContextProvider>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Content;
