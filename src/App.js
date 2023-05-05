import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import ProtectetRoute from './Components/ProtectedRoute';
import Login from './Pages/Login';
import UnitConverter from './Pages/Unitconverter';
import Admin from './Pages/Admin';
import "./index.css";
import "./Style.css";


function App() {

  return (
    <Router>
      <Routes>

        <Route path="/" element={<UnitConverter />} />

        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<ProtectetRoute><Admin /></ProtectetRoute>} />

      </Routes>
    </Router>
  );
}

export default App;

/*<MyButton onClick={() => alert("Hello World")}>
        console
      </MyButton>
      <MyButton onClick={() => console.log("Hello World")}>
        alert
      </MyButton> */