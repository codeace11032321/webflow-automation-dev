# Webflow Workflow Builder

A powerful workflow builder for Webflow CMS collections that allows you to create automated workflows and handle CMS events.

## Local Development

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory with the following variables:
```
WEBFLOW_API_TOKEN=your_webflow_api_token
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
PORT=3000
```

4. Start the development server:
```bash
npm run dev
```

This will start both the backend server (port 3000) and the frontend development server (port 5173).

## Project Structure

```
├── api/                  # Serverless API routes for Vercel
├── src/
│   ├── client/          # React frontend application
│   ├── config/          # Configuration files
│   ├── controllers/     # Request handlers
│   ├── routes/          # API routes
│   └── services/        # Business logic
└── vercel.json          # Vercel deployment configuration
```

## Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run dev:client` - Start only the frontend development server
- `npm run dev:server` - Start only the backend development server
- `npm run build` - Build the frontend for production

## Environment Variables

- `WEBFLOW_API_TOKEN` - Your Webflow API token
- `SUPABASE_URL` - Your Supabase project URL
- `SUPABASE_ANON_KEY` - Your Supabase anonymous key
- `PORT` - Backend server port (default: 3000)