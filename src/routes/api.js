import express from 'express';
import { collectionController } from '../controllers/collectionController.js';
import { workflowController } from '../controllers/workflowController.js';
import { webhookController } from '../controllers/webhookController.js';

const router = express.Router();

// Collection routes
router.get('/collections', collectionController.getAll);
router.get('/collections/:id', collectionController.getById);

// Workflow routes
router.post('/workflows', workflowController.create);
router.get('/workflows', workflowController.getAll);

// Webhook route
router.post('/webhook', webhookController.handleWebhook);

export default router;