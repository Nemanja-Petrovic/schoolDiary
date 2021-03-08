import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import EditMemberForm from "../form/EditMemberForm";
import { fetchData, editNewMember } from "../../api/GetData";

const Student = () => {
  const { studentId } = useParams();
  const [students, setStudents] = useState();
  const history = useHistory();

  useEffect(() => {
    fetchData(`students`, setStudents);
  }, []);

  const newStudent = editNewMember(history, students, studentId, "students");

  return students ? (
    <EditMemberForm memberInfo={newStudent} />
  ) : (
    <h3>Loading...</h3>
  );
};

export default Student;
