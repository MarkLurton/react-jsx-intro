const Person = (props) => {
  let voteTxt = props.age >= 18 ? "Please go vote!" : "You must be 18 to vote.";
  return (
    <div>
      <p>Learn some information about this person.</p>
      <p>
        Name: {props.name} Age: {props.age}
      </p>
      <h3>{voteTxt}</h3>
      <ul>
        {props.hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
    </div>
  );
};

ReactDOM.render(<Tweet />, document.getElementById("root"));
