
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import RandomNumber from "./Pages/Random";
import PdfConverter from './Pages/PdfConverter';

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route exact path="/RandomNumber" element={<RandomNumber />} />
            <Route exact path="PdfConverter" element={<PdfConverter/>} />
            <Route exact path="/" element={<Pdf />} />

          </Routes>
        </div>
      </Router>
  );
}

export default App;
