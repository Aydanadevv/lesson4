import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Main from "./components/Main";
import Registr from "./components/Registr";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/header" element={<Main />} />
        <Route path="/registr" element={<Registr />} />
      </Routes>
    </div>
  );
}

export default App;
