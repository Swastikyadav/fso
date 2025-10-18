function Content({ course: { parts } }) {
  return (
    <div>
      {parts.map((part) => {
        return (
          <Part key={part.name} part={part.name} exercises={part.exercises} />
        );
      })}
    </div>
  );
}

function Part({ part, exercises }) {
  return (
    <p>
      {part} {exercises}
    </p>
  );
}

export default Content;
