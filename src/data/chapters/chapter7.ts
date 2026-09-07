import { NativeChapter } from '../../types/content';
export const chapter7: NativeChapter = {
  id: 'ai-project-cycle', number: 'VII', title: 'Part B: AI Project Cycle',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Scoping and Acquisition' },
        { type: 'p', content: 'The AI Project Cycle consists of 5 standard stages: Problem Scoping, Data Acquisition, Data Exploration, Modelling, and Evaluation.' },
        { type: 'h2', content: '1. Problem Scoping (The 4Ws Canvas)' },
        { type: 'p', content: 'Identifying the exact problem to solve using the 4Ws:' },
        { type: 'ul', items: [
          'Who: Who are the stakeholders facing the problem?',
          'What: What exactly is the problem?',
          'Where: Where does the problem arise (Context)?',
          'Why: Why is it important to solve this problem?'
        ]},
        { type: 'h2', content: '2. Data Acquisition' },
        { type: 'p', content: 'Collecting the necessary data. Data can be acquired via:' },
        { type: 'ul', items: [
          'Sensors and IoT devices.',
          'Public Datasets (Kaggle, Government Portals).',
          'Web Scraping.',
          'Surveys and APIs.'
        ]},
        { type: 'callout', style: 'note', content: 'The data used to teach the model is "Training Data", while the data used to test it later is "Testing Data".' }
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h2', content: '3. Data Exploration' },
        { type: 'p', content: 'Visualizing data to identify trends, patterns, and outliers. Common tools include Bar Charts (categorical comparison), Line Charts (trends over time), and Scatter Plots (relationships between variables).' },
        { type: 'h2', content: '4. Modelling' },
        { type: 'p', content: 'Training the machine using algorithms. There are two main approaches:' },
        { type: 'table', headers: ['Approach', 'How it works'], rows: [
          ['Rule-Based', 'The developer hardcodes the rules (If/Then logic). The machine simply follows them.'],
          ['Learning-Based', 'The machine analyzes raw data and finds the rules/patterns itself (Machine Learning).']
        ]},
        { type: 'h3', content: 'Learning-Based Approaches:' },
        { type: 'ol', items: [
          'Supervised Learning: Trained on labeled data (answers provided).',
          'Unsupervised Learning: Trained on unlabeled data (machine clusters data by similarities).',
          'Reinforcement Learning: Learns via rewards and punishments.'
        ]},
        { type: 'h2', content: '5. Evaluation' },
        { type: 'p', content: 'Testing the trained model against Testing Data to ensure it accurately predicts real-world scenarios.' }
      ]
    }
  ]
};
