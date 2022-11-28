const App = () => {
  const markHobbies = ["weightlifting", "swimming", "tennis"];
  const bradenHobbies = ["calisthenics", "running", "video games"];
  const normaHobbies = ["music", "astros", "volunteering"];
  return (
    <ul>
      <Person name="Mark" age="28" hobbies={markHobbies} />
      <Person name="Braden" age="17" hobbies={bradenHobbies} />
      <Person name="Norma" age="26" hobbies={normaHobbies} />
    </ul>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
