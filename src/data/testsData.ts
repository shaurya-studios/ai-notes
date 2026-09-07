export type Question = {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
};

export type Test = {
  id: string;
  title: string;
  questions: Question[];
};

export const TESTS_DATABASE: Test[] = [
  {
    id: 'test-1',
    title: 'Part A: Employability Skills (Chapters 1-5)',
    questions: [
      {
        id: 'q1',
        text: 'Which of the following is NOT an element of the communication cycle?',
        options: ['Sender', 'Feedback', 'Receiver', 'Interference'],
        correctAnswer: 3,
        explanation: 'Interference or noise can disrupt communication, but the core elements are Sender, Message, Encoding, Channel, Receiver, Decoding, and Feedback.'
      },
      {
        id: 'q2',
        text: 'What does "T" stand for in SMART goal setting?',
        options: ['Target', 'Tested', 'Time-bound', 'Tough'],
        correctAnswer: 2,
        explanation: 'SMART stands for Specific, Measurable, Achievable, Relevant, and Time-bound.'
      },
      {
        id: 'q3',
        text: 'Which of the following is a function of an Operating System?',
        options: ['File Management', 'Writing emails', 'Browsing the web', 'Creating presentations'],
        correctAnswer: 0,
        explanation: 'File management, memory management, and process management are core functions of an OS.'
      },
      {
        id: 'q4',
        text: 'Which of the following is a myth about entrepreneurship?',
        options: ['Entrepreneurs create jobs', 'Entrepreneurs are born, not made', 'Entrepreneurs take risks', 'Entrepreneurs solve problems'],
        correctAnswer: 1,
        explanation: 'It is a common myth that entrepreneurs are born. In reality, entrepreneurship is a skill that can be learned and developed.'
      },
      {
        id: 'q5',
        text: 'Which of the following is a Green Job?',
        options: ['Software Engineer', 'Solar Panel Installer', 'Bank Teller', 'Marketing Manager'],
        correctAnswer: 1,
        explanation: 'A Green Job contributes directly to preserving or restoring the environment.'
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Part B: Introduction to AI & Project Cycle',
    questions: [
      {
        id: 'q1',
        text: 'Which of the following falls under the domain of Computer Vision?',
        options: ['Chatbot', 'Self-driving car pedestrian detection', 'Stock market prediction', 'Language translation'],
        correctAnswer: 1,
        explanation: 'Pedestrian detection requires the machine to process visual data (images/video), which is Computer Vision.'
      },
      {
        id: 'q2',
        text: 'In the 4Ws problem canvas, what does "Who" refer to?',
        options: ['The developer of the AI', 'The stakeholders facing the problem', 'The computer running the model', 'The data scientists'],
        correctAnswer: 1,
        explanation: 'The "Who" block helps identify the people or stakeholders who are directly facing the problem.'
      },
      {
        id: 'q3',
        text: 'Which approach involves the machine finding patterns in data without explicit programming?',
        options: ['Rule-Based Approach', 'Learning-Based Approach (ML)', 'Hardcoding', 'Database Management'],
        correctAnswer: 1,
        explanation: 'In the Learning-Based Approach, the machine analyzes data to find its own rules (Machine Learning).'
      },
      {
        id: 'q4',
        text: 'Which metric is calculated as TP / (TP + FP)?',
        options: ['Accuracy', 'Precision', 'Recall', 'F1 Score'],
        correctAnswer: 1,
        explanation: 'Precision measures how many of the positively predicted instances were actually positive.'
      },
      {
        id: 'q5',
        text: 'In a confusion matrix, if a model predicts NO fire, but there IS a fire, this is called a:',
        options: ['True Positive', 'True Negative', 'False Positive', 'False Negative'],
        correctAnswer: 3,
        explanation: 'The prediction was negative (NO fire), but it was false (there WAS a fire). Hence, False Negative.'
      }
    ]
  }
];
