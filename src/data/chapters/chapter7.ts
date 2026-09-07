import { NativeChapter } from '../../types/content';
export const chapter7: NativeChapter = {
  id: 'ai-modeling', number: 'VII', title: 'Advanced Concepts of Modeling',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: '2.1 Revisiting AI ML DL' },
        { type: 'definition', term: 'Artificial Intelligence', definition: 'Artificial (Man Made) + Intelligence (Thinking Ability)' },
        { type: 'h2', content: 'Machine Learning' },
        { type: 'ul', items: [
          'Subset of AI.',
          'Machines learn from new data + mistakes.',
          'Improves performance with each iteration.',
          'Uses data for training.'
        ]},
        { type: 'h2', content: 'Deep Learning' },
        { type: 'ul', items: [
          'Subset of ML.',
          'Uses Artificial Neural Networks (ANNs).',
          'Learns from huge amounts of data.',
          'Self trains & generates intelligent algorithms.'
        ]},
        { type: 'h2', content: 'Data and Features' },
        { type: 'p', content: 'Data is a collection of raw facts and figures. Features are Columns of Tables. Data can be Labelled (with answers) or Unlabelled.' }
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: '2.2 AI Modelling' },
        { type: 'p', content: 'Developing algorithms (models) which can be trained to give intelligent outputs.' },
        { type: 'h2', content: 'AI Model Types' },
        { type: 'ul', items: [
          '1. Rule Based: Developer defines the rules/patterns, machine follows them. Doesn\'t learn/adapt to new data (Static learning).',
          '2. Learning Based: Machine learns by itself from examples & feedback. Adaptive — modifies algorithm when data changes. Finds hidden patterns.'
        ]},
        { type: 'h3', content: 'ML Categories' },
        { type: 'ul', items: [
          'Supervised Learning: Trained with labeled data. Learns mapping: Features -> Labels.',
          'Unsupervised Learning: Works on unlabeled data. Finds hidden patterns, groups, similarities.'
        ]}
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: '2.3 Artificial Neural Networks (ANN)' },
        { type: 'p', content: 'Inspired by human brain. Extracts features automatically.' },
        { type: 'h3', content: 'Structure' },
        { type: 'ul', items: [
          'Input Layer: Takes raw data, no processing.',
          'Hidden Layers: Do all the processing using weights, biases & activation functions.',
          'Output Layer: Produces final result, no processing.'
        ]},
        { type: 'h3', content: 'Working' },
        { type: 'ol', items: [
          'Input -> goes to hidden layers.',
          'Hidden layers compute using weights & biases.',
          'Apply an activation function.',
          'Output is generated.',
          'Errors compared -> weights updated (backpropagation).'
        ]}
      ]
    }
  ]
};
