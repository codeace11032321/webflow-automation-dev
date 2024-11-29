const API_BASE_URL = '/api';

export const api = {
  async getCollections() {
    const response = await fetch(`${API_BASE_URL}/collections`);
    if (!response.ok) throw new Error('Failed to fetch collections');
    return response.json();
  },

  async getWorkflows() {
    const response = await fetch(`${API_BASE_URL}/workflows`);
    if (!response.ok) throw new Error('Failed to fetch workflows');
    return response.json();
  },

  async createWorkflow(workflow) {
    const response = await fetch(`${API_BASE_URL}/workflows`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(workflow),
    });
    if (!response.ok) throw new Error('Failed to create workflow');
    return response.json();
  }
};