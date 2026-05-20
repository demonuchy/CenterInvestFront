import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './App.css';

import { AuthProvider } from './hooks/useAuthContext';
import MainLayout from './layouts/MailnLayout';


function App() {
  <Router>
      <AuthProvider> 
        <Suspense fallback={<LoadScreen/>}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </Router>
  
}

export default App;
