import { NativeChapter } from '../../types/content';
export const chapter10: NativeChapter = {
  id: 'nlp', number: 'X', title: 'Part B: Natural Language Processing (NLP)',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: '1. Introduction to NLP' },
        { type: 'p', content: 'Natural Language Processing (NLP) is a branch of Artificial Intelligence that gives computers the ability to read, understand, and derive meaning from human languages.' },
        { type: 'h2', content: 'Applications of NLP' },
        { type: 'ul', items: [
          'Virtual Assistants: Siri, Alexa, Google Assistant.',
          'Machine Translation: Google Translate (context-aware translation).',
          'Sentiment Analysis: Automatically reading customer reviews and classifying them as Positive, Negative, or Neutral.',
          'Spam Detection: Email filters that analyze text to identify malicious or junk emails.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: '2. Why is NLP Difficult?' },
        { type: 'p', content: 'Human language is complex, unstructured, and highly contextual. Challenges include:' },
        { type: 'ul', items: [
          'Syntax and Grammar: Rules vary wildly between languages.',
          'Ambiguity: A word can have multiple meanings depending on context. (e.g., "The bank of the river" vs "The money in the bank").',
          'Sarcasm & Irony: When the literal meaning is the exact opposite of the intended meaning.',
          'Idioms & Slang: "It\'s raining cats and dogs" cannot be translated literally.'
        ]}
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: '3. Data Processing (Text Normalization)' },
        { type: 'p', content: 'Before a computer can process text, it must be normalized and cleaned.' },
        { type: 'ol', items: [
          'Sentence Segmentation: Breaking a large paragraph into individual sentences.',
          'Tokenization: Breaking a sentence into individual words (tokens).',
          'Removing Stop Words: Filtering out common words (like "is", "the", "a") that add grammar but carry no actual meaning.',
          'Stemming: Removing suffixes to reduce a word to its root form (e.g., "running" becomes "run"). It uses basic rules and sometimes outputs non-dictionary words.',
          'Lemmatization: A more advanced version of stemming that uses a dictionary to map words to their actual root (lemma) (e.g., "better" becomes "good").'
        ]}
      ]
    },
    {
      pageNumber: 4,
      blocks: [
        { type: 'h1', content: '4. Text Representation: TF-IDF' },
        { type: 'p', content: 'Computers only understand numbers, so text must be converted to numerical vectors. Bag of Words (BoW) is a simple method, but it treats all words equally. TF-IDF is superior.' },
        { type: 'definition', term: 'TF-IDF (Term Frequency - Inverse Document Frequency)', definition: 'A statistical measure that evaluates how relevant a word is to a document in a collection of documents (corpus).' },
        { type: 'ul', items: [
          'Term Frequency (TF): Measures how frequently a term occurs in a specific document. (Occurrences of word / Total words in doc).',
          'Inverse Document Frequency (IDF): Measures the importance of the word across the ENTIRE corpus. Words that appear in every document (like "the") get a score close to 0. Rare, unique words get a high score.',
          'TF-IDF Score: TF multiplied by IDF. A high score means the word is a highly relevant keyword for that specific document.'
        ]}
      ]
    }
  ]
};
