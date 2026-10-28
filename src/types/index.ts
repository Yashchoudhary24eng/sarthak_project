export interface FaqItem {
  question: string;
  answer: string;
}

export interface JourneyStep {
  stepNumber: string;
  title: string;
  description: string;
  lang: "en" | "hi";
}

export interface ProgramInclusion {
  title: string;
  description: string;
}

export interface TestimonialPlaceholder {
  id: string;
  label: string;
  src: string;
  poster: string;
}
