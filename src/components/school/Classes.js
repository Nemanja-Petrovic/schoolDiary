import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Link } from "react-router-dom";
import { SchoolContext } from "../../context/SchoolContext";
import { Wrapper } from "./Teachers";

const Classes = () => {
  const { classes } = useContext(SchoolContext);

  return (
    <Wrapper>
      <h2>Classes: </h2>
      {classes &&
        classes.map((item) => (
          <div key={uuidv4()}>
            <h2>
              Class: <Link to={`/classes/${item._id}`}>{item.className}</Link>
            </h2>
          </div>
        ))}
    </Wrapper>
  );
};

export default Classes;
