const fs = require('fs');

const ch1 = `import { NativeChapter } from '../../types/content';

export const chapter1: NativeChapter = {
  id: 'communication-skills',
  number: 'I',
  title: 'Part A: Communication Skills - II',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Methods of Communication' },
        { type: 'h2', content: 'What is Communication?' },
        { type: 'p', content: 'Communication is the process of exchanging information, ideas, thoughts, or feelings between individuals through a common system of symbols, signs, or behavior. The word communication came from the Latin word "communicare" meaning "to share".' },
        { type: 'callout', style: 'important', content: 'In any business or personal environment, clear communication prevents misunderstandings, builds relationships, and is a cornerstone of employability skills.' },
        { type: 'h3', content: 'The Communication Cycle' },
        { type: 'p', content: 'Communication is a two-way process that follows a specific cycle:' },
        { type: 'ol', items: [
          'Sender: The person who originates the message.',
          'Message: The actual information, idea, or thought to be conveyed.',
          'Encoding: How the sender translates the idea into a message (words, gestures).',
          'Channel: The medium used to transmit the message (spoken, written, digital).',
          'Receiver: The person to whom the message is directed.',
          'Decoding: How the receiver interprets the message.',
          'Feedback: The receiver\\'s response, confirming they have understood the message.'
        ]},
        { type: 'h2', content: 'Types of Communication' },
        { type: 'h3', content: '1. Verbal Communication' },
        { type: 'p', content: 'Verbal communication involves the use of sounds and words to express yourself. It is further divided into Oral and Written communication.' },
        { type: 'table', headers: ['Type', 'Description', 'Examples'], rows: [
          ['Oral', 'Spoken words, varying tone and pitch', 'Phone calls, meetings, presentations'],
          ['Written', 'Printed or digital text', 'Emails, reports, letters, SMS']
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h3', content: '2. Non-Verbal Communication' },
        { type: 'p', content: 'Non-verbal communication is the act of conveying a thought, feeling, or idea through physical gestures, posture, and facial expressions. Up to 55% of human communication is non-verbal.' },
        { type: 'ul', items: [
          'Facial Expressions: Smiles, frowns, raising eyebrows.',
          'Posture: Standing straight shows confidence; slouching indicates disinterest.',
          'Gestures: Pointing, waving, using hands while speaking.',
          'Eye Contact: Maintaining eye contact shows attention and honesty.',
          'Paralanguage: The tone, pitch, and speed of your voice.'
        ]},
        { type: 'h3', content: '3. Visual Communication' },
        { type: 'p', content: 'Visual communication involves using visual elements to convey information. This is very effective for data representation and safety.' },
        { type: 'ul', items: [
          'Signs, typography, drawing, graphic design, and color.',
          'Examples: Traffic signs, pie charts, infographics.'
        ]},
        { type: 'h2', content: 'Barriers to Communication' },
        { type: 'p', content: 'Barriers are obstacles that cause a breakdown in communication, leading to misunderstandings.' },
        { type: 'table', headers: ['Barrier Type', 'Explanation'], rows: [
          ['Physical', 'Noise, poor lighting, distance between speakers, faulty equipment.'],
          ['Linguistic / Semantic', 'Use of jargon, regional dialects, or unknown languages.'],
          ['Psychological', 'Stress, anger, anxiety, or lack of trust between parties.'],
          ['Organizational', 'Strict rules, hierarchical structures preventing open communication.']
        ]}
      ]
    }
  ]
};
`;

const ch2 = `import { NativeChapter } from '../../types/content';

export const chapter2: NativeChapter = {
  id: 'self-management',
  number: 'II',
  title: 'Part A: Self-Management Skills - II',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Stress Management' },
        { type: 'p', content: 'Self-management, also referred to as "self-control" or "self-regulation", is the ability to regulate one\\'s emotions, thoughts, and behaviors effectively in different situations.' },
        { type: 'h2', content: 'Understanding Stress' },
        { type: 'p', content: 'Stress is our body\\'s response to demands or threats (stressors). When you feel threatened, your nervous system responds by releasing a flood of stress hormones, including adrenaline and cortisol, which rouse the body for emergency action. This is the "fight-or-flight" response.' },
        { type: 'callout', style: 'note', content: 'Not all stress is bad. Positive stress (Eustress) can motivate you to study for an exam or meet a deadline. Negative stress (Distress) causes anxiety and can harm health.' },
        { type: 'h3', content: 'Stress Management Techniques' },
        { type: 'ul', items: [
          'Physical Exercise: Doing yoga, walking, or participating in sports.',
          'Healthy Diet: Eating nutritious food helps maintain energy levels.',
          'Sleep: Getting 7-8 hours of quality sleep daily.',
          'Relaxation Techniques: Deep breathing, meditation, and listening to calming music.',
          'Time Management: Planning and prioritizing tasks to avoid last-minute panic.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 2: Self-Awareness & Goal Setting' },
        { type: 'h2', content: 'What is Self-Awareness?' },
        { type: 'p', content: 'Self-awareness is having a clear perception of your personality, including strengths, weaknesses, thoughts, beliefs, motivation, and emotions. It allows you to understand other people, how they perceive you, and your attitude.' },
        { type: 'definition', term: 'SWOT Analysis', definition: 'A framework for identifying your Strengths, Weaknesses, Opportunities, and Threats.' },
        { type: 'h2', content: 'Goal Setting' },
        { type: 'p', content: 'Goal setting is the process of deciding what you want to accomplish and devising a plan to achieve it. Effective goal setting follows the SMART framework.' },
        { type: 'table', headers: ['SMART Letter', 'Meaning', 'Description'], rows: [
          ['S', 'Specific', 'Goals should be clear and well-defined. (e.g., "I want to score 95% in Math")'],
          ['M', 'Measurable', 'You must be able to track your progress. (e.g., "I will complete 2 chapters every week")'],
          ['A', 'Achievable', 'Goals should be realistic based on your current abilities.'],
          ['R', 'Relevant', 'The goal must matter to you and align with your broader objectives.'],
          ['T', 'Time-bound', 'Every goal needs a deadline. (e.g., "By the end of November")']
        ]},
        { type: 'callout', style: 'important', content: 'Setting SMART goals turns vague aspirations into actionable step-by-step plans.' }
      ]
    }
  ]
};
`;

const ch3 = `import { NativeChapter } from '../../types/content';

export const chapter3: NativeChapter = {
  id: 'ict-skills',
  number: 'III',
  title: 'Part A: ICT Skills - II',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Advanced OS & Digital Security' },
        { type: 'p', content: 'Information and Communication Technology (ICT) refers to all the technology used to handle telecommunications, broadcast media, intelligent building management systems, and audiovisual processing.' },
        { type: 'h2', content: 'Operating System Operations' },
        { type: 'p', content: 'An Operating System (OS) is software that manages computer hardware and software resources and provides common services for computer programs. Examples include Windows, Linux, macOS, and Android.' },
        { type: 'ul', items: [
          'File Management: Creating, deleting, and moving files/folders.',
          'Memory Management: Allocating RAM to running applications.',
          'Process Management: Managing the execution of processes.'
        ]},
        { type: 'h2', content: 'Digital Security Basics' },
        { type: 'p', content: 'Protecting your computer and data from unauthorized access, damage, or theft is paramount in the digital age.' }
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h3', content: 'Threats to Digital Security' },
        { type: 'table', headers: ['Threat', 'Description'], rows: [
          ['Virus', 'A malicious software program loaded onto a user\\'s computer without their knowledge that performs malicious actions.'],
          ['Worms', 'Standalone malware computer programs that replicate themselves in order to spread to other computers.'],
          ['Trojan Horse', 'Malware disguised as legitimate software.'],
          ['Phishing', 'Fraudulent attempts to obtain sensitive information (like passwords) by disguising as a trustworthy entity via email.']
        ]},
        { type: 'h3', content: 'Security Measures' },
        { type: 'ul', items: [
          'Antivirus Software: Install and regularly update robust antivirus software.',
          'Strong Passwords: Use complex passwords involving alphanumeric characters and symbols.',
          'Firewalls: Keep network firewalls enabled to block unauthorized external access.',
          'Data Backup: Regularly back up important data to external drives or cloud storage.'
        ]},
        { type: 'callout', style: 'important', content: 'Always keep your Operating System and applications up to date to patch known security vulnerabilities.' }
      ]
    }
  ]
};
`;

fs.writeFileSync('src/data/chapters/chapter1.ts', ch1);
fs.writeFileSync('src/data/chapters/chapter2.ts', ch2);
fs.writeFileSync('src/data/chapters/chapter3.ts', ch3);
console.log('Chapters 1-3 regenerated');
