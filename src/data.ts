import { Question, Result } from './types';

export const questions: Question[] = [
  {
    id: 1,
    text: "How do you prefer to solve problems?",
    choices: [
      { id: "1a", text: "Through logical analysis and systematic thinking", type: "T" },
      { id: "1b", text: "By considering people's feelings and values", type: "F" },
      { id: "1c", text: "Using proven methods and past experiences", type: "S" },
      { id: "1d", text: "Through creative and innovative approaches", type: "N" }
    ]
  },
  {
    id: 2,
    text: "In a group setting, you typically:",
    choices: [
      { id: "2a", text: "Take charge and direct others", type: "E" },
      { id: "2b", text: "Prefer to observe and contribute when needed", type: "I" },
      { id: "2c", text: "Focus on maintaining harmony", type: "F" },
      { id: "2d", text: "Challenge ideas and spark debates", type: "T" }
    ]
  },
  {
    id: 3,
    text: "When making decisions, you primarily:",
    choices: [
      { id: "3a", text: "Trust your instincts and feelings", type: "F" },
      { id: "3b", text: "Rely on facts and objective data", type: "T" },
      { id: "3c", text: "Consider multiple possibilities", type: "N" },
      { id: "3d", text: "Focus on immediate practical concerns", type: "S" }
    ]
  },
  {
    id: 4,
    text: "Your ideal work environment is:",
    choices: [
      { id: "4a", text: "Structured and well-organized", type: "J" },
      { id: "4b", text: "Flexible and adaptable", type: "P" },
      { id: "4c", text: "Collaborative and team-oriented", type: "E" },
      { id: "4d", text: "Independent and autonomous", type: "I" }
    ]
  }
];

export const results: Result[] = [
  {
    name: "Albert Einstein",
    occupation: "scientist",
    mbti: "INTP",
    description: "A brilliant theoretical physicist known for the theory of relativity. Your analytical mind and innovative thinking mirror Einstein's approach to understanding the universe.",
    imageUrl: "https://images.pexels.com/photos/2773977/pexels-photo-2773977.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Albert_Einstein"
  },
  {
    name: "Steve Jobs",
    occupation: "entrepreneur",
    mbti: "ENTJ",
    description: "The visionary co-founder of Apple. Like Jobs, you combine creativity with strong leadership abilities to bring innovative ideas to life.",
    imageUrl: "https://images.pexels.com/photos/5473955/pexels-photo-5473955.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Steve_Jobs"
  },
  {
    name: "Leonardo da Vinci",
    occupation: "artist",
    mbti: "ENFP",
    description: "A Renaissance polymath who excelled in art and science. Your creative spirit and curiosity match da Vinci's diverse interests and innovative mindset.",
    imageUrl: "https://images.pexels.com/photos/102127/pexels-photo-102127.jpeg",
    wikiUrl: "https://en.wikipedia.org/wiki/Leonardo_da_Vinci"
  }
];