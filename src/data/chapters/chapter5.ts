import { NativeChapter } from '../../types/content';
export const chapter5: NativeChapter = {
  id: 'green-skills', number: 'V', title: 'Part A: Green Skills - II',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Sustainable Development' },
        { type: 'p', content: 'Sustainable development is defined as development that meets the needs of the present without compromising the ability of future generations to meet their own needs.' },
        { type: 'h2', content: 'Core Components' },
        { type: 'ul', items: [
          'Economic Growth: Generating wealth fairly.',
          'Environmental Protection: Preventing pollution and resource depletion.',
          'Social Inclusion: Equal opportunities for all citizens.'
        ]},
        { type: 'definition', term: 'SDGs (Sustainable Development Goals)', definition: '17 global goals established by the United Nations in 2015 to protect the planet and ensure prosperity for all by 2030.' }
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h2', content: 'Role of Individuals in Sustainable Development' },
        { type: 'ol', items: [
          'Reduce, Reuse, Recycle (3Rs): Minimize waste.',
          'Conserve Energy: Turn off lights, use energy-efficient appliances.',
          'Conserve Water: Fix leaks, avoid wastage.',
          'Eco-friendly Transport: Carpool, use public transport, or bicycles.'
        ]},
        { type: 'h2', content: 'Green Economy & Green Jobs' },
        { type: 'p', content: 'A Green Economy is low-carbon, resource-efficient, and socially inclusive. It creates Green Jobs, which are roles that contribute to preserving or restoring the environment (e.g., Solar panel installer, organic farmer).' }
      ]
    }
  ]
};
