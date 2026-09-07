import { NativeChapter } from '../../types/content';
export const chapter10: NativeChapter = {
  id: 'evaluation', number: 'X', title: 'Part B: Evaluating Models',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Model Evaluation & Confusion Matrix' },
        { type: 'p', content: 'Evaluation is the final stage of the AI Project Cycle. It involves testing the model to see how well it performs.' },
        { type: 'h2', content: 'The Confusion Matrix' },
        { type: 'p', content: 'A confusion matrix is a table used to describe the performance of a classification model. It contains four outcomes:' },
        { type: 'ul', items: [
          'True Positive (TP): The model predicted YES, and the actual truth was YES. (Correct)',
          'True Negative (TN): The model predicted NO, and the actual truth was NO. (Correct)',
          'False Positive (FP): The model predicted YES, but the actual truth was NO. (Type 1 Error)',
          'False Negative (FN): The model predicted NO, but the actual truth was YES. (Type 2 Error)'
        ]},
        { type: 'callout', style: 'example', content: 'In a Forest Fire Prediction model:\nTP: Predicted fire, and there was a fire.\nFN: Predicted NO fire, but there WAS a fire (Extremely dangerous!).' }
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h2', content: 'Evaluation Metrics' },
        { type: 'p', content: 'We calculate specific metrics from the Confusion Matrix to judge the model.' },
        { type: 'table', headers: ['Metric', 'Formula', 'What it means'], rows: [
          ['Accuracy', '(TP+TN) / Total', 'Percentage of correct predictions overall. Useful only when the dataset is balanced.'],
          ['Precision', 'TP / (TP+FP)', 'Out of all YES predictions, how many were actually correct? Crucial when False Positives are costly (e.g., Spam Filter).'],
          ['Recall', 'TP / (TP+FN)', 'Out of all actual YES cases, how many did the model find? Crucial when False Negatives are costly (e.g., Cancer detection).'],
          ['F1 Score', '2 * (Precision * Recall) / (Precision + Recall)', 'The harmonic mean of Precision and Recall. Used when you need a balance between the two.']
        ]}
      ]
    }
  ]
};
