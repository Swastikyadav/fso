import { useEffect, useState } from "react";
import Course from "./components/Course";
import courseService from "./services/courses";
import NewCourse from "./components/NewCourse";

const App = () => {
  const [courses, setCourses] = useState([]);

  useEffect(function fetchCourses() {
    courseService.getAll().then((allCourses) => setCourses(allCourses));
  }, []);

  return (
    <div>
      <NewCourse courses={courses} setCourses={setCourses} />
      <Course courses={courses} setCourses={setCourses} />
    </div>
  );
};

export default App;
