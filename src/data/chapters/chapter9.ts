import { NativeChapter } from '../../types/content';
export const chapter9: NativeChapter = {
  id: 'computer-vision', number: 'IX', title: 'Part B: Computer Vision',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: '1. Introduction to Computer Vision' },
        { type: 'p', content: 'Computer Vision (CV) is an interdisciplinary scientific field that deals with how computers can gain high-level understanding from digital images or videos. From the perspective of engineering, it seeks to automate tasks that the human visual system can do.' },
        { type: 'h2', content: 'How Computers See Images' },
        { type: 'p', content: 'While humans see shapes, colors, and depth, computers perceive an image strictly as a grid of numbers. This grid is called a Matrix.' },
        { type: 'ul', items: [
          'Pixel: The smallest element of a digital image (Picture Element).',
          'Resolution: The total number of pixels in an image (Width x Height). Higher resolution means more data for the AI to process.'
        ]},
        { type: 'h2', content: 'Grayscale vs. RGB' },
        { type: 'table', headers: ['Grayscale Images', 'RGB (Color) Images'], rows: [
          ['Consists of a single 2D matrix layer.', 'Consists of three separate 2D layers (Red, Green, Blue).'],
          ['Pixel values range from 0 (Black) to 255 (White).', 'Each layer has values from 0-255. They combine to form millions of colors.'],
          ['Computationally lighter and faster for AI to process.', 'Computationally heavy, requires more memory and processing power.']
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: '2. Features in Computer Vision' },
        { type: 'p', content: 'AI models do not look at an image as a whole; they look for distinct "features".' },
        { type: 'definition', term: 'Feature', definition: 'A measurable piece of data in an image which is unique to that specific object. It could be a specific color, a sharp edge, a corner, a shape, or a texture.' },
        { type: 'p', content: 'For example, the features of a human face include the distance between the eyes, the shape of the jawline, and the depth of the eye sockets. Facial Recognition algorithms measure these specific geometric features.' }
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: '3. Core Computer Vision Tasks' },
        { type: 'p', content: 'Different AI applications require different levels of image understanding.' },
        { type: 'ul', items: [
          'Image Classification: The simplest task. The AI assigns a single label to the entire image. (e.g., "This image contains a Cat").',
          'Object Detection: The AI identifies multiple specific objects within the image and draws a bounding box around each one. (e.g., A self-driving car identifying a pedestrian, a stop sign, and another car simultaneously).',
          'Semantic Segmentation: The most complex task. The AI classifies every single pixel in the image to a specific category, tracing the exact boundary/shape of the object without just drawing a box.'
        ]}
      ]
    }
  ]
};
