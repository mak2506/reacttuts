import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./Layout";
import Tut1 from './tuts/tut1/Tut1';
import Tut2 from './tuts/tut2/Tut2';
import Home from './Home';

function App() {
  return (
    // <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path="/reacttuts" element={ <Home/> } />
            <Route path="/reacttuts/tut1" element={<Tut1 />} />
            <Route path="/reacttuts/tut2" element={<Tut2 />} />
        </Routes>
      </BrowserRouter>
    // </div>
   
  );
}

export default App;
