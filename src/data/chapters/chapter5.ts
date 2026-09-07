import { NativeChapter } from '../../types/content';
export const chapter5: NativeChapter = {
  id: 'green-skills', number: 'V', title: 'Part A: Green Skills-II',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Green Skills - II' },
        { type: 'p', content: 'Green skills are those skills needed to adapt products, services and processes to climate change and the related environmental requirements and regulations. They include the knowledge, abilities, values and attitudes needed to live in, develop and support a sustainable and resource-efficient society.' },
        { type: 'h2', content: 'Sustainable Development' },
        { type: 'p', content: 'Sustainable development is development that meets the needs of the present without compromising the ability of future generations to meet their own needs.' },
        { type: 'p', content: 'It has three core elements:' },
        { type: 'ul', items: [
          'Economic Growth: Generating wealth and improving living standards.',
          'Social Inclusion: Ensuring that all people have equal opportunities and access to resources.',
          'Environmental Protection: Preserving natural resources and minimizing pollution.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Green Economy and Green Jobs' },
        { type: 'h2', content: 'Green Economy' },
        { type: 'p', content: 'A green economy is defined as an economy that aims at reducing environmental risks and ecological scarcities, and that aims for sustainable development without degrading the environment.' },
        { type: 'h2', content: 'Green Jobs' },
        { type: 'p', content: 'Green jobs are decent jobs that contribute to preserve or restore the environment, be they in traditional sectors such as manufacturing and construction, or in new, emerging green sectors such as renewable energy and energy efficiency.' },
        { type: 'ul', items: [
          'Examples of Green Jobs:',
          'Solar panel installer.',
          'Wind turbine technician.',
          'Organic farmer.',
          'Waste management specialist.'
        ]}
      ]
    }
  ]
};
