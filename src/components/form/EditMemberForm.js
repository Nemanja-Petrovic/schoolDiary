import React, { useContext, useState, useEffect } from "react";
import { SchoolContext } from "../../context/SchoolContext";
import { addMember, deleteMember } from "../../api/GetData";
import { validate, formValidation } from "./FormValidation";

import Input from "./Input";
import Select from "./Select";
import { StyledButton } from "../Button";
import styled from "styled-components/macro";
import { FormWrapper, Form, ErrorText } from "./SchoolForm";

const EditFormButton = styled(StyledButton)`
  width: 30%;
  display: inline-block;
`;
const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const EditMemberForm = ({ memberInfo }) => {
  const { updateMemberView, deleteMemberView, classes } = useContext(
    SchoolContext
  );
  const { history, member, id, groupName } = memberInfo;

  const [editMember, setEditMember] = useState({});
  const [errors, setErrors] = useState({});
  const [visits, setVisits] = useState({});

  useEffect(() => setEditMember(member), [member]);

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const { [name]: removedError, ...rest } = errors;
    const error = validate[name](value);

    setErrors({ ...rest, ...(error && { [name]: visits[name] && error }) });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVisits({ ...visits, [name]: true });
    setEditMember({ ...editMember, [name]: value });
  };

  const onSave = async (e) => {
    e.preventDefault();

    const validation = formValidation(editMember, errors, visits);

    setErrors(validation.errors);
    setVisits(validation.visits);

    const isFormValidated =
      !Object.values(validation.errors).length &&
      Object.values(validation.visits).every((t) => t === true);

    if (isFormValidated) {
      const updatedMember = await addMember(groupName, editMember);
      updateMemberView(updatedMember, groupName);
      setEditMember({});
      history.goBack();
      setErrors({});
      setVisits({});
    }
  };

  const onCancel = (e) => {
    e.preventDefault();
    setEditMember({});
    history.goBack();
  };

  const onDelete = (e) => {
    e.preventDefault();
    deleteMemberView(id, groupName);
    deleteMember(groupName, id);
    setEditMember({});
    history.goBack();
  };

  return (
    <FormWrapper>
      {classes && editMember && (
        <Form onReset={onCancel}>
          <Input
            name={"firstName"}
            label={"First name: "}
            callback={handleChange}
            value={editMember}
            handleBlur={handleBlur}
          />
          {visits.firstName && errors.firstName && (
            <ErrorText>{visits.firstName && errors.firstName}</ErrorText>
          )}
          <Input
            name={"lastName"}
            label={"Last name: "}
            callback={handleChange}
            value={editMember}
            handleBlur={handleBlur}
          />
          {visits.lastName && errors.lastName && (
            <ErrorText>{visits.lastName && errors.lastName}</ErrorText>
          )}

          {groupName === "students" && (
            <Input
              name={"average"}
              label={"Average: "}
              callback={handleChange}
              value={editMember}
              handleBlur={handleBlur}
            />
          )}
          {visits.average && errors.average && (
            <ErrorText>{visits.average && errors.average}</ErrorText>
          )}

          <Select
            name={"className"}
            label={"Select a class: "}
            list={classes}
            callback={handleChange}
            defaultValue={editMember.className}
            handleBlur={handleBlur}
          />
          {visits.className && errors.className && (
            <ErrorText>{visits.className && errors.className}</ErrorText>
          )}
          <ButtonBox>
            <EditFormButton onClick={onSave}>Save</EditFormButton>
            <EditFormButton type="reset">Cancle</EditFormButton>
            <EditFormButton onClick={onDelete}>Delete</EditFormButton>
          </ButtonBox>
        </Form>
      )}
    </FormWrapper>
  );
};

export default EditMemberForm;
