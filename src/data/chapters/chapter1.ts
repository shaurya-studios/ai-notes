import { NativeChapter } from '../../types/content';
export const chapter1: NativeChapter = {
  id: 'communication-skills', number: 'I', title: 'Part A: Communication Skills - II',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Methods of Communication' },
        { type: 'p', content: 'Communication is the process of exchanging information, ideas, thoughts, or feelings between individuals. It comes from the Latin word "communicare", meaning "to share".' },
        { type: 'h2', content: 'The Communication Cycle' },
        { type: 'ol', items: [
          'Sender: The person originating the message.',
          'Message: The actual information conveyed.',
          'Encoding: Converting the idea into a communicable format.',
          'Channel: The medium of communication (e.g., spoken, written).',
          'Receiver: The person who gets the message.',
          'Decoding: Interpreting the message.',
          'Feedback: The receiver\'s acknowledgement and response to the sender.'
        ]},
        { type: 'h2', content: 'Types of Communication' },
        { type: 'table', headers: ['Type', 'Description', 'Examples'], rows: [
          ['Verbal (Oral)', 'Spoken words with varying tone/pitch.', 'Face-to-face, phone calls.'],
          ['Verbal (Written)', 'Printed or digital text.', 'Emails, letters, SMS.'],
          ['Non-Verbal', 'Gestures, expressions, posture.', 'Nodding, smiling, eye contact.'],
          ['Visual', 'Images, signs, and symbols.', 'Traffic signs, pie charts.']
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 2: Communication Barriers & Principles' },
        { type: 'p', content: 'Obstacles that prevent a message from being correctly understood are called barriers to communication.' },
        { type: 'ul', items: [
          'Physical Barriers: Environmental noise, distance, faulty equipment.',
          'Linguistic Barriers: Language differences, use of jargon, complex words.',
          'Psychological Barriers: Stress, anger, lack of trust, prejudice.',
          'Organizational Barriers: Strict company hierarchy preventing open feedback.'
        ]},
        { type: 'h2', content: 'The 7Cs of Effective Communication' },
        { type: 'ul', items: [
          'Clear: Be clear about what you want to say.',
          'Concise: Keep it brief. Use simple words.',
          'Concrete: Provide exact facts and figures.',
          'Correct: Ensure factual and grammatical accuracy.',
          'Coherent: Your words should make sense and flow logically.',
          'Complete: Your message must contain all necessary information.',
          'Courteous: Be polite, respectful, and friendly.'
        ]},
        { type: 'callout', style: 'important', content: 'Feedback is the most critical component as it ensures the communication cycle is successful and the message was understood.' }
      ]
    }
  ]
};
