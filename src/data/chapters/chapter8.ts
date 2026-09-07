import { NativeChapter } from '../../types/content';
export const chapter8: NativeChapter = {
  id: 'computer-vision', number: 'VIII', title: 'Part B: Computer Vision (5.1)',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Understanding Computer Vision' },
        { type: 'p', content: 'Computer Vision (CV) is a domain of AI that enables computers to derive meaningful information from digital images, videos, and other visual inputs.' },
        { type: 'h2', content: 'How Computers See Images' },
        { type: 'p', content: 'Computers do not possess eyes. They perceive an image as a matrix (grid) of numbers representing Pixels (Picture Elements).' },
        { type: 'ul', items: [
          'Grayscale Images: A 2D matrix where each pixel is represented by a single number from 0 (Black) to 255 (White).',
          'RGB (Color) Images: A 3D matrix composed of three layers (Red, Green, Blue). Each layer assigns a value from 0-255 to mix and create millions of colors.'
        ]},
        { type: 'h2', content: 'Features in CV' },
        { type: 'p', content: 'A "Feature" is a measurable piece of data in an image (like edges, corners, or specific colors). Algorithms detect these features to recognize objects (e.g., detecting the curve of an eye in facial recognition).' }
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h2', content: 'Key Computer Vision Tasks' },
        { type: 'table', headers: ['Task', 'Description'], rows: [
          ['Image Classification', 'Assigning a label to the entire image (e.g., "This is a dog").'],
          ['Object Detection', 'Identifying objects and drawing bounding boxes around them.'],
          ['Facial Recognition', 'Verifying a person\'s identity based on facial geometry.']
        ]},
        { type: 'h2', content: 'Real-World Applications' },
        { type: 'ul', items: [
          'Autonomous Vehicles: Detecting pedestrians, lanes, and traffic lights.',
          'Medical Imaging: Analyzing X-rays and MRIs to detect diseases like tumors.',
          'Retail: Amazon Go stores tracking items picked up by customers.',
          'Security: Biometric attendance systems and surveillance.'
        ]}
      ]
    }
  ]
};
