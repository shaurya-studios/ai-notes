import { NativeChapter } from '../../types/content';
export const chapter_ict: NativeChapter = {
  id: 'ict-skills-custom', number: 'VIII', title: 'ICT Skills',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Basic Computer Operations' },
        { type: 'definition', term: 'ICT?', definition: 'Information and Communication Technology. Methods, tools, and concepts for storing, recording, and sending digital information.' },
        { type: 'h2', content: 'COMPUTER HARDWARE & SOFTWARE?' },
        { type: 'ul', items: [
          'Hardware: Physical components (keyboard, monitor, CPU).',
          'Software: Programs that make hardware function such as browsers, games, Office tools, etc.',
          'Operating System: The most important software that starts working as soon as we switch on a computer. It displays the desktop on the monitor. E.g. - Ubuntu, Windows, Mac OS, iOS, Android'
        ]},
        { type: 'h2', content: 'Starting a Computer' },
        { type: 'ul', items: [
          'Press Power button → OS starts → desktop/main screen appears.',
          'BIOS (Basic Input/Output System): The BIOS first does a self-test. If the self-test shows that the system is fine, the BIOS will load the Operating System.'
        ]},
        { type: 'h2', content: 'Input Devices' },
        { type: 'p', content: 'Using Keyboard: Function keys, Control keys, Navigation keys, Command keys. Using A Mouse: Point & Click, Roll Over, Drag & Drop, Double-click, Scroll & Right-click' }
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 3 & 4: Maintenance & Security' },
        { type: 'h2', content: 'Session 3: TAKING CARE OF DEVICES' },
        { type: 'ul', items: [
          'Keep Device Clean: Keyboard (soft brush), Screen (soft cloth).',
          'Food & Drinks: Keep liquids away',
          'Handle Carefully: Avoid drops, use bags',
          'Keep Cool: Ensure fans work; avoid overheating',
          'Battery Care: Don\'t overcharge',
          'Connect Devices Carefully',
          'Avoid Running Too Many Programs',
          'Maintenance Schedule, Backup Your Data, Scanning And Cleaning Viruses, Increasing Computer Performance, Removing SPAM'
        ]},
        { type: 'h2', content: 'Session 4: Threats to Computer Security?' },
        { type: 'ul', items: [
          'Theft: Physical theft (steals laptop), Identity theft (hacker steals personal info).',
          'Viruses / Malware: Worms (copy themselves), Trojan Horse (looks like useful software but secretly damages data).',
          'Online Predator: People pretending to be someone else to manipulate or harm you online.',
          'Internet Scams: Fake lottery messages, winning emails, asking for money or card info.'
        ]},
        { type: 'h2', content: 'How to Protect Your Data' },
        { type: 'ul', items: [
          'Strong Passwords',
          'Install Antivirus & Firewall',
          'Encrypt Data',
          'Use Secure Websites'
        ]}
      ]
    }
  ]
};
