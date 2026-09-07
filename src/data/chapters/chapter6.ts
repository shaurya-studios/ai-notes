import { NativeChapter } from '../../types/content';
export const chapter6: NativeChapter = {
  id: 'intro-to-ai', number: 'VI', title: 'Part B: Introduction to Artificial Intelligence',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: '1. Introduction to Artificial Intelligence' },
        { type: 'p', content: 'Artificial Intelligence (AI) is a way of making a computer, a computer-controlled robot, or a software think intelligently, in the similar manner the intelligent humans think. It is the simulation of human intelligence processes by machines.' },
        { type: 'h2', content: 'Intelligence: The Core of AI' },
        { type: 'p', content: 'To understand AI, we must first understand "Intelligence". Intelligence is the ability to perceive or infer information, and to retain it as knowledge to be applied towards adaptive behaviors within an environment or context.' },
        { type: 'ul', items: [
          'Linguistic Intelligence: Ability to process information using words (e.g., journalists, writers).',
          'Logical-Mathematical Intelligence: Ability to process information using numbers and logical rules (e.g., scientists, mathematicians).',
          'Spatial Intelligence: Ability to process information using images and spatial relations (e.g., architects).',
          'Kinesthetic Intelligence: Ability to use one\'s body to solve problems (e.g., athletes, dancers).'
        ]},
        { type: 'callout', style: 'important', content: 'What is NOT AI? A fully automatic washing machine or an automatic door are NOT Artificial Intelligence. They are simply automated machines following hard-coded instructions. They cannot learn or make decisions.' }
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: '2. Artificial Intelligence vs. Machine Learning vs. Deep Learning' },
        { type: 'p', content: 'These three terms form a concentric hierarchy in computer science.' },
        { type: 'definition', term: 'Artificial Intelligence (AI)', definition: 'Any technique that enables computers to mimic human intelligence. It includes both rule-based systems and learning-based systems.' },
        { type: 'definition', term: 'Machine Learning (ML)', definition: 'A subset of AI that uses statistical techniques to give machines the ability to "learn" with data without being explicitly programmed.' },
        { type: 'definition', term: 'Deep Learning (DL)', definition: 'A subset of ML that is inspired by the human brain (Artificial Neural Networks) and is used to solve highly complex problems, especially with massive amounts of unstructured data (like images and audio).' },
        { 
          type: 'diagram', 
          id: 'ai-ml-dl-venn', 
          title: 'AI, ML, DL Relationship', 
          description: 'Concentric circles demonstrating how DL is a subset of ML, which is a subset of AI.',
          svgCode: '<svg viewBox="0 0 400 400" width="100%" height="300" xmlns="http://www.w3.org/2000/svg"><circle cx="200" cy="200" r="160" fill="none" stroke="#D4AF37" stroke-width="3"/><text x="200" y="70" text-anchor="middle" fill="currentColor" font-weight="bold">Artificial Intelligence (AI)</text><circle cx="200" cy="230" r="110" fill="none" stroke="#888" stroke-width="2"/><text x="200" y="150" text-anchor="middle" fill="currentColor">Machine Learning (ML)</text><circle cx="200" cy="270" r="60" fill="none" stroke="#555" stroke-width="2"/><text x="200" y="275" text-anchor="middle" fill="currentColor">Deep Learning</text></svg>'
        }
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: '3. Domains of AI' },
        { type: 'p', content: 'Artificial Intelligence is broadly divided into three main domains that interact with the physical world and data.' },
        { type: 'table', headers: ['Domain', 'Description', 'Real-World Examples'], rows: [
          ['Data Sciences', 'Extracts knowledge and insights from structured and unstructured data using scientific methods and algorithms.', 'Price prediction, targeted advertising, fraud detection.'],
          ['Computer Vision (CV)', 'Enables machines to see, process, and interpret visual data (images and videos).', 'Face unlock, autonomous cars, medical scan analysis.'],
          ['Natural Language Processing (NLP)', 'Enables machines to understand, interpret, and generate human language.', 'Siri, Alexa, Google Translate, Chatbots.']
        ]}
      ]
    },
    {
      pageNumber: 4,
      blocks: [
        { type: 'h1', content: '4. AI Ethics' },
        { type: 'p', content: 'As AI becomes more powerful, ethical considerations are crucial to ensure it benefits society without causing harm.' },
        { type: 'ul', items: [
          'Data Privacy: AI systems require massive amounts of data. Ensuring user data is collected ethically and kept secure is a major concern.',
          'AI Bias: If an AI model is trained on biased data, it will make biased decisions. For example, an AI hiring tool might unfairly reject candidates from certain demographics if historical data was biased.',
          'Accountability: If an autonomous AI (like a self-driving car) makes a mistake and causes an accident, who is responsible? The developer, the owner, or the AI itself?',
          'Transparency (Black Box AI): Many Deep Learning models are so complex that even their creators cannot fully explain how they reached a specific decision. This lack of transparency is dangerous in fields like medicine or criminal justice.'
        ]}
      ]
    }
  ]
};
