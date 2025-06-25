import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css'
import Home from './pages/home';
import NavBar from './components/navBar';
import LoginPage from './pages/LoginPage';    // ✅ Add this
import SignupPage from './pages/SignUpPage';  // ✅ Add this

function App() {
  return (
    <>
        <NavBar />
        {/* <BrowserRouter> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        {/* </BrowserRouter> */}
    </>
  );
}

export default App;
