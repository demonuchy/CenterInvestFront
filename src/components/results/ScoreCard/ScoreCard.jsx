// src/components/results/ScoreCard/ScoreCard.jsx
import './ScoreCard.css';

const ScoreCard = ({ correctAnswers, totalQuestions, percentage }) => {
  const getScoreEmoji = () => {
    if (percentage >= 80) return '🎉';
    if (percentage >= 60) return '👍';
    if (percentage >= 40) return '💪';
    return '📚';
  };

  return (
    <div className="score-card">
      <div className="score-emoji">{getScoreEmoji()}</div>
      <div className="score-circle">
        <svg viewBox="0 0 120 120">
          <circle
            className="score-bg"
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="#e2e8f0"
            strokeWidth="12"
          />
          <circle
            className="score-fill"
            cx="60"
            cy="60"
            r="54"
            fill="none"
            stroke="url(#gradient)"
            strokeWidth="12"
            strokeLinecap="round"
            strokeDasharray={`${percentage * 3.39} 339.292`}
            transform="rotate(-90 60 60)"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#667eea" />
              <stop offset="100%" stopColor="#764ba2" />
            </linearGradient>
          </defs>
        </svg>
        <div className="score-text">
          <span className="score-number">{correctAnswers}</span>
          <span className="score-total">/ {totalQuestions}</span>
        </div>
      </div>
      <h3 className="score-label">
        {percentage >= 80 && 'Отличный результат!'}
        {percentage >= 60 && percentage < 80 && 'Хороший результат!'}
        {percentage >= 40 && percentage < 60 && 'Неплохо, но есть куда расти'}
        {percentage < 40 && 'Нужно больше практики'}
      </h3>
    </div>
  );
};

export default ScoreCard;