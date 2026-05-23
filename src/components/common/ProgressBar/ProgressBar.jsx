// src/components/common/ProgressBar/ProgressBar.jsx
import './ProgressBar.css';

const ProgressBar = ({ current, total, percentage = null }) => {
  const progressPercentage = percentage || (current / total) * 100;
  
  return (
    <div className="progress-container">
      <div className="progress-info">
        <span className="progress-text">
          Вопрос {current} из {total}
        </span>
        <span className="progress-percentage">
          {Math.round(progressPercentage)}%
        </span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${progressPercentage}%` }}
        >
          <div className="progress-glow"></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;