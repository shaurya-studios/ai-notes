import { NativeChapter } from '../../types/content';
export const chapter9: NativeChapter = {
  id: 'nlp', number: 'IX', title: 'Part B: Natural Language Processing (6.1)',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Introduction to NLP' },
        { type: 'p', content: 'Natural Language Processing (NLP) is the branch of AI that gives machines the ability to read, understand, and derive meaning from human languages.' },
        { type: 'h2', content: 'NLP vs. NLU vs. NLG' },
        { type: 'ul', items: [
          'NLP (Processing): The overarching field of text/speech processing.',
          'NLU (Understanding): The sub-field focused on understanding the actual meaning and intent behind the words.',
          'NLG (Generation): The sub-field focused on generating human-readable text (e.g., writing a summary).'
        ]},
        { type: 'h2', content: 'Human Language vs. Computer Language' },
        { type: 'p', content: 'Computer languages (Python, Java) are highly structured with strict syntax rules. Human languages are complex, unstructured, and filled with ambiguity, idioms, and sarcasm, making NLP highly challenging for machines.' }
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h2', content: 'Text Processing Concepts' },
        { type: 'p', content: 'Before a machine can analyze text, it must convert text into numbers.' },
        { type: 'ol', items: [
          'Tokenization: Breaking a sentence into smaller parts called tokens (words).',
          'Stop-word Removal: Removing common words (is, the, and) that add little meaning.',
          'Stemming/Lemmatization: Converting words to their root forms (e.g., "running" becomes "run").',
          'Bag of Words (BoW) / TF-IDF: Converting the remaining words into a mathematical vector based on their frequency.'
        ]},
        { type: 'h2', content: 'Applications of NLP' },
        { type: 'ul', items: [
          'Chatbots & Virtual Assistants (Siri, Alexa).',
          'Machine Translation (Google Translate).',
          'Sentiment Analysis (Determining if a customer review is positive or negative).',
          'Email Spam Filtering.'
        ]}
      ]
    }
  ]
};
