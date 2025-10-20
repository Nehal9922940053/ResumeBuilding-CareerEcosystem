import api from './api';

export const resumeService = {
  async getResume() {
    const response = await api.get('/resume');
    return response.data;
  },

  async saveResume(data) {
    const response = await api.post('/resume', data);
    return response.data;
  },

  async generateSummary(data) {
    const response = await api.post('/resume/generate-summary', data);
    return response.data;
  },

  async importFromGitHub(username) {
    const response = await api.post('/resume/import-github', { username });
    return response.data;
  },

  async exportResume(format) {
    const response = await api.get(`/resume/export?format=${format}`, {
      responseType: 'blob'
    });
    return response.data;
  }
};