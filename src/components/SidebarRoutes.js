import React from "react";
import { Switch, Route } from "react-router-dom";
import Teachers from "./school/Teachers";
import ClassDetails from "./school/ClassDetails";
import Classes from "./school/Classes";
import Students from "./school/Students";
import SchoolForm from "./form/SchoolForm";
import Student from "./school/Student";
import Teacher from "./school/Teacher";
import PageNotFound from "./PageNotFound";
import Home from "./layout/Home";

const SidebarRoutes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/students">
          <Students name={"students"} />
        </Route>
        <Route path="/students/:studentId">
          <Student name={"students"} />
        </Route>
        <Route exact path="/teachers">
          <Teachers name={"teachers"} />
        </Route>
        <Route path="/teachers/:teacherId">
          <Teacher name={"teachers"} />
        </Route>
        <Route exact path="/classes">
          <Classes />
        </Route>
        <Route path="/classes/:classId">
          <ClassDetails />
        </Route>
        <Route path="/form">
          <SchoolForm />
        </Route>
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};

export default SidebarRoutes;
