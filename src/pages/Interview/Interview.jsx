// src/pages/Interview/Interview.jsx
import './Interview.css';
import { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import QuestionCard from '../../components/interview/QuestionCard/QuestionCard';
import  useApi  from '../../hooks/useApi';

const Interview = () => {
  const { id: attemptId } = useParams();
  const navigate = useNavigate();
  const { getNextQuestion, validateAnswer } = useApi();
  
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalQuestions] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState(null);

  const loadQuestion = useCallback(async () => {
    try {
      const question = await getNextQuestion(attemptId);
      setCurrentQuestion(question);
      setSelectedAnswer(null);
      setFeedback(null);
    } catch (error) {
      console.error('Error loading question:', error);
      if (error.status === 404) {
        navigate(`/results/${attemptId}`);
      }
  };
  }, [attemptId, getNextQuestion, navigate])

  useEffect(() => {
    loadQuestion();
  }, [loadQuestion]);

  

  const handleSubmit = async () => {
    try {
      const result = await validateAnswer(attemptId, {
        questionId: currentQuestion.id,
        ...selectedAnswer
      });
      
      setFeedback(result);
      
      if (!result.nextQuestionAvailable) {
        setTimeout(() => {
          navigate(`/results/${attemptId}`);
        }, 2000);
      }
    } catch (error) {
      console.error('Error validating answer:', error);
    }
  };

  const handleNextQuestion = () => {
    setCurrentIndex(prev => prev + 1);
    loadQuestion();
  };

  if (!currentQuestion) {
    return (
      <div className="interview-error">
        <p>Вопрос не найден</p>
      </div>
    );
  }

  return (
    <div className="interview-page">
      <div className="interview-container">
        <QuestionCard
          question={currentQuestion}
          currentIndex={currentIndex}
          totalQuestions={totalQuestions || 5}
          selectedAnswer={selectedAnswer}
          onAnswerChange={setSelectedAnswer}
          onSubmit={handleSubmit}
          isAnswered={!!feedback}
          feedback={feedback}
          onNext={feedback?.nextQuestionAvailable ? handleNextQuestion : null}
        />
      </div>
    </div>
  );
};

export default Interview;