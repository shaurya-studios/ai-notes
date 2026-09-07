import { NativeChapter } from '../../types/content';
export const chapter_green: NativeChapter = {
  id: 'green-skills-custom', number: 'VII', title: 'Green Skills',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Sustainable Development' },
        { type: 'h2', content: 'INTRODUCTION' },
        { type: 'ul', items: [
          'Environment: Everything (air, water, land, forests, rivers) & Human life depends on it.',
          'Development -> Pollution.',
          'Example: High-input agriculture (fertilizers, pesticides) = more food, but soil damage.'
        ]},
        { type: 'definition', term: 'SUSTAINABLE DEVELOPMENT?', definition: 'Development that satisfies present needs without compromising the ability of future generations to meet their own needs.' },
        { type: 'p', content: 'Balance: Economic growth + Environmental care + Social well-being.' },
        { type: 'h2', content: 'PROBLEMS?' },
        { type: 'ul', items: [
          'Food – Fertile land, soil nutrients are decreasing, soil damaged by chemicals',
          'Water – Pollution of rivers/ponds, less clean water.',
          'Fuel – Cutting trees → climate change, floods, heat/cold extremes.'
        ]},
        { type: 'h2', content: 'SOLUTIONS/PRACTICES?' },
        { type: 'ul', items: [
          'Reduce, recycle, reuse.',
          'Plant more trees.',
          'Use eco-friendly materials.',
          'Clean energy (solar, wind).',
          'Organic farming, rainwater harvesting.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 2: Our Role' },
        { type: 'h2', content: 'OUR ROLE IN SUSTAINABLE DEVELOPMENT' },
        { type: 'ul', items: [
          'Quality Education: Go to school regularly, Help friends study, stop dropouts.',
          'Clean Water & Sanitation: Avoid open defecation, build toilets, Keep water clean, stop industrial pollution.',
          'Affordable & Clean Energy: Use solar power, biogas, LEDs, Reduce use of coal & natural gas.',
          'Decent Work & Economic Growth: Study, learn skills, get jobs, contribute to society.',
          'Reduced Inequalities: Be helpful, include everyone (gender, caste, class).',
          'Sustainable Cities & Communities: Save energy, switch off lights/fans, Use natural light, energy-efficient appliances.',
          'Responsible Consumption & Production: Reuse, recycle, carry cloth bags, Donate unused items, Save water, sort & treat garbage.',
          'Protect Life Below Water: Stop plastic pollution, protect marine life.',
          'Protect Life on Land: Plant trees, prevent deforestation & soil erosion.'
        ]}
      ]
    }
  ]
};
