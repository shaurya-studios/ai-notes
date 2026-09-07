import { NativeChapter } from '../../types/content';
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
          'Feedback: The receiver\'s response to the sender\'s message. This is crucial as it ensures the message was understood correctly.'
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
