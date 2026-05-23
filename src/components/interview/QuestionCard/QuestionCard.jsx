// src/components/interview/QuestionCard/QuestionCard.jsx
import './QuestionCard.css';
import ProgressBar from '../../common/ProgressBar/ProgressBar';
import SingleChoice from '../SingleChoice/SingleChoice';
import MultipleChoice from '../MultipleChoice/MultipleChoice';
import TextAnswer from '../TextAnswer/TextAnswer';
import Button from '../../common/Button/Button';

const QuestionCard = ({
  question,
  currentIndex,
  totalQuestions,
  selectedAnswer,
  onAnswerChange,
  onSubmit,
  isAnswered,
  feedback
}) => {
  const renderQuestionType = () => {
    switch (question.type) {
      case 'SINGLE':
        return (
          <SingleChoice
            options={question.answerOptions}
            selectedId={selectedAnswer?.selectedOptionIds?.[0]}
            onChange={(id) => onAnswerChange({ selectedOptionIds: [id] })}
            disabled={isAnswered}
          />
        );
      case 'MULTIPLE':
        return (
          <MultipleChoice
            options={question.answerOptions}
            selectedIds={selectedAnswer?.selectedOptionIds || []}
            onChange={(ids) => onAnswerChange({ selectedOptionIds: ids })}
            disabled={isAnswered}
          />
        );
      case 'TEXT':
        return (
          <TextAnswer
            value={selectedAnswer?.textAnswer || ''}
            onChange={(text) => onAnswerChange({ textAnswer: text })}
            disabled={isAnswered}
          />
        );
      default:
        return null;
    }
  };

  const isSubmitDisabled = () => {
    if (!selectedAnswer) return true;
    if (question.type === 'SINGLE' && !selectedAnswer.selectedOptionIds?.length) return true;
    if (question.type === 'MULTIPLE' && !selectedAnswer.selectedOptionIds?.length) return true;
    if (question.type === 'TEXT' && !selectedAnswer.textAnswer?.trim()) return true;
    return false;
  };

  return (
    <div className="question-card">
      <ProgressBar current={currentIndex + 1} total={totalQuestions} />
      
      <div className="question-header">
        <span className="question-type-badge">
          {question.type === 'SINGLE' && 'Одиночный выбор'}
          {question.type === 'MULTIPLE' && 'Множественный выбор'}
          {question.type === 'TEXT' && 'Текстовый ответ'}
        </span>
        {question.topic && (
          <span className="question-topic">{question.topic}</span>
        )}
      </div>

      <h2 className="question-text">{question.text}</h2>
      
      <div className="question-options">
        {renderQuestionType()}
      </div>

      {!isAnswered && (
        <div className="question-actions">
          <Button
            onClick={onSubmit}
            disabled={isSubmitDisabled()}
            variant="primary"
            size="large"
            fullWidth
          >
            Ответить
          </Button>
        </div>
      )}

      {feedback && (
        <div className="feedback-container">
          <Feedback feedback={feedback} />
        </div>
      )}
    </div>
  );
};

export default QuestionCard;