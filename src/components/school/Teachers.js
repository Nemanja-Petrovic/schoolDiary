import React, { useContext } from "react";
import { SchoolContext } from "../../context/SchoolContext";
import Table from "../Table";
import styled from "styled-components/macro";

export const Wrapper = styled.section`
  padding: 1rem;
`;

const Teachers = () => {
  const { teachers } = useContext(SchoolContext);

  return (
    <Wrapper className="content">
      <h2>Teachers:</h2>
      <Table info={teachers} label="teachers" />
    </Wrapper>
  );
};

export default Teachers;
