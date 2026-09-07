import { NativeChapter } from '../../types/content';
export const chapter2: NativeChapter = {
  id: 'self-management', number: 'II', title: 'Part A: Self-Management Skills-II',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Self-Management Skills - II' },
        { type: 'p', content: 'Self-management, also referred to as "self-control" or "self-regulation," is the ability to regulate one\'s emotions, thoughts, and behavior effectively in different situations. This includes managing stress, delaying gratification, motivating oneself, and setting and working toward personal and academic goals.' },
        { type: 'h2', content: 'Stress Management' },
        { type: 'p', content: 'Stress is our body\'s physical, mental, and chemical reaction to circumstances that frighten, confuse, endanger, or irritate us.' },
        { type: 'ul', items: [
          'Eustress: Positive stress that motivates and helps us focus (e.g., stress before a big game or an exam that makes you study harder).',
          'Distress: Negative stress that causes anxiety and decreases performance.'
        ]},
        { type: 'h2', content: 'Stress Management Techniques' },
        { type: 'ul', items: [
          'Physical Exercise: Regular physical activity helps reduce stress hormones and increases endorphins.',
          'Yoga and Meditation: Techniques that promote relaxation and mental clarity.',
          'Time Management: Organizing and planning how to divide your time between specific activities. Good time management enables you to work smarter, not harder.',
          'Vacations and Breaks: Taking time off from the routine to recharge.',
          'Nature Walks: Spending time in nature can significantly lower stress levels.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Self-Awareness and Self-Motivation' },
        { type: 'h2', content: 'Self-Awareness' },
        { type: 'p', content: 'Self-awareness is the conscious knowledge of one\'s own character, feelings, motives, and desires. It involves understanding your strengths and weaknesses.' },
        { type: 'ul', items: [
          'Strength Analysis: Identifying what you are good at.',
          'Weakness Analysis: Identifying areas where you need improvement.'
        ]},
        { type: 'h2', content: 'Self-Motivation' },
        { type: 'p', content: 'Self-motivation is the force that keeps pushing us to go on – it\'s our internal drive to achieve, produce, develop, and keep moving forward.' },
        { type: 'p', content: 'Types of Motivation:' },
        { type: 'ul', items: [
          'Internal (Intrinsic) Motivation: Doing an activity for its inherent satisfaction rather than for some separable consequence.',
          'External (Extrinsic) Motivation: Doing an activity to attain some separable outcome, like a reward or avoiding punishment.'
        ]}
      ]
    }
  ]
};
