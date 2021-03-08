import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { StyledButton } from "./Button";
import styled from "styled-components/macro";
import { tableInfo } from "./tableMetadata";
import Search from "./form/Search";

const TableWrapper = styled.div`
  overflow-x: auto;
`;

const StyledTable = styled.table`
  text-align: center;
  margin: 0 auto;
  thead {
    color: var(--green-main);
  }
  &,
  th,
  td,
  StudentTableData {
    border: 1px solid var(--green-main);
    border-collapse: collapse;
    padding: 0.3rem 0.6rem;
  }
  @media screen and (min-width: 768px) {
    &,
    th,
    td,
    StudentTableData {
      padding: 0.5rem 1.4rem;
    }
  }
`;

const FormButton = styled(StyledButton)`
  display: inline-block;
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  @media screen and (min-width: 768px) {
    padding: 0.9rem 1.5rem;
  }
`;

const StudentTableData = styled.td`
  display: ${({ student }) => student !== "students" && "none"};
  background: ${({ average }) =>
    average <= 2 ? "red" : average > 1 && average < 4 ? "yellow" : "green"};
`;

const Studentid = styled(StudentTableData)`
  background: transparent;
`;

const Table = ({ info, label }) => {
  const history = useHistory();
  const [searchTerm, setSarchTerm] = useState("");

  const handleSearch = (e) => {
    setSarchTerm(e.target.value);
  };

  const searchedMember =
    info &&
    info.filter((member) => {
      return member.firstName.toLowerCase().includes(searchTerm.toLowerCase());
    });

  return (
    <div>
      <TableWrapper>
        <Search label={label} term={searchTerm} onSearch={handleSearch} />
        {info ? (
          <StyledTable>
            <thead>
              <tr>
                {tableInfo[label].map((column, index) => {
                  return <th key={index}>{column.label}</th>;
                })}
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {searchedMember.map((item, i) => (
                <tr key={i}>
                  <Studentid student={label}>{i + 1}</Studentid>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.className}</td>
                  <StudentTableData student={label} average={item.average}>
                    {item.average}
                  </StudentTableData>
                  <td>
                    <FormButton
                      onClick={() => history.push(`/${label}/${item._id}`)}
                    >
                      Edit
                    </FormButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        ) : (
          <p>Loading...</p>
        )}
      </TableWrapper>
    </div>
  );
};

export default Table;
