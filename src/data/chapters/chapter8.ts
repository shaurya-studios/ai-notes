import { NativeChapter } from '../../types/content';
export const chapter8: NativeChapter = {
  id: 'computer-vision', number: 'VIII', title: 'Computer Vision',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: '5.1 Introduction' },
        { type: 'h2', content: 'What is Computer Vision?' },
        { type: 'p', content: 'Process of extracting information from images, videos, or text. Makes sense of visual data like humans.' },
        { type: 'p', content: 'Analogy: Human Vision -> Eye (sensing) + Brain (interpreting). Computer Vision -> Camera/sensor (sensing) + Algorithm/Model (interpreting).' },
        { type: 'table', headers: ['Aspect', 'Computer Vision', 'Image Processing'], rows: [
          ['Focus', 'Extract meaningful info & predict visual input', 'Process raw images for enhancement'],
          ['Scope', 'Superset of Image Processing', 'Subset of Computer Vision'],
          ['E.g.', 'Object detection, handwriting recognition', 'Rescaling images, brightness correction']
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: '5.2 CV Tasks & Basics' },
        { type: 'h2', content: 'Tasks in Computer Vision' },
        { type: 'ul', items: [
          'Classification: Assigns an input image one label from a fixed set of categories.',
          'Classification + Localization: Identifies what object is in the image and where it is located.',
          'Object Detection: Detects instances of real-world objects like faces, bicycles, buildings.',
          'Instance Segmentation: Detects objects, assigns a category, and labels each pixel.'
        ]},
        { type: 'h3', content: 'Basics of Image' },
        { type: 'ul', items: [
          'Pixels: Picture element, smallest unit of an image, Arranged in 2D grid.',
          'Resolution: Number of pixels in an image. Expressed as: Width x Height.',
          'Pixel Value: Each pixel stores brightness and/or color, (0–255). 0 = black, 255 = white.'
        ]}
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: '5.4 & 5.5 Features & Convolution' },
        { type: 'h2', content: 'Image Features' },
        { type: 'p', content: 'In computer vision and image processing, a feature is a piece of information relevant for solving a computational task. They include points, edges, corners, objects, or other patterns.' },
        { type: 'h2', content: 'Convolution' },
        { type: 'p', content: 'A mathematical operation used in image processing. It is the element-wise multiplication of Image array (I) & Kernel array (K), summed to produce a new array.' },
        { type: 'p', content: 'Kernel: a small matrix slid across an image, multiplying with pixel values to create desired effects (blur, sharpen, edge detection).' }
      ]
    },
    {
      pageNumber: 4,
      blocks: [
        { type: 'h1', content: '5.6 Convolutional Neural Networks (CNN)' },
        { type: 'p', content: 'A CNN is a Deep Learning algorithm that can take in an input image, assign importance (learnable weights and biases) to various aspects/objects in the image, and be able to differentiate one from the other.' },
        { type: 'h3', content: 'Layers of CNN' },
        { type: 'ul', items: [
          'Convolution Layer: Extract features from the image (edges, colors).',
          'ReLU (Rectified linear unit): Introduces non-linearity. Replaces negative values with 0.',
          'Pooling Layer: Reduce size of feature maps while keeping key info (Max Pooling, Average Pooling).',
          'Fully Connected (FC) Layer: Feature maps are flattened into a vector for final classification.'
        ]}
      ]
    }
  ]
};
