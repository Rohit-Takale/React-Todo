import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import {routeList} from "./Routes/RoutesList";

function App() {

  return (
    <div>
      <Router>
        <Routes>
          {routeList.map((item) => (
            <>
              <Route path={item.path} element={item.element} />
            </>
          ))}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
