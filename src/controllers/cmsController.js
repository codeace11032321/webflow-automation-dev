import { CMSService } from '../services/cmsService.js';

const cmsService = new CMSService();

export const cmsController = {
  async getCollections(req, res) {
    try {
      const collections = await cmsService.listCollections();
      res.json(collections);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async createWorkflow(req, res) {
    try {
      const { name, collectionId, triggers, actions } = req.body;
      const workflow = await cmsService.createWorkflow(name, collectionId, triggers, actions);
      res.status(201).json(workflow);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async getWorkflows(req, res) {
    try {
      const workflows = await cmsService.getWorkflows();
      res.json(workflows);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async handleWebhook(req, res) {
    try {
      const webhookData = req.body;
      console.log('Received webhook:', webhookData);
      
      // Process webhook data based on the workflow configurations
      const workflows = await cmsService.getWorkflows();
      const relevantWorkflows = workflows.filter(workflow => 
        workflow.collection_id === webhookData.collection_id
      );

      // Execute workflow actions
      for (const workflow of relevantWorkflows) {
        // Implement workflow action execution logic here
        console.log(`Executing workflow: ${workflow.name}`);
      }

      res.status(200).json({ message: 'Webhook processed successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};