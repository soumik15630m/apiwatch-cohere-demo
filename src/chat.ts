import { CohereClient } from 'cohere-ai';

const cohere = new CohereClient({ token: process.env['CO_API_KEY'] ?? '' });

export async function ask(message: string): Promise<string | undefined> {
  const res = await cohere.chat({ message });
  return res.text;
}
