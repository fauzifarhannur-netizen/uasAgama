export interface VerseDetail {
  reference: string; // e.g., "QS. Al-Ma'idah: 2"
  textArabic: string;
  textLatin: string;
  textTranslation: string;
}

export interface HadithDetail {
  reference: string; // e.g., "HR. Muslim"
  textArabic?: string;
  textTranslation: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface ActionChallenge {
  id: string;
  text: string;
  points: number;
}

export interface SubTopic {
  id: string;
  title: string;
  description: string;
  iconName: string; // Lucide icon name
  quranVerse: VerseDetail;
  hadith: HadithDetail;
  keyPoints: string[];
  challenges: ActionChallenge[];
  quiz: QuizQuestion;
}

export interface Topic {
  id: string;
  title: string;
  description: string;
  iconName: string;
  colorTheme: {
    primary: string; // e.g., "emerald"
    bgLight: string; // e.g., "bg-emerald-50/50"
    badge: string; // e.g., "bg-emerald-100 text-emerald-800"
    border: string; // e.g., "border-emerald-200"
    text: string; // e.g., "text-emerald-700"
    gradient: string; // e.g., "from-emerald-500 to-teal-600"
  };
  subTopics: SubTopic[];
}
