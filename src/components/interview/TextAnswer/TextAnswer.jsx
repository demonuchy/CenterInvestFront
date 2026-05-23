// src/components/interview/TextAnswer/TextAnswer.jsx
import './TextAnswer.css';

const TextAnswer = ({ value, onChange, disabled }) => {
  return (
    <div className="text-answer">
      <textarea
        className="text-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
        placeholder="Введите ваш ответ здесь..."
        rows={4}
      />
      <div className="char-counter">
        {value.length} / 500 символов
      </div>
    </div>
  );
};

export default TextAnswer;