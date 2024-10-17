import React, { useEffect } from 'react'; 
import {BrowserRouter as Router , Routes, Route, useLocation, Link } from 'react-router-dom';
import Home from '../src/Pages/Home'
import {Login} from '../src/Pages/Login'
import Navbar from '../src/Components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from './Components/ScrollToTop';
import { SignUp } from './Pages/SignUp';
const App = ()=> {
  const location = useLocation();
  useEffect(()=>{
    AOS.init({once: true,});
  })
  return (
    <>
      {location.pathname !== '/sign-up' && location.pathname !== '/login' && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" exact element={<SignUp />} />
        <Route path="/" exact element={<Home />} />
      </Routes>
    </>
  )
}
const MainApp = () => (
  <Router>
    <ScrollToTop/>
    <App />
  </Router>
);
export default MainApp;
// "@emotion/react": "^11.13.3",
// "@emotion/styled": "^11.13.0",
// "@fortawesome/fontawesome-svg-core": "^6.6.0",
// "@fortawesome/free-brands-svg-icons": "^6.6.0",
// "@fortawesome/free-regular-svg-icons": "^6.6.0",
// "@fortawesome/free-solid-svg-icons": "^6.6.0",
// "@fortawesome/react-fontawesome": "^0.2.2",
// "@headlessui/react": "^2.1.8",
// "@heroicons/react": "^2.1.5",
// "@mui/icons-material": "^6.1.1",
// "@mui/material": "^6.1.1",

