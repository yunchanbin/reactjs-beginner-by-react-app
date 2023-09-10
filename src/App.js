import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail.js";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={`/movie/:id`} element={<Detail></Detail>}></Route>
        <Route path={`/`} element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
