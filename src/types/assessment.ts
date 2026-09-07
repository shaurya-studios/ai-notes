export interface MCQOption {
  id: string;
  text: string;
}

export interface MCQ {
  id: string;
  question: string;
  options: MCQOption[];
  correctOptionId: string;
  explanation: string;
  marks?: number;
}

export interface Test {
  id: string;
  title: string;
  topic: string;
  questions: MCQ[];
}

export interface SubjectiveQuestion {
  id: string;
  chapterId: string;
  chapterTitle: string;
  question: string;
  answer: string;
  marks?: number;
}
