// src/components/common/Loader/Loader.jsx
import './Loader.css';

const Loader = ({ 
  size = 'medium', 
  text = 'Загрузка...', 
  fullScreen = false 
}) => {
  return (
    <div className={`loader-container ${fullScreen ? 'loader-fullscreen' : ''}`}>
      <div className={`loader-spinner loader-${size}`}>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
        <div className="spinner-ring"></div>
      </div>
      {text && <p className="loader-text">{text}</p>}
    </div>
  );
};

export default Loader;