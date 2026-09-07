import { NativeChapter } from '../../types/content';
export const chapter3: NativeChapter = {
  id: 'ict-skills', number: 'III', title: 'Part A: ICT Skills - II',
  pages: [
    {
      pageNumber: 1,
      blocks: [
        { type: 'h1', content: 'Session 1: Operating Systems & Maintenance' },
        { type: 'p', content: 'Information and Communication Technology (ICT) refers to digital tools used for creating, storing, and communicating information.' },
        { type: 'h2', content: 'Operating System (OS)' },
        { type: 'p', content: 'An OS is the core software that manages computer hardware and software resources. Examples: Windows, macOS, Linux, Android.' },
        { type: 'ul', items: [
          'Functions of OS: Process management, Memory management, File management, Device management, and Security.'
        ]},
        { type: 'h2', content: 'Computer Care and Maintenance' },
        { type: 'p', content: 'Proper maintenance prolongs the life of the computer.' },
        { type: 'ol', items: [
          'Physical Care: Keep it clean, avoid eating near it, ensure proper ventilation.',
          'Internal Care: Empty recycle bin, uninstall unused programs, defragment hard drives.'
        ]}
      ]
    },
    {
      pageNumber: 2,
      blocks: [
        { type: 'h1', content: 'Session 2: Digital Security & Threats' },
        { type: 'p', content: 'With internet connectivity, securing digital assets is extremely important.' },
        { type: 'h2', content: 'Common Cyber Threats' },
        { type: 'table', headers: ['Threat', 'Description'], rows: [
          ['Virus', 'Malware that attaches to clean files and infects other files.'],
          ['Worm', 'Malware that replicates itself to spread across networks.'],
          ['Trojan Horse', 'Malicious software disguised as legitimate software.'],
          ['Phishing', 'Fake emails designed to steal passwords and data.']
        ]},
        { type: 'h2', content: 'Protection Methods' },
        { type: 'ul', items: [
          'Antivirus Software: Install and keep it updated to detect and remove malware.',
          'Strong Passwords: Use a mix of letters, numbers, and special characters.',
          'Data Backup: Regularly save important files to an external drive or cloud.',
          'Firewall: Enable network firewalls to block unauthorized access.'
        ]}
      ]
    }
  ]
};
