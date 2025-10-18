import { useState } from "react";
import courseService from "../services/courses";

function NewCourse({ courses, setCourses }) {
  const [newCourseName, setNewCourseName] = useState("");

  const hanldeAddNewCourse = (e) => {
    e.preventDefault();
    const newCourse = { name: newCourseName, parts: [] };

    courseService.create(newCourse).then((newData) => {
      setCourses([...courses, newData]);
      setNewCourseName("");
    });
  };

  return (
    <form onSubmit={hanldeAddNewCourse}>
      <input
        type="text"
        placeholder="New Course"
        value={newCourseName}
        onChange={(e) => setNewCourseName(e.target.value)}
      />
      <input type="submit" value="Add Course" />
    </form>
  );
}

export default NewCourse;
