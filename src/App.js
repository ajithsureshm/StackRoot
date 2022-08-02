import Signup from "./pages/Signup";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Footer from './components/Footer'


// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <Routes>

        <Route path="/home" element={<Home />} />
        <Route exact path="/" element={<Navigate to="/home" />}/>

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path='/home/details/:id'  element={<Details />} />

            
         
          
        </Routes>



      </div>

    </Router>

    <Footer/>


    </>
  );
}

export default App;
