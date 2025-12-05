import api from './api';

export const authService = {
  async login(email, password) {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  },

  async register(email, password, name) {
    const response = await api.post('/auth/register', { email, password, fullName: name });
    return response.data;
  },

  // async googleLogin(token) {
  //   const response = await api.post('/auth/google', { token });
  //   return response.data;
  // },


  async googleLogin(credential) {  // Change param to 'credential' for consistency
    const response = await api.post('/auth/google', { credential });
    return response.data;
  },

  async verifyToken() {
    const response = await api.get('/auth/verify');
    return response.data;
  },

  async logout() {
    const response = await api.post('/auth/logout');
    return response.data;
  }
};