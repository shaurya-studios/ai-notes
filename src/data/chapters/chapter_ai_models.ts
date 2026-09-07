import { NativeChapter } from '../../types/content';
export const chapter_ai_models: NativeChapter = {
  id: 'ai-models-advanced', number: 'I', title: 'Advanced Concepts of Modeling in AI',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Revisiting AI, ML, DL' },
        { type: 'definition', term: 'Artificial Intelligence', definition: 'Man Made Thinking Ability' },
        { 
          type: 'diagram', 
          id: 'ai-ml-dl-venn-custom', 
          title: 'AI, ML, DL Relationship', 
          description: 'Concentric hierarchy of Artificial Intelligence.',
          svgCode: '<svg viewBox="0 0 400 400" width="100%" height="300" xmlns="http://www.w3.org/2000/svg"><circle cx="200" cy="200" r="160" fill="#fce4ec" stroke="#f48fb1" stroke-width="3"/><text x="200" y="70" text-anchor="middle" fill="#880e4f" font-weight="bold">Artificial Intelligence</text><circle cx="200" cy="230" r="110" fill="#ffccbc" stroke="#ff8a65" stroke-width="2"/><text x="200" y="150" text-anchor="middle" fill="#bf360c">Machine Learning</text><circle cx="200" cy="270" r="60" fill="#ffab91" stroke="#ff7043" stroke-width="2"/><text x="200" y="275" text-anchor="middle" fill="#bf360c">Deep Learning</text></svg>'
        },
        { type: 'h2', content: 'Machine Learning?' },
        { type: 'ul', items: [
          'Subset of AI.',
          'Machines learn from new data + mistakes.',
          'Improves performance with each iteration.',
          'Uses data for training.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Deep Learning & Data' },
        { type: 'h2', content: 'Deep Learning?' },
        { type: 'ul', items: [
          'Subset of ML.',
          'Uses Artificial Neural Networks (ANNs).',
          'Learns from huge amounts of data.',
          'Self trains & generates intelligent algorithms.'
        ]},
        { type: 'h2', content: 'What is Data?' },
        { type: 'p', content: 'Collection of raw facts and figures.' },
        { type: 'table', headers: ['Fruit', 'Color', 'Price'], rows: [
          ['Apple', 'Red', '$1.8'],
          ['Orange', 'Orange', '$2'],
          ['Banana', 'Yellow', '$1'],
          ['Grape', 'Purple', '$3']
        ]},
        { type: 'definition', term: 'What are Features?', definition: 'Columns of Tables.' },
        { type: 'h2', content: 'Labeled vs Unlabeled Data' },
        { type: 'p', content: 'Labelled data has clear tags (e.g., identifying a dog or cat explicitly). Unlabelled data lacks these tags and requires the machine to find patterns on its own.' }
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: 'Session 2: AI Modelling' },
        { type: 'definition', term: 'AI Modelling?', definition: 'Developing algorithms (models) which can be trained to give intelligent outputs. Writing codes to make a machine artificially intelligent.' },
        { type: 'h2', content: 'AI Model Types?' },
        { type: 'h3', content: '1. Rule Based' },
        { type: 'ul', items: [
          'Developer defines the rules/patterns, machine follows them.',
          'Machine doesn\'t learn/adapt to new data.',
          'Static learning: once trained, cannot change.',
          'Eg Chatbot of clothing brand'
        ]},
        { type: 'h3', content: '2. Learning Based' },
        { type: 'ul', items: [
          'Machine learns by itself from examples & feedback.',
          'Adaptive → modifies algorithm when data changes.',
          'Finds hidden patterns, clusters, rules.',
          'Eg Spam Detector'
        ]}
      ]
    },
    {
      pageNumber: 4,
      blocks: [
        { type: 'h1', content: 'ML Categories?' },
        { type: 'h3', content: '1. Supervised Learning' },
        { type: 'ul', items: [
          'Trained with labeled data.',
          'Learns mapping: Features → Labels',
          'Eg: Currency coins predicted by weight. Predicting grades based on marks.'
        ]},
        { type: 'p', content: 'Sub-types:' },
        { type: 'ul', items: [
          'Classification Model: Predicts categories (discrete output). e.g., Hot/Cold weather, Spam/Not spam.',
          'Regression Model: Predicts continuous values. e.g., House Price, Salary, Temperature.'
        ]},
        { type: 'h3', content: '2. Unsupervised Learning' },
        { type: 'ul', items: [
          'Works on unlabeled data.',
          'Finds hidden patterns, groups, similarities.',
          'Learns without teacher/supervisor.',
          'Eg: 1000 dog images → clusters by color/size. Supermarket customer data → clusters grocery shoppers.'
        ]},
        { type: 'p', content: 'Sub-types:' },
        { type: 'ul', items: [
          'Clustering: Groups similar items. e.g., Songs grouped by tempo/intensity.',
          'Association: Finds item relationships. e.g., If customer buys bread, also buys butter.'
        ]}
      ]
    },
    {
      pageNumber: 5,
      blocks: [
        { type: 'h1', content: 'Session 3: Artificial Neural Network (ANN)' },
        { type: 'definition', term: 'ANN?', definition: 'Inspired by human brain. Extracts features automatically.' },
        { type: 'h2', content: 'Structure?' },
        { type: 'ul', items: [
          'Input Layer: Takes raw data, no processing.',
          'Hidden Layers: Do all the processing using weights, biases & activation functions.',
          'Output Layer: Produces final result, no processing.',
          'Each layer → made of nodes (neurons).'
        ]},
        { type: 'h2', content: 'Working?' },
        { type: 'ul', items: [
          'Input → goes to hidden layers.',
          'Hidden layers compute using weights & biases.',
          'Apply an activation function.',
          'Output is generated.',
          'Errors compared → weights updated (backpropagation).'
        ]}
      ]
    },
    {
      pageNumber: 6,
      blocks: [
        { type: 'h1', content: 'Applications of Neural Networks' },
        { type: 'ul', items: [
          'Facial Recognition',
          'Stock Market Prediction',
          'Social Media algorithms',
          'Aerospace',
          'Signature and Handwriting Analysis',
          'Healthcare',
          'Defence',
          'Weather Forecasting'
        ]},
        { type: 'definition', term: 'Convolutional Neural Network?', definition: 'Specialized for images. Detects & assigns weights to image features. Used in face recognition, object detection, etc.' }
      ]
    }
  ]
};
