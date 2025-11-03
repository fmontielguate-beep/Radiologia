
export interface User {
  firstName: string;
  lastName: string;
  licenseNumber: string;
}

export interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswer: string;
}

export interface Module {
  id: number;
  title: string;
  summary: string;
  content: string[];
  quiz: Question[];
}

export interface QuizResult {
  moduleId: number;
  score: number;
  totalQuestions: number;
}
