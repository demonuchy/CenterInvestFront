import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';

import { AuthProvider } from './contexts/useAuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import MainLayout from './layouts/main/MainLayout';
import AuthLayout from './layouts/auth/AuthLayout';
import Loader from './pages/Loader/Loader';
import DelayedFallbackSuspense from './components/common/DelayFallbackSuspense/DelayFallbackSuspense';

const Login = lazy(()=> import('./pages/Login/Login'))
const Register = lazy(()=> import('./pages/Register/Register'))
const Home = lazy(() => import('./pages/Home/Home'));
const Interview = lazy(() => import ('./pages/Interview/Interview'));
const Results = lazy(() => import('./pages/Results/Results'));


function App() {
  return(
  <Router>
      <AuthProvider> 
        <ThemeProvider>
          <DelayedFallbackSuspense fallback={<Loader/>}>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/interview" element={<Interview />} />
                <Route path="/result" element={<Results />} />
              </Route>
              <Route element={<AuthLayout />}>
                <Route path="/signin" element={<Login />} />
                <Route path="/signup" element={<Register />} />
              </Route>
            </Routes>
          </DelayedFallbackSuspense>
        </ThemeProvider>
      </AuthProvider>
    </Router>)
  
}

export default App;
