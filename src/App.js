import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';

import { AuthProvider } from './contexts/useAuthContext';
import MainLayout from './layouts/main/MainLayout';


const Home = lazy(() => import('./pages/Home/Home'));

function App() {
  return(
  <Router>
      <AuthProvider> 
        <Suspense>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </Router>)
  
}

export default App;
