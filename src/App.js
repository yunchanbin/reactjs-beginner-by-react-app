import Button from "./Button";
import SearchInput from "./SearchInput";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setValue((prev) => (prev = prev + 1));
    // console.log(counter);
  };

  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("I run only once");
  }, []);
  useEffect(() => {
    console.log("I run when keyword changes");
  }, [keyword]);
  useEffect(() => {
    console.log("I run when counter changes");
  }, [counter]);
  return (
    <div>
      <SearchInput value={keyword} onChange={onChange}></SearchInput>
      <h1>{counter}</h1>
      <Button onClick={onClick} text={"Continue"}></Button>
    </div>
  );
}

export default App;
