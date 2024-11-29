import { CollectionService } from '../services/collectionService.js';

const collectionService = new CollectionService();

export const collectionController = {
  async getAll(req, res) {
    try {
      const collections = await collectionService.listAll();
      res.json(collections);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getById(req, res) {
    try {
      const { id } = req.params;
      const collection = await collectionService.getById(id);
      res.json(collection);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};