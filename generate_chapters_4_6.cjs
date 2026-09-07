const fs = require('fs');

const ch4 = `import { NativeChapter } from '../../types/content';

export const chapter4: NativeChapter = {
  id: 'entrepreneurial-skills',
  number: 'IV',
  title: 'Part A: Entrepreneurial Skills - II',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Entrepreneurship and Society' },
        { type: 'p', content: 'Entrepreneurship is the process of developing, organizing, and running a new business to generate profit while taking on financial risk.' },
        { type: 'h2', content: 'Role of Entrepreneurship in Society' },
        { type: 'ul', items: [
          'Wealth Creation: Generates wealth for the nation and individuals.',
          'Job Creation: Provides employment opportunities to society.',
          'Standard of Living: Introduces new products/services that improve quality of life.',
          'Community Development: Entrepreneurs often invest back into local communities.'
        ]},
        { type: 'h2', content: 'Qualities of a Successful Entrepreneur' },
        { type: 'p', content: 'To succeed in a highly competitive market, an entrepreneur must possess certain inherent qualities:' },
        { type: 'ol', items: [
          'Risk Taker: Willing to take calculated risks for future gains.',
          'Hard Working: Dedicated to their venture round the clock.',
          'Confident: Belief in their own abilities and ideas.',
          'Innovative: Always looking for creative solutions and improvements.',
          'Resilient: Ability to bounce back from failures and rejections.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 2: Functions of an Entrepreneur' },
        { type: 'p', content: 'An entrepreneur performs various functions to ensure the smooth operation of their enterprise.' },
        { type: 'table', headers: ['Function', 'Description'], rows: [
          ['Innovation', 'Introducing new products, methods, or entering new markets.'],
          ['Risk-taking', 'Assuming the financial and operational risks associated with the business.'],
          ['Organization', 'Bringing together land, labor, and capital to produce goods.'],
          ['Decision Making', 'Making crucial choices regarding prices, marketing, and expansion.']
        ]},
        { type: 'h2', content: 'Myths about Entrepreneurship' },
        { type: 'ul', items: [
          'Myth 1: Entrepreneurs are born, not made. (Fact: Skills can be learned)',
          'Myth 2: You need a lot of money to start. (Fact: Many start with minimal capital)',
          'Myth 3: Entrepreneurs are extreme risk-takers. (Fact: They take calculated risks)'
        ]},
        { type: 'callout', style: 'important', content: 'Entrepreneurship is not just about making money; it is about solving problems and creating value for society.' }
      ]
    }
  ]
};
`;

const ch5 = `import { NativeChapter } from '../../types/content';

export const chapter5: NativeChapter = {
  id: 'green-skills',
  number: 'V',
  title: 'Part A: Green Skills - II',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Sustainable Development' },
        { type: 'p', content: 'Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs.' },
        { type: 'h2', content: 'Core Components of Sustainability' },
        { type: 'ul', items: [
          'Economic Growth: Generating wealth without harming the environment.',
          'Environmental Protection: Preserving natural resources and reducing pollution.',
          'Social Inclusion: Ensuring equitable distribution of wealth and resources.'
        ]},
        { type: 'definition', term: 'SDGs', definition: 'Sustainable Development Goals. A collection of 17 global goals set by the UN to transform our world by 2030.' }
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 2: Role in Sustainable Development' },
        { type: 'h2', content: 'How individuals can contribute' },
        { type: 'p', content: 'Every individual plays a critical role in achieving a sustainable future. We must adopt eco-friendly practices in our daily lives.' },
        { type: 'ol', items: [
          'Reduce, Reuse, Recycle: Minimize waste generation.',
          'Conserve Water: Fix leaks, use water-efficient fixtures.',
          'Save Energy: Switch off appliances when not in use, use LED lights.',
          'Promote Green Transport: Carpool, use public transport, or cycle.'
        ]},
        { type: 'callout', style: 'example', content: 'Using a cloth bag instead of a single-use plastic bag for groceries is a simple step towards sustainable development.' }
      ]
    }
  ]
};
`;

const ch6 = `import { NativeChapter } from '../../types/content';

export const chapter6: NativeChapter = {
  id: 'ai-project-cycle',
  number: 'VI',
  title: 'Part B: AI Project Cycle',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Introduction to AI Project Cycle' },
        { type: 'p', content: 'The AI Project Cycle is a step-by-step process that a team follows to build an AI model. It ensures the problem is well-understood and the solution is effective.' },
        { type: 'h2', content: 'The 5 Stages of AI Project Cycle' },
        { type: 'ol', items: [
          'Problem Scoping: Defining the problem clearly using the 4Ws canvas.',
          'Data Acquisition: Collecting the necessary data from reliable sources.',
          'Data Exploration: Visualizing and analyzing the data to find patterns.',
          'Modelling: Selecting the right AI algorithm to train the model.',
          'Evaluation: Testing the model with real-world data to verify accuracy.'
        ]},
        { type: 'h2', content: '1. Problem Scoping (The 4Ws Canvas)' },
        { type: 'p', content: 'Before solving a problem, we must understand it fully.' },
        { type: 'table', headers: ['W', 'Question', 'Details'], rows: [
          ['Who', 'Who is facing the problem?', 'Identifies stakeholders, demographics.'],
          ['What', 'What is the exact problem?', 'Defines the core issue clearly.'],
          ['Where', 'Where is the problem occurring?', 'Defines the context, location, or scenario.'],
          ['Why', 'Why is solving it valuable?', 'Identifies the benefits and outcomes.']
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h2', content: '2. Data Acquisition' },
        { type: 'p', content: 'Data is the fuel for any AI system. Collecting accurate and diverse data is crucial.' },
        { type: 'ul', items: [
          'Sensors and IoT devices (temperature, motion, cameras).',
          'Web scraping and public datasets (Kaggle, Govt portals).',
          'Surveys and user inputs.'
        ]},
        { type: 'h2', content: '3. Data Exploration' },
        { type: 'p', content: 'Once data is acquired, it needs to be explored and visualized to understand trends.' },
        { type: 'ul', items: [
          'Line Charts: Used for showing trends over time.',
          'Bar Graphs: Used for comparing categorical data.',
          'Scatter Plots: Used to observe relationships between two variables.'
        ]},
        { type: 'callout', style: 'important', content: 'If the data is biased or incomplete, the AI model will be flawed. Garbage In, Garbage Out (GIGO).' }
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h2', content: '4. Modelling' },
        { type: 'p', content: 'Modelling is the phase where the AI system learns from the data. There are two main approaches:' },
        { type: 'table', headers: ['Approach', 'Description'], rows: [
          ['Rule-Based', 'Developer sets explicit rules (If-Then conditions). Best for simple problems.'],
          ['Learning-Based', 'Machine learns patterns from data autonomously (Machine Learning/Deep Learning).']
        ]},
        { type: 'h3', content: 'Machine Learning Types' },
        { type: 'ul', items: [
          'Supervised Learning: Model learns from labeled data (e.g., Image classification).',
          'Unsupervised Learning: Model learns from unlabeled data (e.g., Customer clustering).',
          'Reinforcement Learning: Model learns by trial and error through rewards/punishments.'
        ]},
        { type: 'h2', content: '5. Evaluation' },
        { type: 'p', content: 'Evaluation ensures the model performs well in real-world scenarios. We test it against unseen Testing Data.' }
      ]
    }
  ]
};
`;

fs.writeFileSync('src/data/chapters/chapter4.ts', ch4);
fs.writeFileSync('src/data/chapters/chapter5.ts', ch5);
fs.writeFileSync('src/data/chapters/chapter6.ts', ch6);
console.log('Chapters 4-6 regenerated');
