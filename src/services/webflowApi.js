import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const WEBFLOW_API_URL = 'https://api.webflow.com';
const token = process.env.WEBFLOW_API_TOKEN;

if (!token) {
  throw new Error('Missing Webflow API token');
}

const api = axios.create({
  baseURL: WEBFLOW_API_URL,
  headers: {
    'Authorization': `Bearer ${token}`,
    'accept-version': '1.0.0'
  }
});

export const webflowApi = {
  async getSites() {
    try {
      const response = await api.get('/sites');
      return response.data;
    } catch (error) {
      console.error('Error fetching sites:', error.message);
      throw error;
    }
  },

  async getCollections(siteId) {
    try {
      const response = await api.get(`/sites/${siteId}/collections`);
      return response.data;
    } catch (error) {
      console.error('Error fetching collections:', error.message);
      throw error;
    }
  },

  async getCollection(collectionId) {
    try {
      const response = await api.get(`/collections/${collectionId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching collection:', error.message);
      throw error;
    }
  }
};