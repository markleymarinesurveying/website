import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: "i2lmsnrx",
  dataset: "production",
  apiVersion: "2026-01-08", // Updated to match your query URL
  useCdn: false, // Using direct API to match your URL
  perspective: "drafts", // Include drafts as shown in your query
  token: undefined, // Only required for write operations
});