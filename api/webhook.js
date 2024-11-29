import { supabase } from '../src/config/supabase.js';
import cors from 'cors';

const corsMiddleware = cors();

export default async function handler(req, res) {
  await new Promise((resolve) => corsMiddleware(req, res, resolve));

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const webhookData = req.body;
    console.log('Received webhook:', webhookData);
    
    const { data: workflows, error } = await supabase
      .from('workflows')
      .select('*')
      .eq('collection_id', webhookData.collection_id);

    if (error) throw error;

    for (const workflow of workflows) {
      console.log(`Processing workflow: ${workflow.name}`);
      // Add your workflow execution logic here
    }

    return res.status(200).json({ message: 'Webhook processed successfully' });
  } catch (error) {
    console.error('Error in webhook handler:', error);
    return res.status(500).json({ error: error.message });
  }
}