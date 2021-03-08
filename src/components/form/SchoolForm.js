import React, { useState, useContext } from "react";
import { SchoolContext } from "../../context/SchoolContext";
import { addMember } from "../../api/GetData";
import { useHistory } from "react-router-dom";
import { validate, formValidation } from "./FormValidation";
import { formFields } from "./formMetadata";

import Input from "./Input";
import Select from "./Select";
import { StyledButton } from "../Button";
import styled from "styled-components/macro";

export const FormWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    width: 65%;
  }
  @media screen and (min-width: 1200px) {
    width: 48%;
  }
`;

export const FormButton = styled(StyledButton)`
  display: inline-block;
  width: 60%;
  margin: 0.5rem auto 2.5rem;

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`;

export const Form = styled.form`
  margin: 3rem 0;
  display: flex;
  flex-flow: column;
`;

export const ErrorText = styled.p`
  font-size: 0.7rem;
  color: red;
  text-transform: uppercase;
  margin: -1.8rem 0 0.9rem;
  letter-spacing: 0.05rem;
`;

const SchoolForm = () => {
  const [member, setMember] = useState({});
  const [errors, setErrors] = useState({});
  const [visits, setVisits] = useState({});

  const history = useHistory();
  const { classes, addMemberView } = useContext(SchoolContext);

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const { [name]: removedError, ...rest } = errors;
    const error = validate[name](value);

    setErrors({ ...rest, ...(error && { [name]: visits[name] && error }) });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    const filteredVisited = Object.assign(visits);
    delete filteredVisited["label"];

    setVisits({ ...filteredVisited, [name]: true });
    setMember({ ...member, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validation = formValidation(member, errors, visits);

    setErrors(validation.errors);
    setVisits(validation.visits);

    const isFormValidated =
      !Object.values(validation.errors).length &&
      Object.values(validation.visits).length ===
        formFields[member.label].length &&
      Object.values(validation.visits).every((t) => t === true);

    if (isFormValidated) {
      const newMember = await addMember(member.label, member);
      addMemberView(newMember, newMember.label);
      setErrors({});
      setVisits({});
      history.push(member.label);
    }
  };

  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Select
          name={"label"}
          label={"Select a form: "}
          list={["teachers", "students"]}
          isMember={true}
          callback={handleChange}
          handleBlur={null}
        />
        {member.label && (
          <>
            <Input
              name={"firstName"}
              label={"First name:"}
              placeholder={"Your name.."}
              callback={handleChange}
              value={member}
              handleBlur={handleBlur}
            />
            {visits.firstName && errors.firstName && (
              <ErrorText>{visits.firstName && errors.firstName}</ErrorText>
            )}

            <Input
              name={"lastName"}
              label={"Last name:"}
              placeholder={"Your last name.."}
              callback={handleChange}
              value={member}
              handleBlur={handleBlur}
            />
            {visits.lastName && errors.lastName && (
              <ErrorText>{visits.lastName && errors.lastName}</ErrorText>
            )}

            {member.label === "students" && (
              <>
                <Input
                  name={"average"}
                  label={"Average: "}
                  placeholder={"Your average grade.."}
                  callback={handleChange}
                  value={member}
                  handleBlur={handleBlur}
                />
                {visits.average && errors.average && (
                  <ErrorText>{visits.average && errors.average}</ErrorText>
                )}
              </>
            )}

            <Select
              name={"className"}
              label={"Select a class: "}
              list={classes}
              callback={handleChange}
              handleBlur={handleBlur}
            />
            {visits.className && errors.className && (
              <ErrorText>{visits.className && errors.className}</ErrorText>
            )}

            <FormButton>Submit</FormButton>
          </>
        )}
      </Form>
    </FormWrapper>
  );
};

export default SchoolForm;
