const fs = require('fs');
const path = require('path');

const writeChapter = (fileName, content) => {
  fs.writeFileSync(path.join(__dirname, 'src/data/chapters', fileName), content);
};

writeChapter('chapter_self.ts', `import { NativeChapter } from '../../types/content';
export const chapter_self: NativeChapter = {
  id: 'self-management-custom', number: 'IX', title: 'Self Management Skills',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1 & 2: Stress and Self Awareness' },
        { type: 'definition', term: 'WHAT IS SELF MANAGEMENT?', definition: 'Ability to regulate your emotions, thoughts, and behavior across various situations. It involves motivating yourself, setting goals, and being disciplined.' },
        { type: 'h2', content: 'STRESS MANAGEMENT?' },
        { type: 'p', content: 'STRESS? Emotional, mental, physical, and social reaction to perceived demands or threats. These demands or threats are called stressors like exam pressure, loss of a loved one, fear of judgment, or lack of sleep.' },
        { type: 'h3', content: 'STEPS TO MANAGE STRESS' },
        { type: 'ol', items: [
          'Be Aware You are Stressed : Notice signs like headache, sleeplessness, sadness',
          'Identify the Cause : exams, family issues, financial problems, poor diet, etc.',
          'Apply Stress Management Methods :- Time Management, Physical Exercise, Healthy Diet, Positivity, Sleep'
        ]},
        { type: 'h2', content: 'Session 2: WHAT IS SELF AWARENESS?' },
        { type: 'p', content: 'Ability to recognize your own strengths and weaknesses. It helps you turn weaknesses into strengths and strengths into talents, which is key to achieving success.' },
        { type: 'ul', items: [
          'FINDING STRENGTH: Reflect on what you consistently succeed at. Think about what others praise you for.',
          'FINDING WEAKNESSES: Recognize areas you struggle with. Accept feedback from others. Treat weaknesses as chances to grow, not as failures.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 3 & 4: Motivation and Goals' },
        { type: 'definition', term: 'WHAT IS SELF MOTIVATION?', definition: 'Inner drive that pushes you to take action, achieve goals, and improve your life without needing reminders or pressure from others.' },
        { type: 'h2', content: 'TYPES OF MOTIVATION?' },
        { type: 'ol', items: [
          'Internal Motivation: Driven by joy, health, self growth. E.g. Learning dance because it makes you feel good.',
          'External Motivation: Driven by recognition, prizes, or respect. E.g. Practicing for a race after winning a medal.'
        ]},
        { type: 'h2', content: 'Steps to Build Self-Motivation?' },
        { type: 'ol', items: [
          'Set Clear Goals',
          'Develop a Plan',
          'Set Timelines',
          'Stay Loyal to Your Goal'
        ]},
        { type: 'h2', content: 'Session 4: WHAT ARE GOALS?' },
        { type: 'p', content: 'Goals are dreams with deadlines.' },
        { type: 'h3', content: 'SMART Method to set Goals?' },
        { type: 'ul', items: [
          'S : Specific (Clear and detailed)',
          'M : Measurable (Can be tracked)',
          'A : Achievable (Realistic Steps)',
          'R : Realistic (Within your ability and effort)',
          'T : Time Bound (Has a deadline)'
        ]}
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: 'Session 5: Time Management' },
        { type: 'definition', term: 'WHAT IS TIME MANAGEMENT?', definition: 'Planning and controlling how you spend your time to get important tasks done efficiently. It helps you balance study, work, and fun.' },
        { type: 'h2', content: 'STEPS FOR EFFECTIVE TIME MANAGEMENT' },
        { type: 'ol', items: [
          'Organize',
          'Prioritize',
          'Control',
          'Track'
        ]},
        { type: 'h2', content: 'TIPS?' },
        { type: 'ul', items: [
          'Don\\'t delay or postpone tasks',
          'Keep your study area clean and ready',
          'Create a "No Disturbance Zone"',
          'Use waiting time to do small tasks',
          'Always keep and update a to-do list',
          'Replace unproductive habits with useful ones'
        ]}
      ]
    }
  ]
};
`);

console.log('Finished writing extracted notes part 2');
