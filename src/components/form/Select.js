import React from "react";
import styled from "styled-components/macro";
import { Label } from "./Input";

const FormSelect = styled.select`
  width: 100%;
  padding: 0.8rem 1.2rem;
  display: block;
  border: 1px solid #ccc;
  border-radius: 0.3rem;
`;

const Select = ({
  name,
  callback,
  label,
  list,
  isMember,
  defaultValue,
  handleBlur,
}) => {
  return (
    <Label htmlFor={name}>
      <span>{label}</span>

      <FormSelect name={name} onChange={callback} onBlur={handleBlur} required>
        {defaultValue ? (
          <option value={defaultValue}>{defaultValue}</option>
        ) : (
          <option></option>
        )}

        {isMember
          ? list.map((item, i) => {
              return (
                <option value={item} key={i}>
                  {item}
                </option>
              );
            })
          : list.map((item, i) => {
              return (
                <option value={item[name]} key={i}>
                  {item[name]}
                </option>
              );
            })}
      </FormSelect>
    </Label>
  );
};

export default Select;
