import { BrowserRouter, Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import NavBar from './components/navBar';
import Restaurant from './pages/restaurant';
import Login from './pages/login';
import Signup from './pages/signUp';
import NotFound from './pages/notFound';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { isTokenExpired } from './utils';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/login" replace />;
};

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

function Layout() {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;

  const hideNav = !(path == '/' || ['/restaurant'].some(p => path.startsWith(p)));

  useEffect(() => {
    if (isTokenExpired()) {
      localStorage.removeItem('token');
      if (path !== '/login' && path !== '/signup') {
        navigate('/login');
      }
    }
  }, [path, navigate]);

  return (
    <>
      {!hideNav && <NavBar />}
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/restaurant/:id"
          element={
            <ProtectedRoute>
              <Restaurant />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <div>Admin Page</div>
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
