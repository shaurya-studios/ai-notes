const fs = require('fs');
const path = require('path');

const ch7 = `import { NativeChapter } from '../../types/content';
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
`;

const ch8 = `import { NativeChapter } from '../../types/content';
export const chapter8: NativeChapter = {
  id: 'computer-vision', number: 'VIII', title: 'Part B: Computer Vision (5.1)',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Understanding Computer Vision' },
        { type: 'p', content: 'Computer Vision (CV) is a domain of AI that enables computers and systems to derive meaningful information from digital images, videos, and other visual inputs, and take actions or make recommendations based on that information.' },
        { type: 'h2', content: 'How Computers See Images' },
        { type: 'p', content: 'Humans see images using eyes and the brain. Computers, however, perceive an image as a vast grid (matrix) of numbers representing Pixels (Picture Elements).' },
        { type: 'ul', items: [
          'Grayscale Images: Represented as a 2-Dimensional matrix (width x height). Each pixel has a single intensity value ranging from 0 (Pure Black) to 255 (Pure White).',
          'RGB (Color) Images: Represented as a 3-Dimensional matrix. It consists of three separate 2D layers: Red, Green, and Blue. Each layer holds values from 0-255. By combining these three primary colors at different intensities, computers can generate millions of colors.'
        ]},
        { type: 'callout', style: 'important', content: 'Image Resolution is defined by the number of pixels. An image that is 1920x1080 contains over 2 million pixels, meaning the computer must analyze 2 million numerical values!' }
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Features in Computer Vision' },
        { type: 'p', content: 'To recognize an object, AI models don\\'t look at the entire image at once. Instead, they look for specific "Features".' },
        { type: 'p', content: 'A Feature is a measurable piece of data in an image that is unique to the object being identified. Examples of features include:' },
        { type: 'ul', items: [
          'Edges and boundaries.',
          'Corners and distinct shapes.',
          'Specific color patterns and textures.',
          'Facial landmarks (e.g., the distance between eyes, the curve of a jawline).'
        ]},
        { type: 'h2', content: 'Key Computer Vision Tasks' },
        { type: 'table', headers: ['Task', 'Description', 'Example'], rows: [
          ['Image Classification', 'Assigning a single label to the entire image based on its main content.', 'Tagging a photo as "Dog" or "Cat".'],
          ['Object Detection', 'Identifying multiple specific objects within an image and drawing bounding boxes around them.', 'A self-driving car identifying pedestrians and street signs.'],
          ['Semantic Segmentation', 'Classifying every single pixel in the image to exact object boundaries.', 'Medical AI highlighting the exact shape of a tumor.'],
          ['Facial Recognition', 'Verifying a person\\'s identity based on their unique facial geometry.', 'Unlocking a phone with Face ID.']
        ]}
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: 'Real-World Applications of Computer Vision' },
        { type: 'ul', items: [
          'Autonomous Vehicles: Tesla and Waymo cars use cameras to detect lanes, read traffic lights, and avoid pedestrians in real-time.',
          'Medical Diagnostics: Analyzing X-rays, MRIs, and CT scans to detect diseases, fractures, or cancer earlier than human doctors.',
          'Retail and E-commerce: Amazon Go cashier-less stores use CV to track which items a customer picks up from the shelf.',
          'Security and Surveillance: Biometric attendance systems and smart CCTV cameras tracking suspicious activities.',
          'Agriculture: Drones flying over fields using computer vision to identify crop diseases and weed infestations.'
        ]}
      ]
    }
  ]
};
`;

const ch9 = `import { NativeChapter } from '../../types/content';
export const chapter9: NativeChapter = {
  id: 'nlp', number: 'IX', title: 'Part B: Natural Language Processing (6.1)',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Introduction to NLP' },
        { type: 'p', content: 'Natural Language Processing (NLP) is a branch of Artificial Intelligence that deals with the interaction between computers and humans using natural language. The goal of NLP is to enable computers to understand, interpret, and generate human language.' },
        { type: 'h2', content: 'Components of NLP' },
        { type: 'ul', items: [
          'NLU (Natural Language Understanding): The ability of a machine to understand and interpret human language. It focuses on extracting meaning, intent, and sentiment from text. It handles ambiguities, metaphors, and context.',
          'NLG (Natural Language Generation): The process of producing meaningful phrases and sentences in the form of natural language from an internal representation. Example: A computer automatically writing a news summary.'
        ]},
        { type: 'h2', content: 'Why is NLP Difficult?' },
        { type: 'p', content: 'Unlike programming languages (e.g., Python, C++) which are highly structured and have strict syntax, human languages are incredibly unstructured and complex. Challenges include:' },
        { type: 'ul', items: [
          'Ambiguity: Words can have multiple meanings based on context (e.g., "bank" of a river vs. financial "bank").',
          'Sarcasm and Irony: Saying the opposite of what is meant.',
          'Synonyms: Multiple words meaning the same thing.',
          'Idioms and Slang: Phrases where the literal meaning differs from the actual meaning (e.g., "piece of cake").'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Text Normalization' },
        { type: 'p', content: 'Before a machine can analyze text, the raw text data must be pre-processed and converted into numbers. Text Normalization is the process of cleaning and structuring text.' },
        { type: 'ol', items: [
          'Sentence Segmentation: Splitting a large paragraph into individual sentences.',
          'Tokenization: Breaking down sentences into individual words called "tokens".',
          'Removing Stop Words: Filtering out frequently occurring words (like "is", "the", "and", "in") that do not add significant meaning or context.',
          'Stemming: A rule-based process of removing suffixes to reduce a word to its root form. For example, "running", "runs", and "ran" might all be reduced to "run". Note: Stemming can sometimes result in non-dictionary words.',
          'Lemmatization: Similar to stemming, but more advanced. It uses a vocabulary and morphological analysis to map words to their actual dictionary root (lemma). For example, "better" is mapped to "good".'
        ]},
        { type: 'callout', style: 'example', content: 'If the text is: "The boys are running quickly!", Tokenization makes it: ["The", "boys", "are", "running", "quickly", "!"]. After Stop Word removal and Lemmatization, it might become: ["boy", "run", "quick"].' }
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: 'Text Representation (Vectorization) & TF-IDF' },
        { type: 'p', content: 'Once normalized, words must be converted into numerical vectors so the AI can process them mathematically.' },
        { type: 'h2', content: '1. Bag of Words (BoW)' },
        { type: 'p', content: 'BoW creates a "vocabulary" of all unique words and counts how many times each word appears in a specific document. However, BoW treats all words equally and ignores the context.' },
        { type: 'h2', content: '2. TF-IDF (Term Frequency - Inverse Document Frequency)' },
        { type: 'p', content: 'TF-IDF is an advanced technique that solves BoW\\'s limitations by evaluating how IMPORTANT a word is to a specific document within a larger collection (corpus).' },
        { type: 'ul', items: [
          'Term Frequency (TF): How frequently a term appears in a document. (Frequency of word / Total words in document)',
          'Document Frequency (DF): The number of documents containing the word.',
          'Inverse Document Frequency (IDF): Measures how rare or informative a term is across the entire corpus. Words that appear in almost all documents get a low IDF. (Log of Total documents / Documents with the term)',
          'TF-IDF Score: TF multiplied by IDF.'
        ]},
        { type: 'callout', style: 'important', content: 'A High TF-IDF Score means the word appears many times in THIS document, but rarely in OTHER documents. This indicates that the word is a highly relevant "keyword" for understanding this specific document!' }
      ]
    },
    {
      pageNumber: 4,
      blocks: [
        { type: 'h1', content: 'Applications of NLP' },
        { type: 'ul', items: [
          'Sentiment Analysis: Automatically identifying whether a customer review is positive, negative, or neutral.',
          'Chatbots and Virtual Assistants: Siri, Google Assistant, and customer service bots that understand spoken/typed requests.',
          'Machine Translation: Tools like Google Translate converting text from one language to another while preserving context.',
          'Email Spam Filtering: Scanning emails for suspicious keywords to automatically route them to the spam folder.',
          'Text Summarization: Automatically condensing long articles into short summaries (NLG).'
        ]}
      ]
    }
  ]
};
`;

const ch10 = `import { NativeChapter } from '../../types/content';
export const chapter10: NativeChapter = {
  id: 'evaluation', number: 'X', title: 'Part B: Evaluating Models',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Stage 5: Model Evaluation' },
        { type: 'p', content: 'Evaluation is the final stage of the AI Project Cycle. After a model is trained using Training Data, we must test its accuracy using unseen Testing Data. This ensures the model will perform well in real-world scenarios.' },
        { type: 'h2', content: 'The Confusion Matrix' },
        { type: 'p', content: 'A Confusion Matrix is a table used to describe the performance of a classification model. It compares the model\\'s PREDICTIONS against the ACTUAL truth.' },
        { type: 'ul', items: [
          'True Positive (TP): Model predicted YES, and the actual truth was YES. (Correct Prediction)',
          'True Negative (TN): Model predicted NO, and the actual truth was NO. (Correct Prediction)',
          'False Positive (FP): Model predicted YES, but the actual truth was NO. (Type 1 Error)',
          'False Negative (FN): Model predicted NO, but the actual truth was YES. (Type 2 Error)'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Understanding False Positives and False Negatives' },
        { type: 'p', content: 'Depending on the real-world application, one type of error can be much more dangerous than the other.' },
        { type: 'callout', style: 'example', content: 'Scenario: AI predicting if a patient has Cancer.\\n\\nFalse Positive (FP): The AI predicts YES (Cancer), but the patient is actually healthy. Consequence: Unnecessary stress and tests.\\n\\nFalse Negative (FN): The AI predicts NO (Healthy), but the patient actually HAS cancer. Consequence: The patient goes untreated, which is extremely dangerous.' },
        { type: 'p', content: 'In medical diagnosis or forest fire prediction, False Negatives are highly dangerous. In spam email filtering, False Positives are annoying (a real email goes to spam), so they must be minimized.' }
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: 'Evaluation Metrics' },
        { type: 'p', content: 'Using the four values (TP, TN, FP, FN) from the Confusion Matrix, we calculate specific metrics to judge the model.' },
        { type: 'h2', content: '1. Accuracy' },
        { type: 'p', content: 'Formula: (TP + TN) / (Total Predictions)' },
        { type: 'p', content: 'Meaning: The overall percentage of correct predictions. Warning: Accuracy is only a reliable metric if the dataset is perfectly balanced (equal number of positive and negative cases).' },
        { type: 'h2', content: '2. Precision' },
        { type: 'p', content: 'Formula: TP / (TP + FP)' },
        { type: 'p', content: 'Meaning: Out of all the times the model predicted YES, how many were actually YES? This metric is crucial when False Positives are very costly.' },
        { type: 'h2', content: '3. Recall (Sensitivity)' },
        { type: 'p', content: 'Formula: TP / (TP + FN)' },
        { type: 'p', content: 'Meaning: Out of all the ACTUAL YES cases in the real world, how many did the model manage to find? This metric is crucial when False Negatives are very dangerous.' },
        { type: 'h2', content: '4. F1 Score' },
        { type: 'p', content: 'Formula: 2 * (Precision * Recall) / (Precision + Recall)' },
        { type: 'p', content: 'Meaning: The harmonic mean of Precision and Recall. It is used when you need a balance between the two, especially when the dataset is highly imbalanced.' }
      ]
    }
  ]
};
`;

fs.writeFileSync(path.join(__dirname, 'src/data/chapters/chapter7.ts'), ch7);
fs.writeFileSync(path.join(__dirname, 'src/data/chapters/chapter8.ts'), ch8);
fs.writeFileSync(path.join(__dirname, 'src/data/chapters/chapter9.ts'), ch9);
fs.writeFileSync(path.join(__dirname, 'src/data/chapters/chapter10.ts'), ch10);

console.log('Chapters updated successfully');
