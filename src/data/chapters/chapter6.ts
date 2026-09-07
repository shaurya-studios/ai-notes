import { NativeChapter } from '../../types/content';
export const chapter6: NativeChapter = {
  id: 'ai-project-cycle', number: 'VI', title: 'Revisiting AI Project Cycle',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: AI Project Cycle' },
        { type: 'h2', content: 'Definition' },
        { type: 'p', content: 'A cyclical process followed to complete an AI project, from identifying the problem to deploying the solution.' },
        { type: 'h3', content: 'Stages of the AI Project Cycle' },
        { type: 'ol', items: [
          'Problem Scoping: Define the goal/problem, identify parameters affecting it.',
          'Data Acquisition: Collect data from reliable sources. Data is the base of AI.',
          'Data Exploration: Study patterns, trends, relationships in data. Decide which type of model to build.',
          'Model Building: Select suitable AI models, test models -> find the most efficient one.',
          'Model Evaluation: Test model on new/unseen data, evaluate performance.',
          'Deployment: Deploy in real-world environment. Ensure smooth operation.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 2: AI Domains' },
        { type: 'p', content: 'AI becomes intelligent based on the training data it receives. Depending on the type of data fed into an AI model, it can be classified into 3 main domains.' },
        { type: 'h2', content: 'Statistical Data' },
        { type: 'p', content: 'Related to data systems and processes. Collects, stores, and analyzes large datasets to derive meaning.' },
        { type: 'ul', items: ['Examples: Price Comparison Websites, Recommendation systems in tech, hospitality, automobiles.'] },
        { type: 'h2', content: 'Computer Vision' },
        { type: 'p', content: 'Ability of machines to analyze and understand visual data (images, videos, thermal).' },
        { type: 'ul', items: ['Examples: Agricultural Monitoring (crop health), Surveillance Systems.'] },
        { type: 'h2', content: 'Natural Language Processing' },
        { type: 'p', content: 'Interaction between computers and humans using natural language (spoken/written).' },
        { type: 'ul', items: ['Examples: Email filters (spam detection), Machine Translation (Google Translate).'] }
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: 'Session 3: Ethical Frameworks of AI' },
        { type: 'h2', content: 'What are Frameworks?' },
        { type: 'p', content: 'Step-by-step guides for solving problems. Provide structured approach ensuring all factors are considered.' },
        { type: 'h3', content: 'Ethical Frameworks' },
        { type: 'p', content: 'Ethics = values/morals to distinguish right vs wrong. Ethical frameworks ensure AI decisions do not cause unintended harm.' },
        { type: 'h3', content: 'Need for Ethical Frameworks in AI' },
        { type: 'ul', items: [
          'AI influences/decides outcomes (e.g., biased hiring algorithm).',
          'To ensure AI makes morally acceptable recommendations.',
          'Prevent harm and bias before deployment.'
        ]},
        { type: 'h3', content: 'Types of Ethical Frameworks' },
        { type: 'ul', items: [
          'Sector Based: Designed for specific industries (e.g. Bioethics in healthcare).',
          'Value Based: Based on moral philosophies & values (Rights-based, Utility-based, Virtue-based).'
        ]}
      ]
    }
  ]
};
