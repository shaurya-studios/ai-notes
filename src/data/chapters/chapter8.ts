import { NativeChapter } from '../../types/content';
export const chapter8: NativeChapter = {
  id: 'computer-vision', number: 'VIII', title: 'Part B: Computer Vision (5.1)',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Understanding Computer Vision' },
        { type: 'p', content: 'Computer Vision (CV) is a domain of AI that enables computers and systems to derive meaningful information from digital images, videos, and other visual inputs, and take actions or make recommendations based on that information.' },
        { type: 'h2', content: 'How Computers See Images' },
        { type: 'p', content: 'Humans see images using eyes and the brain. Computers, however, perceive an image as a vast grid (matrix) of numbers representing Pixels (Picture Elements).' },
        { type: 'ul', items: [
          'Grayscale Images: Represented as a 2-Dimensional matrix (width x height). Each pixel has a single intensity value ranging from 0 (Pure Black) to 255 (Pure White).',
          'RGB (Color) Images: Represented as a 3-Dimensional matrix. It consists of three separate 2D layers: Red, Green, and Blue. Each layer holds values from 0-255. By combining these three primary colors at different intensities, computers can generate millions of colors.'
        ]},
        { type: 'callout', style: 'important', content: 'Image Resolution is defined by the number of pixels. An image that is 1920x1080 contains over 2 million pixels, meaning the computer must analyze 2 million numerical values!' }
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Features in Computer Vision' },
        { type: 'p', content: 'To recognize an object, AI models don\'t look at the entire image at once. Instead, they look for specific "Features".' },
        { type: 'p', content: 'A Feature is a measurable piece of data in an image that is unique to the object being identified. Examples of features include:' },
        { type: 'ul', items: [
          'Edges and boundaries.',
          'Corners and distinct shapes.',
          'Specific color patterns and textures.',
          'Facial landmarks (e.g., the distance between eyes, the curve of a jawline).'
        ]},
        { type: 'h2', content: 'Key Computer Vision Tasks' },
        { type: 'table', headers: ['Task', 'Description', 'Example'], rows: [
          ['Image Classification', 'Assigning a single label to the entire image based on its main content.', 'Tagging a photo as "Dog" or "Cat".'],
          ['Object Detection', 'Identifying multiple specific objects within an image and drawing bounding boxes around them.', 'A self-driving car identifying pedestrians and street signs.'],
          ['Semantic Segmentation', 'Classifying every single pixel in the image to exact object boundaries.', 'Medical AI highlighting the exact shape of a tumor.'],
          ['Facial Recognition', 'Verifying a person\'s identity based on their unique facial geometry.', 'Unlocking a phone with Face ID.']
        ]}
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: 'Real-World Applications of Computer Vision' },
        { type: 'ul', items: [
          'Autonomous Vehicles: Tesla and Waymo cars use cameras to detect lanes, read traffic lights, and avoid pedestrians in real-time.',
          'Medical Diagnostics: Analyzing X-rays, MRIs, and CT scans to detect diseases, fractures, or cancer earlier than human doctors.',
          'Retail and E-commerce: Amazon Go cashier-less stores use CV to track which items a customer picks up from the shelf.',
          'Security and Surveillance: Biometric attendance systems and smart CCTV cameras tracking suspicious activities.',
          'Agriculture: Drones flying over fields using computer vision to identify crop diseases and weed infestations.'
        ]}
      ]
    }
  ]
};
