import { NativeChapter } from '../../types/content';
export const chapter10: NativeChapter = {
  id: 'evaluation', number: 'X', title: 'Part B: Evaluating Models',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Stage 5: Model Evaluation' },
        { type: 'p', content: 'Evaluation is the final stage of the AI Project Cycle. After a model is trained using Training Data, we must test its accuracy using unseen Testing Data. This ensures the model will perform well in real-world scenarios.' },
        { type: 'h2', content: 'The Confusion Matrix' },
        { type: 'p', content: 'A Confusion Matrix is a table used to describe the performance of a classification model. It compares the model\'s PREDICTIONS against the ACTUAL truth.' },
        { type: 'ul', items: [
          'True Positive (TP): Model predicted YES, and the actual truth was YES. (Correct Prediction)',
          'True Negative (TN): Model predicted NO, and the actual truth was NO. (Correct Prediction)',
          'False Positive (FP): Model predicted YES, but the actual truth was NO. (Type 1 Error)',
          'False Negative (FN): Model predicted NO, but the actual truth was YES. (Type 2 Error)'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Understanding False Positives and False Negatives' },
        { type: 'p', content: 'Depending on the real-world application, one type of error can be much more dangerous than the other.' },
        { type: 'callout', style: 'example', content: 'Scenario: AI predicting if a patient has Cancer.\n\nFalse Positive (FP): The AI predicts YES (Cancer), but the patient is actually healthy. Consequence: Unnecessary stress and tests.\n\nFalse Negative (FN): The AI predicts NO (Healthy), but the patient actually HAS cancer. Consequence: The patient goes untreated, which is extremely dangerous.' },
        { type: 'p', content: 'In medical diagnosis or forest fire prediction, False Negatives are highly dangerous. In spam email filtering, False Positives are annoying (a real email goes to spam), so they must be minimized.' }
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: 'Evaluation Metrics' },
        { type: 'p', content: 'Using the four values (TP, TN, FP, FN) from the Confusion Matrix, we calculate specific metrics to judge the model.' },
        { type: 'h2', content: '1. Accuracy' },
        { type: 'p', content: 'Formula: (TP + TN) / (Total Predictions)' },
        { type: 'p', content: 'Meaning: The overall percentage of correct predictions. Warning: Accuracy is only a reliable metric if the dataset is perfectly balanced (equal number of positive and negative cases).' },
        { type: 'h2', content: '2. Precision' },
        { type: 'p', content: 'Formula: TP / (TP + FP)' },
        { type: 'p', content: 'Meaning: Out of all the times the model predicted YES, how many were actually YES? This metric is crucial when False Positives are very costly.' },
        { type: 'h2', content: '3. Recall (Sensitivity)' },
        { type: 'p', content: 'Formula: TP / (TP + FN)' },
        { type: 'p', content: 'Meaning: Out of all the ACTUAL YES cases in the real world, how many did the model manage to find? This metric is crucial when False Negatives are very dangerous.' },
        { type: 'h2', content: '4. F1 Score' },
        { type: 'p', content: 'Formula: 2 * (Precision * Recall) / (Precision + Recall)' },
        { type: 'p', content: 'Meaning: The harmonic mean of Precision and Recall. It is used when you need a balance between the two, especially when the dataset is highly imbalanced.' }
      ]
    }
  ]
};
