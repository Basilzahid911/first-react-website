import './App.css';
import { Routes, Route, } from "react-router-dom";
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Login />} />
         <Route path="/home" element={<HomePage />} /> 
      </Routes>
      {/* <Register/> */}

    </>
  );
}

export default App;
