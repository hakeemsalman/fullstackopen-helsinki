import Part from "./Part";

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <div>
        total of: {parts.reduce((init, part) => init + part.exercises, 0)}{" "}
        exercise
      </div>
    </>
  );
};

export default Content;
