import "./App.css";
import * as React from "react";
import { Routes, Route } from "react-router-dom";
import StartPage from "./Components/StartPage";
import Game from "./Components/Game";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<StartPage />}></Route>
        {/* <Route path="/FinalPage" element={<FinalPage />}></Route> */}
        <Route path="/Game" element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
