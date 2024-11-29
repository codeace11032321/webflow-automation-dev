import { webflowApi } from './webflowApi.js';

export class CollectionService {
  async listAll() {
    try {
      const sites = await webflowApi.getSites();
      const collections = [];
      
      for (const site of sites) {
        const siteCollections = await webflowApi.getCollections(site._id);
        collections.push(...siteCollections);
      }
      
      return collections;
    } catch (error) {
      console.error('Error fetching collections:', error);
      throw error;
    }
  }

  async getById(collectionId) {
    try {
      return await webflowApi.getCollection(collectionId);
    } catch (error) {
      console.error('Error fetching collection:', error);
      throw error;
    }
  }
}