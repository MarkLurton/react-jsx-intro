const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Mark" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
