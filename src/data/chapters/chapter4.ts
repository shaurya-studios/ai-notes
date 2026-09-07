import { NativeChapter } from '../../types/content';
export const chapter4: NativeChapter = {
  id: 'entrepreneurial-skills', number: 'IV', title: 'Entrepreneurial Skills',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Entrepreneurship and Society' },
        { type: 'h2', content: 'What is Entrepreneurship?' },
        { type: 'p', content: 'Self-employment where a person runs a business to satisfy people\'s needs and aims to improve it for profit.' },
        { type: 'h3', content: 'Roles of an Entrepreneur' },
        { type: 'ul', items: [
          'Fulfill customer needs, Lower prices',
          'Use local Materials',
          'Helps society',
          'Creates Jobs, Shares wealth'
        ]},
        { type: 'h2', content: 'Session 2: Functions of an Entrepreneur' },
        { type: 'ul', items: [
          'Making Decisions: What to produce/sell, quantity, and where to sell.',
          'Managing the Business: Plan future of business, Arrange raw materials, Hire staff.',
          'Dividing Income: Spend on materials, salaries, rent.',
          'Taking Risks: Face uncertainties like theft, fire, losses.',
          'Creating New Methods: Innovate constantly.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 3: Myths About Entrepreneurship' },
        { type: 'callout', style: 'important', content: 'Myth: Every business idea must be unique. Truth: Even common ideas can succeed if you add creativity.' },
        { type: 'callout', style: 'important', content: 'Myth: You need a lot of money to start a business. Truth: Capital is important but businesses can start small.' },
        { type: 'callout', style: 'important', content: 'Myth: Only big businesses count as entrepreneurship. Truth: No business is big or small.' },
        { type: 'callout', style: 'important', content: 'Myth: Entrepreneurs are born, not made. Truth: Anyone can learn & practice entrepreneurial qualities.' },
        { type: 'h1', content: 'Session 4: Stages in Entrepreneurial Career' },
        { type: 'ol', items: [
          'Enter -> Start business',
          'Survive -> Face competition but stay in market',
          'Grow -> Expand business'
        ]},
        { type: 'p', content: 'Entrepreneurship isn\'t about big money, big ideas, or being "born" talented. It\'s about mindset, persistence, and learning.' }
      ]
    }
  ]
};
