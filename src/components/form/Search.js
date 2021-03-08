import React from "react";
import { FormInput } from "./Input";
import styled from "styled-components/macro";

const SearchInput = styled(FormInput)`
  margin: 0 auto 2rem;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

const Search = ({ label, onSearch, term }) => {
  return (
    <div>
      <SearchInput
        type={"text"}
        name={"search"}
        placeholder={`Search ${label} by name..`}
        onChange={onSearch}
        value={term}
      />
    </div>
  );
};

export default Search;
