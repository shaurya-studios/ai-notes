import { Test } from '../types/assessment';

export const TESTS_DATABASE: Test[] = [
  {
    id: 'test-1',
    title: 'Part A: Employability Skills (Chapters 1-5)',
    topic: 'Part A',
    questions: [
      {
        id: 'q1',
        question: 'Which of the following is NOT an element of the communication cycle?',
        options: [
          { id: 'a', text: 'Sender' },
          { id: 'b', text: 'Feedback' },
          { id: 'c', text: 'Receiver' },
          { id: 'd', text: 'Interference' }
        ],
        correctOptionId: 'd',
        explanation: 'Interference or noise can disrupt communication, but the core elements are Sender, Message, Encoding, Channel, Receiver, Decoding, and Feedback.',
        marks: 1
      },
      {
        id: 'q2',
        question: 'What does "T" stand for in SMART goal setting?',
        options: [
          { id: 'a', text: 'Target' },
          { id: 'b', text: 'Tested' },
          { id: 'c', text: 'Time-bound' },
          { id: 'd', text: 'Tough' }
        ],
        correctOptionId: 'c',
        explanation: 'SMART stands for Specific, Measurable, Achievable, Relevant, and Time-bound.',
        marks: 1
      },
      {
        id: 'q3',
        question: 'Which of the following is a function of an Operating System?',
        options: [
          { id: 'a', text: 'File Management' },
          { id: 'b', text: 'Writing emails' },
          { id: 'c', text: 'Browsing the web' },
          { id: 'd', text: 'Creating presentations' }
        ],
        correctOptionId: 'a',
        explanation: 'File management, memory management, and process management are core functions of an OS.',
        marks: 1
      },
      {
        id: 'q4',
        question: 'Which of the following is a myth about entrepreneurship?',
        options: [
          { id: 'a', text: 'Entrepreneurs create jobs' },
          { id: 'b', text: 'Entrepreneurs are born, not made' },
          { id: 'c', text: 'Entrepreneurs take risks' },
          { id: 'd', text: 'Entrepreneurs solve problems' }
        ],
        correctOptionId: 'b',
        explanation: 'It is a common myth that entrepreneurs are born. In reality, entrepreneurship is a skill that can be learned and developed.',
        marks: 1
      },
      {
        id: 'q5',
        question: 'Which of the following is a Green Job?',
        options: [
          { id: 'a', text: 'Software Engineer' },
          { id: 'b', text: 'Solar Panel Installer' },
          { id: 'c', text: 'Bank Teller' },
          { id: 'd', text: 'Marketing Manager' }
        ],
        correctOptionId: 'b',
        explanation: 'A Green Job contributes directly to preserving or restoring the environment.',
        marks: 1
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Part B: Introduction to AI & Project Cycle',
    topic: 'Part B',
    questions: [
      {
        id: 'q1',
        question: 'Which of the following falls under the domain of Computer Vision?',
        options: [
          { id: 'a', text: 'Chatbot' },
          { id: 'b', text: 'Self-driving car pedestrian detection' },
          { id: 'c', text: 'Stock market prediction' },
          { id: 'd', text: 'Language translation' }
        ],
        correctOptionId: 'b',
        explanation: 'Pedestrian detection requires the machine to process visual data (images/video), which is Computer Vision.',
        marks: 1
      },
      {
        id: 'q2',
        question: 'In the 4Ws problem canvas, what does "Who" refer to?',
        options: [
          { id: 'a', text: 'The developer of the AI' },
          { id: 'b', text: 'The stakeholders facing the problem' },
          { id: 'c', text: 'The computer running the model' },
          { id: 'd', text: 'The data scientists' }
        ],
        correctOptionId: 'b',
        explanation: 'The "Who" block helps identify the people or stakeholders who are directly facing the problem.',
        marks: 1
      },
      {
        id: 'q3',
        question: 'Which approach involves the machine finding patterns in data without explicit programming?',
        options: [
          { id: 'a', text: 'Rule-Based Approach' },
          { id: 'b', text: 'Learning-Based Approach (ML)' },
          { id: 'c', text: 'Hardcoding' },
          { id: 'd', text: 'Database Management' }
        ],
        correctOptionId: 'b',
        explanation: 'In the Learning-Based Approach, the machine analyzes data to find its own rules (Machine Learning).',
        marks: 1
      },
      {
        id: 'q4',
        question: 'Which metric is calculated as TP / (TP + FP)?',
        options: [
          { id: 'a', text: 'Accuracy' },
          { id: 'b', text: 'Precision' },
          { id: 'c', text: 'Recall' },
          { id: 'd', text: 'F1 Score' }
        ],
        correctOptionId: 'b',
        explanation: 'Precision measures how many of the positively predicted instances were actually positive.',
        marks: 1
      },
      {
        id: 'q5',
        question: 'In a confusion matrix, if a model predicts NO fire, but there IS a fire, this is called a:',
        options: [
          { id: 'a', text: 'True Positive' },
          { id: 'b', text: 'True Negative' },
          { id: 'c', text: 'False Positive' },
          { id: 'd', text: 'False Negative' }
        ],
        correctOptionId: 'd',
        explanation: 'The prediction was negative (NO fire), but it was false (there WAS a fire). Hence, False Negative.',
        marks: 1
      }
    ]
  }
];
