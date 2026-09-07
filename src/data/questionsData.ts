export type ImportantQuestion = {
  id: string;
  chapter: string;
  question: string;
  answer: string;
  importance: 'high' | 'medium';
};

export const QUESTIONS_DATABASE: ImportantQuestion[] = [
  {
    id: 'iq1',
    chapter: 'Part A: Communication Skills - II',
    question: 'What are the 7Cs of effective communication?',
    answer: 'The 7Cs are Clear (be clear about the message), Concise (keep it brief), Concrete (use specific facts), Correct (accurate grammar and facts), Coherent (logical flow), Complete (include all necessary info), and Courteous (be polite and respectful).',
    importance: 'high'
  },
  {
    id: 'iq2',
    chapter: 'Part A: Self-Management Skills - II',
    question: 'Differentiate between Eustress and Distress.',
    answer: 'Eustress is positive stress that motivates you to perform better (e.g., excitement before a big game). Distress is negative stress that causes anxiety, fatigue, and decreases performance (e.g., extreme exam pressure).',
    importance: 'high'
  },
  {
    id: 'iq3',
    chapter: 'Part A: Entrepreneurial Skills - II',
    question: 'What is a common myth about entrepreneurship?',
    answer: 'A common myth is that "Entrepreneurs are born, not made." In reality, entrepreneurship is a set of skills (like risk-taking, decision-making, and hard work) that anyone can learn and develop.',
    importance: 'medium'
  },
  {
    id: 'iq4',
    chapter: 'Part B: Introduction to AI',
    question: 'Differentiate between AI, ML, and DL.',
    answer: 'AI (Artificial Intelligence) is the broad concept of machines simulating human intelligence. ML (Machine Learning) is a subset of AI where machines learn from data without explicit programming. DL (Deep Learning) is a subset of ML using Artificial Neural Networks to solve highly complex problems.',
    importance: 'high'
  },
  {
    id: 'iq5',
    chapter: 'Part B: AI Project Cycle',
    question: 'Explain the 4Ws problem canvas.',
    answer: 'The 4Ws canvas helps scope a problem clearly. Who (who is facing the problem?), What (what exactly is the problem?), Where (where does the problem occur contextually?), Why (why is it important to solve this problem?).',
    importance: 'high'
  },
  {
    id: 'iq6',
    chapter: 'Part B: AI Project Cycle',
    question: 'What is the difference between Rule-based and Learning-based approaches?',
    answer: 'In a Rule-based approach, the developer explicitly hardcodes the rules (if/then logic) for the machine to follow. In a Learning-based approach (ML), the machine is fed data and discovers the rules and patterns on its own.',
    importance: 'high'
  },
  {
    id: 'iq7',
    chapter: 'Part B: Computer Vision',
    question: 'How do computers perceive images?',
    answer: 'Computers perceive images as a grid (matrix) of numbers called Pixels. For grayscale images, it is a 2D matrix where values range from 0 (black) to 255 (white). For RGB images, it is a 3D matrix composed of three color channels (Red, Green, Blue).',
    importance: 'medium'
  },
  {
    id: 'iq8',
    chapter: 'Part B: Natural Language Processing',
    question: 'Why is NLP difficult for computers compared to programming languages?',
    answer: 'Programming languages follow strict, logical syntax rules. Human languages, however, are unstructured, complex, and full of ambiguity, idioms, sarcasm, and multiple meanings, making it hard for machines to derive the exact intent (NLU).',
    importance: 'high'
  },
  {
    id: 'iq9',
    chapter: 'Part B: Evaluating Models',
    question: 'What is a False Negative in a Confusion Matrix, and why can it be dangerous?',
    answer: 'A False Negative occurs when the model predicts "NO", but the actual truth is "YES". It is dangerous in critical situations, like medical diagnosis, where the model might predict a patient does NOT have a disease when they actually DO.',
    importance: 'high'
  }
];
