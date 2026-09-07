import fs from 'fs';

const tests = [
  {
    id: 'test-1',
    title: 'Test 1: Employability & Communication',
    topic: 'Communication & Self Management',
    questions: [
      {
        id: 't1-q1',
        question: 'Communication is defined as the ______________ exchange of information, or the giving and receiving of information.',
        options: [{id: 'a', text: 'two-way communication'}, {id: 'b', text: 'one-way communication'}, {id: 'c', text: 'no way communication'}, {id: 'd', text: 'three-way communication'}],
        correctOptionId: 'a',
        explanation: 'Communication inherently requires a sender and a receiver, making it a two-way process of sharing information.'
      },
      {
        id: 't1-q2',
        question: 'An address to a large group is an example of __________ communication.',
        options: [{id: 'a', text: 'Interpersonal Communication'}, {id: 'b', text: 'Written Communication'}, {id: 'c', text: 'Small Group Communication'}, {id: 'd', text: 'Public Communication'}],
        correctOptionId: 'd',
        explanation: 'Public communication involves one person addressing a massive audience, such as a public speech or rally.'
      },
      {
        id: 't1-q3',
        question: 'Smiling when you are happy and making a sad face when you are sad are examples of _____________.',
        options: [{id: 'a', text: 'Expressions'}, {id: 'b', text: 'Gestures'}, {id: 'c', text: 'Written'}, {id: 'd', text: 'None of the above'}],
        correctOptionId: 'a',
        explanation: 'Facial expressions are a key form of non-verbal communication that visually convey emotions.'
      },
      {
        id: 't1-q4',
        question: 'Example of posture ___________.',
        options: [{id: 'a', text: 'Keep your shoulders straight and body relaxed.'}, {id: 'b', text: 'Sit straight while resting your hands and feet in relaxed position'}, {id: 'c', text: 'While standing, keep your hands by your sides.'}, {id: 'd', text: 'All of the above'}],
        correctOptionId: 'd',
        explanation: 'Good posture encompasses proper alignment whether sitting, standing, or walking.'
      },
      {
        id: 't1-q5',
        question: 'Which of the following is NOT an acceptable form of nonverbal communication at work?',
        options: [{id: 'a', text: 'Keeping hands in pockets while talking'}, {id: 'b', text: 'Talking at moderate speed'}, {id: 'c', text: 'Sitting straight'}, {id: 'd', text: 'Tilting head a bit to listen'}],
        correctOptionId: 'a',
        explanation: 'Keeping hands in pockets can be perceived as overly casual, defensive, or unprofessional in a workplace environment.'
      },
      {
        id: 't1-q6',
        question: 'Which of these is an example of positive feedback?',
        options: [{id: 'a', text: 'You are always doing it the wrong way'}, {id: 'b', text: 'I noticed your dedication towards the project.'}, {id: 'c', text: 'Excellent, your work has improved'}, {id: 'd', text: 'Both b and c (implied as All of the above matching positive context)'}],
        correctOptionId: 'd',
        explanation: 'Both B and C acknowledge effort and improvement, which are hallmarks of constructive, positive feedback.'
      },
      {
        id: 't1-q7',
        question: 'What are the capitalization rules in communication skills?',
        options: [{id: 'a', text: 'The first letter in the titles used before people’s names.'}, {id: 'b', text: 'Capitalize the letter ‘I’ when it is used as a word'}, {id: 'c', text: 'Capitalize the first letter in every sentence.'}, {id: 'd', text: 'All of the above'}],
        correctOptionId: 'd',
        explanation: 'The MINTS rule (Months, I, Names, Titles, Starting letter) dictates all these conditions require capitalization.'
      },
      {
        id: 't1-q8',
        question: 'Which of these is NOT a common communication barrier?',
        options: [{id: 'a', text: 'Linguistic barrier'}, {id: 'b', text: 'Interpersonal barrier'}, {id: 'c', text: 'Financial barrier'}, {id: 'd', text: 'Organizational barrier'}],
        correctOptionId: 'c',
        explanation: 'While money causes issues, standard communication barriers are categorized into Linguistic, Physical, Cultural, Interpersonal, and Organizational.'
      },
      {
        id: 't1-q9',
        question: 'Election campaigns are the example of communication.',
        options: [{id: 'a', text: 'Public'}, {id: 'b', text: 'Small Group'}, {id: 'c', text: 'Written'}, {id: 'd', text: 'Interpersonal'}],
        correctOptionId: 'a',
        explanation: 'Campaigns target large, diverse masses, defining them as public mass communication.'
      },
      {
        id: 't1-q10',
        question: 'Remya traveled to Sweden from India to pursue her higher education. But she doesn’t know how to speak Swedish. Because of this, she was unable to find a part time job. This is an example of______.',
        options: [{id: 'a', text: 'Interpersonal barrier'}, {id: 'b', text: 'Physical barrier'}, {id: 'c', text: 'Organisational barrier'}, {id: 'd', text: 'Linguistic barrier'}],
        correctOptionId: 'd',
        explanation: 'An inability to speak the local language is a classic linguistic (language) barrier.'
      },
      {
        id: 't1-q11',
        question: 'In the process of communication, the messenger does the ___ and the recipient does the ___.',
        options: [{id: 'a', text: 'encoding, coding'}, {id: 'b', text: 'decoding, coding'}, {id: 'c', text: 'decoding, encoding'}, {id: 'd', text: 'encoding, decoding'}],
        correctOptionId: 'd',
        explanation: 'The sender (messenger) encodes the message into a medium, and the receiver (recipient) decodes it to understand it.'
      },
      {
        id: 't1-q12',
        question: 'To learn a language, one needs to develop which of the following key skills?',
        options: [{id: 'a', text: 'Listening, Speaking, Writing and Copying'}, {id: 'b', text: 'Listening, Seeing, Informing and Writing'}, {id: 'c', text: 'Listening, Speaking, Reading and Writing'}, {id: 'd', text: 'Listening, Speaking, Arguing and Writing'}],
        correctOptionId: 'c',
        explanation: 'The core language skills are LSRW: Listening, Speaking, Reading, and Writing.'
      },
      {
        id: 't1-q13',
        question: 'Self management is also useful in:',
        options: [{id: 'a', text: 'Reaching your goals'}, {id: 'b', text: 'Overcoming bad habits'}, {id: 'c', text: 'Creating positive habits'}, {id: 'd', text: 'All of the above'}],
        correctOptionId: 'd',
        explanation: 'Self-management helps direct behavior, establish routines, and replace negative tendencies with constructive ones.'
      },
      {
        id: 't1-q14',
        question: 'When you are under __________ for a prolonged period of time, it can cause health problems and mental troubles as well.',
        options: [{id: 'a', text: 'Stress'}, {id: 'b', text: 'Discipline'}, {id: 'c', text: 'Timeliness'}, {id: 'd', text: 'Goal – Setting'}],
        correctOptionId: 'a',
        explanation: 'Prolonged (chronic) stress leads to physical exhaustion and psychological issues.'
      },
      {
        id: 't1-q15',
        question: 'What is the reason for stress?',
        options: [{id: 'a', text: 'You are too close to the exams but feel unprepared.'}, {id: 'b', text: 'You are stressed due to lack of sleep.'}, {id: 'c', text: 'You are experiencing a loss of someone close in the family'}, {id: 'd', text: 'All of the above'}],
        correctOptionId: 'd',
        explanation: 'Stress can be triggered by academic pressure, physical neglect, or emotional trauma.'
      },
      {
        id: 't1-q16',
        question: 'Analyzing your ________ and ________ helps you to attain success in life.',
        options: [{id: 'a', text: 'Strengths & Weakness'}, {id: 'b', text: 'Good & bad habits'}, {id: 'c', text: 'Both a) and b)'}, {id: 'd', text: 'None'}],
        correctOptionId: 'c',
        explanation: 'Self-awareness involves identifying both your capabilities (strengths/weaknesses) and your behavioral patterns (habits).'
      },
      {
        id: 't1-q17',
        question: 'How can you identify your weaknesses?',
        options: [{id: 'a', text: 'Point out the areas where you struggle and the things you find difficult to do.'}, {id: 'b', text: 'Look at the feedback others usually give you.'}, {id: 'c', text: 'Be open to feedback and accept your weaknesses without feeling low about it.'}, {id: 'd', text: 'All of the above'}],
        correctOptionId: 'd',
        explanation: 'Self-reflection and constructive external feedback are key to identifying areas for improvement.'
      },
      {
        id: 't1-q18',
        question: 'If you are aware of your own values, likes, dislikes, strengths, and shortcomings as an individual. It denotes the fact that you are ____________.',
        options: [{id: 'a', text: 'Self-Confident'}, {id: 'b', text: 'Self-Control'}, {id: 'c', text: 'Self Motivated'}, {id: 'd', text: 'Self-Aware'}],
        correctOptionId: 'd',
        explanation: 'Self-awareness is the foundational understanding of one\'s own personality, traits, and values.'
      },
      {
        id: 't1-q19',
        question: '_________ helps to achieve our goals, feel happy and improve our quality of life.',
        options: [{id: 'a', text: 'Self – control'}, {id: 'b', text: 'Self – motivation'}, {id: 'c', text: 'Self – awareness'}, {id: 'd', text: 'None of the above'}],
        correctOptionId: 'b',
        explanation: 'Self-motivation provides the internal drive required to persist and accomplish goals.'
      },
      {
        id: 't1-q20',
        question: 'Ravi works hard to get the best student award at the end of year. What type of motivation is this?',
        options: [{id: 'a', text: 'Internal'}, {id: 'b', text: 'External'}, {id: 'c', text: 'Both internal and external'}, {id: 'd', text: 'Not any specific type of motivation'}],
        correctOptionId: 'b',
        explanation: 'Since the drive is for an award (a tangible external reward), it is a form of external motivation.'
      },
      {
        id: 't1-q21',
        question: 'Irritation, impatience, loneliness, upset mood, anxiety are signs of which type of stress:',
        options: [{id: 'a', text: 'Mental'}, {id: 'b', text: 'Physical'}, {id: 'c', text: 'Emotional'}, {id: 'd', text: 'None of the above'}],
        correctOptionId: 'c',
        explanation: 'These feelings relate directly to one\'s emotional state rather than just cognitive (mental) or bodily (physical) symptoms.'
      },
      {
        id: 't1-q22',
        question: 'Which practice involves focusing one’s mind?',
        options: [{id: 'a', text: 'Yoga.'}, {id: 'b', text: 'Physical exercise.'}, {id: 'c', text: 'Meditation.'}, {id: 'd', text: 'Nature Walk.'}],
        correctOptionId: 'c',
        explanation: 'Meditation is specifically the practice of mental concentration, mindfulness, and focusing the mind.'
      },
      {
        id: 't1-q23',
        question: 'The term used for human efforts aimed at maintaining a healthy body and mind is:',
        options: [{id: 'a', text: 'Stress Management'}, {id: 'b', text: 'Self-Motivation'}, {id: 'c', text: 'Self-Regulation'}, {id: 'd', text: 'None of the above'}],
        correctOptionId: 'a',
        explanation: 'Stress management includes lifestyle changes, physical care, and mental exercises to maintain holistic health.'
      },
      {
        id: 't1-q24',
        question: 'Rajesh launches a new app, but it fails to attract users and he faces financial losses. He gathers his team to discuss the failure, takes accountability for the oversight, and assures them that he will conduct thorough market research before the next launch. He ___________.',
        options: [{id: 'a', text: 'takes responsibility for his mistakes'}, {id: 'b', text: 'thinks before making a decision'}, {id: 'c', text: 'does not give up'}, {id: 'd', text: 'is innovative'}],
        correctOptionId: 'a',
        explanation: 'By taking accountability, Rajesh is explicitly demonstrating the entrepreneurial quality of taking responsibility.'
      },
      {
        id: 't1-q25',
        question: 'Neha participated in a dance competition and got rewarded. This motivated her greatly and she enrolled into a dance class. Now she thinks to take dancing as her career. The above example signifies which type of motivation?',
        options: [{id: 'a', text: 'Internal'}, {id: 'b', text: 'External'}, {id: 'c', text: 'Forcive'}, {id: 'd', text: 'Both a. and b'}],
        correctOptionId: 'd',
        explanation: 'She danced initially out of interest (Internal), but the reward (External) pushed her to pursue it professionally.'
      }
    ]
  },
  {
    id: 'test-2',
    title: 'Test 2: Basic ICT & Entrepreneur Skills',
    topic: 'Information Technology',
    questions: [
      {
        id: 't2-q1',
        question: 'ICT Stands for _____________.',
        options: [{id: 'a', text: 'Inform and Communicate technology'}, {id: 'b', text: 'Information and Communication technology'}, {id: 'c', text: 'Inform and Communication technology'}, {id: 'd', text: 'Information and Communicate technology'}],
        correctOptionId: 'b',
        explanation: 'ICT is universally known as Information and Communication Technology.'
      },
      {
        id: 't2-q2',
        question: 'In a business, the best approach to keep records is ____________.',
        options: [{id: 'a', text: 'Handwritten on paper'}, {id: 'b', text: 'Written using a typewriter'}, {id: 'c', text: 'Written using a Computer'}, {id: 'd', text: 'None of the above'}],
        correctOptionId: 'c',
        explanation: 'Computers provide scalable, searchable, and secure digital record-keeping which is essential for modern business.'
      },
      {
        id: 't2-q3',
        question: 'ICT Skills help us to ________________, run our business and stay connected with our family and friends.',
        options: [{id: 'a', text: 'Communicate'}, {id: 'b', text: 'Entertainment'}, {id: 'c', text: 'Both a) and b)'}, {id: 'd', text: 'None of the above'}],
        correctOptionId: 'a',
        explanation: 'While they provide entertainment, the core function mentioned in conjunction with staying connected is communication.'
      },
      {
        id: 't2-q4',
        question: 'A computer system consists of two main parts __________ and _________.',
        options: [{id: 'a', text: 'Hardware'}, {id: 'b', text: 'Software'}, {id: 'c', text: 'Antivirus'}, {id: 'd', text: 'Both a) and b)'}],
        correctOptionId: 'd',
        explanation: 'Every functional computer requires both physical hardware and instructional software.'
      },
      {
        id: 't2-q5',
        question: 'Mobile devices, such as __________ and ____________ are also computer systems with hardware and software.',
        options: [{id: 'a', text: 'Mouse and Keyboard'}, {id: 'b', text: 'Smartphone and Tablets'}, {id: 'c', text: 'Typewriter and Pen'}, {id: 'd', text: 'None of the above'}],
        correctOptionId: 'b',
        explanation: 'Smartphones and tablets are highly advanced pocket-sized computers.'
      },
      {
        id: 't2-q6',
        question: 'Mobile devices also have an operating system like ___________.',
        options: [{id: 'a', text: 'Apple iOS'}, {id: 'b', text: 'Android'}, {id: 'c', text: 'Both a) and b)'}, {id: 'd', text: 'None of the above'}],
        correctOptionId: 'c',
        explanation: 'iOS and Android are the two dominant mobile operating systems.'
      },
      {
        id: 't2-q7',
        question: 'BIOS stands for ____________.',
        options: [{id: 'a', text: 'Basic Input/Output System'}, {id: 'b', text: 'Basic In/Out System'}, {id: 'c', text: 'Based on In/Out System'}, {id: 'd', text: 'None of the above'}],
        correctOptionId: 'a',
        explanation: 'The BIOS manages the data flow between the computer\'s operating system and attached devices.'
      },
      {
        id: 't2-q8',
        question: 'SHIFT, SPACEBAR, ALT, CAPS LOCK are ________ keys which perform special functions.',
        options: [{id: 'a', text: 'Enter Key'}, {id: 'b', text: 'Function Key'}, {id: 'c', text: 'Control Key'}, {id: 'd', text: 'Navigation Key'}],
        correctOptionId: 'c',
        explanation: 'These are modifier or control keys that change the output of other keys.'
      },
      {
        id: 't2-q9',
        question: 'Rearrange the stages in starting a computer: i. Desktop appears, ii. Login screen, iii. POST starts, iv. OS starts, v. Welcome screen',
        options: [{id: 'a', text: 'i, ii, iii, iv, v'}, {id: 'b', text: 'ii, i, v, iii, iv'}, {id: 'c', text: 'iii, iv, v, ii, i'}, {id: 'd', text: 'iii, ii, i, iv, v'}],
        correctOptionId: 'c',
        explanation: 'Power on -> POST -> OS starts -> Welcome screen -> Login -> Desktop.'
      },
      {
        id: 't2-q10',
        question: 'What are the best options for caring for computer devices?',
        options: [{id: 'a', text: 'Keeping a Device Clean'}, {id: 'b', text: 'Prepare a Maintenance Schedule'}, {id: 'c', text: 'Do not overcharge your battery'}, {id: 'd', text: 'All of the above'}],
        correctOptionId: 'd',
        explanation: 'Hardware longevity requires physical cleaning, scheduled maintenance, and proper power management.'
      },
      {
        id: 't2-q11',
        question: 'Sometimes we get mails from companies who are advertising a product or trying to attract you. Such mails are called ________.',
        options: [{id: 'a', text: 'Trash'}, {id: 'b', text: 'Inbox'}, {id: 'c', text: 'Spam'}, {id: 'd', text: 'None of the above'}],
        correctOptionId: 'c',
        explanation: 'Unsolicited bulk marketing emails are universally referred to as spam.'
      },
      {
        id: 't2-q12',
        question: '__________ are computer programmes that can corrupt data and software programmes, as well as steal information.',
        options: [{id: 'a', text: 'Virus'}, {id: 'b', text: 'Theft'}, {id: 'c', text: 'Both a) and b)'}, {id: 'd', text: 'None of the above'}],
        correctOptionId: 'a',
        explanation: 'A computer virus is malicious code designed to harm systems or steal data.'
      },
      {
        id: 't2-q13',
        question: 'Sometimes you may receive very attractive offers saying you have won a lottery and claim the prize by depositing money known as ___________.',
        options: [{id: 'a', text: 'Trojan House'}, {id: 'b', text: 'Online Predator'}, {id: 'c', text: 'Theft'}, {id: 'd', text: 'Internet Scams'}],
        correctOptionId: 'd',
        explanation: 'Phishing and advance-fee frauds are classic examples of internet scams.'
      },
      {
        id: 't2-q14',
        question: 'What can you do to make sure your internet transactions are safe?',
        options: [{id: 'a', text: 'Lock your computer'}, {id: 'b', text: 'Do not use pirated software'}, {id: 'c', text: 'Give credit card or bank details only on safe websites'}, {id: 'd', text: 'Use anti-virus'}],
        correctOptionId: 'c',
        explanation: 'While all are good practices, checking for HTTPS and verified trusted gateways is specific to transaction safety.'
      },
      {
        id: 't2-q15',
        question: 'Using which of the following can change settings?',
        options: [{id: 'a', text: 'Search box'}, {id: 'b', text: 'Recycle bin'}, {id: 'c', text: 'Control panel'}, {id: 'd', text: 'Taskbar'}],
        correctOptionId: 'c',
        explanation: 'The Control Panel (or Settings app) is the centralized hub for altering OS configurations.'
      },
      {
        id: 't2-q16',
        question: 'A software program that attaches itself to other programs and alter their behavior is called .',
        options: [{id: 'a', text: 'Infected file'}, {id: 'b', text: 'Computer virus'}, {id: 'c', text: 'Infected drive'}, {id: 'd', text: 'Human virus'}],
        correctOptionId: 'b',
        explanation: 'Viruses attach to clean files and infect them, altering their behavior to spread the malicious code.'
      },
      {
        id: 't2-q17',
        question: 'Installing the __ helps in increasing the performance of the computer.',
        options: [{id: 'a', text: 'spam files'}, {id: 'b', text: 'disk cleaner software'}, {id: 'c', text: 'temporary files'}, {id: 'd', text: 'extra files'}],
        correctOptionId: 'b',
        explanation: 'Disk cleaners remove cache, temp files, and junk, freeing up resources and improving speed.'
      },
      {
        id: 't2-q18',
        question: 'These files are created when you are running programs.',
        options: [{id: 'a', text: 'Virus'}, {id: 'b', text: 'Backup files'}, {id: 'c', text: 'System files'}, {id: 'd', text: 'Temporary files'}],
        correctOptionId: 'd',
        explanation: 'Programs generate temporary (.tmp) files to hold data while they are actively running.'
      },
      {
        id: 't2-q19',
        question: '__ is a type of operating system that runs on a set of computers that are interconnected by a network.',
        options: [{id: 'a', text: 'Multi-user'}, {id: 'b', text: 'DOS'}, {id: 'c', text: 'Single'}, {id: 'd', text: 'Distributed'}],
        correctOptionId: 'd',
        explanation: 'A distributed OS manages a group of independent, networked computers and makes them appear as a single system.'
      },
      {
        id: 't2-q20',
        question: 'Successful entrepreneurs have the __________ abilities.',
        options: [{id: 'a', text: 'They are confident'}, {id: 'b', text: 'They keep trying new ideas'}, {id: 'c', text: 'They are creative'}, {id: 'd', text: 'All of the above'}],
        correctOptionId: 'd',
        explanation: 'Confidence, perseverance, and creativity are core entrepreneurial traits.'
      },
      {
        id: 't2-q21',
        question: 'The process of developing a business plan, launching and running a business using innovation to meet customer needs and earn profit is called _____________.',
        options: [{id: 'a', text: 'Software Engineer'}, {id: 'b', text: 'Entrepreneur'}, {id: 'c', text: 'Civil Engineer'}, {id: 'd', text: 'Mechanical Engineer'}],
        correctOptionId: 'b',
        explanation: 'Entrepreneurship is the act of creating and managing a business venture to generate profit.'
      },
      {
        id: 't2-q22',
        question: 'What are the qualities of successful entrepreneurs?',
        options: [{id: 'a', text: 'Fulfill customer needs'}, {id: 'b', text: 'Use Local Materials & lower price of product'}, {id: 'c', text: 'Help Society'}, {id: 'd', text: 'All of the above'}],
        correctOptionId: 'd',
        explanation: 'Entrepreneurs drive economic growth by solving customer problems, optimizing resources, and creating societal value.'
      },
      {
        id: 't2-q23',
        question: 'It is important for an entrepreneur to be __________ when running a business.',
        options: [{id: 'a', text: 'Patient'}, {id: 'b', text: 'New Idea'}, {id: 'c', text: 'Both a) and b)'}, {id: 'd', text: 'None of the above'}],
        correctOptionId: 'a',
        explanation: 'Patience is critical because businesses often take time to become profitable and face numerous initial hurdles.'
      },
      {
        id: 't2-q24',
        question: 'The ability to handle take risks is a ____________',
        options: [{id: 'a', text: 'Quality of Entrepreneur'}, {id: 'b', text: 'Role of Entrepreneur'}, {id: 'c', text: 'Characteristics of Entrepreneurship'}, {id: 'd', text: 'None of the above'}],
        correctOptionId: 'a',
        explanation: 'Risk-taking is a fundamental personal quality and defining trait of an entrepreneur.'
      },
      {
        id: 't2-q25',
        question: 'Experimenting with many ideas is related to __.',
        options: [{id: 'a', text: 'Perseverance'}, {id: 'b', text: 'Confidence'}, {id: 'c', text: 'Creativity'}, {id: 'd', text: 'Trial and error'}],
        correctOptionId: 'd',
        explanation: 'Experimentation fundamentally relies on trial and error to figure out what works.'
      },
      {
        id: 't2-q26',
        question: 'An entrepreneur should be willing to take a _________ and remain open to new ideas to grow the business.',
        options: [{id: 'a', text: 'Satisfying human need'}, {id: 'b', text: 'Product and Service'}, {id: 'c', text: 'Calculated Risk'}, {id: 'd', text: 'Regular Production'}],
        correctOptionId: 'c',
        explanation: 'Entrepreneurs do not take blind risks; they take calculated risks after analyzing the market.'
      },
      {
        id: 't2-q27',
        question: 'A myth, or a misconception about entrepreneurship is _________.',
        options: [{id: 'a', text: 'To start a business we required lot of money'}, {id: 'b', text: 'Business should be unique or special'}, {id: 'c', text: 'Entrepreneurs are born, not made'}, {id: 'd', text: 'All of the above'}],
        correctOptionId: 'd',
        explanation: 'These are all common myths; you can start small, businesses don\'t have to be entirely unique, and skills can be learned.'
      },
      {
        id: 't2-q28',
        question: 'What is the term for individuals who work for a person or an organization and receive payment for their work?',
        options: [{id: 'a', text: 'Self-employed'}, {id: 'b', text: 'Wage-employed'}, {id: 'c', text: 'Both a and b'}, {id: 'd', text: 'None of the above'}],
        correctOptionId: 'b',
        explanation: 'Wage-employment involves trading time and skills for a fixed salary from an employer.'
      },
      {
        id: 't2-q29',
        question: 'What do entrepreneurs typically do when they run their businesses?',
        options: [{id: 'a', text: 'Increase job opportunities in their area'}, {id: 'b', text: 'Help people in their society earn money'}, {id: 'c', text: 'Both a and b'}, {id: 'd', text: 'None of the above'}],
        correctOptionId: 'c',
        explanation: 'Entrepreneurs stimulate the local economy by hiring and creating wealth.'
      },
      {
        id: 't2-q30',
        question: 'What are the positive impacts of entrepreneurship on society?',
        options: [{id: 'a', text: 'Accentuates economic growth'}, {id: 'b', text: 'Encourages welfare of the society'}, {id: 'c', text: 'Solves the problems of the society'}, {id: 'd', text: 'All of the above'}],
        correctOptionId: 'd',
        explanation: 'Entrepreneurship drives macroeconomic growth, community welfare, and societal innovation simultaneously.'
      }
    ]
  }
];

const questions = [
  { id: 'q1', chapterId: 'c1', chapterTitle: 'Communication Skills', question: 'What is \'Paralanguage\' in non-verbal communication?', answer: 'Paralanguage refers to the non-verbal elements of communication used to modify meaning and convey emotion. It includes factors like pitch, volume, intonation, and speech speed, focusing on *how* something is said rather than *what* is said.' },
  { id: 'q2', chapterId: 'c1', chapterTitle: 'Communication Skills', question: 'If you are a team leader of a team of 20 people in an organization, mention any two methods that you will use for effective communication.', answer: '1. Group Meetings / Briefings: Conducting daily or weekly stand-ups ensures everyone is aligned.\n2. Written Digital Channels: Using emails or professional chat tools (like Slack/Teams) to maintain an official record of tasks and feedback.' },
  { id: 'q3', chapterId: 'c1', chapterTitle: 'Communication Skills', question: 'A supervisor tells an employee, "You keep forgetting to smile at the hotel guests." Identify the type of feedback.', answer: 'This is an example of Constructive (or Negative) Feedback. Its purpose is to correct a specific behavioral flaw to improve the employee\'s future performance and enhance customer satisfaction.' },
  { id: 'q4', chapterId: 'c1', chapterTitle: 'Communication Skills', question: 'A sales executive is trying to explain features to a customer who speaks a different language. What type of barrier is this, and how can it be overcome?', answer: 'This is a Linguistic (Language) Barrier. It can be overcome by using visual aids (pictures, demonstrations of the laptop), utilizing a translation app, or finding an interpreter.' },
  { id: 'q5', chapterId: 'c1', chapterTitle: 'Communication Skills', question: 'What are two qualities of "good feedback" Radha\'s co-worker should use?', answer: '1. Specific: The feedback should address exactly what caused the delay without generalizing.\n2. Actionable: It should offer a clear solution or strategy for better time management next time.' },
  { id: 'q6', chapterId: 'c2', chapterTitle: 'Self Management', question: 'How is self-regulation connected to the ability to work independently?', answer: 'Self-regulation allows individuals to monitor their own behavior, manage their time, and control their emotions. A self-regulated person does not require constant external supervision, making them highly capable of independent work.' },
  { id: 'q7', chapterId: 'c2', chapterTitle: 'Self Management', question: 'State any two recreational activities which can help individuals manage stress.', answer: '1. Playing outdoor sports (like cricket or football) to release endorphins.\n2. Engaging in creative hobbies (like painting, reading, or playing a musical instrument) to divert the mind.' },
  { id: 'q8', chapterId: 'c2', chapterTitle: 'Self Management', question: 'Give Manish any two benefits of stress management which makes it vital for him to perform.', answer: '1. Improved Focus: Managing stress will help Manish concentrate entirely on his batting/bowling rather than his anxiety.\n2. Enhanced Physical Performance: Stress management prevents muscle tension and fatigue, ensuring his body is in peak condition for the match.' },
  { id: 'q9', chapterId: 'c2', chapterTitle: 'Self Management', question: 'State any other two ways by which people can manage stress.', answer: '1. Practicing Mindfulness and Meditation (Yoga, deep breathing).\n2. Maintaining a healthy lifestyle (balanced diet, adequate sleep of 7-8 hours).' },
  { id: 'q10', chapterId: 'c2', chapterTitle: 'Self Management', question: 'In SMART goals, what does ‘R’ stand for? Explain.', answer: '‘R’ stands for Realistic (or Relevant). It means the goal should be practically achievable given the available resources and time constraints, and it should align with the individual\'s broader objectives.' },
  { id: 'q11', chapterId: 'c3', chapterTitle: 'ICT Skills', question: 'What are the objectives of Information and communication technology? Advantages and disadvantages.', answer: 'Objectives: To bridge the digital divide and streamline communication/data management.\nAdvantages: Instant global communication, efficient data processing, and access to massive educational resources.\nDisadvantages: Risk of data theft/cyberbullying, tech dependency, and potential job displacement due to automation.' },
  { id: 'q12', chapterId: 'c3', chapterTitle: 'ICT Skills', question: 'What are the different types of keys in a Keyboard?', answer: '1. Alphanumeric Keys (A-Z, 0-9)\n2. Control Keys (Ctrl, Alt, Esc)\n3. Function Keys (F1-F12)\n4. Navigation Keys (Arrow keys, Home, End)\n5. Punctuation/Special Keys.' },
  { id: 'q13', chapterId: 'c4', chapterTitle: 'Entrepreneurial Skills', question: 'What qualities are required for successful entrepreneurs?', answer: 'Successful entrepreneurs must possess Confidence, Perseverance (refusal to quit), Creativity (innovative problem solving), and Risk-taking ability.' },
  { id: 'q14', chapterId: 'c4', chapterTitle: 'Entrepreneurial Skills', question: 'Difference between Self employment & Wage employment?', answer: 'Self-employment involves working for oneself, taking on all business risks, and earning variable profits. Wage employment involves working for an employer in exchange for a fixed, guaranteed salary without bearing business risks.' },
  { id: 'q15', chapterId: 'c6', chapterTitle: 'AI Project Cycle', question: 'What are the different stages of the AI Project Cycle?', answer: 'The AI Project Cycle consists of 5 stages: Problem Scoping, Data Acquisition, Data Exploration, Modelling, and Evaluation.' },
  { id: 'q16', chapterId: 'c6', chapterTitle: 'AI Project Cycle', question: 'Explain the 4Ws in Problem Scoping.', answer: 'The 4Ws canvas includes:\n1. Who: Who are the stakeholders facing the problem?\n2. What: What is the exact nature of the problem?\n3. Where: Where does the problem arise (context/location)?\n4. Why: Why is solving this problem valuable?' },
  { id: 'q17', chapterId: 'c7', chapterTitle: 'AI Modeling', question: 'What is the difference between Rule-Based and Learning-Based AI models?', answer: 'Rule-Based models operate on hard-coded rules and logic provided by a developer (if-then statements). Learning-Based models are trained on large datasets to find patterns and make decisions on their own without explicit programming.' },
  { id: 'q18', chapterId: 'c7', chapterTitle: 'AI Modeling', question: 'What is a Decision Tree?', answer: 'A Decision Tree is a rule-based AI algorithm that splits data into branches based on feature conditions. It looks like an inverted tree with a root node, decision nodes, and leaf nodes representing the final outcome.' },
  { id: 'q19', chapterId: 'c8', chapterTitle: 'Computer Vision', question: 'Explain the concept of Computer Vision.', answer: 'Computer Vision is a domain of AI that enables machines to derive meaningful information from digital images, videos, and visual inputs. It allows the machine to "see" and identify objects, faces, and patterns.' },
  { id: 'q20', chapterId: 'c8', chapterTitle: 'Computer Vision', question: 'What is pixel representation?', answer: 'A digital image is made of a grid of tiny squares called pixels. Pixel representation involves converting an image into a matrix of numbers, where each number represents the color intensity (e.g., 0 for black, 255 for white in grayscale) of a specific pixel.' },
  { id: 'q21', chapterId: 'c9', chapterTitle: 'Natural Language Processing', question: 'What is Natural Language Processing (NLP)?', answer: 'NLP is a branch of AI that gives computers the ability to understand, interpret, and generate human language (text and speech) in a valuable way, such as in chatbots or translators.' },
  { id: 'q22', chapterId: 'c9', chapterTitle: 'Natural Language Processing', question: 'Explain TF-IDF.', answer: 'TF-IDF (Term Frequency-Inverse Document Frequency) is a numerical statistic used in NLP to reflect how important a word is to a document in a collection or corpus. It increases proportionally to the number of times a word appears in the document but is offset by the frequency of the word in the corpus.' },
  { id: 'q23', chapterId: 'c5', chapterTitle: 'Green Skills', question: 'What is Sustainable Development?', answer: 'Sustainable development is the overarching paradigm that meets the needs of the present without compromising the ability of future generations to meet their own needs, balancing economic, environmental, and social concerns.' },
  { id: 'q24', chapterId: 'c5', chapterTitle: 'Green Skills', question: 'List three ways to conserve energy at home.', answer: '1. Switching off lights and unplugging appliances when not in use.\n2. Using energy-efficient LED bulbs.\n3. Maximizing natural sunlight during the day.' },
  { id: 'q25', chapterId: 'c6', chapterTitle: 'AI Project Cycle', question: 'What is the purpose of Data Exploration?', answer: 'Data exploration involves visualizing and analyzing the acquired data to find trends, patterns, and anomalies. It helps in understanding the nature of the data before feeding it into an AI model.' },
  { id: 'q26', chapterId: 'c7', chapterTitle: 'AI Modeling', question: 'Define Neural Networks.', answer: 'Neural Networks are learning-based algorithms modeled loosely after the human brain. They consist of layers of interconnected nodes (neurons) that process data, recognize hidden patterns, and learn from experience.' },
  { id: 'q27', chapterId: 'c8', chapterTitle: 'Computer Vision', question: 'Give two real-world applications of Computer Vision.', answer: '1. Facial Recognition systems used in smartphones for security.\n2. Automated quality inspection in manufacturing assembly lines.' },
  { id: 'q28', chapterId: 'c9', chapterTitle: 'Natural Language Processing', question: 'What is the difference between Syntax and Semantics in NLP?', answer: 'Syntax refers to the grammatical structure and rules of the language (how words are arranged). Semantics refers to the actual meaning conveyed by the words and sentences.' },
  { id: 'q29', chapterId: 'c4', chapterTitle: 'Entrepreneurial Skills', question: 'How does entrepreneurship contribute to society?', answer: 'Entrepreneurship drives economic growth, creates new job opportunities, introduces innovative products that solve societal problems, and fosters community development.' },
  { id: 'q30', chapterId: 'c1', chapterTitle: 'Communication Skills', question: 'What are the 7Cs of Effective Communication?', answer: 'The 7Cs are: Clear, Concise, Concrete, Correct, Coherent, Complete, and Courteous.' }
];

fs.writeFileSync('src/data/testsData.ts', `import { Test } from '../types/assessment';\n\nexport const TESTS_DATABASE: Test[] = ${JSON.stringify(tests, null, 2)};`);
fs.writeFileSync('src/data/questionsData.ts', `import { SubjectiveQuestion } from '../types/assessment';\n\nexport const QUESTIONS_DATABASE: SubjectiveQuestion[] = ${JSON.stringify(questions, null, 2)};`);
