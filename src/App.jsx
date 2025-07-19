import { BrowserRouter, Routes, Route, Navigate, Router } from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import NavBar from './components/navBar';
import Restaurant from './pages/restaurant';
import Login from './pages/login';
import Signup from './pages/signUp';
import NotFound from './pages/notFound';
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
