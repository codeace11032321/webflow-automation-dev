import { supabase } from '../config/supabase.js';

export class WorkflowService {
  async create(workflow) {
    try {
      const { data, error } = await supabase
        .from('workflows')
        .insert([{
          ...workflow,
          created_at: new Date().toISOString()
        }]);

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error creating workflow:', error);
      throw error;
    }
  }

  async getAll() {
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

  async getByCollectionId(collectionId) {
    try {
      const { data, error } = await supabase
        .from('workflows')
        .select('*')
        .eq('collection_id', collectionId);

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error fetching workflows by collection:', error);
      throw error;
    }
  }
}