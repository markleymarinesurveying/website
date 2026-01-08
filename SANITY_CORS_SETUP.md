# Sanity CORS Configuration

## Method 1: Via Sanity Dashboard
1. Go to https://sanity.io/manage
2. Select your project (i2lmsnrx)
3. Navigate to "API" settings
4. Under "CORS Origins", add:
   - `http://localhost:3001`
   - `http://localhost:5000`
   - Your production domain (when deployed)

## Method 2: Via CLI (from sanity directory)
```bash
cd sanity
sanity cors add http://localhost:3001
sanity cors add http://localhost:5000
```

## Method 3: Via sanity.config.ts (if using newer Sanity versions)
Add to your sanity.config.ts:
```typescript
export default defineConfig({
  // ... other config
  cors: {
    allowOrigins: [
      'http://localhost:3001',
      'http://localhost:5000',
      // Add your production domain here
    ],
  },
})
```

After configuring CORS, your React app will be able to fetch data directly from Sanity without any CORS errors.