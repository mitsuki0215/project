import { Question, Result } from './types';

export const questions: { [key: string]: Question[] } = {
  scientist: [
    {
      id: 1,
      text: "How do you prefer to conduct your research?",
      choices: [
        { id: "s1a", text: "Collaborate with other researchers and share ideas", type: "E" },
        { id: "s1b", text: "Work independently on focused experiments", type: "I" }
      ]
    },
    {
      id: 2,
      text: "When analyzing data, what approach do you prefer?",
      choices: [
        { id: "s2a", text: "Focus on concrete, measurable observations", type: "S" },
        { id: "s2b", text: "Look for underlying patterns and theoretical implications", type: "N" }
      ]
    },
    {
      id: 3,
      text: "How do you make research decisions?",
      choices: [
        { id: "s3a", text: "Base decisions on logical analysis and objective criteria", type: "T" },
        { id: "s3b", text: "Consider impact on people and broader implications", type: "F" }
      ]
    },
    {
      id: 4,
      text: "What's your preferred research style?",
      choices: [
        { id: "s4a", text: "Follow structured, well-planned protocols", type: "J" },
        { id: "s4b", text: "Adapt methods based on new discoveries", type: "P" }
      ]
    }
  ],
  entrepreneur: [
    {
      id: 1,
      text: "How do you prefer to work on your business?",
      choices: [
        { id: "e1a", text: "Network and collaborate with others", type: "E" },
        { id: "e1b", text: "Focus on independent strategy and planning", type: "I" }
      ]
    },
    {
      id: 2,
      text: "How do you evaluate business opportunities?",
      choices: [
        { id: "e2a", text: "Focus on practical, immediate results", type: "S" },
        { id: "e2b", text: "Consider future possibilities and potential", type: "N" }
      ]
    },
    {
      id: 3,
      text: "How do you make business decisions?",
      choices: [
        { id: "e3a", text: "Analyze data and metrics objectively", type: "T" },
        { id: "e3b", text: "Consider impact on people and relationships", type: "F" }
      ]
    },
    {
      id: 4,
      text: "What's your business management style?",
      choices: [
        { id: "e4a", text: "Maintain clear structure and plans", type: "J" },
        { id: "e4b", text: "Stay flexible and adapt to changes", type: "P" }
      ]
    }
  ],
  designer: [
    {
      id: 1,
      text: "How do you prefer to work on design projects?",
      choices: [
        { id: "d1a", text: "Collaborate and brainstorm with others", type: "E" },
        { id: "d1b", text: "Work independently on your vision", type: "I" }
      ]
    },
    {
      id: 2,
      text: "What influences your design decisions?",
      choices: [
        { id: "d2a", text: "Current trends and practical applications", type: "S" },
        { id: "d2b", text: "Abstract concepts and future possibilities", type: "N" }
      ]
    },
    {
      id: 3,
      text: "How do you evaluate design solutions?",
      choices: [
        { id: "d3a", text: "Analyze functionality and efficiency", type: "T" },
        { id: "d3b", text: "Consider user experience and emotional impact", type: "F" }
      ]
    },
    {
      id: 4,
      text: "What's your design process like?",
      choices: [
        { id: "d4a", text: "Follow a structured methodology", type: "J" },
        { id: "d4b", text: "Explore and iterate flexibly", type: "P" }
      ]
    }
  ],
  // Continue with the same pattern for other occupations...
};

// Keep the existing results array
export const results: Result[] = [
  // ... (keep all existing results)
];