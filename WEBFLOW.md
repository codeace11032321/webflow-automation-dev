# Webflow Integration Guide

## Setting Up the Integration

1. Get your Webflow API Token:
   - Go to your Webflow account settings
   - Navigate to Workspace Settings > Integrations
   - Generate a new API token

2. Add Webhook to Your Webflow Site:
   ```javascript
   // Add this code to your Webflow site's custom code section (Settings > Custom Code)
   <script>
   document.addEventListener('DOMContentLoaded', function() {
     const WEBHOOK_URL = 'https://your-project.vercel.app/api/webhook';
     
     // Listen for CMS events
     window.Webflow = window.Webflow || [];
     window.Webflow.push(() => {
       window.Webflow.site.on('cmsItemChanged', (data) => {
         fetch(WEBHOOK_URL, {
           method: 'POST',
           headers: {
             'Content-Type': 'application/json',
           },
           body: JSON.stringify({
             event: 'cmsItemChanged',
             collection_id: data.collectionId,
             item_id: data.itemId,
             timestamp: new Date().toISOString()
           })
         });
       });
     });
   });
   </script>
   ```

3. Available Events:
   - `cmsItemChanged`: Triggered when a CMS item is created, updated, or deleted
   - `cmsCollectionChanged`: Triggered when a collection is modified

## Testing the Integration

1. Create a test workflow in the Workflow Builder

2. Make changes to your Webflow CMS collections

3. Check the webhook logs in your Vercel dashboard

## Security Considerations

- Keep your API tokens secure and never expose them in client-side code
- Use environment variables for sensitive information
- Implement rate limiting on your webhook endpoints
- Validate webhook payloads before processing

## Troubleshooting

1. Webhook not triggering:
   - Check if the custom code is properly added to your Webflow site
   - Verify the webhook URL is correct
   - Check browser console for any JavaScript errors

2. Workflow not executing:
   - Verify the collection ID matches
   - Check if the workflow is active
   - Review the Vercel function logs for errors

3. API rate limits:
   - Webflow API has rate limits (60 requests per minute)
   - Implement proper error handling and retries in your workflows