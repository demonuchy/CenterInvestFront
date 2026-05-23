// src/components/interview/MultipleChoice/MultipleChoice.jsx
import './MultipleChoice.css';

const MultipleChoice = ({ options, selectedIds, onChange, disabled }) => {
  const handleToggle = (id) => {
    const newSelectedIds = selectedIds.includes(id)
      ? selectedIds.filter(selectedId => selectedId !== id)
      : [...selectedIds, id];
    onChange(newSelectedIds);
  };

  return (
    <div className="multiple-choice">
      {options.map((option) => {
        const isSelected = selectedIds.includes(option.id);
        return (
          <label
            key={option.id}
            className={`choice-option ${isSelected ? 'selected' : ''} ${
              disabled ? 'disabled' : ''
            }`}
          >
            <input
              type="checkbox"
              checked={isSelected}
              onChange={() => handleToggle(option.id)}
              disabled={disabled}
            />
            <div className="checkbox-indicator">
              <svg className="checkmark" viewBox="0 0 24 24">
                <path
                  d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"
                  fill="white"
                />
              </svg>
            </div>
            <span className="option-text">{option.text}</span>
          </label>
        );
      })}
    </div>
  );
};

export default MultipleChoice;