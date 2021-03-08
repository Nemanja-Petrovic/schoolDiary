import React from "react";
import styled from "styled-components/macro";

export const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1.2rem;
  display: block;
  border: 1px solid #ccc;
  font-family: inherit;
  font-size: 1rem;
  border-radius: 0.3rem;
  &:focus {
    background: #f7f7f7;
  }
  &:focus-visible {
    outline: none;
  }
`;
export const Label = styled.label`
  font-size: 1.2rem;
  flex: 0 1 23%;
  margin-bottom: 2rem;
  & span {
    display: inline-block;
    padding-bottom: 0.5rem;
  }
`;

const Input = ({
  name,
  label,
  type = "text",
  callback,
  placeholder,
  value,
  handleBlur,
}) => {
  return (
    <Label htmlFor={name}>
      <span>{label}</span>
      <FormInput
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={callback}
        value={value[name] || ""}
        onBlur={handleBlur}
        required
      />
    </Label>
  );
};

export default Input;
