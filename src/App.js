
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import RandomNumber from "./Pages/Random";
import Pdf from "./Pages/Pdf"

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/RandomNumber" element={<RandomNumber />} />
            <Route exact path="PdfConverter" element={<Pdf/>} />
            <Route exact path="/" element={<Pdf />} />

          </Routes>
        </div>
      </Router>
  );
}

export default App;
