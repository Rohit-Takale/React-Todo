import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home"; // Assuming 'home' is a component defined in './pages/home.js'
import Counter from "./pages/counter";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/counter" element={<Counter/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
