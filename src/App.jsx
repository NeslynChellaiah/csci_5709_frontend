import { BrowserRouter, Routes, Route, Navigate, Router } from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import NavBar from './components/navBar';
import Restaurant from './pages/restaurant';
import Login from './pages/login';
import Signup from './pages/signUp';
function App() {
  return (
    <>
       
        <BrowserRouter>
        <NavBar />
          <Routes>
            <Route path="/" element={<Login />} />
             <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
            <Route path="/restaurant/:id" element={<Restaurant />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
