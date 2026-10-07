import { CohereClient } from 'cohere-ai';

const cohere = new CohereClient({ token: process.env['CO_API_KEY'] ?? '' });

export async function rerankDocuments(query: string, documents: string[]) {
  const res = await cohere.rerank({
    query,
    documents,
    model: 'rerank-english-v3.0',
  });
  return res.results;
}
