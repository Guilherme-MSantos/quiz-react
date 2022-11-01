import "./Options.css";

const Options = ({ option, selectOption, answer }) => {
  return (
    <div className="option" onClick={() => selectOption()}>
      <p>{option}</p>
    </div>
  );
};

export default Options;
