// src/components/interview/Feedback/Feedback.jsx
import './Feedback.css';
import Button from '../../common/Button/Button';

const Feedback = ({ feedback, onNext }) => {
  return (
    <div className={`feedback ${feedback.correct ? 'correct' : 'incorrect'}`}>
      <div className="feedback-header">
        <span className="feedback-icon">
          {feedback.correct ? '✅' : '❌'}
        </span>
        <h3 className="feedback-title">
          {feedback.correct ? 'Правильно!' : 'Неправильно'}
        </h3>
      </div>
      
      <p className="feedback-explanation">{feedback.explanation}</p>
      
      {feedback.sourceUrl && (
        <a
          href={feedback.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="feedback-source"
        >
          📚 Подробнее в документации
        </a>
      )}
      
      {onNext && (
        <div className="feedback-actions">
          <Button onClick={onNext} variant="primary" size="medium">
            Далее →
          </Button>
        </div>
      )}
    </div>
  );
};

export default Feedback;