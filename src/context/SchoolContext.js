import React, { createContext, useState, useEffect } from "react";
import { fetchData } from "../api/GetData";

export const SchoolContext = createContext();

const SchoolContextProvider = (props) => {
  const [classes, setClasses] = useState(null);
  const [students, setStudents] = useState(null);
  const [teachers, setTeachers] = useState(null);

  useEffect(() => fetchData("students", setStudents), []);
  useEffect(() => fetchData("teachers", setTeachers), []);
  useEffect(() => fetchData("classes", setClasses), []);

  const memberOption = {
    teachers: [setTeachers, teachers],
    students: [setStudents, students],
  };

  const addMemberView = (member, key) => {
    const [setMember, members] = memberOption[key];
    setMember([...members, member]);
  };

  const updateMemberView = (updatedMember, key) => {
    const [setMember, members] = memberOption[key];

    setMember(
      members.map((member) =>
        member._id === updatedMember._id ? updatedMember : member
      )
    );
  };

  const deleteMemberView = (id, key) => {
    const [setMember, members] = memberOption[key];
    setMember(members.filter((member) => member._id !== id));
  };

  return (
    <SchoolContext.Provider
      value={{
        classes,
        students,
        teachers,
        addMemberView,
        updateMemberView,
        deleteMemberView,
      }}
    >
      {props.children}
    </SchoolContext.Provider>
  );
};

export default SchoolContextProvider;
