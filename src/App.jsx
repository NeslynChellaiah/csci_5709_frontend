import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import NavBar from './components/navBar';
import Restaurant from './pages/restaurant';

function App() {
  return (
    <>
        <NavBar />
        
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant/:id" element={<Restaurant />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
