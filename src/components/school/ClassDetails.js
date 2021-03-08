import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { SchoolContext } from "../../context/SchoolContext";
import Table from "../Table";
import ClassChart from "./ClassChart";
import { Wrapper } from "./Teachers";

const ClassDetails = () => {
  const { classes, students, teachers } = useContext(SchoolContext);

  const { classId } = useParams();
  const className = classes && classes.find((item) => item._id === classId);
  const teacher = teachers && teachers.find((item) => item.classId === classId);
  const studentList =
    students && students.filter((item) => item.classId === classId);

  return (
    <Wrapper>
      {classes && students && teachers ? (
        <>
          <h2>Class: {className.className}</h2>
          {teacher ? (
            <h2>
              Class elder: {teacher.firstName} {teacher.lastName}
            </h2>
          ) : (
            <p>This class has no class elder</p>
          )}

          <div>
            <h2>Students: </h2>
            {studentList.length === 0 ? (
              <p>This class has no students</p>
            ) : (
              <>
                <Table info={studentList} label="students" />
                <ClassChart studentList={studentList} />
              </>
            )}
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Wrapper>
  );
};

export default ClassDetails;
