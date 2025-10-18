function Total({ course: { parts } }) {
  return (
    <p>Total of {parts.reduce((acc, cv) => cv.exercises + acc, 0)} exercises</p>
  );
}

export default Total;
