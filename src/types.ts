export interface Question {
  id: number;
  text: string;
  choices: Choice[];
}

export interface Choice {
  id: string;
  text: string;
  type: string;
}

export interface Occupation {
  id: string;
  name: string;
  selected?: boolean;
}

export interface Result {
  name: string;
  occupation: string;
  mbti: string;
  description: string;
  imageUrl: string;
  wikiUrl: string;
  strengths?: string[];
  weaknesses?: string[];
  bestEnvironments?: string[];
  idealRoles?: string[];
  actionSteps?: string[];
}

export interface PersonalityStats {
  E: number;
  I: number;
  N: number;
  S: number;
  T: number;
  F: number;
  J: number;
  P: number;
}