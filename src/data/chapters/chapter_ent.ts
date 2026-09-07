import { NativeChapter } from '../../types/content';
export const chapter_ent: NativeChapter = {
  id: 'entrepreneurial-skills-custom', number: 'III', title: 'Entrepreneurial Skills',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1 & 2: Entrepreneurship' },
        { type: 'definition', term: 'ENTREPRENEURSHIP?', definition: 'Self employment where a person runs a business to satisfy people\'s needs and aims to improve it for profit.' },
        { type: 'p', content: 'Qualities: Confident, Try new ideas, Creative, Patient, Responsible, Hard workings etc.' },
        { type: 'definition', term: 'WAGE EMPLOYMENT:', definition: 'Work for an organization/person, paid for work.' },
        { type: 'definition', term: 'SELF-EMPLOYMENT:', definition: 'Start a business to satisfy people\'s needs.' },
        { type: 'h2', content: 'ROLES OF AN ENTREPRENEUR?' },
        { type: 'ul', items: [
          'Fulfil customer needs, Lower prices',
          'Use local Materials',
          'Helps society',
          'Creates Jobs, Shares wealth'
        ]},
        { type: 'h2', content: 'FUNCTIONS OF AN ENTREPRENEUR?' },
        { type: 'ul', items: [
          'Making Decisions: What to produce/sell, quantity, and where to sell.',
          'Managing the Business: Plan future of business, Arrange raw materials, Hire staff and assign tasks, Monitor progress',
          'Dividing Income: Spend on materials, salaries, rent, and other business needs',
          'Taking Risks: Face uncertainties like theft, fire, losses, etc.',
          'Creating New Methods / Ideas / Products: Innovate constantly to increase income and relevance'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 3 & 4: Myths and Stages' },
        { type: 'h2', content: 'MYTHS ABOUT ENTREPRENEURSHIP?' },
        { type: 'p', content: 'MYTH :- False belief or misconception.' },
        { type: 'ul', items: [
          'Myth: Every business idea must be unique. Truth: Even common ideas can succeed if you add creativity.',
          'Myth: You need a lot of money to start a business. Truth: Capital is important but businesses can start small.',
          'Myth: Only big businesses count as entrepreneurship. Truth: No business is big or small.',
          'Myth: Entrepreneurs are born, not made. Truth: Anyone can learn & practice entrepreneurial qualities.'
        ]},
        { type: 'h2', content: 'STAGES IN ENTREPRENEURIAL CAREER?' },
        { type: 'ol', items: [
          'Enter → Start business',
          'Survive → Face competition but stay in market.',
          'Grow → Expand business'
        ]},
        { type: 'ul', items: [
          'Entrepreneurs create jobs for themselves + others.',
          'Entrepreneurship = risk + effort, but also growth & independence.',
          'Skills can be learned in school/college or by working under others.'
        ]},
        { type: 'h2', content: 'CONCLUSION:' },
        { type: 'p', content: 'Entrepreneurship isn\'t about big money, big ideas, or being "born" talented. It\'s about mindset, persistence, and learning. Anyone (including you) can do it.' }
      ]
    }
  ]
};
