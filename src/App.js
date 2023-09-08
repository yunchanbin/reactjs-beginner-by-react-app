import { useState, useEffect } from "react";

function Hello() {
  function byFn() {
    console.log("Bye :(");
  }
  function hiFn() {
    console.log("created :)");
  }

  useEffect(() => {
    hiFn();
    return byFn();
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
      {showing ? <Hello></Hello> : null}
    </div>
  );
}

export default App;
