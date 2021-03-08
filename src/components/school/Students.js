import React, { useContext } from "react";
import { SchoolContext } from "../../context/SchoolContext";
import { Wrapper } from "./Teachers";
import Table from "../Table";

const Students = () => {
  const { students } = useContext(SchoolContext);

  return (
    <Wrapper>
      <h2>Students: </h2>
      <Table info={students} label={"students"} />
    </Wrapper>
  );
};

export default Students;
