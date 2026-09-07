const fs = require('fs');

const testsCode = `import { Test } from '../types/assessment';

export const TESTS_DATABASE: Test[] = [
  {
    id: "test-communication",
    title: "Communication Skills Mastery",
    topic: "Employability Skills (Part A) - Unit 1",
    questions: [
      {
        id: "q1",
        marks: 1,
        question: "Which of the following is NOT an element of the communication cycle?",
        options: [
          { id: "A", text: "Sender" },
          { id: "B", text: "Receiver" },
          { id: "C", text: "Time" },
          { id: "D", text: "Feedback" }
        ],
        correctOptionId: "C",
        explanation: "The elements of a communication cycle are Sender, Message, Encoding, Channel, Receiver, Decoding, and Feedback. Time is not a primary element."
      },
      {
        id: "q2",
        marks: 1,
        question: "What is the primary purpose of 'Feedback' in communication?",
        options: [
          { id: "A", text: "To argue with the sender" },
          { id: "B", text: "To confirm understanding of the message" },
          { id: "C", text: "To delay the response" },
          { id: "D", text: "To change the communication channel" }
        ],
        correctOptionId: "B",
        explanation: "Feedback completes the communication cycle by confirming that the receiver has understood the message as intended by the sender."
      },
      {
        id: "q3",
        marks: 1,
        question: "Which of these is an example of non-verbal communication?",
        options: [
          { id: "A", text: "Writing an email" },
          { id: "B", text: "Giving a speech" },
          { id: "C", text: "Nodding your head" },
          { id: "D", text: "Talking on the phone" }
        ],
        correctOptionId: "C",
        explanation: "Non-verbal communication involves sending and receiving wordless cues. Nodding is a gesture, which falls under non-verbal communication."
      },
      {
        id: "q4",
        marks: 1,
        question: "What does the 'S' in the SMART goal-setting method stand for?",
        options: [
          { id: "A", text: "Simple" },
          { id: "B", text: "Specific" },
          { id: "C", text: "Standard" },
          { id: "D", text: "Smart" }
        ],
        correctOptionId: "B",
        explanation: "SMART stands for Specific, Measurable, Achievable, Realistic, and Timely."
      },
      {
        id: "q5",
        marks: 1,
        question: "Which communication barrier is caused by differences in language or meaning of words?",
        options: [
          { id: "A", text: "Physical Barrier" },
          { id: "B", text: "Organizational Barrier" },
          { id: "C", text: "Semantic Barrier" },
          { id: "D", text: "Psychological Barrier" }
        ],
        correctOptionId: "C",
        explanation: "Semantic barriers occur when the sender and receiver have different interpretations of words or use jargon."
      }
    ]
  },
  {
    id: "test-ai-project-cycle",
    title: "AI Project Cycle & Basics",
    topic: "Subject Specific Skills (Part B) - Unit 2",
    questions: [
      {
        id: "q1",
        marks: 1,
        question: "What is the first step in the AI Project Cycle?",
        options: [
          { id: "A", text: "Data Exploration" },
          { id: "B", text: "Problem Scoping" },
          { id: "C", text: "Modelling" },
          { id: "D", text: "Data Acquisition" }
        ],
        correctOptionId: "B",
        explanation: "Problem Scoping is the first stage, where we understand the problem, determine the goals, and use the 4Ws canvas."
      },
      {
        id: "q2",
        marks: 1,
        question: "The 4Ws Problem Canvas consists of:",
        options: [
          { id: "A", text: "Who, What, Where, Why" },
          { id: "B", text: "Who, When, Where, Why" },
          { id: "C", text: "What, When, Which, Who" },
          { id: "D", text: "Why, What, Whom, When" }
        ],
        correctOptionId: "A",
        explanation: "The 4Ws canvas blocks are: Who (stakeholders), What (the problem), Where (context/situation), and Why (the benefits of solving it)."
      },
      {
        id: "q3",
        marks: 1,
        question: "Which term describes the data used to teach an AI model?",
        options: [
          { id: "A", text: "Testing Data" },
          { id: "B", text: "Training Data" },
          { id: "C", text: "Raw Data" },
          { id: "D", text: "Scraped Data" }
        ],
        correctOptionId: "B",
        explanation: "Training Data is the dataset given to the AI model during its learning phase to help it recognize patterns."
      },
      {
        id: "q4",
        marks: 1,
        question: "When visualizing data, which tool is commonly used to show trends over time?",
        options: [
          { id: "A", text: "Pie Chart" },
          { id: "B", text: "Bar Graph" },
          { id: "C", text: "Line Chart" },
          { id: "D", text: "Scatter Plot" }
        ],
        correctOptionId: "C",
        explanation: "Line charts are ideal for displaying data points across a continuous time scale to identify trends."
      },
      {
        id: "q5",
        marks: 1,
        question: "Which stage involves testing the AI model in real-world scenarios?",
        options: [
          { id: "A", text: "Evaluation" },
          { id: "B", text: "Problem Scoping" },
          { id: "C", text: "Data Acquisition" },
          { id: "D", text: "Modelling" }
        ],
        correctOptionId: "A",
        explanation: "Evaluation is the stage where the model's predictions are tested against testing data and real-world metrics to ensure accuracy and reliability."
      }
    ]
  },
  {
    id: "test-nlp-cv",
    title: "Computer Vision & NLP Fundamentals",
    topic: "Subject Specific Skills (Part B) - Units 5 & 6",
    questions: [
      {
        id: "q1",
        marks: 1,
        question: "Which domain of AI is responsible for facial recognition in smartphones?",
        options: [
          { id: "A", text: "Natural Language Processing (NLP)" },
          { id: "B", text: "Data Science" },
          { id: "C", text: "Computer Vision (CV)" },
          { id: "D", text: "Robotics" }
        ],
        correctOptionId: "C",
        explanation: "Computer Vision enables machines to understand and interpret visual information from the world, like facial recognition."
      },
      {
        id: "q2",
        marks: 1,
        question: "What does 'NLP' stand for in Artificial Intelligence?",
        options: [
          { id: "A", text: "Network Logic Protocol" },
          { id: "B", text: "Natural Language Processing" },
          { id: "C", text: "Neural Learning Process" },
          { id: "D", text: "Node Local Performance" }
        ],
        correctOptionId: "B",
        explanation: "Natural Language Processing (NLP) is the branch of AI that deals with the interaction between computers and human (natural) languages."
      },
      {
        id: "q3",
        marks: 1,
        question: "Which of these is a common application of NLP?",
        options: [
          { id: "A", text: "Self-driving cars" },
          { id: "B", text: "Email spam filtering" },
          { id: "C", text: "Image colorization" },
          { id: "D", text: "Weather forecasting" }
        ],
        correctOptionId: "B",
        explanation: "Email spam filtering uses text classification, an NLP technique, to identify and segregate spam messages based on text content."
      },
      {
        id: "q4",
        marks: 1,
        question: "In Computer Vision, images are typically represented as:",
        options: [
          { id: "A", text: "Audio waves" },
          { id: "B", text: "Text strings" },
          { id: "C", text: "Matrices of pixels" },
          { id: "D", text: "Vector nodes" }
        ],
        correctOptionId: "C",
        explanation: "Computers see images as grids or matrices of pixels, where each pixel is represented by numerical values denoting color intensity."
      },
      {
        id: "q5",
        marks: 1,
        question: "What is a 'chatbot' primarily an example of?",
        options: [
          { id: "A", text: "Data Science" },
          { id: "B", text: "NLP" },
          { id: "C", text: "Computer Vision" },
          { id: "D", text: "Blockchain" }
        ],
        correctOptionId: "B",
        explanation: "Chatbots use NLP to understand user text or voice inputs and generate appropriate conversational responses."
      }
    ]
  }
];
`;

fs.writeFileSync('src/data/testsData.ts', testsCode);
console.log('Regenerated testsData.ts');

const questionsCode = `import { SubjectiveQuestion } from '../types/assessment';

export const QUESTIONS_DATABASE: SubjectiveQuestion[] = [
  {
    id: "sq1",
    chapterId: "communication-skills",
    chapterTitle: "Employability: Communication Skills",
    marks: 2,
    question: "Define communication and list its two main categories.",
    answer: "Communication is the process of exchanging information, ideas, thoughts, or feelings between individuals through a common system of symbols, signs, or behavior.\n\nThe two main categories are:\n1. Verbal Communication (Oral and Written)\n2. Non-Verbal Communication (Body language, gestures, facial expressions, and visual communication)."
  },
  {
    id: "sq2",
    chapterId: "communication-skills",
    chapterTitle: "Employability: Communication Skills",
    marks: 3,
    question: "Explain the importance of 'Feedback' in the communication cycle.",
    answer: "Feedback is a critical component of the communication cycle for the following reasons:\n\n• Confirmation: It confirms that the receiver has correctly understood the message intended by the sender.\n• Improvement: It allows the sender to adjust their message if confusion arises.\n• Two-Way Process: It transforms a one-way broadcast into a two-way interactive conversation.\n• Effectiveness: Without feedback, communication remains incomplete and ineffective."
  },
  {
    id: "sq3",
    chapterId: "ai-project-cycle",
    chapterTitle: "Subject Specific: AI Project Cycle",
    marks: 4,
    question: "Briefly explain the 4Ws problem canvas used in Problem Scoping.",
    answer: "The 4Ws problem canvas is a framework used during the Problem Scoping phase to define the problem clearly:\n\n1. Who (Stakeholders): Who is facing the problem? Identifies the people or organizations affected by the issue.\n2. What (Problem): What is the exact nature of the problem? Defines the core issue and how we know it's a problem.\n3. Where (Context/Situation): Where does this problem arise? Defines the specific context, location, or scenario.\n4. Why (Motivation): Why is solving this problem important? Defines the benefits and value of creating a solution."
  },
  {
    id: "sq4",
    chapterId: "ai-project-cycle",
    chapterTitle: "Subject Specific: AI Project Cycle",
    marks: 2,
    question: "Differentiate between Training Data and Testing Data.",
    answer: "• Training Data: This is the dataset used to train an AI model. The model analyzes this data to learn patterns, features, and relationships (usually around 80% of the dataset).\n\n• Testing Data: This is a separate dataset used to evaluate the performance of the trained model. It contains unseen data to verify if the model can accurately predict or classify new inputs (usually around 20% of the dataset)."
  },
  {
    id: "sq5",
    chapterId: "nlp-basics",
    chapterTitle: "Subject Specific: Natural Language Processing",
    marks: 3,
    question: "List three real-world applications of Natural Language Processing (NLP).",
    answer: "Three common real-world applications of NLP are:\n\n1. Virtual Assistants/Chatbots: Systems like Siri, Alexa, or customer support bots that understand and respond to human voice or text commands.\n2. Email Filtering: Algorithms that analyze the text of incoming emails to automatically classify them as 'Spam' or 'Inbox'.\n3. Machine Translation: Services like Google Translate that process text in one natural language and accurately translate it into another language."
  },
  {
    id: "sq6",
    chapterId: "cv-basics",
    chapterTitle: "Subject Specific: Computer Vision",
    marks: 3,
    question: "How does a computer 'see' an image? Explain briefly.",
    answer: "Unlike humans, computers cannot see objects. They perceive an image as a matrix (grid) of numbers, representing pixels.\n\n• For a grayscale image, each pixel has a single value ranging from 0 (black) to 255 (white).\n• For a color image (RGB), each pixel consists of three values representing the intensity of Red, Green, and Blue channels (each ranging from 0 to 255).\n\nThe Computer Vision algorithm processes these numerical matrices to detect edges, shapes, patterns, and ultimately recognize the objects within the image."
  },
  {
    id: "sq7",
    chapterId: "entrepreneurship",
    chapterTitle: "Employability: Entrepreneurial Skills",
    marks: 3,
    question: "What are the key characteristics of a successful entrepreneur?",
    answer: "Key characteristics of a successful entrepreneur include:\n\n1. Risk-taking: Willingness to take calculated risks to achieve business goals.\n2. Innovation: Ability to think creatively and introduce new ideas, products, or services.\n3. Leadership & Vision: A clear vision for the future and the ability to motivate a team.\n4. Resilience: Ability to bounce back from failures and adapt to changing market conditions.\n5. Hard Work: Dedication and persistence in executing the business plan."
  },
  {
    id: "sq8",
    chapterId: "ai-ethics",
    chapterTitle: "Subject Specific: AI Ethics",
    marks: 4,
    question: "What is AI Bias? Provide an example of how it can harm society.",
    answer: "AI Bias refers to situations where an AI system produces prejudiced or unfair results because of skewed, incomplete, or biased training data, or flawed algorithms.\n\nExample of Harm:\nIf a recruitment AI is trained predominantly on historical resumes of male candidates for technical roles, the model might learn to associate male traits or keywords with 'success'. Consequently, it could unfairly downgrade or reject female candidates, perpetuating gender discrimination in hiring processes. This harms equality and reinforces societal prejudices."
  }
];
`;

fs.writeFileSync('src/data/questionsData.ts', questionsCode);
console.log('Regenerated questionsData.ts');

