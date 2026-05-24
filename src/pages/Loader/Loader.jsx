// src/components/common/Loader/Loader.jsx
import './Loader.css';
import { ThemeProvider } from '../../contexts/ThemeContext';

import React from 'react';

const Loader = ({ 
  type = 'inline',
}) => {

  return (
      <div className='loader'>
          <div className={`loading-container ${type}`}>
              <div className="loader-content">
                  <div className="loader-poin"></div>
              </div>
          </div>
      </div>
  );
};

export default Loader;