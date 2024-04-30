import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home"; // Assuming 'home' is a component defined in './pages/home.js'
import Counter from "./pages/counter";
import Form from "./pages/form";
import Weather from "./pages/weather";
import LikeMyphoto from "./pages/LikePhoto";
import TestimonialsApp from "./pages/TestimonialsApp";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/form" element={<Form/>}/>
          <Route path="/weather" element={<Weather/>}/>
          <Route path="/likephoto" element={<LikeMyphoto/>} />
          <Route path="/testimonials" element={<TestimonialsApp/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
