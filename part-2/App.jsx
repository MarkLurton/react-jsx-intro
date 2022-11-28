const App = () => {
  return (
    <div>
      <Tweet name="Mark" message="Here is my first tweet!" />
      <Tweet name="Braden" message="Twitter is fun!" />
      <Tweet name="Norma" message="Beans!" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
