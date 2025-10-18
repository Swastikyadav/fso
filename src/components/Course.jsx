import Content from "./Content";
import Header from "./Header";
import Total from "./Total";
import courseService from "../services/courses";

const Course = ({ courses, setCourses }) => {
  const hanldeDelete = (id) => {
    const deletionConfirmed = confirm(
      "Are you sure, You want to delete this course?"
    );

    if (!deletionConfirmed) return;

    courseService
      .deleteById(id)
      .then(() => setCourses(courses.filter((course) => course.id !== id)));
  };

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <Header course={course} />
          <Content course={course} />
          <Total course={course} />
          <button
            style={{ border: "2px solid red" }}
            onClick={() => hanldeDelete(course.id)}
          >
            Delete {course.name}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Course;
