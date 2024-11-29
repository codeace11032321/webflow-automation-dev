import { WorkflowService } from '../services/workflowService.js';

const workflowService = new WorkflowService();

export const workflowController = {
  async create(req, res) {
    try {
      const { name, collectionId, triggers, actions } = req.body;
      const workflow = await workflowService.create({
        name,
        collection_id: collectionId,
        triggers,
        actions
      });
      res.status(201).json(workflow);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getAll(req, res) {
    try {
      const workflows = await workflowService.getAll();
      res.json(workflows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};