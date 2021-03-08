import React from "react";
import styled from "styled-components/macro";

const AboutWrapper = styled.section`
  padding: 1rem;
  @media screen and (min-width: 768px) {
    padding: 2rem;
  }
`;

const AboutTitle = styled.h1`
  font-size: 1.8rem;
  margin-top: 0;
  color: var(--purple);
  @media screen and (min-width: 768px) {
    font-size: 2.2rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 2.5rem;
  }
`;

const AboutText = styled.p`
  margin: 1rem auto;
  max-width: 85ch;
  text-align: left;
  font-size: 1.2rem;
  line-height: 1.5;
  @media screen and (min-width: 768px) {
    text-align: justify;
  }
`;

const Link = styled.a`
  text-transform: uppercase;
  font-weight: 800;
  transition: all 0.4s ease-in-out;
  text-align: center;
  display: block;
  &:hover {
    color: var(--green-main);
  }
  @media screen and (min-width: 600px) {
    display: inline-block;
    padding-left: 1rem;
  }
`;

const AboutSchool = () => {
  return (
    <AboutWrapper>
      <AboutTitle>About the project</AboutTitle>

      <AboutText>
        App is utilising React hooks, router and context. We can create, read,
        update and delete all school members. For styling of components I have
        chosen styled-components as they give a lot of great features that
        remind me of SASS. Everything is packed in the same file and if needed
        components can be exported and extended keeping the code DRY. Every
        member can be searched by name. Client-side form validation.
      </AboutText>
      <AboutText>
        Technologies: JavaScript, React, Node.js, Express.js, Mongoose and CSS
      </AboutText>
      <AboutText>
        Code can be found on GitHub:
        <Link href="https://github.com/Nemanja-Petrovic/schoolDiary">
          Client side
        </Link>
        <Link href="https://github.com/Nemanja-Petrovic/schoolDiary-server">
          Server side
        </Link>
      </AboutText>
    </AboutWrapper>
  );
};

export default AboutSchool;
