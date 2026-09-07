const fs = require('fs');
const path = require('path');

const ch1 = `import { NativeChapter } from '../../types/content';
export const chapter1: NativeChapter = {
  id: 'communication-skills', number: 'I', title: 'Part A: Communication Skills - II',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Methods of Communication' },
        { type: 'p', content: 'Communication is the process of exchanging information, ideas, thoughts, or feelings between individuals. It comes from the Latin word "communicare", meaning "to share".' },
        { type: 'h2', content: 'The Communication Cycle' },
        { type: 'ol', items: [
          'Sender: The person originating the message.',
          'Message: The actual information conveyed.',
          'Encoding: Converting the idea into a communicable format.',
          'Channel: The medium of communication (e.g., spoken, written).',
          'Receiver: The person who gets the message.',
          'Decoding: Interpreting the message.',
          'Feedback: The receiver\\'s acknowledgement and response to the sender.'
        ]},
        { type: 'h2', content: 'Types of Communication' },
        { type: 'table', headers: ['Type', 'Description', 'Examples'], rows: [
          ['Verbal (Oral)', 'Spoken words with varying tone/pitch.', 'Face-to-face, phone calls.'],
          ['Verbal (Written)', 'Printed or digital text.', 'Emails, letters, SMS.'],
          ['Non-Verbal', 'Gestures, expressions, posture.', 'Nodding, smiling, eye contact.'],
          ['Visual', 'Images, signs, and symbols.', 'Traffic signs, pie charts.']
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 2: Communication Barriers & Principles' },
        { type: 'p', content: 'Obstacles that prevent a message from being correctly understood are called barriers to communication.' },
        { type: 'ul', items: [
          'Physical Barriers: Environmental noise, distance, faulty equipment.',
          'Linguistic Barriers: Language differences, use of jargon, complex words.',
          'Psychological Barriers: Stress, anger, lack of trust, prejudice.',
          'Organizational Barriers: Strict company hierarchy preventing open feedback.'
        ]},
        { type: 'h2', content: 'The 7Cs of Effective Communication' },
        { type: 'ul', items: [
          'Clear: Be clear about what you want to say.',
          'Concise: Keep it brief. Use simple words.',
          'Concrete: Provide exact facts and figures.',
          'Correct: Ensure factual and grammatical accuracy.',
          'Coherent: Your words should make sense and flow logically.',
          'Complete: Your message must contain all necessary information.',
          'Courteous: Be polite, respectful, and friendly.'
        ]},
        { type: 'callout', style: 'important', content: 'Feedback is the most critical component as it ensures the communication cycle is successful and the message was understood.' }
      ]
    }
  ]
};
`;

const ch2 = `import { NativeChapter } from '../../types/content';
export const chapter2: NativeChapter = {
  id: 'self-management', number: 'II', title: 'Part A: Self-Management Skills - II',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Stress Management' },
        { type: 'p', content: 'Self-management is the ability to regulate one\\'s emotions, thoughts, and behaviors effectively. This requires managing stress effectively.' },
        { type: 'h2', content: 'What is Stress?' },
        { type: 'p', content: 'Stress is our body\\'s response to physical, mental, or emotional demands (stressors). While positive stress (Eustress) can motivate us, prolonged negative stress (Distress) can cause severe health and productivity issues.' },
        { type: 'h3', content: 'Signs of Stress' },
        { type: 'ul', items: [
          'Physical: Headaches, fatigue, sweating, stomach aches.',
          'Mental/Emotional: Anxiety, irritability, lack of concentration, sadness.'
        ]},
        { type: 'h3', content: 'Stress Management Techniques' },
        { type: 'ol', items: [
          'Physical Exercise: Yoga, sports, and walking release endorphins.',
          'Healthy Diet: A balanced diet provides energy to combat stress.',
          'Adequate Sleep: 7-8 hours of sleep is necessary for recovery.',
          'Relaxation: Deep breathing, meditation, enjoying nature.',
          'Time Management: Planning tasks to avoid last-minute panic.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 2: Self-Awareness & Goal Setting' },
        { type: 'p', content: 'Working independently means having the ability to work without constant supervision. This requires three key skills: Self-Awareness, Self-Motivation, and Self-Regulation.' },
        { type: 'h2', content: 'Self-Awareness' },
        { type: 'p', content: 'Knowing your own personality, strengths, weaknesses, and emotions.' },
        { type: 'definition', term: 'SWOT Analysis', definition: 'A tool used to evaluate your Strengths, Weaknesses, Opportunities, and Threats.' },
        { type: 'h2', content: 'Goal Setting (SMART)' },
        { type: 'p', content: 'Goals should be structured using the SMART framework:' },
        { type: 'ul', items: [
          'S - Specific: Clear and unambiguous.',
          'M - Measurable: You can track the progress.',
          'A - Achievable: Realistic based on your skills.',
          'R - Relevant: Matters to your broader life plan.',
          'T - Time-bound: Has a clear deadline.'
        ]}
      ]
    }
  ]
};
`;

const ch3 = `import { NativeChapter } from '../../types/content';
export const chapter3: NativeChapter = {
  id: 'ict-skills', number: 'III', title: 'Part A: ICT Skills - II',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Operating Systems & Maintenance' },
        { type: 'p', content: 'Information and Communication Technology (ICT) refers to digital tools used for creating, storing, and communicating information.' },
        { type: 'h2', content: 'Operating System (OS)' },
        { type: 'p', content: 'An OS is the core software that manages computer hardware and software resources. Examples: Windows, macOS, Linux, Android.' },
        { type: 'ul', items: [
          'Functions of OS: Process management, Memory management, File management, Device management, and Security.'
        ]},
        { type: 'h2', content: 'Computer Care and Maintenance' },
        { type: 'p', content: 'Proper maintenance prolongs the life of the computer.' },
        { type: 'ol', items: [
          'Physical Care: Keep it clean, avoid eating near it, ensure proper ventilation.',
          'Internal Care: Empty recycle bin, uninstall unused programs, defragment hard drives.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 2: Digital Security & Threats' },
        { type: 'p', content: 'With internet connectivity, securing digital assets is extremely important.' },
        { type: 'h2', content: 'Common Cyber Threats' },
        { type: 'table', headers: ['Threat', 'Description'], rows: [
          ['Virus', 'Malware that attaches to clean files and infects other files.'],
          ['Worm', 'Malware that replicates itself to spread across networks.'],
          ['Trojan Horse', 'Malicious software disguised as legitimate software.'],
          ['Phishing', 'Fake emails designed to steal passwords and data.']
        ]},
        { type: 'h2', content: 'Protection Methods' },
        { type: 'ul', items: [
          'Antivirus Software: Install and keep it updated to detect and remove malware.',
          'Strong Passwords: Use a mix of letters, numbers, and special characters.',
          'Data Backup: Regularly save important files to an external drive or cloud.',
          'Firewall: Enable network firewalls to block unauthorized access.'
        ]}
      ]
    }
  ]
};
`;

const ch4 = `import { NativeChapter } from '../../types/content';
export const chapter4: NativeChapter = {
  id: 'entrepreneurial-skills', number: 'IV', title: 'Part A: Entrepreneurial Skills - II',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Entrepreneurship Basics' },
        { type: 'p', content: 'Entrepreneurship is the process of designing, launching, and running a new business. It involves taking financial risks in the hope of profit.' },
        { type: 'h2', content: 'Roles of an Entrepreneur in Society' },
        { type: 'ul', items: [
          'Job Creation: They hire people, reducing unemployment.',
          'Wealth Creation: They generate income for themselves, their employees, and the nation.',
          'Solving Problems: They innovate to solve societal issues with new products.',
          'Improving Standard of Living: Access to better and newer services.'
        ]},
        { type: 'h2', content: 'Qualities of an Entrepreneur' },
        { type: 'ol', items: [
          'Risk Taker: Willing to take calculated risks.',
          'Hardworking: Devotes immense time and effort.',
          'Innovative: Always thinking of creative solutions.',
          'Resilient: Does not give up after failures.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 2: Functions and Myths' },
        { type: 'h2', content: 'Functions of an Entrepreneur' },
        { type: 'table', headers: ['Function', 'Description'], rows: [
          ['Innovation', 'Introducing new ideas or improving existing ones.'],
          ['Risk-taking', 'Assuming the responsibility for financial losses.'],
          ['Organization', 'Gathering resources like land, labor, and capital.'],
          ['Decision Making', 'Choosing the best course of action among alternatives.']
        ]},
        { type: 'h2', content: 'Myths about Entrepreneurship' },
        { type: 'ul', items: [
          'Myth 1: Entrepreneurs are born, not made. (Reality: It is a skill that can be learned).',
          'Myth 2: You need a lot of money to start. (Reality: Many successful businesses started with very little capital).',
          'Myth 3: Entrepreneurs only care about money. (Reality: Most are driven by a desire to solve problems).',
          'Myth 4: A great idea guarantees success. (Reality: Execution and hard work matter more than just the idea).'
        ]}
      ]
    }
  ]
};
`;

const ch5 = `import { NativeChapter } from '../../types/content';
export const chapter5: NativeChapter = {
  id: 'green-skills', number: 'V', title: 'Part A: Green Skills - II',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Sustainable Development' },
        { type: 'p', content: 'Sustainable development is defined as development that meets the needs of the present without compromising the ability of future generations to meet their own needs.' },
        { type: 'h2', content: 'Core Components' },
        { type: 'ul', items: [
          'Economic Growth: Generating wealth fairly.',
          'Environmental Protection: Preventing pollution and resource depletion.',
          'Social Inclusion: Equal opportunities for all citizens.'
        ]},
        { type: 'definition', term: 'SDGs (Sustainable Development Goals)', definition: '17 global goals established by the United Nations in 2015 to protect the planet and ensure prosperity for all by 2030.' }
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h2', content: 'Role of Individuals in Sustainable Development' },
        { type: 'ol', items: [
          'Reduce, Reuse, Recycle (3Rs): Minimize waste.',
          'Conserve Energy: Turn off lights, use energy-efficient appliances.',
          'Conserve Water: Fix leaks, avoid wastage.',
          'Eco-friendly Transport: Carpool, use public transport, or bicycles.'
        ]},
        { type: 'h2', content: 'Green Economy & Green Jobs' },
        { type: 'p', content: 'A Green Economy is low-carbon, resource-efficient, and socially inclusive. It creates Green Jobs, which are roles that contribute to preserving or restoring the environment (e.g., Solar panel installer, organic farmer).' }
      ]
    }
  ]
};
`;

const ch6 = `import { NativeChapter } from '../../types/content';
export const chapter6: NativeChapter = {
  id: 'intro-to-ai', number: 'VI', title: 'Part B: Introduction to AI',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Foundations of AI' },
        { type: 'p', content: 'Artificial Intelligence (AI) is the ability of machines to simulate human intelligence. A machine is considered "intelligent" if it can learn, reason, and solve problems.' },
        { type: 'h2', content: 'AI vs ML vs DL' },
        { type: 'ul', items: [
          'Artificial Intelligence (AI): The overarching field of making computers think like humans.',
          'Machine Learning (ML): A subset of AI. Algorithms learn from data without being explicitly programmed.',
          'Deep Learning (DL): A subset of ML inspired by the human brain (Artificial Neural Networks), used for highly complex tasks like facial recognition.'
        ]},
        { type: 'callout', style: 'important', content: 'All Deep Learning is ML, and all ML is AI. However, not all AI is Machine Learning (e.g., Rule-based systems).' }
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h2', content: 'Domains of AI' },
        { type: 'table', headers: ['Domain', 'Description', 'Applications'], rows: [
          ['Data (Data Science)', 'Extracting insights from structured/unstructured data.', 'Recommendation systems, price prediction.'],
          ['Computer Vision (CV)', 'Enabling machines to understand visual data.', 'Self-driving cars, face unlock.'],
          ['Natural Language Processing (NLP)', 'Enabling machines to understand text and speech.', 'Chatbots, language translation.']
        ]},
        { type: 'h2', content: 'Smart vs. AI' },
        { type: 'p', content: 'Not all smart devices use AI. A fully automatic washing machine is "Smart" (it follows pre-programmed rules based on sensors), but it is NOT AI because it does not learn from data to improve its washing cycle over time.' }
      ]
    }
  ]
};
`;

const ch7 = `import { NativeChapter } from '../../types/content';
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
`;

const ch8 = `import { NativeChapter } from '../../types/content';
export const chapter8: NativeChapter = {
  id: 'computer-vision', number: 'VIII', title: 'Part B: Computer Vision (5.1)',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Understanding Computer Vision' },
        { type: 'p', content: 'Computer Vision (CV) is a domain of AI that enables computers to derive meaningful information from digital images, videos, and other visual inputs.' },
        { type: 'h2', content: 'How Computers See Images' },
        { type: 'p', content: 'Computers do not possess eyes. They perceive an image as a matrix (grid) of numbers representing Pixels (Picture Elements).' },
        { type: 'ul', items: [
          'Grayscale Images: A 2D matrix where each pixel is represented by a single number from 0 (Black) to 255 (White).',
          'RGB (Color) Images: A 3D matrix composed of three layers (Red, Green, Blue). Each layer assigns a value from 0-255 to mix and create millions of colors.'
        ]},
        { type: 'h2', content: 'Features in CV' },
        { type: 'p', content: 'A "Feature" is a measurable piece of data in an image (like edges, corners, or specific colors). Algorithms detect these features to recognize objects (e.g., detecting the curve of an eye in facial recognition).' }
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h2', content: 'Key Computer Vision Tasks' },
        { type: 'table', headers: ['Task', 'Description'], rows: [
          ['Image Classification', 'Assigning a label to the entire image (e.g., "This is a dog").'],
          ['Object Detection', 'Identifying objects and drawing bounding boxes around them.'],
          ['Facial Recognition', 'Verifying a person\\'s identity based on facial geometry.']
        ]},
        { type: 'h2', content: 'Real-World Applications' },
        { type: 'ul', items: [
          'Autonomous Vehicles: Detecting pedestrians, lanes, and traffic lights.',
          'Medical Imaging: Analyzing X-rays and MRIs to detect diseases like tumors.',
          'Retail: Amazon Go stores tracking items picked up by customers.',
          'Security: Biometric attendance systems and surveillance.'
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
        { type: 'p', content: 'Natural Language Processing (NLP) is the branch of AI that gives machines the ability to read, understand, and derive meaning from human languages.' },
        { type: 'h2', content: 'NLP vs. NLU vs. NLG' },
        { type: 'ul', items: [
          'NLP (Processing): The overarching field of text/speech processing.',
          'NLU (Understanding): The sub-field focused on understanding the actual meaning and intent behind the words.',
          'NLG (Generation): The sub-field focused on generating human-readable text (e.g., writing a summary).'
        ]},
        { type: 'h2', content: 'Human Language vs. Computer Language' },
        { type: 'p', content: 'Computer languages (Python, Java) are highly structured with strict syntax rules. Human languages are complex, unstructured, and filled with ambiguity, idioms, and sarcasm, making NLP highly challenging for machines.' }
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h2', content: 'Text Processing Concepts' },
        { type: 'p', content: 'Before a machine can analyze text, it must convert text into numbers.' },
        { type: 'ol', items: [
          'Tokenization: Breaking a sentence into smaller parts called tokens (words).',
          'Stop-word Removal: Removing common words (is, the, and) that add little meaning.',
          'Stemming/Lemmatization: Converting words to their root forms (e.g., "running" becomes "run").',
          'Bag of Words (BoW) / TF-IDF: Converting the remaining words into a mathematical vector based on their frequency.'
        ]},
        { type: 'h2', content: 'Applications of NLP' },
        { type: 'ul', items: [
          'Chatbots & Virtual Assistants (Siri, Alexa).',
          'Machine Translation (Google Translate).',
          'Sentiment Analysis (Determining if a customer review is positive or negative).',
          'Email Spam Filtering.'
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
        { type: 'h1', content: 'Session 1: Model Evaluation & Confusion Matrix' },
        { type: 'p', content: 'Evaluation is the final stage of the AI Project Cycle. It involves testing the model to see how well it performs.' },
        { type: 'h2', content: 'The Confusion Matrix' },
        { type: 'p', content: 'A confusion matrix is a table used to describe the performance of a classification model. It contains four outcomes:' },
        { type: 'ul', items: [
          'True Positive (TP): The model predicted YES, and the actual truth was YES. (Correct)',
          'True Negative (TN): The model predicted NO, and the actual truth was NO. (Correct)',
          'False Positive (FP): The model predicted YES, but the actual truth was NO. (Type 1 Error)',
          'False Negative (FN): The model predicted NO, but the actual truth was YES. (Type 2 Error)'
        ]},
        { type: 'callout', style: 'example', content: 'In a Forest Fire Prediction model:\\nTP: Predicted fire, and there was a fire.\\nFN: Predicted NO fire, but there WAS a fire (Extremely dangerous!).' }
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h2', content: 'Evaluation Metrics' },
        { type: 'p', content: 'We calculate specific metrics from the Confusion Matrix to judge the model.' },
        { type: 'table', headers: ['Metric', 'Formula', 'What it means'], rows: [
          ['Accuracy', '(TP+TN) / Total', 'Percentage of correct predictions overall. Useful only when the dataset is balanced.'],
          ['Precision', 'TP / (TP+FP)', 'Out of all YES predictions, how many were actually correct? Crucial when False Positives are costly (e.g., Spam Filter).'],
          ['Recall', 'TP / (TP+FN)', 'Out of all actual YES cases, how many did the model find? Crucial when False Negatives are costly (e.g., Cancer detection).'],
          ['F1 Score', '2 * (Precision * Recall) / (Precision + Recall)', 'The harmonic mean of Precision and Recall. Used when you need a balance between the two.']
        ]}
      ]
    }
  ]
};
`;

fs.writeFileSync(path.join(__dirname, 'src/data/chapters/chapter1.ts'), ch1);
fs.writeFileSync(path.join(__dirname, 'src/data/chapters/chapter2.ts'), ch2);
fs.writeFileSync(path.join(__dirname, 'src/data/chapters/chapter3.ts'), ch3);
fs.writeFileSync(path.join(__dirname, 'src/data/chapters/chapter4.ts'), ch4);
fs.writeFileSync(path.join(__dirname, 'src/data/chapters/chapter5.ts'), ch5);
fs.writeFileSync(path.join(__dirname, 'src/data/chapters/chapter6.ts'), ch6);
fs.writeFileSync(path.join(__dirname, 'src/data/chapters/chapter7.ts'), ch7);
fs.writeFileSync(path.join(__dirname, 'src/data/chapters/chapter8.ts'), ch8);
fs.writeFileSync(path.join(__dirname, 'src/data/chapters/chapter9.ts'), ch9);
fs.writeFileSync(path.join(__dirname, 'src/data/chapters/chapter10.ts'), ch10);

console.log('All 10 chapters generated successfully');
