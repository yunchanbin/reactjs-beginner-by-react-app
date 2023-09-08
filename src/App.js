import Button from "./Button";
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => {
    setValue((prev) => (prev = prev + 1));
    // console.log(counter);
  };

  console.log("render");
  return (
    <div>
      <h1>{counter}</h1>
      <Button onClick={onClick} text={"Continue"}></Button>
    </div>
  );
}

export default App;
