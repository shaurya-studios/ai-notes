import { NativeChapter } from '../../types/content';
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
