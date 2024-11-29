import { webflowApi } from '../src/services/webflowApi.js';
import cors from 'cors';

const corsMiddleware = cors();

export default async function handler(req, res) {
  await new Promise((resolve) => corsMiddleware(req, res, resolve));

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const sites = await webflowApi.getSites();
    const collections = [];
    
    for (const site of sites) {
      const siteCollections = await webflowApi.getCollections(site._id);
      collections.push(...siteCollections);
    }
    
    return res.status(200).json(collections);
  } catch (error) {
    console.error('Error in collections handler:', error);
    return res.status(500).json({ error: error.message });
  }
}