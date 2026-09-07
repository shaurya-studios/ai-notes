import { NativeChapter } from '../../types/content';
export const chapter5: NativeChapter = {
  id: 'green-skills', number: 'V', title: 'Green Skills',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Sustainable Development' },
        { type: 'h2', content: 'Introduction' },
        { type: 'p', content: 'Everything (air, water, land, forests, rivers) & Human life depends on it. High-input agriculture (fertilizers, pesticides) yields more food, but causes soil damage.' },
        { type: 'h3', content: 'What is Sustainable Development?' },
        { type: 'p', content: 'Development that satisfies present needs without compromising the ability of future generations to meet their own needs. It balances Economic growth + Environmental care + Social well-being.' },
        { type: 'h3', content: 'Problems & Solutions' },
        { type: 'table', headers: ['Problems', 'Solutions/Practices'], rows: [
          ['Food: Fertile land decreasing, soil damaged by chemicals', 'Organic farming, rainwater harvesting'],
          ['Water: Pollution of rivers/ponds, less clean water', 'Reduce, recycle, reuse; clean energy'],
          ['Fuel: Cutting trees leading to climate extremes', 'Plant more trees, eco-friendly materials']
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 2: Our Role in Sustainable Development' },
        { type: 'ul', items: [
          'Quality Education: Go to school regularly, help friends study.',
          'Clean Water & Sanitation: Avoid open defecation, build toilets.',
          'Affordable & Clean Energy: Use solar power, biogas, LEDs.',
          'Decent Work & Economic Growth: Study, learn skills, get jobs.',
          'Reduced Inequalities: Be helpful, include everyone (gender, caste, class).',
          'Sustainable Cities & Communities: Save energy, use natural light.',
          'Responsible Consumption & Production: Reuse, recycle, carry cloth bags.',
          'Protect Life Below Water: Stop plastic pollution.',
          'Protect Life on Land: Plant trees, prevent deforestation.'
        ]}
      ]
    }
  ]
};
