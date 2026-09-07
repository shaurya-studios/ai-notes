import { NativeChapter } from '../../types/content';
export const chapter2: NativeChapter = {
  id: 'self-management', number: 'II', title: 'Self-Management Skills',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Stress Management' },
        { type: 'h2', content: 'What is Self Management?' },
        { type: 'p', content: 'The ability to regulate your emotions, thoughts, and behavior across various situations. It involves motivating yourself, setting goals, and being disciplined.' },
        { type: 'h3', content: 'Stress Management' },
        { type: 'p', content: 'Stress is an emotional, mental, physical, and social reaction to perceived demands or threats. These demands or threats are called stressors (like exam pressure, loss of a loved one, fear of judgment, or lack of sleep).' },
        { type: 'p', content: 'Managing stress means creating a balanced life between work, relationships, relaxation, and fun. This helps you face daily challenges calmly and effectively.' },
        { type: 'ul', items: [
          'A - Adversity (the stressful situation)',
          'B - Beliefs (how you interpret it)',
          'C - Consequences (your response and outcome)'
        ]},
        { type: 'h3', content: 'Steps to Manage Stress' },
        { type: 'ol', items: [
          'Be Aware You are Stressed: Notice signs like headache, sleeplessness, sadness.',
          'Identify the Cause: exams, family issues, financial problems, poor diet, etc.',
          'Apply Stress Management Methods: Time Management, Physical Exercise, Healthy Diet, Positivity, Sleep.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 2: Self Awareness' },
        { type: 'h2', content: 'What is Self Awareness?' },
        { type: 'p', content: 'The ability to recognize your own strengths and weaknesses. It helps you turn weaknesses into strengths and strengths into talents, which is key to achieving success.' },
        { type: 'h3', content: 'Knowing Yourself' },
        { type: 'ul', items: [
          'Who you are',
          'What you like or dislike',
          'What are your beliefs and opinions',
          'What is your background',
          'What you do well'
        ]},
        { type: 'h3', content: 'Finding Strengths and Weaknesses' },
        { type: 'table', headers: ['Strengths', 'Weaknesses'], rows: [
          ['Reflect on what you consistently succeed at', 'Recognize areas you struggle with'],
          ['Think about what others praise you for', 'Accept feedback from others'],
          ['Identify tasks that feel easy or natural', 'Treat weaknesses as chances to grow, not failures']
        ]}
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: 'Session 3: Self Motivation' },
        { type: 'h2', content: 'What is Self Motivation?' },
        { type: 'p', content: 'The inner drive that pushes you to take action, achieve goals, and improve your life without needing reminders or pressure from others.' },
        { type: 'h3', content: 'Types of Motivation' },
        { type: 'ul', items: [
          'Internal Motivation: Driven by joy, health, self-growth. E.g., Learning dance because it makes you feel good.',
          'External Motivation: Driven by recognition, prizes, or respect. E.g., Practicing for a race after winning a medal.'
        ]},
        { type: 'h3', content: 'Steps to Build Self-Motivation' },
        { type: 'ol', items: [
          'Set Clear Goals: Define what you want (E.g., "I want to be a chef").',
          'Develop a Plan: List steps needed to reach your goal.',
          'Set Timelines: Organize your time and track progress regularly.',
          'Stay Loyal to Your Goal: Keep moving forward—even if you fail. Find new ways to reach the goal instead of giving up.'
        ]}
      ]
    },
    {
      pageNumber: 4,
      blocks: [
        { type: 'h1', content: 'Session 4 & 5: Goals & Time Management' },
        { type: 'h2', content: 'What are Goals?' },
        { type: 'p', content: 'Goals are dreams with deadlines. Without clear goals, you can end up anywhere in life — just like a traveler who didn\'t know his destination.' },
        { type: 'h3', content: 'SMART Method to set Goals' },
        { type: 'ul', items: [
          'S - Specific: Clear and detailed.',
          'M - Measurable: Can be tracked.',
          'A - Achievable: Realistic Steps.',
          'R - Realistic: Within your ability and effort.',
          'T - Time Bound: Has a deadline.'
        ]},
        { type: 'h2', content: 'Time Management' },
        { type: 'p', content: 'Planning and controlling how you spend your time to get important tasks done efficiently. It helps you balance study, work, and fun.' },
        { type: 'h3', content: 'Steps for Effective Time Management' },
        { type: 'ol', items: [
          'Organize',
          'Prioritize',
          'Control',
          'Track'
        ]}
      ]
    }
  ]
};
