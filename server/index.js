import express from "express";
import cors from "cors";

const app = express();

let courses = [
  {
    name: "Half Stack application development",
    id: "1",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Redux",
        exercises: 14,
        id: 4,
      },
    ],
  },
  {
    name: "Node.js",
    id: "2",
    parts: [
      {
        name: "Routing",
        exercises: 5,
        id: 1,
      },
      {
        name: "Middlewares",
        exercises: 7,
        id: 2,
      },
    ],
  },
  {
    id: "fb2d",
    name: "ReactJs Frontend Course",
    parts: [],
  },
];

// middleware
// functions that can be used for handling request and response objects.

// logger middleware
const requestLogger = (request, response, next) => {
  console.log("method:", request.method);
  console.log("path:", request.path);
  console.log("body:", request.body);
  console.log("------");

  next();
};

app.use(cors());
app.use(express.json());
// takes the raw data from request object,
// and parses into js object and assigns it to request as new property body.
app.use(requestLogger);

app.get("/", (request, response) => {
  response.send("<h1>Hello World!</h1>");
});

app.get("/info", (request, response) => {
  response.send(
    `
      <h1>There are ${courses.length} in total.</h1>
      <h3>${new Date()}</h3>
    `
  );
});

app.get("/api/courses", (request, response) => {
  response.json(courses);
});

app.get("/api/courses/:id", (request, response) => {
  const id = request.params.id;
  const course = courses.find((course) => course.id === id);

  console.log(course);
  if (!course) {
    response.status(404).end();
    return;
  }

  response.json(course);
});

app.post("/api/courses", (request, response) => {
  const newCourse = request.body;

  if (!newCourse.name) {
    response.status(400);
    response
      .json({
        error: "Course name cannot be empty!",
      })
      .end();

    return;
  }
  if (courses.find((course) => course.name === newCourse.name)) {
    response.status(400);
    response
      .json({
        error: "Course name already exists!",
      })
      .end();

    return;
  }

  courses = [...courses, newCourse];
  response.json(courses);
});

app.delete("/api/courses/:id", (request, response) => {
  const id = request.params.id;
  courses = courses.filter((course) => course.id !== id);

  response.status(200).end();
});

// after routes middleware
const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "unknown endpoint" });
};

app.use(unknownEndpoint);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
