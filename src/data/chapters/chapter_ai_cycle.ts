import { NativeChapter } from '../../types/content';
export const chapter_ai_cycle: NativeChapter = {
  id: 'ai-project-cycle-custom', number: 'V', title: 'Revisiting AI Project Cycle',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: AI Project Cycle' },
        { type: 'definition', term: 'DEFINITION', definition: 'A cyclical process followed to complete an AI project, from identifying the problem to deploying the solution.' },
        { type: 'h2', content: 'STAGES OF THE AI PROJECT CYCLE ?' },
        { type: 'ol', items: [
          'Problem Scoping: Define the goal/problem. Identify parameters affecting it. Helps in getting a clear picture.',
          'Data Acquisition: Collect data from reliable sources. Data is the base of AI. Represent data visually (graphs, charts, flowcharts, maps).',
          'Data Exploration: Study patterns, trends, relationships in data. Decide which type of model to build.',
          'Model Building: Select suitable AI models. Test models → find the most efficient one. Develop algorithm around the best model.',
          'Model Evaluation: Test model on new/unseen data. Evaluate performance → improve if needed.',
          'Deployment: Deploy in real-world environment. Ensure smooth operation & value delivery to users.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 2: Introduction to AI Domains' },
        { type: 'p', content: 'AI becomes intelligent based on the training data it receives. Depending on the type of data fed into an AI model, it can be classified into 3 main domains' },
        { type: 'h2', content: 'STATISTICAL DATA?' },
        { type: 'ul', items: [
          'Related to data systems and processes.',
          'Collects, stores, and analyzes large datasets to derive meaning.',
          'Helps in decision making using statistical patterns.',
          'Examples: Price Comparison Websites (PriceGrabber, PriceRunner, Junglee, Shopzilla, DealTime). Found in tech, hospitality, automobiles, etc.'
        ]},
        { type: 'h2', content: 'COMPUTER VISION?' },
        { type: 'ul', items: [
          'Ability of machines to analyze and understand visual data (images, videos, thermal/infrared).',
          'Process: acquiring → screening → analyzing → identifying → extracting → decision-making.',
          'Goal: Teach machines to interpret information from pixels.',
          'Examples: Agricultural Monitoring (crop health, pest detection, yield estimation using drones). Surveillance Systems (monitoring public spaces, detecting suspicious activities, real-time alerts).'
        ]}
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: 'Session 2 (Continued) & Session 3: Ethical Frameworks' },
        { type: 'h2', content: 'NATURAL LANGUAGE PROCESSING?' },
        { type: 'ul', items: [
          'Interaction between computers and humans using natural language (spoken/written).',
          'Tries to read, interpret, and make sense of human language with algorithms.',
          'Objective: Understand and process human language in a valuable way.',
          'Examples: Email filters (spam detection using keywords/phrases). Machine Translation (Google Translate, convert text between languages).'
        ]},
        { type: 'h1', content: 'Session 3: Ethical Frameworks' },
        { type: 'h2', content: 'WHAT ARE FRAMEWORKS?' },
        { type: 'ul', items: [
          'Step-by-step guides for solving problems.',
          'Provide structured approach → ensure all factors are considered.',
          'Help in consistency, communication, and collaboration.'
        ]},
        { type: 'h2', content: 'ETHICAL FRAMEWORKS?' },
        { type: 'ul', items: [
          'Ethics = values/morals to distinguish right vs wrong.',
          'Ethical frameworks = ensure AI decisions do not cause unintended harm.',
          'Provide systematic guidance for moral dilemmas.'
        ]}
      ]
    },
    {
      pageNumber: 4,
      blocks: [
        { type: 'h1', content: 'Need for Ethical Frameworks in AI' },
        { type: 'ul', items: [
          'AI influences/decides outcomes (e.g., biased hiring algorithm).',
          'To ensure AI makes morally acceptable recommendations.',
          'Prevent harm and bias before deployment.'
        ]},
        { type: 'h2', content: 'Factors Influencing Human Decisions (bias)' },
        { type: 'ul', items: [
          'Culture/Religion : alignment with beliefs.',
          'Intuition & Values : does the decision feel "right"?',
          'Value of Humans/Non-Humans : priority of lives',
          'Location/Identity of recipient.',
          'Bias towards relatives/familiar people.',
          'Access to hidden information.'
        ]},
        { type: 'h2', content: 'TYPES OF ETHICAL FRAMEWORKS?' },
        { type: 'h3', content: 'SECTOR BASED FRAMEWORKS?' },
        { type: 'ul', items: [
          'Designed for specific industries.',
          'Example: Bioethics in healthcare → privacy, safety, fairness in medical AI.',
          'Also used in finance, education, transport, agriculture, governance, law enforcement.'
        ]},
        { type: 'h3', content: 'VALUE BASED FRAMEWORKS?' },
        { type: 'ul', items: [
          'Based on moral philosophies & values.',
          'Subtypes:',
          '→ Rights-based → Protect human rights, dignity, freedom.',
          '→ Utility-based → Maximize benefit, minimize harm (overall good).',
          '→ Virtue-based → Focus on honesty, compassion, integrity of decision-makers.'
        ]}
      ]
    }
  ]
};
