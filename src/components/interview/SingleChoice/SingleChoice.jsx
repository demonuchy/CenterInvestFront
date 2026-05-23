// src/components/interview/SingleChoice/SingleChoice.jsx
import './SingleChoice.css';

const SingleChoice = ({ options, selectedId, onChange, disabled }) => {
  return (
    <div className="single-choice">
      {options.map((option) => (
        <label
          key={option.id}
          className={`choice-option ${
            selectedId === option.id ? 'selected' : ''
          } ${disabled ? 'disabled' : ''}`}
        >
          <input
            type="radio"
            name="single-choice"
            checked={selectedId === option.id}
            onChange={() => onChange(option.id)}
            disabled={disabled}
          />
          <div className="radio-indicator">
            <div className="radio-dot"></div>
          </div>
          <span className="option-text">{option.text}</span>
        </label>
      ))}
    </div>
  );
};

export default SingleChoice;