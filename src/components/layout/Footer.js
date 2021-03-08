import React from "react";
import styled from "styled-components/macro";

const FooterWrapper = styled.footer`
  grid-column: 1 / -1;
  color: white;
  background: var(--purple);
`;
const FooterContent = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-flow: row;
    justify-content: space-between;
  }
  @media screen and (min-width: 1200px) {
    padding: 0 5%;
    grid-column: 1 / -1;
  }
`;
const AllRightsReserved = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0 0.8rem;
  & h2 {
    margin: 0;
    margin-right: 2rem;
  }
  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;
const InfoList = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0;
  @media screen and (min-width: 768px) {
    margin: 1rem 0;
  }
`;
const InfoListItem = styled.li`
  margin-left: 0.5rem;
  @media screen and (min-width: 768px) {
    margin-left: 2rem;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper className="grid">
      <FooterContent>
        <AllRightsReserved>
          <h2>Logo</h2>All rights reserved &#169;
        </AllRightsReserved>
        <InfoList>
          <InfoListItem>Privacy policy</InfoListItem>
          <InfoListItem>Terms of service</InfoListItem>
        </InfoList>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
