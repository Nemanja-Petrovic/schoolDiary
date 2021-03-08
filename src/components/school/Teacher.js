import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import EditMemberForm from "../form/EditMemberForm";
import { fetchData, editNewMember } from "../../api/GetData";

const Teacher = () => {
  const { teacherId } = useParams();
  const [teachers, setTeachers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchData(`teachers`, setTeachers);
  }, []);

  const newTeacher = editNewMember(history, teachers, teacherId, "teachers");

  return teachers ? (
    <EditMemberForm memberInfo={newTeacher} />
  ) : (
    <h2>Loading...</h2>
  );
};

export default Teacher;
