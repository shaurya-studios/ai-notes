import { NativeChapter } from '../../types/content';
export const chapter6: NativeChapter = {
  id: 'intro-to-ai', number: 'VI', title: 'Part B: Introduction to AI',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Foundations of AI' },
        { type: 'p', content: 'Artificial Intelligence (AI) is the ability of machines to simulate human intelligence. A machine is considered "intelligent" if it can learn, reason, and solve problems.' },
        { type: 'h2', content: 'AI vs ML vs DL' },
        { type: 'ul', items: [
          'Artificial Intelligence (AI): The overarching field of making computers think like humans.',
          'Machine Learning (ML): A subset of AI. Algorithms learn from data without being explicitly programmed.',
          'Deep Learning (DL): A subset of ML inspired by the human brain (Artificial Neural Networks), used for highly complex tasks like facial recognition.'
        ]},
        { type: 'callout', style: 'important', content: 'All Deep Learning is ML, and all ML is AI. However, not all AI is Machine Learning (e.g., Rule-based systems).' }
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h2', content: 'Domains of AI' },
        { type: 'table', headers: ['Domain', 'Description', 'Applications'], rows: [
          ['Data (Data Science)', 'Extracting insights from structured/unstructured data.', 'Recommendation systems, price prediction.'],
          ['Computer Vision (CV)', 'Enabling machines to understand visual data.', 'Self-driving cars, face unlock.'],
          ['Natural Language Processing (NLP)', 'Enabling machines to understand text and speech.', 'Chatbots, language translation.']
        ]},
        { type: 'h2', content: 'Smart vs. AI' },
        { type: 'p', content: 'Not all smart devices use AI. A fully automatic washing machine is "Smart" (it follows pre-programmed rules based on sensors), but it is NOT AI because it does not learn from data to improve its washing cycle over time.' }
      ]
    }
  ]
};
