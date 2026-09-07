import { NativeChapter } from '../../types/content';
export const chapter11: NativeChapter = {
  id: 'evaluation', number: 'XI', title: 'Part B: Model Evaluation',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: '1. Model Evaluation' },
        { type: 'p', content: 'Once an AI model is trained using Training Data, we must test its reliability and accuracy using unseen Testing Data. This is the Evaluation stage.' },
        { type: 'h2', content: 'Evaluation Terminologies' },
        { type: 'p', content: 'When testing a binary classification model (YES or NO predictions), the results fall into four categories:' },
        { type: 'ul', items: [
          'True Positive (TP): The model predicted YES, and the actual truth was YES. (Correct)',
          'True Negative (TN): The model predicted NO, and the actual truth was NO. (Correct)',
          'False Positive (FP) (Type 1 Error): The model predicted YES, but the truth was NO. (e.g., A healthy person wrongly diagnosed with cancer).',
          'False Negative (FN) (Type 2 Error): The model predicted NO, but the truth was YES. (e.g., A cancer patient wrongly diagnosed as healthy. Highly dangerous!).'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: '2. The Confusion Matrix' },
        { type: 'p', content: 'A Confusion Matrix is a tabular summary of the number of correct and incorrect predictions made by a classification model.' },
        { 
          type: 'diagram', 
          id: 'confusion-matrix-diagram', 
          title: 'Standard Confusion Matrix', 
          description: 'A 2x2 grid comparing Actual Values against Predicted Values.',
          svgCode: '<svg viewBox="0 0 400 300" width="100%" height="250" xmlns="http://www.w3.org/2000/svg"><rect x="100" y="80" width="120" height="80" fill="#e8f5e9" stroke="#333" stroke-width="2"/><rect x="220" y="80" width="120" height="80" fill="#ffebee" stroke="#333" stroke-width="2"/><rect x="100" y="160" width="120" height="80" fill="#ffebee" stroke="#333" stroke-width="2"/><rect x="220" y="160" width="120" height="80" fill="#e8f5e9" stroke="#333" stroke-width="2"/><text x="160" y="125" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#2e7d32">True Positive (TP)</text><text x="280" y="125" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#c62828">False Positive (FP)</text><text x="160" y="205" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#c62828">False Negative (FN)</text><text x="280" y="205" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#2e7d32">True Negative (TN)</text><text x="220" y="50" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="currentColor">Predicted Values</text><text x="40" y="160" font-family="sans-serif" font-size="16" font-weight="bold" text-anchor="middle" transform="rotate(-90 40 160)" fill="currentColor">Actual Values</text><text x="160" y="70" font-family="sans-serif" font-size="14" text-anchor="middle" fill="currentColor">YES (1)</text><text x="280" y="70" font-family="sans-serif" font-size="14" text-anchor="middle" fill="currentColor">NO (0)</text><text x="90" y="125" font-family="sans-serif" font-size="14" text-anchor="end" fill="currentColor">YES (1)</text><text x="90" y="205" font-family="sans-serif" font-size="14" text-anchor="end" fill="currentColor">NO (0)</text></svg>'
        }
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: '3. Evaluation Metrics' },
        { type: 'p', content: 'Using the four values from the Confusion Matrix, we calculate mathematical metrics to judge the model\'s real-world viability.' },
        { type: 'ul', items: [
          'Accuracy: The percentage of correct predictions out of total predictions. Formula: (TP + TN) / Total. Accuracy is only reliable if the dataset is perfectly balanced.',
          'Precision: Out of all the positive predictions the model made, how many were actually positive? Formula: TP / (TP + FP). Crucial when False Positives are costly (e.g., Spam Filters).',
          'Recall (Sensitivity): Out of all the actual positive cases in reality, how many did the model find? Formula: TP / (TP + FN). Crucial when False Negatives are highly dangerous (e.g., Cancer detection).',
          'F1 Score: The harmonic mean of Precision and Recall. It is the best metric to use when the dataset is imbalanced and you need a balance between Precision and Recall. Formula: 2 * (Precision * Recall) / (Precision + Recall).'
        ]}
      ]
    }
  ]
};
