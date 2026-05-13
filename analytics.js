// Import and initialize Vercel Web Analytics
import { inject } from '@vercel/analytics';

// Inject the analytics script
inject({
  mode: 'production',
  debug: false
});
