import React, { useEffect } from 'react'; 
import {BrowserRouter as Router , Routes, Route, useLocation, Link } from 'react-router-dom';
import Home from '../src/Pages/Home'
import Navbar from '../src/Components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
const App = ()=> {
  const location = useLocation();
  useEffect(()=>{
    AOS.init();
  })
  return (
    <>
      {location.pathname !== '/sign-up' && location.pathname !== '/login' && <Navbar />}
      <Routes>
        <Route path="/" exact element={<Home />} />
      </Routes>
    </>
  )
}
const MainApp = () => (
  <Router>
    <App />
  </Router>
);
export default MainApp;

