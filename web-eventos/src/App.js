import './App.css';
import Dashboard from './views/index';
import CrearEvento from './views/crear'
import {BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>} ></Route>
        <Route path="/Crear" element={<CrearEvento/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
