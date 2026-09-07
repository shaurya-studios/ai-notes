const fs = require('fs');
const path = require('path');

const writeChapter = (fileName, content) => {
  fs.writeFileSync(path.join(__dirname, 'src/data/chapters', fileName), content);
};

writeChapter('chapter_ai_models.ts', `import { NativeChapter } from '../../types/content';
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
          'Machine doesn\\'t learn/adapt to new data.',
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
`);

writeChapter('chapter_cv.ts', `import { NativeChapter } from '../../types/content';
export const chapter_cv: NativeChapter = {
  id: 'computer-vision-custom', number: 'II', title: 'Computer Vision',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Introduction' },
        { type: 'definition', term: 'Computer Vision?', definition: 'Process of extracting information from images, videos, or text. Makes sense of visual data like humans.' },
        { type: 'p', content: 'Analogy:' },
        { type: 'ul', items: [
          'Human Vision → Eye (sensing) + Brain (interpreting)',
          'Computer Vision → Camera/sensor (sensing)+ Algorithm/Model (interpreting)'
        ]},
        { type: 'table', headers: ['Feature', 'Computer Vision', 'Image Processing'], rows: [
          ['Focus', 'Extract meaningful info & predict visual input', 'Process raw images for enhancement & preparation'],
          ['Scope', 'Superset of Image Processing', 'Subset of Computer Vision'],
          ['E.g.', 'Object detection, handwriting recognition', 'Rescaling images, brightness correction, changing tones']
        ]},
        { type: 'h2', content: 'Applications?' },
        { type: 'ul', items: [
          'Facial Recognition: Smart homes, schools (attendance), security.',
          'Face Filters',
          'Google Search/Translate',
          'Self-Driving Cars',
          'Medical Imaging: MRI'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 2: Computer Vision Tasks' },
        { type: 'p', content: 'CV extract information from images.' },
        { type: 'ul', items: [
          'Classification: Assigns an input image one label from a fixed set of categories.',
          'Classification + Localization: Identifies what object is in the image and where it is located.',
          'Object Detection: Detects instances of real-world objects like faces, bicycles, buildings in images.',
          'Instance Segmentation: Detects objects, assigns a category, and labels each pixel corresponding to that object.'
        ]},
        { type: 'h2', content: 'Basics of Image?' },
        { type: 'ul', items: [
          'Pixels: Picture element, smallest unit of an image, Arranged in 2D grid. More pixels, image more resembles original.',
          'Resolution: Number of pixels in an image. Expressed as: Width × Height',
          'Pixel Value: Each pixel stores brightness and/or color, (0-255). 0: black/no color, 255: white/full color',
          'Grayscale & RGB formats'
        ]}
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: 'Session 3: No code AI tools' },
        { type: 'h2', content: 'Introduction to Lobe.ai?' },
        { type: 'p', content: 'Microsoft\\'s Auto-ML / no-code AI tool. It works with image classification and allows a set of images with labels and will automatically find the most optimal model to classify the images.' },
        { type: 'h2', content: 'Introduction to Teachable Machine?' },
        { type: 'p', content: 'Developed by Google in 2017. Runs on top of Tensorflow.js (Google). Web-based tool to train models using: Images, Audio, poses via webcam or uploaded files.' },
        { type: 'h2', content: 'Orange Data Mining Tool?' },
        { type: 'ul', items: [
          'Use Case: Coral Bleaching Detection',
          'Purpose: Develop a classification model for early identification of coral bleaching to protect marine ecosystems.',
          'What Are Coral Reefs?: Found in tropical oceans worldwide. Composed of skeletons of marine invertebrates called coral. Coral reefs are vital for aquatic life.',
          'Causes of Coral Bleaching: Environmental stressors affecting coral health (like temperature changes, pollution, etc.)'
        ]}
      ]
    },
    {
      pageNumber: 4,
      blocks: [
        { type: 'h1', content: 'Session 4: Image Features' },
        { type: 'definition', term: 'What is a Feature?', definition: 'In computer vision and image processing, a feature is a piece of information relevant for solving a computational task.' },
        { type: 'ul', items: [
          'Features may include: points, edges, corners, objects, or other patterns in the image.',
          'They help in tasks like object detection, image matching, and tracking.'
        ]},
        { type: 'h1', content: 'Session 5: Convolution' },
        { type: 'h2', content: 'Basics?' },
        { type: 'ul', items: [
          'Images are stored as Nos (values: 0-255).',
          'Editing pixel values changes the image, basis of image editing.',
          'Apps like Instagram, Snapchat apply filters by modifying pixel values.',
          'Achieved using Convolution and Kernels.'
        ]},
        { type: 'h2', content: 'Convolution?' },
        { type: 'ul', items: [
          'A mathematical operation used in image processing.',
          'It is the element-wise multiplication of: Image array (I) & Kernel array (K) → Summed to produce a new array (processed image).',
          'Formula: I * K = Output Image'
        ]}
      ]
    },
    {
      pageNumber: 5,
      blocks: [
        { type: 'h1', content: 'Convolution Kernels & CNN' },
        { type: 'h2', content: 'Kernel?' },
        { type: 'ul', items: [
          'Kernel: a small matrix slid across an image, multiplying with pixel values to create desired effects.',
          'Purpose: different kernels produce different effects (blur, sharpen, edge detection).',
          'Image Processing: convolution extracts image features, useful in CNNs.',
          'Process: Kernel\\'s center overlaps with image pixels. Convolution reduces image size because edges cannot fully overlap.',
          'Solution (Padding): extend image edges with zeros → keeps input & output the same size..'
        ]},
        { type: 'h1', content: 'Session 6: CNN' },
        { type: 'definition', term: 'Input Image', definition: 'A Convolutional Neural Network (CNN) is a Deep Learning algorithm that can take in an input image, assign importance (learnable weights and biases) to various aspects/objects in the image, and be able to differentiate one from the other.' }
      ]
    },
    {
      pageNumber: 6,
      blocks: [
        { type: 'h1', content: 'CNN Layers' },
        { type: 'h2', content: 'Convolution Layer?' },
        { type: 'ul', items: [
          'Purpose: Extract features from the image.',
          'First layers → detect low-level features (edges, colors, gradients).',
          'Deeper layers → detect high-level features (eyes, nose, objects, etc.).',
          'Uses kernels (filters) to generate Feature Maps / Activation Maps.',
          'Benefits: Reduces image size for efficient processing. Focuses only on important features (like facial parts for recognition).'
        ]},
        { type: 'h2', content: 'ReLU (Rectified linear unit)' },
        { type: 'ul', items: [
          'Purpose: Introduces non-linearity.',
          'Replaces negative values with 0, keeps positives as they are.',
          'Makes edges & imp. features more distinct.',
          'Helps CNN detect complex patterns, not just smooth gradients.'
        ]},
        { type: 'h2', content: 'Pooling Layer' },
        { type: 'ul', items: [
          'Purpose: Reduce size of feature maps while keeping key info.',
          'Max Pooling → takes the maximum value in each region.',
          'Average Pooling → takes the average value in each region.',
          'Benefits: Makes image smaller & Provides translation & distortion invariance.'
        ]}
      ]
    },
    {
      pageNumber: 7,
      blocks: [
        { type: 'h1', content: 'CNN Layers (Continued)' },
        { type: 'h2', content: 'Fully Connected (FC) Layer?' },
        { type: 'ul', items: [
          'Purpose: Final classification.',
          'Feature maps are flattened into a vector.',
          'Each value represents a probability of belonging to a class.',
          'Example: If input = cat image → features like whiskers, fur, ears → high probability for label "cat".'
        ]},
        { type: 'h2', content: 'Complete CNN Process?' },
        { type: 'ol', items: [
          'Input image given.',
          'Convolution Layer(s): Extract features -> feature maps.',
          'ReLU: Apply non-linearity, make features clearer.',
          'Pooling: Reduce size, keep important features.',
          'Steps (2-4) repeat multiple times for deeper learning.',
          'Fully Connected Layer: Flatten + classify → final prediction label.'
        ]}
      ]
    }
  ]
};
`);

writeChapter('chapter_ent.ts', `import { NativeChapter } from '../../types/content';
export const chapter_ent: NativeChapter = {
  id: 'entrepreneurial-skills-custom', number: 'III', title: 'Entrepreneurial Skills',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1 & 2: Entrepreneurship' },
        { type: 'definition', term: 'ENTREPRENEURSHIP?', definition: 'Self employment where a person runs a business to satisfy people\\'s needs and aims to improve it for profit.' },
        { type: 'p', content: 'Qualities: Confident, Try new ideas, Creative, Patient, Responsible, Hard workings etc.' },
        { type: 'definition', term: 'WAGE EMPLOYMENT:', definition: 'Work for an organization/person, paid for work.' },
        { type: 'definition', term: 'SELF-EMPLOYMENT:', definition: 'Start a business to satisfy people\\'s needs.' },
        { type: 'h2', content: 'ROLES OF AN ENTREPRENEUR?' },
        { type: 'ul', items: [
          'Fulfil customer needs, Lower prices',
          'Use local Materials',
          'Helps society',
          'Creates Jobs, Shares wealth'
        ]},
        { type: 'h2', content: 'FUNCTIONS OF AN ENTREPRENEUR?' },
        { type: 'ul', items: [
          'Making Decisions: What to produce/sell, quantity, and where to sell.',
          'Managing the Business: Plan future of business, Arrange raw materials, Hire staff and assign tasks, Monitor progress',
          'Dividing Income: Spend on materials, salaries, rent, and other business needs',
          'Taking Risks: Face uncertainties like theft, fire, losses, etc.',
          'Creating New Methods / Ideas / Products: Innovate constantly to increase income and relevance'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 3 & 4: Myths and Stages' },
        { type: 'h2', content: 'MYTHS ABOUT ENTREPRENEURSHIP?' },
        { type: 'p', content: 'MYTH :- False belief or misconception.' },
        { type: 'ul', items: [
          'Myth: Every business idea must be unique. Truth: Even common ideas can succeed if you add creativity.',
          'Myth: You need a lot of money to start a business. Truth: Capital is important but businesses can start small.',
          'Myth: Only big businesses count as entrepreneurship. Truth: No business is big or small.',
          'Myth: Entrepreneurs are born, not made. Truth: Anyone can learn & practice entrepreneurial qualities.'
        ]},
        { type: 'h2', content: 'STAGES IN ENTREPRENEURIAL CAREER?' },
        { type: 'ol', items: [
          'Enter → Start business',
          'Survive → Face competition but stay in market.',
          'Grow → Expand business'
        ]},
        { type: 'ul', items: [
          'Entrepreneurs create jobs for themselves + others.',
          'Entrepreneurship = risk + effort, but also growth & independence.',
          'Skills can be learned in school/college or by working under others.'
        ]},
        { type: 'h2', content: 'CONCLUSION:' },
        { type: 'p', content: 'Entrepreneurship isn\\'t about big money, big ideas, or being "born" talented. It\\'s about mindset, persistence, and learning. Anyone (including you) can do it.' }
      ]
    }
  ]
};
`);

writeChapter('chapter_nlp.ts', `import { NativeChapter } from '../../types/content';
export const chapter_nlp: NativeChapter = {
  id: 'nlp-custom', number: 'IV', title: 'Natural Language Processing',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Introduction' },
        { type: 'h2', content: 'Natural Language?' },
        { type: 'ul', items: [
          'Human Languages: English, Hindi, Russian, Bhojpuri etc.',
          'Computer Languages: They can\\'t understand human language. To interact with computer - Python, C++'
        ]},
        { type: 'definition', term: 'Natural Language Processing?', definition: 'Sub-field of Artificial Intelligence (AI). Enable computers to analyze, understand & process human language. Derive meaningful information from human communication. NLP: bridge between humans & machines.' },
        { type: 'p', content: 'NLP converts natural language into digital form, that computer understands' },
        { type: 'h1', content: 'Session 2: Applications' },
        { type: 'h2', content: 'Applications?' },
        { type: 'ul', items: [
          'Voice Assistants: Siri, Alexa',
          'Autogenerated Captions: YT',
          'Language Translations',
          'Sentiment Analysis',
          'Text Classification',
          'Keyword Extraction'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 3: Stages of NLP' },
        { type: 'h3', content: '1. Lexical Analysis' },
        { type: 'ul', items: [
          'Breaks large text -> paragraphs -> sentences -> words.',
          'Uses lexicon: collection of words, phrases'
        ]},
        { type: 'h3', content: '2. Syntactic Analysis / Parsing' },
        { type: 'ul', items: [
          'Checks grammar of sentences/phrases & eliminated logically incorrect sentence.'
        ]},
        { type: 'h3', content: '3. Semantic Analysis' },
        { type: 'ul', items: [
          'Focuses on meaning of words and phrases.',
          'Eg Hot ice cream (Syntactically correct but Semantically wrong)'
        ]},
        { type: 'h3', content: '4. Discourse Integration' },
        { type: 'ul', items: [
          'Forming story of the sentence.',
          'Establishing sentence relation with preceding + succeeding sentences.'
        ]},
        { type: 'h3', content: '5. Pragmatic Analysis' },
        { type: 'ul', items: [
          'Checks real world relevance, Pragmatic: Practical or logical',
          'Discard the actual word meaning & take the intended meaning',
          'Example: "Relax! I\\'m just pulling your leg" Means he is just joking.'
        ]}
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: 'Session 4 & 5: Chatbots & Text Processing' },
        { type: 'h2', content: 'Session 4: Chatbot' },
        { type: 'ul', items: [
          'A computer program designed to simulate human conversation (voice/text).',
          'Learns over time to interact better.',
          'Common uses: Answering FAQs & troubleshooting, Customer support',
          'Eg: Elizabot, Cleverbot'
        ]},
        { type: 'table', headers: ['Script bot', 'Smart bot'], rows: [
          ['Script bots are easy to make.', 'Smart-bots are flexible and powerful.'],
          ['Script bots work around a script which is programmed in them.', 'Smart bots work on bigger databases and other resources directly.'],
          ['Mostly they are free and are easy to integrate to a messaging platform.', 'Smart bots learn with more data.'],
          ['No or little language processing skills.', 'Coding is required to take this up on board.'],
          ['Limited functionality.', 'Wide functionality.']
        ]},
        { type: 'h2', content: 'Session 5: Text Processing' },
        { type: 'p', content: 'Goal: Convert human language into numerical format' },
        { type: 'h3', content: 'Text Normalisation?' },
        { type: 'ol', items: [
          'Sentence Segmentation: Divide (all text data) into sentences.',
          'Tokenization: Sentences into words, numbers, characters.',
          'Removing Stop Words, Special Chars & Nos: the, is, and, are, etc. are removed',
          'Converting Text to Common Case',
          'Stemming: Reduce words to root form, healed → heal, studies → studi (may be meaningless)',
          'Lemmatization: Ensures meaningful base word (lemma), Example: studies → study.'
        ]}
      ]
    },
    {
      pageNumber: 4,
      blocks: [
        { type: 'h1', content: 'Algorithms & Usecases' },
        { type: 'h2', content: 'Bag of words algorithm -' },
        { type: 'p', content: 'Converts text into numbers. Output - A vocabulary (unique words in the corpus). A frequency table (how many times each word appears in each document).' },
        { type: 'h2', content: 'TF-IDF' },
        { type: 'p', content: 'Term Frequency Inverse Document Frequency ? Improves BoW by weighing words based on importance.' },
        { type: 'ul', items: [
          'Term frequency (TF): How often a word appears in a document.',
          'Document frequency (DF): In how many documents a word appears.',
          'Inverse Document frequency (IDF): Formula: IDF = log(Total docs / DF). Idea: If a word appears in all docs, it\\'s not special = low IDF. If a word appears in few docs = high IDF (more valuable).',
          'TF-IDF Score: Formula: TF * IDF. High score = important word for that document.'
        ]},
        { type: 'h1', content: 'Session 6: Usecase Walkthrough' },
        { type: 'h3', content: 'CODE BASED NLP TOOLS' },
        { type: 'ul', items: [
          '1. NLTK (Natural Language Toolkit): Python package for text processing. Provides modules for tokenization, stemming, parsing, classification, etc.',
          '2. SpaCy: Open-source NLP library. Features: tokenization, Parts of speech tagging, Named Entity Recognition, dependency parsing. Optimized for performance in real-world NLP applications.'
        ]},
        { type: 'h3', content: 'NO CODE BASED NLP TOOLS' },
        { type: 'ul', items: [
          '1. Orange Data Mining: ML + Data analysis tool (Python + visual programming). Drag-and-drop operations. Supports text mining, classification, clustering.',
          '2. MonkeyLearn: Text analysis platform with pre-trained + custom ML models. Tasks: classification, sentiment analysis, entity recognition.'
        ]},
        { type: 'h3', content: 'Sentiment Analysis' },
        { type: 'p', content: 'NLP technique to analyze if textual data = positive, negative, or neutral. Voice of the Customer (VoC): Analyzes customer feedback for insights.' }
      ]
    }
  ]
};
`);

writeChapter('chapter_ai_cycle.ts', `import { NativeChapter } from '../../types/content';
export const chapter_ai_cycle: NativeChapter = {
  id: 'ai-project-cycle-custom', number: 'V', title: 'Revisiting AI Project Cycle',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: AI Project Cycle' },
        { type: 'definition', term: 'DEFINITION', definition: 'A cyclical process followed to complete an AI project, from identifying the problem to deploying the solution.' },
        { type: 'h2', content: 'STAGES OF THE AI PROJECT CYCLE ?' },
        { type: 'ol', items: [
          'Problem Scoping: Define the goal/problem. Identify parameters affecting it. Helps in getting a clear picture.',
          'Data Acquisition: Collect data from reliable sources. Data is the base of AI. Represent data visually (graphs, charts, flowcharts, maps).',
          'Data Exploration: Study patterns, trends, relationships in data. Decide which type of model to build.',
          'Model Building: Select suitable AI models. Test models → find the most efficient one. Develop algorithm around the best model.',
          'Model Evaluation: Test model on new/unseen data. Evaluate performance → improve if needed.',
          'Deployment: Deploy in real-world environment. Ensure smooth operation & value delivery to users.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 2: Introduction to AI Domains' },
        { type: 'p', content: 'AI becomes intelligent based on the training data it receives. Depending on the type of data fed into an AI model, it can be classified into 3 main domains' },
        { type: 'h2', content: 'STATISTICAL DATA?' },
        { type: 'ul', items: [
          'Related to data systems and processes.',
          'Collects, stores, and analyzes large datasets to derive meaning.',
          'Helps in decision making using statistical patterns.',
          'Examples: Price Comparison Websites (PriceGrabber, PriceRunner, Junglee, Shopzilla, DealTime). Found in tech, hospitality, automobiles, etc.'
        ]},
        { type: 'h2', content: 'COMPUTER VISION?' },
        { type: 'ul', items: [
          'Ability of machines to analyze and understand visual data (images, videos, thermal/infrared).',
          'Process: acquiring → screening → analyzing → identifying → extracting → decision-making.',
          'Goal: Teach machines to interpret information from pixels.',
          'Examples: Agricultural Monitoring (crop health, pest detection, yield estimation using drones). Surveillance Systems (monitoring public spaces, detecting suspicious activities, real-time alerts).'
        ]}
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: 'Session 2 (Continued) & Session 3: Ethical Frameworks' },
        { type: 'h2', content: 'NATURAL LANGUAGE PROCESSING?' },
        { type: 'ul', items: [
          'Interaction between computers and humans using natural language (spoken/written).',
          'Tries to read, interpret, and make sense of human language with algorithms.',
          'Objective: Understand and process human language in a valuable way.',
          'Examples: Email filters (spam detection using keywords/phrases). Machine Translation (Google Translate, convert text between languages).'
        ]},
        { type: 'h1', content: 'Session 3: Ethical Frameworks' },
        { type: 'h2', content: 'WHAT ARE FRAMEWORKS?' },
        { type: 'ul', items: [
          'Step-by-step guides for solving problems.',
          'Provide structured approach → ensure all factors are considered.',
          'Help in consistency, communication, and collaboration.'
        ]},
        { type: 'h2', content: 'ETHICAL FRAMEWORKS?' },
        { type: 'ul', items: [
          'Ethics = values/morals to distinguish right vs wrong.',
          'Ethical frameworks = ensure AI decisions do not cause unintended harm.',
          'Provide systematic guidance for moral dilemmas.'
        ]}
      ]
    },
    {
      pageNumber: 4,
      blocks: [
        { type: 'h1', content: 'Need for Ethical Frameworks in AI' },
        { type: 'ul', items: [
          'AI influences/decides outcomes (e.g., biased hiring algorithm).',
          'To ensure AI makes morally acceptable recommendations.',
          'Prevent harm and bias before deployment.'
        ]},
        { type: 'h2', content: 'Factors Influencing Human Decisions (bias)' },
        { type: 'ul', items: [
          'Culture/Religion : alignment with beliefs.',
          'Intuition & Values : does the decision feel "right"?',
          'Value of Humans/Non-Humans : priority of lives',
          'Location/Identity of recipient.',
          'Bias towards relatives/familiar people.',
          'Access to hidden information.'
        ]},
        { type: 'h2', content: 'TYPES OF ETHICAL FRAMEWORKS?' },
        { type: 'h3', content: 'SECTOR BASED FRAMEWORKS?' },
        { type: 'ul', items: [
          'Designed for specific industries.',
          'Example: Bioethics in healthcare → privacy, safety, fairness in medical AI.',
          'Also used in finance, education, transport, agriculture, governance, law enforcement.'
        ]},
        { type: 'h3', content: 'VALUE BASED FRAMEWORKS?' },
        { type: 'ul', items: [
          'Based on moral philosophies & values.',
          'Subtypes:',
          '→ Rights-based → Protect human rights, dignity, freedom.',
          '→ Utility-based → Maximize benefit, minimize harm (overall good).',
          '→ Virtue-based → Focus on honesty, compassion, integrity of decision-makers.'
        ]}
      ]
    }
  ]
};
`);

writeChapter('chapter_comm.ts', `import { NativeChapter } from '../../types/content';
export const chapter_comm: NativeChapter = {
  id: 'communication-skills-custom', number: 'VI', title: 'Communication Skills',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Methods of Communication' },
        { type: 'definition', term: 'WHAT IS COMMUNICATION?', definition: 'How do we share our views & thoughts with each other. Communication word came from Latin word "communicāre" meaning "to share".' },
        { type: 'h2', content: 'PARTS OF COMMUNICATION?' },
        { type: 'ol', items: [
          'Transmitting — Sender transmits the message.',
          'Listening — Receiver listens the message.',
          'Feedback — Receiver conveys their understanding back to the sender in the form of feedback to complete the communication cycle.'
        ]},
        { type: 'h2', content: 'ELEMENTS OF COMMUNICATION?' },
        { type: 'ol', items: [
          'Sender: Person beginning the communication.',
          'Message: Information that sender wants to convey.',
          'Channel: Means by which the information is sent.',
          'Receiver: Person to whom the message is sent.',
          'Feedback: Receiver\\'s acknowledgement & response to the message.'
        ]},
        { type: 'h2', content: 'METHODS OF COMMUNICATION?' },
        { type: 'ol', items: [
          'Face to Face: Most effective, understands body language.',
          'E-mail: Information that the sender wants to convey.',
          'Notices/Posters: Means by which the information is sent.',
          'Business Meetings: Person to whom the message is sent.',
          'Other Methods: Receiver\\'s acknowledgement & response to the message.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 2: Verbal Communication' },
        { type: 'definition', term: 'WHAT IS VERBAL COMMUNICATION?', definition: 'Verbal communication includes sounds, words, language, and speech. Speaking - the most effective, commonly used' },
        { type: 'h2', content: 'TYPE OF VERBAL COMMUNICATION?' },
        { type: 'ol', items: [
          'Interpersonal — One-on-one conversation between two individuals, can be or informal',
          'Written — Letters, circulars, reports, manuals, SMS, social media chats.',
          'Small Group — More than two people involved - Press conferences, Board meetings, Team meetings',
          'Public — When one person speaks to a large group of people or audience, eg Election campaigns'
        ]},
        { type: 'h2', content: 'ADVANTAGES & DISADVANTAGES' },
        { type: 'ul', items: [
          'Advantages: 1. Easy, 2. Adaptability',
          'Disadvantages: 1. Dependency on Words, 2. Confusion, 3. Lack of Permanent Record'
        ]},
        { type: 'h2', content: 'MASTERING VERBAL COMMUNICATION' },
        { type: 'ol', items: [
          'Think Before You Speak',
          'Concise and Clear',
          'Confidence and Body Language'
        ]}
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: 'Session 3: Non-Verbal & Visual Communication' },
        { type: 'definition', term: 'WHAT IS NON VERBAL COMMUNICATION?', definition: 'Process of conveying messages without using spoken or written words. It uses facial expressions, body language, gestures for conveying message' },
        { type: 'ul', items: [
          'Gestures, Expressions, Body Language'
        ]},
        { type: 'table', headers: ['TYPES OF NON VERBAL COMMUNICATION', 'Description'], rows: [
          ['Facial Expressions', 'Our expressions can show different feelings, such as Happiness, Sadness, Anger, Surprise, Fear etc.'],
          ['Posture', 'Shows our confidence and feelings.'],
          ['Gestures or Body Language', 'It include body movements expressing an idea or meaning.'],
          ['Touch', 'We communicate a great deal through touch.'],
          ['Space', 'Space is the physical distance between two people. The space between tow persons while communicating, generally depends on the intimacy or closeness between them.'],
          ['Eye Contact', 'The way we look at someone can communicate a lot.'],
          ['Paralanguage', 'How we speak affects our communication and includes the tone, speed and volume of our voice.']
        ]},
        { type: 'definition', term: 'WHAT IS VISUAL COMMUNICATION?', definition: 'Conveys the messages through images, pictures, videos and symbols. It is an effective way of communication.' }
      ]
    },
    {
      pageNumber: 4,
      blocks: [
        { type: 'h1', content: 'Session 4 & 5: Feedback & Barriers' },
        { type: 'h2', content: 'Session 4: Feedback' },
        { type: 'p', content: 'When a sender shares information, the receiver responds with feedback. Feedback can be positive or negative. Feedback is an important part of the communication cycle.' },
        { type: 'p', content: 'Effective feedback is always- Specific, Helpful, Kind' },
        { type: 'h3', content: 'IMPORTANCE OF FEEDBACK?' },
        { type: 'ol', items: [
          'It validates effective listening',
          'Motivation',
          'Learning Boost',
          'Performance Improvement'
        ]},
        { type: 'h2', content: 'Session 5: Barriers' },
        { type: 'h3', content: 'What is 7Cs of Effective Communication?' },
        { type: 'ul', items: [
          'Clear: Make your message easy to understand.',
          'Concise: Use a simple and short message; avoid unnecessary details.',
          'Concrete: Use specific words and real facts.',
          'Correct: Check your spelling and grammar to avoid confusion.',
          'Coherent: Ensure your words logically connect and relate to the main topic.',
          'Complete: Include all necessary information for a complete message.',
          'Courteous: Be polite, respectful, and truthful in your communication.'
        ]},
        { type: 'h3', content: 'What are barriers to Effective Communication?' },
        { type: 'ol', items: [
          'Physical Barriers: When distance, noise or surroundings create challenges',
          'Linguistic Barriers: A language barrier occurs when people use different languages.',
          'Interpersonal Barriers: Sometimes, people misunderstand each other\\'s messages because of tone, emotions or personal biases.',
          'Organisational Barriers: When the organisational hierarchy, rules and regulations, procedures, policies and norms are not followed by the employee.',
          'Cultural Barriers: Cultural barriers are when people of different cultures are unable to understand each other\\'s customs'
        ]}
      ]
    },
    {
      pageNumber: 5,
      blocks: [
        { type: 'h1', content: 'Session 6 & 7: Writing Skills' },
        { type: 'h2', content: 'Session 6: Sentences' },
        { type: 'definition', term: 'What is Sentence?', definition: 'Sentence is a group of words that communicates a complete thought. A sentence always begins with a capital letter, and it always ends with a question mark, full stop or exclamation mark.' },
        { type: 'h2', content: 'Parts of speech' },
        { type: 'ul', items: [
          'Noun – Names a person, place, thing, or idea. (e.g., dog, city)',
          'Pronoun – Replaces a noun to avoid repetition. (e.g., he, she, it)',
          'Verb – Expresses action or state of being. (e.g., run, exist)',
          'Adjective – Describes or modifies a noun. (e.g., happy, tall)',
          'Adverb – Modifies a verb, adjective, or another adverb. (e.g., quickly, very)'
        ]}
      ]
    }
  ]
};
`);

writeChapter('chapter_green.ts', `import { NativeChapter } from '../../types/content';
export const chapter_green: NativeChapter = {
  id: 'green-skills-custom', number: 'VII', title: 'Green Skills',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Sustainable Development' },
        { type: 'h2', content: 'INTRODUCTION' },
        { type: 'ul', items: [
          'Environment: Everything (air, water, land, forests, rivers) & Human life depends on it.',
          'Development -> Pollution.',
          'Example: High-input agriculture (fertilizers, pesticides) = more food, but soil damage.'
        ]},
        { type: 'definition', term: 'SUSTAINABLE DEVELOPMENT?', definition: 'Development that satisfies present needs without compromising the ability of future generations to meet their own needs.' },
        { type: 'p', content: 'Balance: Economic growth + Environmental care + Social well-being.' },
        { type: 'h2', content: 'PROBLEMS?' },
        { type: 'ul', items: [
          'Food – Fertile land, soil nutrients are decreasing, soil damaged by chemicals',
          'Water – Pollution of rivers/ponds, less clean water.',
          'Fuel – Cutting trees → climate change, floods, heat/cold extremes.'
        ]},
        { type: 'h2', content: 'SOLUTIONS/PRACTICES?' },
        { type: 'ul', items: [
          'Reduce, recycle, reuse.',
          'Plant more trees.',
          'Use eco-friendly materials.',
          'Clean energy (solar, wind).',
          'Organic farming, rainwater harvesting.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 2: Our Role' },
        { type: 'h2', content: 'OUR ROLE IN SUSTAINABLE DEVELOPMENT' },
        { type: 'ul', items: [
          'Quality Education: Go to school regularly, Help friends study, stop dropouts.',
          'Clean Water & Sanitation: Avoid open defecation, build toilets, Keep water clean, stop industrial pollution.',
          'Affordable & Clean Energy: Use solar power, biogas, LEDs, Reduce use of coal & natural gas.',
          'Decent Work & Economic Growth: Study, learn skills, get jobs, contribute to society.',
          'Reduced Inequalities: Be helpful, include everyone (gender, caste, class).',
          'Sustainable Cities & Communities: Save energy, switch off lights/fans, Use natural light, energy-efficient appliances.',
          'Responsible Consumption & Production: Reuse, recycle, carry cloth bags, Donate unused items, Save water, sort & treat garbage.',
          'Protect Life Below Water: Stop plastic pollution, protect marine life.',
          'Protect Life on Land: Plant trees, prevent deforestation & soil erosion.'
        ]}
      ]
    }
  ]
};
`);

writeChapter('chapter_ict.ts', `import { NativeChapter } from '../../types/content';
export const chapter_ict: NativeChapter = {
  id: 'ict-skills-custom', number: 'VIII', title: 'ICT Skills',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Basic Computer Operations' },
        { type: 'definition', term: 'ICT?', definition: 'Information and Communication Technology. Methods, tools, and concepts for storing, recording, and sending digital information.' },
        { type: 'h2', content: 'COMPUTER HARDWARE & SOFTWARE?' },
        { type: 'ul', items: [
          'Hardware: Physical components (keyboard, monitor, CPU).',
          'Software: Programs that make hardware function such as browsers, games, Office tools, etc.',
          'Operating System: The most important software that starts working as soon as we switch on a computer. It displays the desktop on the monitor. E.g. - Ubuntu, Windows, Mac OS, iOS, Android'
        ]},
        { type: 'h2', content: 'Starting a Computer' },
        { type: 'ul', items: [
          'Press Power button → OS starts → desktop/main screen appears.',
          'BIOS (Basic Input/Output System): The BIOS first does a self-test. If the self-test shows that the system is fine, the BIOS will load the Operating System.'
        ]},
        { type: 'h2', content: 'Input Devices' },
        { type: 'p', content: 'Using Keyboard: Function keys, Control keys, Navigation keys, Command keys. Using A Mouse: Point & Click, Roll Over, Drag & Drop, Double-click, Scroll & Right-click' }
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 3 & 4: Maintenance & Security' },
        { type: 'h2', content: 'Session 3: TAKING CARE OF DEVICES' },
        { type: 'ul', items: [
          'Keep Device Clean: Keyboard (soft brush), Screen (soft cloth).',
          'Food & Drinks: Keep liquids away',
          'Handle Carefully: Avoid drops, use bags',
          'Keep Cool: Ensure fans work; avoid overheating',
          'Battery Care: Don\\'t overcharge',
          'Connect Devices Carefully',
          'Avoid Running Too Many Programs',
          'Maintenance Schedule, Backup Your Data, Scanning And Cleaning Viruses, Increasing Computer Performance, Removing SPAM'
        ]},
        { type: 'h2', content: 'Session 4: Threats to Computer Security?' },
        { type: 'ul', items: [
          'Theft: Physical theft (steals laptop), Identity theft (hacker steals personal info).',
          'Viruses / Malware: Worms (copy themselves), Trojan Horse (looks like useful software but secretly damages data).',
          'Online Predator: People pretending to be someone else to manipulate or harm you online.',
          'Internet Scams: Fake lottery messages, winning emails, asking for money or card info.'
        ]},
        { type: 'h2', content: 'How to Protect Your Data' },
        { type: 'ul', items: [
          'Strong Passwords',
          'Install Antivirus & Firewall',
          'Encrypt Data',
          'Use Secure Websites'
        ]}
      ]
    }
  ]
};
`);

writeChapter('chapter_self.ts', `import { NativeChapter } from '../../types/content';
export const chapter_self: NativeChapter = {
  id: 'self-management-custom', number: 'IX', title: 'Self Management Skills',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1 & 2: Stress and Self Awareness' },
        { type: 'definition', term: 'WHAT IS SELF MANAGEMENT?', definition: 'Ability to regulate your emotions, thoughts, and behavior across various situations. It involves motivating yourself, setting goals, and being disciplined.' },
        { type: 'h2', content: 'STRESS MANAGEMENT?' },
        { type: 'p', content: 'STRESS? Emotional, mental, physical, and social reaction to perceived demands or threats. These demands or threats are called stressors like exam pressure, loss of a loved one, fear of judgment, or lack of sleep.' },
        { type: 'h3', content: 'STEPS TO MANAGE STRESS' },
        { type: 'ol', items: [
          'Be Aware You are Stressed : Notice signs like headache, sleeplessness, sadness',
          'Identify the Cause : exams, family issues, financial problems, poor diet, etc.',
          'Apply Stress Management Methods :- Time Management, Physical Exercise, Healthy Diet, Positivity, Sleep'
        ]},
        { type: 'h2', content: 'Session 2: WHAT IS SELF AWARENESS?' },
        { type: 'p', content: 'Ability to recognize your own strengths and weaknesses. It helps you turn weaknesses into strengths and strengths into talents, which is key to achieving success.' },
        { type: 'ul', items: [
          'FINDING STRENGTH: Reflect on what you consistently succeed at. Think about what others praise you for.',
          'FINDING WEAKNESSES: Recognize areas you struggle with. Accept feedback from others. Treat weaknesses as chances to grow, not as failures.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 3 & 4: Motivation and Goals' },
        { type: 'definition', term: 'WHAT IS SELF MOTIVATION?', definition: 'Inner drive that pushes you to take action, achieve goals, and improve your life without needing reminders or pressure from others.' },
        { type: 'h2', content: 'TYPES OF MOTIVATION?' },
        { type: 'ol', items: [
          'Internal Motivation: Driven by joy, health, self growth. E.g. Learning dance because it makes you feel good.',
          'External Motivation: Driven by recognition, prizes, or respect. E.g. Practicing for a race after winning a medal.'
        ]},
        { type: 'h2', content: 'Steps to Build Self-Motivation?' },
        { type: 'ol', items: [
          'Set Clear Goals',
          'Develop a Plan',
          'Set Timelines',
          'Stay Loyal to Your Goal'
        ]},
        { type: 'h2', content: 'Session 4: WHAT ARE GOALS?' },
        { type: 'p', content: 'Goals are dreams with deadlines.' },
        { type: 'h3', content: 'SMART Method to set Goals?' },
        { type: 'ul', items: [
          'S : Specific (Clear and detailed)',
          'M : Measurable (Can be tracked)',
          'A : Achievable (Realistic Steps)',
          'R : Realistic (Within your ability and effort)',
          'T : Time Bound (Has a deadline)'
        ]}
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: 'Session 5: Time Management' },
        { type: 'definition', term: 'WHAT IS TIME MANAGEMENT?', definition: 'Planning and controlling how you spend your time to get important tasks done efficiently. It helps you balance study, work, and fun.' },
        { type: 'h2', content: 'STEPS FOR EFFECTIVE TIME MANAGEMENT' },
        { type: 'ol', items: [
          'Organize',
          'Prioritize',
          'Control',
          'Track'
        ]},
        { type: 'h2', content: 'TIPS?' },
        { type: 'ul', items: [
          'Don\\'t delay or postpone tasks',
          'Keep your study area clean and ready',
          'Create a "No Disturbance Zone"',
          'Use waiting time to do small tasks',
          'Always keep and update a to-do list',
          'Replace unproductive habits with useful ones'
        ]}
      ]
    }
  ]
};
`);

console.log('Finished writing extracted notes chapters');
