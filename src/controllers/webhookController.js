import { WorkflowService } from '../services/workflowService.js';

const workflowService = new WorkflowService();

export const webhookController = {
  async handleWebhook(req, res) {
    try {
      const webhookData = req.body;
      console.log('Received webhook:', webhookData);
      
      const workflows = await workflowService.getByCollectionId(webhookData.collection_id);
      
      for (const workflow of workflows) {
        await processWorkflow(workflow, webhookData);
      }

      res.status(200).json({ message: 'Webhook processed successfully' });
    } catch (error) {
      console.error('Webhook processing error:', error);
      res.status(500).json({ error: error.message });
    }
  }
};

async function processWorkflow(workflow, webhookData) {
  try {
    console.log(`Processing workflow: ${workflow.name}`);
    // Add your workflow execution logic here
    // This is where you'd implement the actual workflow actions
  } catch (error) {
    console.error(`Error processing workflow ${workflow.name}:`, error);
    throw error;
  }
}