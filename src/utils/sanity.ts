import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
  projectId: 'm65oxp0l',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2025-04-03',
};

const sanityClient = createClient(config);

export default sanityClient;

export function processProjectEntries(rawProject: SanityProject) {
  // const processedProject: ProcessedProject;
}
