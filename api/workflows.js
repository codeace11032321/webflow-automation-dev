import { supabase } from '../src/config/supabase.js';
import cors from 'cors';

const corsMiddleware = cors();

export default async function handler(req, res) {
  await new Promise((resolve) => corsMiddleware(req, res, resolve));

  if (req.method === 'GET') {
    try {
      const { data, error } = await supabase
        .from('workflows')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  if (req.method === 'POST') {
    try {
      const { name, collectionId, triggers, actions } = req.body;
      const { data, error } = await supabase
        .from('workflows')
        .insert([{
          name,
          collection_id: collectionId,
          triggers,
          actions,
          created_at: new Date().toISOString()
        }]);

      if (error) throw error;
      return res.status(201).json(data);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}