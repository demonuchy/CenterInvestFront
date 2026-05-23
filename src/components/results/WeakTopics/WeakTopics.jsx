// src/components/results/WeakTopics/WeakTopics.jsx
import './WeakTopics.css';

const WeakTopics = ({ topics }) => {
  if (!topics || topics.length === 0) {
    return (
      <div className="no-weak-topics">
        <span className="perfect-icon">🌟</span>
        <p>Отлично! У вас нет слабых тем</p>
      </div>
    );
  }

  return (
    <div className="weak-topics">
      <h3 className="topics-title">Темы для повторения</h3>
      <div className="topics-list">
        {topics.map((topic, index) => (
          <div key={index} className="topic-item">
            <div className="topic-header">
              <span className="topic-name">{topic.topicName}</span>
              <span className="topic-errors">
                {topic.errorCount} {topic.errorCount === 1 ? 'ошибка' : 'ошибки'}
              </span>
            </div>
            <div className="topic-bar">
              <div
                className="topic-bar-fill"
                style={{ width: `${Math.min(topic.errorCount * 20, 100)}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeakTopics;