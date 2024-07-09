import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const login = (email, password) => api.post('/auth/login', { email, password });
export const register = (username, email, password) => api.post('/auth/register', { username, email, password });
export const getCurrentUser = () => api.get('/auth/me');
export const updateUser = (userData) => api.put('/users/me', userData);
export const getRooms = () => api.get('/rooms');
export const createRoom = (roomData) => api.post('/rooms', roomData);
export const getMessages = (roomId) => api.get(`/messages/${roomId}`);
export const sendMessage = (roomId, content) => api.post(`/messages/${roomId}`, { content });

export default api;