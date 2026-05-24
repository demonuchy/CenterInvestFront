// src/components/auth/AuthForm/AuthForm.jsx
import React, {useCallback, useState} from "react";
import { useNavigate } from 'react-router-dom';
import InputField from "../InputField/InputField";
import Button from "../../common/Button/Button";
import ThemeToggle from "../../common/ThemeToggle/ThemeToggle";
import './AuthForm.css';

const AuthForm = ({apiCallFunc, btnText}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState( 
        {
            email: '',
            password: '',
        });
    const [errors, setErrors] = useState({});
    const [authError, setAuthError] = useState('');

    const validateForm = useCallback(() => {
        const newErrors = {};
        if (!formData.email.trim()) {
          newErrors.email = 'Email обязателен';
        }
        if (!formData.password) {
          newErrors.password = 'Пароль обязателен';
        } else if (formData.password.length < 6) {
          newErrors.password = 'Пароль должен содержать минимум 6 символов';
        } else if (formData.password.length > 30) {
          newErrors.password = 'Пароль должен содержать максимум 30 символов';
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
          newErrors.password = 'Пароль должен содержать заглавные, строчные буквы и цифры';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
      }, [formData])

    const onChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
        if (errors[name]) {
          setErrors(prev => ({ ...prev, [name]: '' }));
        }
      };

    const onSubmit = async (e) => {
        e.preventDefault();
        console.log("Submit")
        setAuthError('');
        
        if (!validateForm()) return;
        
        try{ 
            await apiCallFunc(formData.email, formData.password)
            navigate('/');
        } catch (error) {
            console.error('Auth error:', error);
            setAuthError(error.message || 'Произошла ошибка при аутентификации');
        }
    }

    return(
        <div className="auth-form">
            <div className="auth-form-container">
                <div className="temme-togle-container">
                    <ThemeToggle/>
                </div>
                <h2 className="auth-form-title">{btnText}</h2>
                <p className="auth-form-subtitle">
                    {btnText === 'Login' ? 'Войдите в свой аккаунт' : 'Создайте новый аккаунт'}
                </p>
                
                <form onSubmit={onSubmit} className="auth-form-content">
                    {authError && (
                        <div className="auth-error-message">
                            <span className="auth-error-icon">⚠️</span>
                            {authError}
                        </div>
                    )}
                    
                    <InputField
                      type="email"
                      label="Email"
                      name="email"
                      value={formData.email}
                      onChange={onChange}
                      error={errors.email}
                      placeholder="example@mail.com"
                      autoComplete="email"
                    />

                    <InputField
                      type="password"
                      label="Пароль"
                      name="password"
                      value={formData.password}
                      onChange={onChange}
                      error={errors.password}
                      placeholder="Минимум 6 символов"
                      autoComplete={btnText === 'Login' ? 'current-password' : 'new-password'}
                    />
                    
                    <Button 
                        onClick={onSubmit}
                        variant="primary"
                        size="large"
                        fullWidth
                    >
                        {btnText}
                    </Button>
                    
                    <div className="auth-form-footer">
                        {btnText === 'Login' ? (
                            <p>
                                Нет аккаунта?{' '}
                                <a href="/register" className="auth-link">Зарегистрироваться</a>
                            </p>
                        ) : (
                            <p>
                                Уже есть аккаунт?{' '}
                                <a href="/login" className="auth-link">Войти</a>
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AuthForm;