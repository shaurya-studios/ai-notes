import { NativeChapter } from '../../types/content';
export const chapter_cv: NativeChapter = {
  id: 'computer-vision-custom', number: 'II', title: 'Computer Vision',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Introduction' },
        { type: 'definition', term: 'Computer Vision?', definition: 'Process of extracting information from images, videos, or text. Makes sense of visual data like humans.' },
        { type: 'p', content: 'Analogy:' },
        { type: 'ul', items: [
          'Human Vision → Eye (sensing) + Brain (interpreting)',
          'Computer Vision → Camera/sensor (sensing)+ Algorithm/Model (interpreting)'
        ]},
        { type: 'table', headers: ['Feature', 'Computer Vision', 'Image Processing'], rows: [
          ['Focus', 'Extract meaningful info & predict visual input', 'Process raw images for enhancement & preparation'],
          ['Scope', 'Superset of Image Processing', 'Subset of Computer Vision'],
          ['E.g.', 'Object detection, handwriting recognition', 'Rescaling images, brightness correction, changing tones']
        ]},
        { type: 'h2', content: 'Applications?' },
        { type: 'ul', items: [
          'Facial Recognition: Smart homes, schools (attendance), security.',
          'Face Filters',
          'Google Search/Translate',
          'Self-Driving Cars',
          'Medical Imaging: MRI'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 2: Computer Vision Tasks' },
        { type: 'p', content: 'CV extract information from images.' },
        { type: 'ul', items: [
          'Classification: Assigns an input image one label from a fixed set of categories.',
          'Classification + Localization: Identifies what object is in the image and where it is located.',
          'Object Detection: Detects instances of real-world objects like faces, bicycles, buildings in images.',
          'Instance Segmentation: Detects objects, assigns a category, and labels each pixel corresponding to that object.'
        ]},
        { type: 'h2', content: 'Basics of Image?' },
        { type: 'ul', items: [
          'Pixels: Picture element, smallest unit of an image, Arranged in 2D grid. More pixels, image more resembles original.',
          'Resolution: Number of pixels in an image. Expressed as: Width × Height',
          'Pixel Value: Each pixel stores brightness and/or color, (0-255). 0: black/no color, 255: white/full color',
          'Grayscale & RGB formats'
        ]}
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: 'Session 3: No code AI tools' },
        { type: 'h2', content: 'Introduction to Lobe.ai?' },
        { type: 'p', content: 'Microsoft\'s Auto-ML / no-code AI tool. It works with image classification and allows a set of images with labels and will automatically find the most optimal model to classify the images.' },
        { type: 'h2', content: 'Introduction to Teachable Machine?' },
        { type: 'p', content: 'Developed by Google in 2017. Runs on top of Tensorflow.js (Google). Web-based tool to train models using: Images, Audio, poses via webcam or uploaded files.' },
        { type: 'h2', content: 'Orange Data Mining Tool?' },
        { type: 'ul', items: [
          'Use Case: Coral Bleaching Detection',
          'Purpose: Develop a classification model for early identification of coral bleaching to protect marine ecosystems.',
          'What Are Coral Reefs?: Found in tropical oceans worldwide. Composed of skeletons of marine invertebrates called coral. Coral reefs are vital for aquatic life.',
          'Causes of Coral Bleaching: Environmental stressors affecting coral health (like temperature changes, pollution, etc.)'
        ]}
      ]
    },
    {
      pageNumber: 4,
      blocks: [
        { type: 'h1', content: 'Session 4: Image Features' },
        { type: 'definition', term: 'What is a Feature?', definition: 'In computer vision and image processing, a feature is a piece of information relevant for solving a computational task.' },
        { type: 'ul', items: [
          'Features may include: points, edges, corners, objects, or other patterns in the image.',
          'They help in tasks like object detection, image matching, and tracking.'
        ]},
        { type: 'h1', content: 'Session 5: Convolution' },
        { type: 'h2', content: 'Basics?' },
        { type: 'ul', items: [
          'Images are stored as Nos (values: 0-255).',
          'Editing pixel values changes the image, basis of image editing.',
          'Apps like Instagram, Snapchat apply filters by modifying pixel values.',
          'Achieved using Convolution and Kernels.'
        ]},
        { type: 'h2', content: 'Convolution?' },
        { type: 'ul', items: [
          'A mathematical operation used in image processing.',
          'It is the element-wise multiplication of: Image array (I) & Kernel array (K) → Summed to produce a new array (processed image).',
          'Formula: I * K = Output Image'
        ]}
      ]
    },
    {
      pageNumber: 5,
      blocks: [
        { type: 'h1', content: 'Convolution Kernels & CNN' },
        { type: 'h2', content: 'Kernel?' },
        { type: 'ul', items: [
          'Kernel: a small matrix slid across an image, multiplying with pixel values to create desired effects.',
          'Purpose: different kernels produce different effects (blur, sharpen, edge detection).',
          'Image Processing: convolution extracts image features, useful in CNNs.',
          'Process: Kernel\'s center overlaps with image pixels. Convolution reduces image size because edges cannot fully overlap.',
          'Solution (Padding): extend image edges with zeros → keeps input & output the same size..'
        ]},
        { type: 'h1', content: 'Session 6: CNN' },
        { type: 'definition', term: 'Input Image', definition: 'A Convolutional Neural Network (CNN) is a Deep Learning algorithm that can take in an input image, assign importance (learnable weights and biases) to various aspects/objects in the image, and be able to differentiate one from the other.' }
      ]
    },
    {
      pageNumber: 6,
      blocks: [
        { type: 'h1', content: 'CNN Layers' },
        { type: 'h2', content: 'Convolution Layer?' },
        { type: 'ul', items: [
          'Purpose: Extract features from the image.',
          'First layers → detect low-level features (edges, colors, gradients).',
          'Deeper layers → detect high-level features (eyes, nose, objects, etc.).',
          'Uses kernels (filters) to generate Feature Maps / Activation Maps.',
          'Benefits: Reduces image size for efficient processing. Focuses only on important features (like facial parts for recognition).'
        ]},
        { type: 'h2', content: 'ReLU (Rectified linear unit)' },
        { type: 'ul', items: [
          'Purpose: Introduces non-linearity.',
          'Replaces negative values with 0, keeps positives as they are.',
          'Makes edges & imp. features more distinct.',
          'Helps CNN detect complex patterns, not just smooth gradients.'
        ]},
        { type: 'h2', content: 'Pooling Layer' },
        { type: 'ul', items: [
          'Purpose: Reduce size of feature maps while keeping key info.',
          'Max Pooling → takes the maximum value in each region.',
          'Average Pooling → takes the average value in each region.',
          'Benefits: Makes image smaller & Provides translation & distortion invariance.'
        ]}
      ]
    },
    {
      pageNumber: 7,
      blocks: [
        { type: 'h1', content: 'CNN Layers (Continued)' },
        { type: 'h2', content: 'Fully Connected (FC) Layer?' },
        { type: 'ul', items: [
          'Purpose: Final classification.',
          'Feature maps are flattened into a vector.',
          'Each value represents a probability of belonging to a class.',
          'Example: If input = cat image → features like whiskers, fur, ears → high probability for label "cat".'
        ]},
        { type: 'h2', content: 'Complete CNN Process?' },
        { type: 'ol', items: [
          'Input image given.',
          'Convolution Layer(s): Extract features -> feature maps.',
          'ReLU: Apply non-linearity, make features clearer.',
          'Pooling: Reduce size, keep important features.',
          'Steps (2-4) repeat multiple times for deeper learning.',
          'Fully Connected Layer: Flatten + classify → final prediction label.'
        ]}
      ]
    }
  ]
};
