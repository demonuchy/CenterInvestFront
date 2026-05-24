import { useCallback } from 'react';
import apiClient from "../api/client";

const useApi = () => {
  // ============ Auth API        ============
  const signIn = useCallback(async (username, password) => {
    return apiClient('/auth/sign-in', {
      method: 'POST',
      body: JSON.stringify({ name : username, password : password })
    });
  }, []);

  const signUp = useCallback(async (username, password) => {
    return apiClient('/auth/sign-up', {
      method: 'POST',
      body: JSON.stringify({ name : username, password : password })
    });
  }, []);

  const signOut = useCallback(async () => {
    return apiClient('/auth/sign-out', {
      method: 'POST',
    });
  }, []);

  // ============ User API        ============
  const getMe = useCallback(async () => {
    return apiClient('/user/me', {
      method: 'GET',
    });
  }, []);
  // ============ Public Flow API ============
  
  const startAttempt = useCallback(async (professionId) => {
    return apiClient('/attempt', {
      method: 'POST',
      body: JSON.stringify({ id: professionId })
    });
  }, []);

  const getNextQuestion = useCallback(async (attemptId) => {
    return apiClient(`/attempt/${attemptId}`, {
      method: 'GET'
    });
  }, []);

  const validateAnswer = useCallback(async (attemptId, answerData) => {
    return apiClient(`/attempt/${attemptId}/validate`, {
      method: 'POST',
      body: JSON.stringify(answerData)
    });
  }, []);

  const getAttemptResult = useCallback(async (attemptId) => {
    return apiClient(`/attempt/${attemptId}/result`, {
      method: 'GET'
    });
  }, []);

  // ============ Admin API - Professions ============
  
  const getAllProfessions = useCallback(async () => {
    return apiClient('/profession', {
      method: 'GET'
    });
  }, []);

  const getProfessionById = useCallback(async (id) => {
    return apiClient(`/profession/${id}`, {
      method: 'GET'
    });
  }, []);

  const createProfession = useCallback(async (name) => {
    return apiClient('/profession', {
      method: 'POST',
      body: JSON.stringify({ name })
    });
  }, []);

  const deleteProfession = useCallback(async (id) => {
    return apiClient(`/profession/${id}`, {
      method: 'DELETE'
    });
  }, []);

  // ============ Admin API - Topics ============
  
  const getAllTopics = useCallback(async () => {
    return apiClient('/topic', {
      method: 'GET'
    });
  }, []);

  const getTopicById = useCallback(async (id) => {
    return apiClient(`/topic/${id}`, {
      method: 'GET'
    });
  }, []);

  const createTopic = useCallback(async (topicData) => {
    return apiClient('/topic', {
      method: 'POST',
      body: JSON.stringify(topicData)
    });
  }, []);

  const deleteTopic = useCallback(async (id) => {
    return apiClient(`/topic/${id}`, {
      method: 'DELETE'
    });
  }, []);

  // ============ Admin API - Questions ============
  
  const createQuestion = useCallback(async (questionData) => {
    return apiClient('/question', {
      method: 'POST',
      body: JSON.stringify(questionData)
    });
  }, []);

  const getQuestionById = useCallback(async (id) => {
    return apiClient(`/question/${id}`, {
      method: 'GET'
    });
  }, []);

  const deleteQuestion = useCallback(async (id) => {
    return apiClient(`/question/${id}`, {
      method: 'DELETE'
    });
  }, []);

  return {
    // Auth API 
    signIn,
    signUp,
    getMe,
    signOut,
    // Public Flow API
    startAttempt,
    getNextQuestion,
    validateAnswer,
    getAttemptResult,
    
    // Admin API - Professions
    getAllProfessions,
    getProfessionById,
    createProfession,
    deleteProfession,
    
    // Admin API - Topics
    getAllTopics,
    getTopicById,
    createTopic,
    deleteTopic,
    
    // Admin API - Questions
    createQuestion,
    getQuestionById,
    deleteQuestion
  };
};

export default useApi;