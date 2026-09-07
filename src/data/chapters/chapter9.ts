import { NativeChapter } from '../../types/content';
export const chapter9: NativeChapter = {
  id: 'nlp', number: 'IX', title: 'Part B: Natural Language Processing (6.1)',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Introduction to NLP' },
        { type: 'p', content: 'Natural Language Processing (NLP) is a branch of Artificial Intelligence that deals with the interaction between computers and humans using natural language. The goal of NLP is to enable computers to understand, interpret, and generate human language.' },
        { type: 'h2', content: 'Components of NLP' },
        { type: 'ul', items: [
          'NLU (Natural Language Understanding): The ability of a machine to understand and interpret human language. It focuses on extracting meaning, intent, and sentiment from text. It handles ambiguities, metaphors, and context.',
          'NLG (Natural Language Generation): The process of producing meaningful phrases and sentences in the form of natural language from an internal representation. Example: A computer automatically writing a news summary.'
        ]},
        { type: 'h2', content: 'Why is NLP Difficult?' },
        { type: 'p', content: 'Unlike programming languages (e.g., Python, C++) which are highly structured and have strict syntax, human languages are incredibly unstructured and complex. Challenges include:' },
        { type: 'ul', items: [
          'Ambiguity: Words can have multiple meanings based on context (e.g., "bank" of a river vs. financial "bank").',
          'Sarcasm and Irony: Saying the opposite of what is meant.',
          'Synonyms: Multiple words meaning the same thing.',
          'Idioms and Slang: Phrases where the literal meaning differs from the actual meaning (e.g., "piece of cake").'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Text Normalization' },
        { type: 'p', content: 'Before a machine can analyze text, the raw text data must be pre-processed and converted into numbers. Text Normalization is the process of cleaning and structuring text.' },
        { type: 'ol', items: [
          'Sentence Segmentation: Splitting a large paragraph into individual sentences.',
          'Tokenization: Breaking down sentences into individual words called "tokens".',
          'Removing Stop Words: Filtering out frequently occurring words (like "is", "the", "and", "in") that do not add significant meaning or context.',
          'Stemming: A rule-based process of removing suffixes to reduce a word to its root form. For example, "running", "runs", and "ran" might all be reduced to "run". Note: Stemming can sometimes result in non-dictionary words.',
          'Lemmatization: Similar to stemming, but more advanced. It uses a vocabulary and morphological analysis to map words to their actual dictionary root (lemma). For example, "better" is mapped to "good".'
        ]},
        { type: 'callout', style: 'example', content: 'If the text is: "The boys are running quickly!", Tokenization makes it: ["The", "boys", "are", "running", "quickly", "!"]. After Stop Word removal and Lemmatization, it might become: ["boy", "run", "quick"].' }
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: 'Text Representation (Vectorization) & TF-IDF' },
        { type: 'p', content: 'Once normalized, words must be converted into numerical vectors so the AI can process them mathematically.' },
        { type: 'h2', content: '1. Bag of Words (BoW)' },
        { type: 'p', content: 'BoW creates a "vocabulary" of all unique words and counts how many times each word appears in a specific document. However, BoW treats all words equally and ignores the context.' },
        { type: 'h2', content: '2. TF-IDF (Term Frequency - Inverse Document Frequency)' },
        { type: 'p', content: 'TF-IDF is an advanced technique that solves BoW\'s limitations by evaluating how IMPORTANT a word is to a specific document within a larger collection (corpus).' },
        { type: 'ul', items: [
          'Term Frequency (TF): How frequently a term appears in a document. (Frequency of word / Total words in document)',
          'Document Frequency (DF): The number of documents containing the word.',
          'Inverse Document Frequency (IDF): Measures how rare or informative a term is across the entire corpus. Words that appear in almost all documents get a low IDF. (Log of Total documents / Documents with the term)',
          'TF-IDF Score: TF multiplied by IDF.'
        ]},
        { type: 'callout', style: 'important', content: 'A High TF-IDF Score means the word appears many times in THIS document, but rarely in OTHER documents. This indicates that the word is a highly relevant "keyword" for understanding this specific document!' }
      ]
    },
    {
      pageNumber: 4,
      blocks: [
        { type: 'h1', content: 'Applications of NLP' },
        { type: 'ul', items: [
          'Sentiment Analysis: Automatically identifying whether a customer review is positive, negative, or neutral.',
          'Chatbots and Virtual Assistants: Siri, Google Assistant, and customer service bots that understand spoken/typed requests.',
          'Machine Translation: Tools like Google Translate converting text from one language to another while preserving context.',
          'Email Spam Filtering: Scanning emails for suspicious keywords to automatically route them to the spam folder.',
          'Text Summarization: Automatically condensing long articles into short summaries (NLG).'
        ]}
      ]
    }
  ]
};
