import { NativeChapter } from '../../types/content';
export const chapter3: NativeChapter = {
  id: 'ict-skills', number: 'III', title: 'ICT Skills',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Basic Computer Operations' },
        { type: 'h2', content: 'What is ICT?' },
        { type: 'p', content: 'Information and Communication Technology. Methods, tools, and concepts for storing, recording, and sending digital information. ICT Skills help in communication, business, and staying connected.' },
        { type: 'h3', content: 'Hardware & Software' },
        { type: 'ul', items: [
          'Hardware: Physical components (keyboard, monitor, CPU).',
          'Software: Programs that make hardware function such as browsers, games, Office tools, etc.',
          'Operating System: The most important software that starts working as soon as we switch on a computer. It displays the desktop on the monitor. E.g. - Ubuntu, Windows, Mac OS, iOS, Android.'
        ]},
        { type: 'h2', content: 'Starting and Shutting Down' },
        { type: 'ul', items: [
          'Starting: Press Power button -> OS starts -> desktop/main screen appears.',
          'BIOS (Basic Input/Output System): Does a self-test. If the system is fine, the BIOS will load the Operating System.',
          'Login & Logout: Computers use login IDs and passwords to protect data.',
          'Shutting Down: OS closes all apps before turning off the computer.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h2', content: 'Input Devices' },
        { type: 'h3', content: 'Using a Keyboard' },
        { type: 'ul', items: [
          'Function keys (F1-F12): Special functions per program.',
          'Control keys: CTRL, SHIFT, SPACEBAR, ALT, CAPS LOCK, TAB.',
          'Enter/Return: Move cursor to a new line or to confirm.',
          'Punctuation keys: , ; . ?',
          'Navigation keys: Arrow keys, HOME, END, PAGE UP/DOWN.',
          'Command keys: INSERT, DELETE, BACKSPACE.',
          'Windows key: Opens Start menu.'
        ]},
        { type: 'h3', content: 'Using A Mouse' },
        { type: 'ul', items: [
          'Point & Click: Select/open items.',
          'Roll Over/Hover: View details without clicking.',
          'Drag & Drop: Move items by holding left button, dragging, and releasing.',
          'Double-click: Quickly click left button twice to open files.',
          'Scroll & Right-click: Navigate or access context menus.'
        ]}
      ]
    },
    {
      pageNumber: 3,
      blocks: [
        { type: 'h1', content: 'Session 3 & 4: Computer Care, Security and Privacy' },
        { type: 'h2', content: 'Taking Care of Devices' },
        { type: 'ul', items: [
          'Keep Device Clean: Keyboard (soft brush), Screen (soft cloth).',
          'Food & Drinks: Keep liquids away.',
          'Handle Carefully: Avoid drops, use bags.',
          'Keep Cool: Ensure fans work; avoid overheating.',
          'Battery Care: Don\'t overcharge.',
          'Maintenance Schedule & Backup Your Data.'
        ]},
        { type: 'h2', content: 'Computer Security' },
        { type: 'p', content: 'Computers store personal, financial and medical information. If info gets leaked, stolen or misused, it causes serious harm (like loss of money, identity theft).' },
        { type: 'h3', content: 'Threats to Computer Security' },
        { type: 'ol', items: [
          'Theft: Physical theft (stealing laptop), Identity theft (hacker pretends to be you), Software piracy.',
          'Viruses / Malware: Worms (spread to many files) and Trojan Horses (secretly damages data).',
          'Online Predator: People pretending to be someone else to manipulate or harm you online.',
          'Internet Scams: Fake lottery messages, winning emails, asking for money or card info.'
        ]},
        { type: 'h3', content: 'How to Protect Your Data' },
        { type: 'ul', items: [
          'Use Strong Passwords',
          'Install Antivirus & Firewall',
          'Encrypt Data',
          'Use Secure Websites'
        ]}
      ]
    }
  ]
};
