import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BackpackList from "./pages/BackpackList";
import Backpack from "./pages/Backpack";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BackpackList />} />
        <Route path="/backpack/:id" element={<Backpack />} />
      </Routes>
    </Router>
  );
}

export default App;
