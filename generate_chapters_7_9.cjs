const fs = require('fs');

const ch7 = `import { NativeChapter } from '../../types/content';

export const chapter7: NativeChapter = {
  id: 'advance-python',
  number: 'VII',
  title: 'Part B: Advance Python',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Python Basics & AI' },
        { type: 'p', content: 'Python is a high-level, interpreted programming language widely used in AI due to its readability and massive ecosystem of libraries.' },
        { type: 'h2', content: 'Key Features of Python' },
        { type: 'ul', items: [
          'Easy to read, learn, and write (syntax resembles English).',
          'Interpreted language (executes code line by line).',
          'Platform Independent (runs on Windows, Mac, Linux).',
          'Rich Library Support (NumPy, Pandas, Scikit-Learn).'
        ]},
        { type: 'h2', content: 'Essential Libraries for AI' },
        { type: 'table', headers: ['Library', 'Purpose'], rows: [
          ['NumPy', 'Numerical computations and array operations.'],
          ['Pandas', 'Data manipulation and analysis (DataFrames).'],
          ['Matplotlib', 'Data visualization (plotting graphs and charts).'],
          ['Scikit-Learn', 'Implementing Machine Learning algorithms.']
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h2', content: 'Data Structures in Python' },
        { type: 'p', content: 'Understanding basic data structures is crucial for handling data in AI projects.' },
        { type: 'ul', items: [
          'List: A mutable, ordered sequence of items. e.g., [1, 2, "AI"]',
          'Tuple: An immutable, ordered sequence of items. e.g., (1, 2, "AI")',
          'Dictionary: Unordered collection of key-value pairs. e.g., {"name": "Bot", "version": 2}',
          'Set: Unordered collection of unique items.'
        ]},
        { type: 'callout', style: 'example', content: 'In data science, we mostly use Lists and Dictionaries before converting them to Pandas DataFrames for advanced operations.' }
      ]
    }
  ]
};
`;

const ch8 = `import { NativeChapter } from '../../types/content';

export const chapter8: NativeChapter = {
  id: 'data-science',
  number: 'VIII',
  title: 'Part B: Data Science',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Introduction to Data Science' },
        { type: 'p', content: 'Data Science is a multidisciplinary field that uses scientific methods, processes, algorithms, and systems to extract knowledge and insights from structured and unstructured data.' },
        { type: 'h2', content: 'Applications of Data Science' },
        { type: 'ul', items: [
          'Fraud and Risk Detection in Banking.',
          'Targeted Advertising and Recommendation Systems (e.g., Netflix, Amazon).',
          'Healthcare analytics and personalized medicine.',
          'Route planning and logistics (e.g., Google Maps).'
        ]},
        { type: 'h2', content: 'The Data Science Process' },
        { type: 'ol', items: [
          'Data Collection: Gathering raw data.',
          'Data Cleaning: Removing duplicates, handling missing values.',
          'Data Analysis: Finding statistical patterns.',
          'Data Visualization: Presenting findings graphically.',
          'Predictive Modelling: Using ML algorithms to predict future trends.'
        ]}
      ]
    }
  ]
};
`;

const ch9 = `import { NativeChapter } from '../../types/content';

export const chapter9: NativeChapter = {
  id: 'computer-vision-nlp',
  number: 'IX',
  title: 'Part B: CV, NLP & Evaluation',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Computer Vision (CV)' },
        { type: 'p', content: 'Computer Vision is a field of AI that trains computers to interpret and understand the visual world. Using digital images from cameras and videos, machines can accurately identify and classify objects.' },
        { type: 'h2', content: 'How do computers see images?' },
        { type: 'p', content: 'Computers perceive images as matrices (grids) of pixels.' },
        { type: 'ul', items: [
          'Grayscale Images: 2D matrix where each pixel is a value from 0 (Black) to 255 (White).',
          'Color Images (RGB): 3D matrix representing Red, Green, and Blue channels. Each channel has values from 0 to 255.'
        ]},
        { type: 'h3', content: 'Applications of CV' },
        { type: 'ul', items: [
          'Facial recognition for device security.',
          'Self-driving cars detecting pedestrians and stop signs.',
          'Medical imaging (e.g., detecting tumors in X-rays).'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 2: Natural Language Processing (NLP)' },
        { type: 'p', content: 'NLP is a branch of AI that helps computers understand, interpret, and manipulate human (natural) language.' },
        { type: 'h2', content: 'Challenges in NLP' },
        { type: 'ul', items: [
          'Ambiguity: Words can have multiple meanings based on context (e.g., "Bank" of a river vs. Financial "Bank").',
          'Sarcasm and Irony: Difficult for machines to detect tone.',
          'Syntax and Slang: Informal language evolves rapidly.'
        ]},
        { type: 'h2', content: 'Applications of NLP' },
        { type: 'ul', items: [
          'Virtual Assistants: Alexa, Siri, Google Assistant.',
          'Sentiment Analysis: Analyzing social media to see if public opinion on a product is positive or negative.',
          'Machine Translation: Google Translate.'
        ]},
        { type: 'callout', style: 'note', content: 'A chatbot uses both NLP to understand your text and NLU (Natural Language Understanding) to figure out your intent.' }
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: 'Session 3: Evaluation Metrics' },
        { type: 'p', content: 'Evaluation is the final stage of the AI project cycle. It measures the reliability of the model.' },
        { type: 'h2', content: 'The Confusion Matrix' },
        { type: 'p', content: 'A table that is often used to describe the performance of a classification model. It contains:' },
        { type: 'ul', items: [
          'True Positive (TP): Model predicted YES, and actual is YES.',
          'True Negative (TN): Model predicted NO, and actual is NO.',
          'False Positive (FP): Model predicted YES, but actual is NO (Type I Error).',
          'False Negative (FN): Model predicted NO, but actual is YES (Type II Error).'
        ]},
        { type: 'h2', content: 'Key Metrics' },
        { type: 'table', headers: ['Metric', 'Formula', 'Use Case'], rows: [
          ['Accuracy', '(TP+TN)/(Total)', 'Overall correctness. Used when classes are balanced.'],
          ['Precision', 'TP/(TP+FP)', 'Measures exactness. High precision means fewer false positives (e.g., Spam filter).'],
          ['Recall', 'TP/(TP+FN)', 'Measures completeness. High recall means fewer false negatives (e.g., Disease detection).'],
          ['F1 Score', 'Harmonic mean of Precision and Recall', 'Used when you need a balance between Precision and Recall.']
        ]}
      ]
    }
  ]
};
`;

fs.writeFileSync('src/data/chapters/chapter7.ts', ch7);
fs.writeFileSync('src/data/chapters/chapter8.ts', ch8);
fs.writeFileSync('src/data/chapters/chapter9.ts', ch9);
console.log('Chapters 7-9 regenerated');
