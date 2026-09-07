import { NativeChapter } from '../../types/content';
export const chapter7: NativeChapter = {
  id: 'ai-project-cycle', number: 'VII', title: 'Part B: AI Project Cycle',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'The AI Project Cycle' },
        { type: 'p', content: 'The AI Project Cycle is a step-by-step framework that guides the development of an AI project from start to finish. It ensures that the final model is accurate, ethical, and effectively solves the intended problem.' },
        { type: 'p', content: 'The standard cycle consists of 5 main stages:' },
        { type: 'ol', items: [
          'Problem Scoping: Defining the problem clearly using the 4Ws canvas.',
          'Data Acquisition: Collecting the necessary training and testing data.',
          'Data Exploration: Analyzing and visualizing the data to find patterns.',
          'Modelling: Training the AI algorithm using Learning-based or Rule-based approaches.',
          'Evaluation: Testing the model for accuracy using a Confusion Matrix.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Stage 1: Problem Scoping (The 4Ws Canvas)' },
        { type: 'p', content: 'Problem Scoping is the process of defining the exact boundaries of the problem you want to solve. We use the 4Ws Canvas to structure this:' },
        { type: 'ul', items: [
          'Who: Identifies the stakeholders. Who is facing the problem? Who will benefit from the solution?',
          'What: Defines the exact nature of the problem. What is the issue? How do you know it is a problem?',
          'Where: Defines the context or situation. Where does the problem arise (e.g., in schools, hospitals, online)?',
          'Why: Determines the value of the solution. Why is it important to solve this problem? What are the benefits?'
        ]},
        { type: 'callout', style: 'example', content: 'Problem Statement Template: Our [Who] have a problem that [What] when [Where]. An ideal solution would [Why].' }
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: 'Stage 2 & 3: Data Acquisition and Exploration' },
        { type: 'h2', content: 'Data Acquisition' },
        { type: 'p', content: 'AI models require massive amounts of data to learn. Data can be acquired through:' },
        { type: 'ul', items: [
          'Sensors and IoT devices (e.g., temperature sensors, cameras).',
          'Public Datasets (e.g., Kaggle, Government data portals).',
          'Web Scraping (extracting data automatically from websites).',
          'Surveys, questionnaires, and APIs.'
        ]},
        { type: 'callout', style: 'important', content: 'The data used to teach the model is called "Training Data". A separate, hidden portion of data kept aside for testing later is called "Testing Data".' },
        { type: 'h2', content: 'Data Exploration' },
        { type: 'p', content: 'Once data is collected, it must be visualized and analyzed to find trends, patterns, and outliers. Common visualization tools include:' },
        { type: 'ul', items: [
          'Bar Charts: For comparing categorical data.',
          'Line Charts: For showing trends over time.',
          'Scatter Plots: For finding the relationship/correlation between two variables.'
        ]}
      ]
    },
    {
      pageNumber: 4,
      blocks: [
        { type: 'h1', content: 'Stage 4: Modelling' },
        { type: 'p', content: 'Modelling is the process of building the AI algorithm. There are two primary approaches to AI Modelling:' },
        { type: 'table', headers: ['Approach', 'How it works', 'Use Case'], rows: [
          ['Rule-Based', 'The human developer hardcodes all the rules and logic (If/Then statements). The machine strictly follows them.', 'Simple smart systems, deterministic problems.'],
          ['Learning-Based', 'The machine is fed raw data and algorithms. It analyzes the data and discovers the patterns/rules on its own (Machine Learning).', 'Complex AI tasks like facial recognition or NLP.']
        ]},
        { type: 'h2', content: 'Categories of Learning-Based Approaches' },
        { type: 'ol', items: [
          'Supervised Learning: The model is trained on labeled data. The correct answer (label) is provided during training. (E.g., showing images of cats and explicitly telling the AI "this is a cat"). Includes Classification and Regression.',
          'Unsupervised Learning: The model is trained on unlabeled data. It must find hidden patterns and group the data by similarities (Clustering).',
          'Reinforcement Learning: The model learns by trial and error. It is rewarded for correct actions and punished for wrong ones (e.g., training a machine to play Chess).'
        ]}
      ]
    }
  ]
};
