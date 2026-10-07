import { CohereClient } from 'cohere-ai';

const cohere = new CohereClient({ token: process.env['CO_API_KEY'] ?? '' });

export async function embedDocuments(texts: string[]) {
  const res = await cohere.embed({
    texts,
    model: 'embed-english-v3.0',
    inputType: 'search_document',
  });
  return res;
}
