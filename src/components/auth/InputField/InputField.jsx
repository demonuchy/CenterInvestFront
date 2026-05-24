// src/components/auth/InputField/InputField.jsx
import './InputField.css';

const InputField = ({ 
    name,
    type,
    value,
    label,
    onChange,
    placeholder,
    error,
    autoComplete
}) => {
    return(
    <div className="input-wrapper">
        {label && (
            <label htmlFor={name} className="input-label">
                {label}
            </label>
        )}
        <div className="input-container">
            <input
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={error ? 'error' : ''}
                autoComplete={autoComplete}
            />
        </div>
        {error && (
            <span className="input-error">
                {error}
            </span>
        )}
    </div>
    )
}

export default InputField;