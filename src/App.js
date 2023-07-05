
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import RandomNumber from "./Pages/Random";
function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/RandomNumber" element={<RandomNumber />} />
            <Route exact path="/" element={<RandomNumber />} />

          </Routes>
        </div>
      </Router>
  );
}

export default App;
