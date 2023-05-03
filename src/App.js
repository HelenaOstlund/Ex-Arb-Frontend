import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import ProtectetRoute from './Components/ProtectedRoute';
import Login from './Pages/Login';
//import MyButton from './Components/MyButton';
import UnitInput from './Pages/UnitInput';
import UnitConverter from './Pages/UnitConverter';
import Admin from './Pages/Admin';
import "./index.css";
import "./unitInput.css";


function App() {

  return (
    <Router>
      <Routes>

        <Route path="/" element={<UnitConverter />} />
        <Route path="/" element={<UnitInput />} />
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