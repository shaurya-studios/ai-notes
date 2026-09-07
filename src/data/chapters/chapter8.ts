import { NativeChapter } from '../../types/content';
export const chapter8: NativeChapter = {
  id: 'data-science', number: 'VIII', title: 'Part B: Data Science',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: '1. Introduction to Data Science' },
        { type: 'p', content: 'Data Science is a domain of AI related to data systems and processes, aimed at discovering hidden patterns, predicting future trends, and extracting actionable knowledge from large sets of structured and unstructured data.' },
        { type: 'h2', content: 'Applications of Data Science' },
        { type: 'ul', items: [
          'Targeted Advertising: Analyzing browsing history and past purchases to recommend products.',
          'Financial Fraud Detection: Identifying unusual transaction patterns in real-time to block credit card fraud.',
          'Healthcare: Predicting disease outbreaks or analyzing patient records for early diagnosis.',
          'Logistics: Optimizing delivery routes based on traffic and weather data.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: '2. Understanding Data' },
        { type: 'p', content: 'Data is a collection of facts, such as numbers, words, measurements, observations, or just descriptions.' },
        { type: 'table', headers: ['Type of Data', 'Description', 'Examples'], rows: [
          ['Structured Data', 'Highly organized data that neatly fits into a table or database (rows and columns).', 'Excel sheets, SQL databases, CSV files containing names, ages, and salaries.'],
          ['Unstructured Data', 'Information that does not have a pre-defined format or organization.', 'Text documents, emails, social media posts, audio, and video files.']
        ]}
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: '3. Data Science Concepts' },
        { type: 'h2', content: 'Classification vs. Regression' },
        { type: 'p', content: 'Both Classification and Regression are part of Supervised Learning, but they predict different types of outputs.' },
        { type: 'ul', items: [
          'Classification: The output variable is a category or a discrete value. (e.g., Is this email Spam or Not Spam? Is the tumor Benign or Malignant?)',
          'Regression: The output variable is a continuous real value. (e.g., Predicting the price of a house based on its square footage. Predicting tomorrow\'s exact temperature).'
        ]},
        { type: 'h2', content: 'Clustering' },
        { type: 'p', content: 'Clustering is a part of Unsupervised Learning. It involves grouping a set of objects in such a way that objects in the same group (called a cluster) are more similar to each other than to those in other groups (e.g., Customer segmentation for marketing).' }
      ]
    }
  ]
};
