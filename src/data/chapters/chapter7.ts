import { NativeChapter } from '../../types/content';
export const chapter7: NativeChapter = {
  id: 'ai-project-cycle', number: 'VII', title: 'Part B: AI Project Cycle',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: '1. The AI Project Cycle' },
        { type: 'p', content: 'The AI Project Cycle is a step-by-step framework to ensure that AI projects are well-planned, executed efficiently, and solve the right problems.' },
        { 
          type: 'diagram', 
          id: 'ai-cycle-diagram', 
          title: '5 Stages of the AI Project Cycle', 
          description: 'The standard sequential flow of an AI project.',
          svgCode: '<svg viewBox="0 0 600 150" width="100%" height="150" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-width="2"><rect x="10" y="40" width="100" height="60" rx="10"/><rect x="130" y="40" width="100" height="60" rx="10"/><rect x="250" y="40" width="100" height="60" rx="10"/><rect x="370" y="40" width="100" height="60" rx="10"/><rect x="490" y="40" width="100" height="60" rx="10"/><path d="M110 70 h20 M230 70 h20 M350 70 h20 M470 70 h20" stroke="#D4AF37" marker-end="url(#arrow)"/></g><g font-size="12" fill="currentColor" text-anchor="middle"><text x="60" y="75">Problem</text><text x="60" y="90">Scoping</text><text x="180" y="75">Data</text><text x="180" y="90">Acquisition</text><text x="300" y="75">Data</text><text x="300" y="90">Exploration</text><text x="420" y="80">Modelling</text><text x="540" y="80">Evaluation</text></g><defs><marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#D4AF37"/></marker></defs></svg>'
        }
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: '2. Problem Scoping (The 4Ws Canvas)' },
        { type: 'p', content: 'Problem Scoping means finalizing the aim of the AI system. We use the 4Ws Canvas to deeply analyze the problem.' },
        { type: 'ul', items: [
          'Who: Refers to the people who are facing the problem (the stakeholders).',
          'What: Identifies the exact nature of the problem and the evidence that proves it is a problem.',
          'Where: The context, situation, or location where the problem arises.',
          'Why: Why does the problem need to be solved? What are the benefits?'
        ]},
        { type: 'callout', style: 'example', content: 'Problem Statement Template: Our [WHO] have a problem that [WHAT] when [WHERE]. An ideal solution would [WHY].' }
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: '3. Data Acquisition' },
        { type: 'p', content: 'Data is the core of any AI system. We must acquire relevant, reliable, and authentic data to train the model.' },
        { type: 'h2', content: 'Types of Data Sets' },
        { type: 'ul', items: [
          'Training Data: The larger portion of the dataset used to train the machine learning model so it can learn patterns.',
          'Testing Data: A hidden portion of the dataset (usually 20%) used to evaluate the model\'s performance after training.'
        ]},
        { type: 'h2', content: 'Methods of Data Acquisition' },
        { type: 'p', content: 'Data can be collected via Web Scraping, Sensors (IoT), Surveys, APIs, and Public datasets (like Kaggle or Government portals).' }
      ]
    },
    {
      pageNumber: 4,
      blocks: [
        { type: 'h1', content: '4. Data Exploration' },
        { type: 'p', content: 'Before passing data into a model, it must be visualized to understand trends and identify outliers.' },
        { type: 'ul', items: [
          'Bar Charts: Used to compare categorical variables.',
          'Line Charts: Used to show continuous data and trends over time.',
          'Scatter Plots: Used to show the relationship (correlation) between two numerical variables.'
        ]}
      ]
    },
    {
      pageNumber: 5,
      blocks: [
        { type: 'h1', content: '5. Modelling' },
        { type: 'p', content: 'Modelling is the process of creating the AI algorithm. AI Modelling is broadly categorized into two approaches:' },
        { type: 'table', headers: ['Rule-Based Approach', 'Learning-Based Approach'], rows: [
          ['The developer explicitly feeds the rules and the data to the machine.', 'The machine is fed raw data and the expected output; it figures out the rules itself.'],
          ['Deterministic and rigid.', 'Adaptive and improves with more data.'],
          ['Used for simple problems like early chatbots.', 'Used for complex tasks like image recognition.']
        ]},
        { type: 'h2', content: 'Types of Learning Models' },
        { type: 'ul', items: [
          'Supervised Learning: The model learns on a labeled dataset (data + correct answers). Types: Classification (predicting discrete categories) and Regression (predicting continuous numerical values).',
          'Unsupervised Learning: The model learns on unlabeled data. It must find hidden structures (Clustering).',
          'Reinforcement Learning: The model learns by interacting with its environment, receiving rewards for correct actions and penalties for wrong ones.'
        ]}
      ]
    }
  ]
};
