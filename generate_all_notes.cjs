const fs = require('fs');
const path = require('path');

const writeChapter = (fileName, content) => {
  fs.writeFileSync(path.join(__dirname, 'src/data/chapters', fileName), content);
};

writeChapter('chapter1.ts', `import { NativeChapter } from '../../types/content';
export const chapter1: NativeChapter = {
  id: 'communication-skills', number: 'I', title: 'Part A: Communication Skills-II',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Communication Skills - II' },
        { type: 'p', content: 'Communication is the act of conveying meanings from one entity or group to another through the use of mutually understood signs, symbols, and semiotic rules. Effective communication is essential for success in all aspects of life.' },
        { type: 'h2', content: 'Methods of Communication' },
        { type: 'ul', items: [
          'Verbal Communication: Includes sounds, words, language, and speech. Speaking is one of the most effective and commonly used ways of communicating. It helps in expressing our emotions in words.',
          'Non-Verbal Communication: The transmission of messages or signals through a nonverbal platform such as eye contact, facial expressions, gestures, posture, and the distance between two individuals.',
          'Visual Communication: The conveyance of ideas and information in forms that can be seen. Examples include signs, typography, drawing, graphic design, illustration, industrial design, advertising, animation, color, and electronic resources.'
        ]},
        { type: 'h2', content: 'Communication Cycle and Importance of Feedback' },
        { type: 'p', content: 'The communication cycle consists of the sender, message, encoding, communication channel, receiver, decoding, and feedback.' },
        { type: 'ol', items: [
          'Sender: The person who initiates the communication.',
          'Message: The information being conveyed.',
          'Encoding: Converting the message into a format suitable for transmission.',
          'Channel: The medium through which the message is sent.',
          'Receiver: The person who receives the message.',
          'Decoding: Interpreting the message.',
          'Feedback: The receiver\\'s response to the sender\\'s message. This is crucial as it ensures the message was understood correctly.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Barriers to Effective Communication' },
        { type: 'p', content: 'There are several barriers that can prevent effective communication. It is important to identify and overcome them.' },
        { type: 'ul', items: [
          'Physical Barriers: Environmental factors that prevent communication, such as noise, distance, or physical obstacles.',
          'Linguistic Barriers: Differences in language, dialects, or use of jargon that the receiver does not understand.',
          'Interpersonal Barriers: Psychological or emotional factors, such as lack of trust, fear, or prejudice.',
          'Organizational Barriers: Issues related to the structure or culture of an organization, such as strict hierarchies or unclear communication policies.',
          'Cultural Barriers: Differences in cultural norms, values, or beliefs that affect how messages are interpreted.'
        ]},
        { type: 'h2', content: '7 Cs of Effective Communication' },
        { type: 'p', content: 'To ensure communication is effective, follow the 7 Cs:' },
        { type: 'ol', items: [
          'Clear: Be clear about what you want to say.',
          'Concise: Use simple words and say only what is needed.',
          'Concrete: Use exact words and facts.',
          'Correct: Use correct language and grammar.',
          'Coherent: Your words should make sense and relate to the main topic.',
          'Complete: Your message should have all the needed information.',
          'Courteous: Be respectful, friendly, and honest.'
        ]}
      ]
    }
  ]
};
`);

writeChapter('chapter2.ts', `import { NativeChapter } from '../../types/content';
export const chapter2: NativeChapter = {
  id: 'self-management', number: 'II', title: 'Part A: Self-Management Skills-II',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Self-Management Skills - II' },
        { type: 'p', content: 'Self-management, also referred to as "self-control" or "self-regulation," is the ability to regulate one\\'s emotions, thoughts, and behavior effectively in different situations. This includes managing stress, delaying gratification, motivating oneself, and setting and working toward personal and academic goals.' },
        { type: 'h2', content: 'Stress Management' },
        { type: 'p', content: 'Stress is our body\\'s physical, mental, and chemical reaction to circumstances that frighten, confuse, endanger, or irritate us.' },
        { type: 'ul', items: [
          'Eustress: Positive stress that motivates and helps us focus (e.g., stress before a big game or an exam that makes you study harder).',
          'Distress: Negative stress that causes anxiety and decreases performance.'
        ]},
        { type: 'h2', content: 'Stress Management Techniques' },
        { type: 'ul', items: [
          'Physical Exercise: Regular physical activity helps reduce stress hormones and increases endorphins.',
          'Yoga and Meditation: Techniques that promote relaxation and mental clarity.',
          'Time Management: Organizing and planning how to divide your time between specific activities. Good time management enables you to work smarter, not harder.',
          'Vacations and Breaks: Taking time off from the routine to recharge.',
          'Nature Walks: Spending time in nature can significantly lower stress levels.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Self-Awareness and Self-Motivation' },
        { type: 'h2', content: 'Self-Awareness' },
        { type: 'p', content: 'Self-awareness is the conscious knowledge of one\\'s own character, feelings, motives, and desires. It involves understanding your strengths and weaknesses.' },
        { type: 'ul', items: [
          'Strength Analysis: Identifying what you are good at.',
          'Weakness Analysis: Identifying areas where you need improvement.'
        ]},
        { type: 'h2', content: 'Self-Motivation' },
        { type: 'p', content: 'Self-motivation is the force that keeps pushing us to go on – it\\'s our internal drive to achieve, produce, develop, and keep moving forward.' },
        { type: 'p', content: 'Types of Motivation:' },
        { type: 'ul', items: [
          'Internal (Intrinsic) Motivation: Doing an activity for its inherent satisfaction rather than for some separable consequence.',
          'External (Extrinsic) Motivation: Doing an activity to attain some separable outcome, like a reward or avoiding punishment.'
        ]}
      ]
    }
  ]
};
`);

writeChapter('chapter3.ts', `import { NativeChapter } from '../../types/content';
export const chapter3: NativeChapter = {
  id: 'ict-skills', number: 'III', title: 'Part A: ICT Skills-II',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'ICT Skills - II' },
        { type: 'p', content: 'Information and Communication Technology (ICT) refers to all the technology used to handle telecommunications, broadcast media, intelligent building management systems, audiovisual processing and transmission systems, and network-based control and monitoring functions.' },
        { type: 'h2', content: 'Operating System (OS)' },
        { type: 'p', content: 'An Operating System is a program that acts as an interface between the software and the computer hardware. It is an integrated set of specialized programs used to manage overall resources and operations of the computer.' },
        { type: 'h3', content: 'Functions of an Operating System' },
        { type: 'ul', items: [
          'Memory Management: Keeps track of primary memory, allocating and de-allocating it.',
          'Processor Management: Allocates the processor (CPU) to a process and de-allocates it.',
          'Device Management: Keeps track of all devices. This is also called the I/O controller.',
          'File Management: Allocates and de-allocates resources, keeps track of information, location, uses, status etc.',
          'Security: Protects data and information from unauthorized access.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Basic Computer Operations' },
        { type: 'h2', content: 'File and Folder Management' },
        { type: 'ul', items: [
          'Creating a File/Folder: Right-click -> New -> Folder/File type.',
          'Renaming a File/Folder: Right-click -> Rename, or press F2.',
          'Copying a File/Folder: Select -> Ctrl+C, go to destination -> Ctrl+V.',
          'Moving a File/Folder: Select -> Ctrl+X, go to destination -> Ctrl+V.',
          'Deleting a File/Folder: Select -> Delete key (moves to Recycle Bin) or Shift+Delete (permanent deletion).'
        ]},
        { type: 'h2', content: 'Protecting the Computer' },
        { type: 'p', content: 'It is essential to keep computers secure from various threats.' },
        { type: 'ul', items: [
          'Antivirus Software: Install and regularly update antivirus programs to detect and remove malicious software.',
          'Firewalls: Use firewalls to monitor and control incoming and outgoing network traffic.',
          'Passwords: Use strong, unique passwords for different accounts.',
          'Updates: Keep the operating system and software updated to patch security vulnerabilities.'
        ]}
      ]
    }
  ]
};
`);

writeChapter('chapter4.ts', `import { NativeChapter } from '../../types/content';
export const chapter4: NativeChapter = {
  id: 'entrepreneurial-skills', number: 'IV', title: 'Part A: Entrepreneurial Skills-II',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Entrepreneurial Skills - II' },
        { type: 'p', content: 'Entrepreneurship is the process of designing, launching, and running a new business, which is often initially a small business. The people who create these businesses are called entrepreneurs.' },
        { type: 'h2', content: 'Characteristics of an Entrepreneur' },
        { type: 'ul', items: [
          'Risk Taker: Willing to take calculated risks for potential rewards.',
          'Innovator: Brings new ideas, products, or processes to the market.',
          'Visionary: Has a clear idea of what the business will be in the future.',
          'Hard Working: Dedicated and willing to put in the effort required to succeed.',
          'Goal-Oriented: Focuses on achieving specific objectives.'
        ]},
        { type: 'h2', content: 'Roles and Functions of an Entrepreneur' },
        { type: 'ol', items: [
          'Identifying Opportunities: Recognizing gaps in the market and creating solutions.',
          'Organizing Resources: Gathering the necessary capital, labor, and materials.',
          'Decision Making: Making critical choices regarding the business operations.',
          'Managing the Business: Overseeing day-to-day activities and ensuring smooth functioning.',
          'Risk Bearing: Taking responsibility for the financial and operational risks.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Myths about Entrepreneurship' },
        { type: 'p', content: 'There are several misconceptions about what it takes to be an entrepreneur.' },
        { type: 'ul', items: [
          'Myth: Entrepreneurs are born, not made. Reality: Entrepreneurial skills can be learned and developed through experience and education.',
          'Myth: Entrepreneurs are gamblers. Reality: They take calculated risks, not blind gambles.',
          'Myth: You need a lot of money to start a business. Reality: Many successful businesses start with very little capital.',
          'Myth: Entrepreneurs are completely independent. Reality: They rely on teams, partners, and customers.'
        ]},
        { type: 'h2', content: 'Entrepreneurship as a Career Option' },
        { type: 'p', content: 'Choosing entrepreneurship as a career path offers independence, the potential for high financial rewards, and the opportunity to make a significant impact on society.' }
      ]
    }
  ]
};
`);

writeChapter('chapter5.ts', `import { NativeChapter } from '../../types/content';
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
`);

console.log('Finished writing Part A chapters');

writeChapter('chapter6.ts', `import { NativeChapter } from '../../types/content';
export const chapter6: NativeChapter = {
  id: 'intro-to-ai', number: 'VI', title: 'Part B: Introduction to AI',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Introduction to Artificial Intelligence' },
        { type: 'p', content: 'Artificial Intelligence (AI) is the simulation of human intelligence processes by machines, especially computer systems. These processes include learning (the acquisition of information and rules for using the information), reasoning (using rules to reach approximate or definite conclusions), and self-correction.' },
        { type: 'h2', content: 'How do machines become Artificially Intelligent?' },
        { type: 'p', content: 'Machines become intelligent by being trained with data and algorithms. The more data they are exposed to, the better they become at recognizing patterns and making decisions.' },
        { type: 'ul', items: [
          'Data: The raw information fed into the machine (e.g., images, text, numbers).',
          'Algorithm: A set of rules or instructions given to the machine to help it learn from the data.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Domains of AI' },
        { type: 'p', content: 'AI is a broad field with several sub-domains:' },
        { type: 'ul', items: [
          'Data Science: The domain of AI related to data systems and processes. It involves analyzing and extracting meaning from large amounts of data.',
          'Computer Vision (CV): The domain of AI that enables machines to see and interpret the visual world. It involves processing and analyzing digital images and videos.',
          'Natural Language Processing (NLP): The domain of AI that focuses on the interaction between computers and human language. It enables machines to understand, interpret, and generate human text and speech.'
        ]},
        { type: 'h2', content: 'AI vs ML vs DL' },
        { type: 'p', content: 'These terms are often used interchangeably, but they represent a hierarchy:' },
        { type: 'ol', items: [
          'Artificial Intelligence (AI): Any technique that enables computers to mimic human intelligence.',
          'Machine Learning (ML): A subset of AI that includes abstruse statistical techniques that enable machines to improve at tasks with experience.',
          'Deep Learning (DL): A subset of ML composed of algorithms that permit software to train itself to perform tasks, like speech and image recognition, by exposing multilayered neural networks to vast amounts of data.'
        ]}
      ]
    }
  ]
};
`);

console.log('Done with Chapter 6');
