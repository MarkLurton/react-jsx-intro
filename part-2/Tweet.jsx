const Tweet = (props) => {
  return (
    <ul>
      <h2>@{props.name}</h2>
      <p>
        <b>{props.message}</b>
      </p>
      <p>{new Date().toISOString().slice(0, 10)}</p>
    </ul>
  );
};

ReactDOM.render(<Tweet />, document.getElementById("root"));
