// src/components/results/RecommendationList/RecommendationList.jsx
import './RecommendationList.css';

const RecommendationList = ({ weakTopics }) => {
  const getRecommendations = (topicName) => {
    const recommendations = {
      'Замыкания': [
        'Изучите MDN документацию по замыканиям',
        'Практикуйте создание функций-фабрик',
        'Разберите примеры с setTimeout в цикле'
      ],
      'Event Loop': [
        'Посмотрите доклад "What the heck is the event loop anyway?"',
        'Потренируйтесь с очередями microtasks и macrotasks',
        'Изучите работу Promise и async/await'
      ],
      'Прототипы': [
        'Изучите цепочку прототипов в JavaScript',
        'Разберите разницу между __proto__ и prototype',
        'Практикуйте создание классов через прототипы'
      ],
      'Типы данных': [
        'Повторите все примитивные типы данных',
        'Изучите особенности оператора typeof',
        'Разберите преобразование типов'
      ],
      'Массивы': [
        'Запомните мутирующие и немутирующие методы',
        'Потренируйтесь с map, filter, reduce',
        'Изучите методы поиска в массивах'
      ],
      'Асинхронность': [
        'Повторите Promise и async/await',
        'Разберите обработку ошибок в асинхронном коде',
        'Потренируйтесь с fetch API'
      ],
      'Область видимости': [
        'Изучите var, let и const',
        'Разберите hoisting переменных',
        'Поймите разницу между глобальной и блочной областью'
      ],
      'this': [
        'Изучите контекст вызова функции',
        'Разберите методы call, apply и bind',
        'Потренируйтесь со стрелочными функциями'
      ]
    };

    // Default recommendations if topic not found
    const defaultRecommendations = [
      'Повторите теорию по этой теме',
      'Решите практические задачи',
      'Посмотрите видеоуроки по теме'
    ];

    return recommendations[topicName] || defaultRecommendations;
  };

  if (!weakTopics || weakTopics.length === 0) {
    return (
      <div className="recommendations">
        <div className="recommendations-perfect">
          <span className="perfect-icon">🏆</span>
          <h3>Вы освоили все темы!</h3>
          <p>Продолжайте практиковаться для поддержания уровня</p>
        </div>
      </div>
    );
  }

  return (
    <div className="recommendations">
      <h2 className="recommendations-title">Рекомендации по улучшению</h2>
      <p className="recommendations-subtitle">
        Сфокусируйтесь на этих темах для лучшего результата
      </p>
      
      <div className="recommendations-list">
        {weakTopics.map((topic, index) => {
          const recs = getRecommendations(topic.topicName);
          return (
            <div key={index} className="recommendation-card">
              <div className="recommendation-header">
                <span className="recommendation-number">{index + 1}</span>
                <h3 className="recommendation-topic">{topic.topicName}</h3>
                <span className="recommendation-priority">
                  {topic.errorCount > 2 ? 'Высокий приоритет' : 'Средний приоритет'}
                </span>
              </div>
              
              <ul className="recommendation-steps">
                {recs.map((rec, idx) => (
                  <li key={idx} className="recommendation-step">
                    <span className="step-marker">▸</span>
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
              
              <div className="recommendation-resources">
                <h4>Полезные ресурсы:</h4>
                <div className="resources-links">
                  <a 
                    href={`https://developer.mozilla.org/ru/search?q=${encodeURIComponent(topic.topicName)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-link"
                  >
                    📘 MDN Web Docs
                  </a>
                  <a 
                    href={`https://learn.javascript.ru/search?query=${encodeURIComponent(topic.topicName)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-link"
                  >
                    📚 Learn JavaScript
                  </a>
                  <a 
                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(topic.topicName + ' javascript')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-link"
                  >
                    🎥 YouTube
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecommendationList;