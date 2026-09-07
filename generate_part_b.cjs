const fs = require('fs');
const path = require('path');

const writeChapter = (fileName, content) => {
  fs.writeFileSync(path.join(__dirname, 'src/data/chapters', fileName), content);
};

writeChapter('chapter6.ts', `import { NativeChapter } from '../../types/content';
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
          'Kinesthetic Intelligence: Ability to use one\\'s body to solve problems (e.g., athletes, dancers).'
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
`);

writeChapter('chapter7.ts', `import { NativeChapter } from '../../types/content';
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
          'Testing Data: A hidden portion of the dataset (usually 20%) used to evaluate the model\\'s performance after training.'
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
`);

writeChapter('chapter8.ts', `import { NativeChapter } from '../../types/content';
export const chapter8: NativeChapter = {
  id: 'data-science', number: 'VIII', title: 'Part B: Data Science',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: '1. Introduction to Data Science' },
        { type: 'p', content: 'Data Science is a domain of AI related to data systems and processes, aimed at discovering hidden patterns, predicting future trends, and extracting actionable knowledge from large sets of structured and unstructured data.' },
        { type: 'h2', content: 'Applications of Data Science' },
        { type: 'ul', items: [
          'Targeted Advertising: Analyzing browsing history and past purchases to recommend products.',
          'Financial Fraud Detection: Identifying unusual transaction patterns in real-time to block credit card fraud.',
          'Healthcare: Predicting disease outbreaks or analyzing patient records for early diagnosis.',
          'Logistics: Optimizing delivery routes based on traffic and weather data.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: '2. Understanding Data' },
        { type: 'p', content: 'Data is a collection of facts, such as numbers, words, measurements, observations, or just descriptions.' },
        { type: 'table', headers: ['Type of Data', 'Description', 'Examples'], rows: [
          ['Structured Data', 'Highly organized data that neatly fits into a table or database (rows and columns).', 'Excel sheets, SQL databases, CSV files containing names, ages, and salaries.'],
          ['Unstructured Data', 'Information that does not have a pre-defined format or organization.', 'Text documents, emails, social media posts, audio, and video files.']
        ]}
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: '3. Data Science Concepts' },
        { type: 'h2', content: 'Classification vs. Regression' },
        { type: 'p', content: 'Both Classification and Regression are part of Supervised Learning, but they predict different types of outputs.' },
        { type: 'ul', items: [
          'Classification: The output variable is a category or a discrete value. (e.g., Is this email Spam or Not Spam? Is the tumor Benign or Malignant?)',
          'Regression: The output variable is a continuous real value. (e.g., Predicting the price of a house based on its square footage. Predicting tomorrow\\'s exact temperature).'
        ]},
        { type: 'h2', content: 'Clustering' },
        { type: 'p', content: 'Clustering is a part of Unsupervised Learning. It involves grouping a set of objects in such a way that objects in the same group (called a cluster) are more similar to each other than to those in other groups (e.g., Customer segmentation for marketing).' }
      ]
    }
  ]
};
`);

writeChapter('chapter9.ts', `import { NativeChapter } from '../../types/content';
export const chapter9: NativeChapter = {
  id: 'computer-vision', number: 'IX', title: 'Part B: Computer Vision',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: '1. Introduction to Computer Vision' },
        { type: 'p', content: 'Computer Vision (CV) is an interdisciplinary scientific field that deals with how computers can gain high-level understanding from digital images or videos. From the perspective of engineering, it seeks to automate tasks that the human visual system can do.' },
        { type: 'h2', content: 'How Computers See Images' },
        { type: 'p', content: 'While humans see shapes, colors, and depth, computers perceive an image strictly as a grid of numbers. This grid is called a Matrix.' },
        { type: 'ul', items: [
          'Pixel: The smallest element of a digital image (Picture Element).',
          'Resolution: The total number of pixels in an image (Width x Height). Higher resolution means more data for the AI to process.'
        ]},
        { type: 'h2', content: 'Grayscale vs. RGB' },
        { type: 'table', headers: ['Grayscale Images', 'RGB (Color) Images'], rows: [
          ['Consists of a single 2D matrix layer.', 'Consists of three separate 2D layers (Red, Green, Blue).'],
          ['Pixel values range from 0 (Black) to 255 (White).', 'Each layer has values from 0-255. They combine to form millions of colors.'],
          ['Computationally lighter and faster for AI to process.', 'Computationally heavy, requires more memory and processing power.']
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: '2. Features in Computer Vision' },
        { type: 'p', content: 'AI models do not look at an image as a whole; they look for distinct "features".' },
        { type: 'definition', term: 'Feature', definition: 'A measurable piece of data in an image which is unique to that specific object. It could be a specific color, a sharp edge, a corner, a shape, or a texture.' },
        { type: 'p', content: 'For example, the features of a human face include the distance between the eyes, the shape of the jawline, and the depth of the eye sockets. Facial Recognition algorithms measure these specific geometric features.' }
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: '3. Core Computer Vision Tasks' },
        { type: 'p', content: 'Different AI applications require different levels of image understanding.' },
        { type: 'ul', items: [
          'Image Classification: The simplest task. The AI assigns a single label to the entire image. (e.g., "This image contains a Cat").',
          'Object Detection: The AI identifies multiple specific objects within the image and draws a bounding box around each one. (e.g., A self-driving car identifying a pedestrian, a stop sign, and another car simultaneously).',
          'Semantic Segmentation: The most complex task. The AI classifies every single pixel in the image to a specific category, tracing the exact boundary/shape of the object without just drawing a box.'
        ]}
      ]
    }
  ]
};
`);

writeChapter('chapter10.ts', `import { NativeChapter } from '../../types/content';
export const chapter10: NativeChapter = {
  id: 'nlp', number: 'X', title: 'Part B: Natural Language Processing (NLP)',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: '1. Introduction to NLP' },
        { type: 'p', content: 'Natural Language Processing (NLP) is a branch of Artificial Intelligence that gives computers the ability to read, understand, and derive meaning from human languages.' },
        { type: 'h2', content: 'Applications of NLP' },
        { type: 'ul', items: [
          'Virtual Assistants: Siri, Alexa, Google Assistant.',
          'Machine Translation: Google Translate (context-aware translation).',
          'Sentiment Analysis: Automatically reading customer reviews and classifying them as Positive, Negative, or Neutral.',
          'Spam Detection: Email filters that analyze text to identify malicious or junk emails.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: '2. Why is NLP Difficult?' },
        { type: 'p', content: 'Human language is complex, unstructured, and highly contextual. Challenges include:' },
        { type: 'ul', items: [
          'Syntax and Grammar: Rules vary wildly between languages.',
          'Ambiguity: A word can have multiple meanings depending on context. (e.g., "The bank of the river" vs "The money in the bank").',
          'Sarcasm & Irony: When the literal meaning is the exact opposite of the intended meaning.',
          'Idioms & Slang: "It\\'s raining cats and dogs" cannot be translated literally.'
        ]}
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: '3. Data Processing (Text Normalization)' },
        { type: 'p', content: 'Before a computer can process text, it must be normalized and cleaned.' },
        { type: 'ol', items: [
          'Sentence Segmentation: Breaking a large paragraph into individual sentences.',
          'Tokenization: Breaking a sentence into individual words (tokens).',
          'Removing Stop Words: Filtering out common words (like "is", "the", "a") that add grammar but carry no actual meaning.',
          'Stemming: Removing suffixes to reduce a word to its root form (e.g., "running" becomes "run"). It uses basic rules and sometimes outputs non-dictionary words.',
          'Lemmatization: A more advanced version of stemming that uses a dictionary to map words to their actual root (lemma) (e.g., "better" becomes "good").'
        ]}
      ]
    },
    {
      pageNumber: 4,
      blocks: [
        { type: 'h1', content: '4. Text Representation: TF-IDF' },
        { type: 'p', content: 'Computers only understand numbers, so text must be converted to numerical vectors. Bag of Words (BoW) is a simple method, but it treats all words equally. TF-IDF is superior.' },
        { type: 'definition', term: 'TF-IDF (Term Frequency - Inverse Document Frequency)', definition: 'A statistical measure that evaluates how relevant a word is to a document in a collection of documents (corpus).' },
        { type: 'ul', items: [
          'Term Frequency (TF): Measures how frequently a term occurs in a specific document. (Occurrences of word / Total words in doc).',
          'Inverse Document Frequency (IDF): Measures the importance of the word across the ENTIRE corpus. Words that appear in every document (like "the") get a score close to 0. Rare, unique words get a high score.',
          'TF-IDF Score: TF multiplied by IDF. A high score means the word is a highly relevant keyword for that specific document.'
        ]}
      ]
    }
  ]
};
`);

writeChapter('chapter11.ts', `import { NativeChapter } from '../../types/content';
export const chapter11: NativeChapter = {
  id: 'evaluation', number: 'XI', title: 'Part B: Model Evaluation',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: '1. Model Evaluation' },
        { type: 'p', content: 'Once an AI model is trained using Training Data, we must test its reliability and accuracy using unseen Testing Data. This is the Evaluation stage.' },
        { type: 'h2', content: 'Evaluation Terminologies' },
        { type: 'p', content: 'When testing a binary classification model (YES or NO predictions), the results fall into four categories:' },
        { type: 'ul', items: [
          'True Positive (TP): The model predicted YES, and the actual truth was YES. (Correct)',
          'True Negative (TN): The model predicted NO, and the actual truth was NO. (Correct)',
          'False Positive (FP) (Type 1 Error): The model predicted YES, but the truth was NO. (e.g., A healthy person wrongly diagnosed with cancer).',
          'False Negative (FN) (Type 2 Error): The model predicted NO, but the truth was YES. (e.g., A cancer patient wrongly diagnosed as healthy. Highly dangerous!).'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: '2. The Confusion Matrix' },
        { type: 'p', content: 'A Confusion Matrix is a tabular summary of the number of correct and incorrect predictions made by a classification model.' },
        { 
          type: 'diagram', 
          id: 'confusion-matrix-diagram', 
          title: 'Standard Confusion Matrix', 
          description: 'A 2x2 grid comparing Actual Values against Predicted Values.',
          svgCode: '<svg viewBox="0 0 400 300" width="100%" height="250" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="80" width="120" height="80" fill="#e8f5e9" stroke="#333" stroke-width="2"/><rect x="220" y="80" width="120" height="80" fill="#ffebee" stroke="#333" stroke-width="2"/><rect x="100" y="160" width="120" height="80" fill="#ffebee" stroke="#333" stroke-width="2"/><rect x="220" y="160" width="120" height="80" fill="#e8f5e9" stroke="#333" stroke-width="2"/><text x="160" y="125" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#2e7d32">True Positive (TP)</text><text x="280" y="125" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#c62828">False Positive (FP)</text><text x="160" y="205" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#c62828">False Negative (FN)</text><text x="280" y="205" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#2e7d32">True Negative (TN)</text><text x="220" y="50" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">Predicted Values</text><text x="40" y="160" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" transform="rotate(-90 40 160)" fill="currentColor">Actual Values</text><text x="160" y="70" font-family="sans-serif" font-size="14" text-anchor="middle" fill="currentColor">YES (1)</text><text x="280" y="70" font-family="sans-serif" font-size="14" text-anchor="middle" fill="currentColor">NO (0)</text><text x="90" y="125" font-family="sans-serif" font-size="14" text-anchor="end" fill="currentColor">YES (1)</text><text x="90" y="205" font-family="sans-serif" font-size="14" text-anchor="end" fill="currentColor">NO (0)</text></svg>'
        }
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: '3. Evaluation Metrics' },
        { type: 'p', content: 'Using the four values from the Confusion Matrix, we calculate mathematical metrics to judge the model\\'s real-world viability.' },
        { type: 'ul', items: [
          'Accuracy: The percentage of correct predictions out of total predictions. Formula: (TP + TN) / Total. Accuracy is only reliable if the dataset is perfectly balanced.',
          'Precision: Out of all the positive predictions the model made, how many were actually positive? Formula: TP / (TP + FP). Crucial when False Positives are costly (e.g., Spam Filters).',
          'Recall (Sensitivity): Out of all the actual positive cases in reality, how many did the model find? Formula: TP / (TP + FN). Crucial when False Negatives are highly dangerous (e.g., Cancer detection).',
          'F1 Score: The harmonic mean of Precision and Recall. It is the best metric to use when the dataset is imbalanced and you need a balance between Precision and Recall. Formula: 2 * (Precision * Recall) / (Precision + Recall).'
        ]}
      ]
    }
  ]
};
`);

console.log('Finished writing Exhaustive Part B chapters');
