import express from 'express';
import { cmsController } from '../controllers/cmsController.js';

const router = express.Router();

router.get('/collections', cmsController.getCollections);
router.post('/workflows', cmsController.createWorkflow);
router.get('/workflows', cmsController.getWorkflows);
router.post('/webhook', cmsController.handleWebhook);

export default router;