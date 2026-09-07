import { NativeChapter } from '../../types/content';
export const chapter4: NativeChapter = {
  id: 'entrepreneurial-skills', number: 'IV', title: 'Part A: Entrepreneurial Skills - II',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Entrepreneurship Basics' },
        { type: 'p', content: 'Entrepreneurship is the process of designing, launching, and running a new business. It involves taking financial risks in the hope of profit.' },
        { type: 'h2', content: 'Roles of an Entrepreneur in Society' },
        { type: 'ul', items: [
          'Job Creation: They hire people, reducing unemployment.',
          'Wealth Creation: They generate income for themselves, their employees, and the nation.',
          'Solving Problems: They innovate to solve societal issues with new products.',
          'Improving Standard of Living: Access to better and newer services.'
        ]},
        { type: 'h2', content: 'Qualities of an Entrepreneur' },
        { type: 'ol', items: [
          'Risk Taker: Willing to take calculated risks.',
          'Hardworking: Devotes immense time and effort.',
          'Innovative: Always thinking of creative solutions.',
          'Resilient: Does not give up after failures.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 2: Functions and Myths' },
        { type: 'h2', content: 'Functions of an Entrepreneur' },
        { type: 'table', headers: ['Function', 'Description'], rows: [
          ['Innovation', 'Introducing new ideas or improving existing ones.'],
          ['Risk-taking', 'Assuming the responsibility for financial losses.'],
          ['Organization', 'Gathering resources like land, labor, and capital.'],
          ['Decision Making', 'Choosing the best course of action among alternatives.']
        ]},
        { type: 'h2', content: 'Myths about Entrepreneurship' },
        { type: 'ul', items: [
          'Myth 1: Entrepreneurs are born, not made. (Reality: It is a skill that can be learned).',
          'Myth 2: You need a lot of money to start. (Reality: Many successful businesses started with very little capital).',
          'Myth 3: Entrepreneurs only care about money. (Reality: Most are driven by a desire to solve problems).',
          'Myth 4: A great idea guarantees success. (Reality: Execution and hard work matter more than just the idea).'
        ]}
      ]
    }
  ]
};
