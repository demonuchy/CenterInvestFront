// src/pages/Results/Results.jsx
import './Results.css';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ScoreCard from '../../components/results/ScoreCard/ScoreCard';
import WeakTopics from '../../components/results/WeakTopics/WeakTopics';
import Button from '../../components/common/Button/Button';
import { useApi } from '../../hooks/useApi';

const Results = () => {
  const { id: attemptId } = useParams();
  const navigate = useNavigate();
  const { getAttemptResult } = useApi();
  
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadResult();
  }, []);

  const loadResult = async () => {
    try {
      const data = await getAttemptResult(attemptId);
      setResult(data);
    } catch (error) {
      console.error('Error loading results:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <div className="results-loading">
        <div className="loading-spinner"></div>
        <p>Загрузка результатов...</p>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="results-error">
        <p>Результаты не найдены</p>
        <Button onClick={handleRetry} variant="primary">
          На главную
        </Button>
      </div>
    );
  }

  return (
    <div className="results-page">
      <div className="results-container">
        <h1 className="results-title">Результаты собеседования</h1>
        
        <ScoreCard
          correctAnswers={result.correctAnswers}
          totalQuestions={result.totalQuestions}
          percentage={result.percentage}
        />
        
        <WeakTopics topics={result.weakTopics} />
        
        <div className="results-actions">
          <Button onClick={handleRetry} variant="primary" size="large">
            Пройти заново
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Results;