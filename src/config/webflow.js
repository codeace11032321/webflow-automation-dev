import Webflow from '@webflow/api';
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.WEBFLOW_API_TOKEN;

if (!token) {
  throw new Error('Missing Webflow API token');
}

export const webflow = new Webflow({ token });