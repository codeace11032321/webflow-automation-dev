# Deployment Guide

## Deploying to Vercel

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)

2. Visit [Vercel](https://vercel.com) and create a new project

3. Import your repository

4. Configure the following environment variables in Vercel's dashboard:
   - `WEBFLOW_API_TOKEN`
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`

5. Deploy the project

Your application will be automatically deployed and you'll receive a production URL.

## Webhook URL

After deployment, your webhook URL will be:
```
https://your-project.vercel.app/api/webhook
```

## Important Notes

- The free tier of Vercel has the following limitations:
  - Serverless Function Execution: 10s timeout
  - Serverless Function Size: 50MB
  - Builds: 100 per day
  - Bandwidth: 100GB per month

- Make sure your Supabase project is properly configured with the necessary tables:
  ```sql
  create table workflows (
    id uuid default uuid_generate_v4() primary key,
    name text not null,
    collection_id text not null,
    triggers jsonb not null,
    actions jsonb not null,
    created_at timestamp with time zone default timezone('utc'::text, now()) not null
  );
  ```

- Enable CORS in your Supabase project settings for your Vercel deployment URL