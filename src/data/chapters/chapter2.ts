import { NativeChapter } from '../../types/content';
export const chapter2: NativeChapter = {
  id: 'self-management', number: 'II', title: 'Part A: Self-Management Skills - II',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Stress Management' },
        { type: 'p', content: 'Self-management is the ability to regulate one\'s emotions, thoughts, and behaviors effectively. This requires managing stress effectively.' },
        { type: 'h2', content: 'What is Stress?' },
        { type: 'p', content: 'Stress is our body\'s response to physical, mental, or emotional demands (stressors). While positive stress (Eustress) can motivate us, prolonged negative stress (Distress) can cause severe health and productivity issues.' },
        { type: 'h3', content: 'Signs of Stress' },
        { type: 'ul', items: [
          'Physical: Headaches, fatigue, sweating, stomach aches.',
          'Mental/Emotional: Anxiety, irritability, lack of concentration, sadness.'
        ]},
        { type: 'h3', content: 'Stress Management Techniques' },
        { type: 'ol', items: [
          'Physical Exercise: Yoga, sports, and walking release endorphins.',
          'Healthy Diet: A balanced diet provides energy to combat stress.',
          'Adequate Sleep: 7-8 hours of sleep is necessary for recovery.',
          'Relaxation: Deep breathing, meditation, enjoying nature.',
          'Time Management: Planning tasks to avoid last-minute panic.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 2: Self-Awareness & Goal Setting' },
        { type: 'p', content: 'Working independently means having the ability to work without constant supervision. This requires three key skills: Self-Awareness, Self-Motivation, and Self-Regulation.' },
        { type: 'h2', content: 'Self-Awareness' },
        { type: 'p', content: 'Knowing your own personality, strengths, weaknesses, and emotions.' },
        { type: 'definition', term: 'SWOT Analysis', definition: 'A tool used to evaluate your Strengths, Weaknesses, Opportunities, and Threats.' },
        { type: 'h2', content: 'Goal Setting (SMART)' },
        { type: 'p', content: 'Goals should be structured using the SMART framework:' },
        { type: 'ul', items: [
          'S - Specific: Clear and unambiguous.',
          'M - Measurable: You can track the progress.',
          'A - Achievable: Realistic based on your skills.',
          'R - Relevant: Matters to your broader life plan.',
          'T - Time-bound: Has a clear deadline.'
        ]}
      ]
    }
  ]
};
