// src/pages/Home/Home.jsx
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button/Button';
import  useApi  from '../../hooks/useApi';
import { useState, useEffect } from 'react';


const Home = () => {
  const navigate = useNavigate();
  const { getAllProfessions, startAttempt } = useApi();
  const [professions, setProfessions] = useState([]);

  useEffect(() => {
    loadProfessions();
  }, []);

  const loadProfessions = async () => {
    try {
      console.log("Start load data")
      const data = await getAllProfessions();
      setProfessions(data);
    } catch (error) {
      console.error('Error loading professions:', error);
    } finally {
      console.log("Finish load data")
    }
    };

  const handleStartInterview = async (professionId) => {
    try {
      const attemptId = await startAttempt(professionId);
      navigate(`/interview/${attemptId}`);
    } catch (error) {
      console.error('Error starting interview:', error);
    }
  };

  return (
    <div className="home-page">
      <div className="home-wrapper">
        <div className="hero-content">
          <h1 className="hero-title">
            Interview <span className="gradient-text">Flow</span>
          </h1>
          <p className="hero-subtitle">
            Подготовьтесь к техническому собеседованию с умом
          </p>
          <p className="hero-description">
            Практикуйтесь на реальных вопросах, получайте мгновенную обратную связь 
            и выявляйте слабые места
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🎯</span>
              <h3>Реальные вопросы</h3>
              <p>Типичные вопросы с технических собеседований</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">⚡</span>
              <h3>Мгновенная проверка</h3>
              <p>Сразу узнайте правильный ответ и объяснение</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📊</span>
              <h3>Аналитика</h3>
              <p>Определите слабые места и фокусируйтесь на них</p>
            </div>
          </div>
        </div>
      </div>

      <div className="professions-section">
        <h2 className="section-title">Выберите направление</h2>
        <div className="professions-grid">
          {professions.map((profession) => (
            <div
              key={profession.id}
              className="profession-card"
              onClick={() => handleStartInterview(profession.id)}
            >
              <div className="profession-icon">
                {profession.name.includes('Frontend') && '🎨'}
                {profession.name.includes('Backend') && '⚙️'}
                {profession.name.includes('QA') && '🔍'}
                {profession.name.includes('DevOps') && '🚀'}
                {!profession.name.match(/Frontend|Backend|QA|DevOps/) && '💻'}
              </div>
              <h3 className="profession-name">{profession.name}</h3>
              <Button variant="secondary" size="medium">
                Начать собеседование
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;