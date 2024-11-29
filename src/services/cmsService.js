import { webflow } from '../config/webflow.js';
import { supabase } from '../config/supabase.js';

export class CMSService {
  async listCollections() {
    try {
      const sites = await webflow.sites();
      const collections = [];
      
      for (const site of sites) {
        const siteCollections = await webflow.collections({ siteId: site._id });
        collections.push(...siteCollections);
      }
      
      return collections;
    } catch (error) {
      console.error('Error fetching collections:', error);
      throw error;
    }
  }

  async createWorkflow(name, collectionId, triggers, actions) {
    try {
      const { data, error } = await supabase
        .from('workflows')
        .insert([
          {
            name,
            collection_id: collectionId,
            triggers,
            actions,
            created_at: new Date().toISOString()
          }
        ]);

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error creating workflow:', error);
      throw error;
    }
  }

  async getWorkflows() {
    try {
      const { data, error } = await supabase
        .from('workflows')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching workflows:', error);
      throw error;
    }
  }
}