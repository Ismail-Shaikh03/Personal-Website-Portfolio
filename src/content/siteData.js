export const profile = {
  name: 'Ismail Shaikh',
  title: 'Software Engineer',
  tagline: [
    'Building scalable applications and AI-driven solutions.',
    'Passionate about turning ideas into impactful products.',
  ],
  school: 'NJIT Computer Science · Class of 2026',
};

export const tapes = [
  { id: 'intro', title: 'INTRO', file: 'WELCOME.VHS', spine: '#c1121f', label: '#fdf0d5', labelText: '#1a0a00' },
  { id: 'about', title: 'ABOUT', file: 'ABOUT_ME.VHS', spine: '#2d6a4f', label: '#d8f3dc', labelText: '#0a1a0a' },
  { id: 'skills', title: 'SKILLS', file: 'SKILLS.VHS', spine: '#1d3557', label: '#a8dadc', labelText: '#00101a' },
  { id: 'projects', title: 'PROJECTS', file: 'PROJECTS.VHS', spine: '#b5451b', label: '#ffe8d6', labelText: '#1a0800' },
  { id: 'resume', title: 'RESUME', file: 'RESUME.VHS', spine: '#6d2b9f', label: '#ede7f6', labelText: '#15002a' },
  { id: 'achievements', title: 'ACHIEVEMENTS', file: 'ACHIEVEMENTS.VHS', spine: '#b8860b', label: '#fff8e1', labelText: '#1a1000' },
  { id: 'contact', title: 'CONTACT', file: 'CONTACT.VHS', spine: '#0a7b6b', label: '#ccf5ef', labelText: '#00150f' },
];

export const about = {
  photo: '/AboutMe.jpg',
  paragraphs: [
    "I'm Ismail Shaikh, a senior Computer Science student at the New Jersey Institute of Technology with a strong interest in software development, cloud infrastructure, and AI-driven solutions. I enjoy building practical, scalable applications that solve real-world problems, such as my project Coursify, an AI-powered schedule builder, and Recess, a QuackHacks-winning campus wellness app.",
    'I love turning ideas into real products and continuously learning modern tooling.',
  ],
  fileInfo: [
    ['NAME', 'Ismail Shaikh'],
    ['ROLE', 'Software Engineer'],
    ['SCHOOL', 'New Jersey Institute of Technology'],
    ['DEGREE', 'B.S. Computer Science'],
    ['GRAD', 'May 2026'],
    ['LOCATION', 'Elmwood Park, NJ'],
    ['STATUS', 'Seeking Opportunities'],
  ],
  coursework:
    'Data Structures & Algorithms · Web Applications · Data Visualization · Object-Oriented Programming · Software Engineering · Discrete Mathematics · Operating Systems · Cybersecurity · Database Systems · Computer Networks',
};

export const skillCategories = [
  {
    cat: 'LANGUAGES',
    color: '#00ffff',
    items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C/C++', 'PHP', 'SQL', 'HTML/CSS', 'Bash'],
  },
  {
    cat: 'FRAMEWORKS & LIBRARIES',
    color: '#ff6cf6',
    items: ['React (Vite)', 'React Native', 'Node.js', 'Express.js', 'Spring Boot', 'Tailwind CSS', 'Pandas', 'NumPy', 'Scikit-learn', 'PyTorch'],
  },
  {
    cat: 'TECHNOLOGIES',
    color: '#06d6a0',
    items: ['Docker', 'PostgreSQL', 'MySQL', 'AWS (EC2, Route 53)', 'Google Cloud SQL', 'REST APIs', 'Git', 'GitHub Actions', 'Selenium', 'Linux (Ubuntu)', 'Figma', 'OpenAI API', 'Supabase', 'Expo'],
  },
];

export const projects = [
  {
    tape: 'A-01',
    title: 'RECESS',
    sub: 'QuackHacks Winner — Mindfulness Track',
    color: '#5eb1bf',
    status: 'RECORDED',
    year: '2026',
    desc: 'React Native + Expo mobile app for smart break scheduling and real-time campus location sharing. Supabase PostgreSQL with row-level security and friend visibility; Apple Maps for campus hotspots; leaderboards, break analytics, and AI burnout insights via xAI Grok API.',
    tech: ['React Native', 'Expo', 'Supabase', 'PostgreSQL', 'Apple Maps', 'xAI Grok'],
    img: '/recess-logo.png',
    imgFit: 'contain',
    imgBg: '#d4eef3',
    demoLink: 'https://devpost.com/software/recess-bi6pj4',
    codeLink: 'https://github.com/mduddin112203/Recess',
  },
  {
    tape: 'A-02',
    title: 'STRANDS',
    sub: 'Salon Management Platform',
    color: '#e9c46a',
    status: 'RECORDED',
    year: '2025',
    desc: 'Production-grade salon management frontend with React (Vite), Tailwind CSS, and modular UI. JWT authentication, role-based dashboards, appointments, salon verification, loyalty tracking, reviews, and photo uploads. CI/CD with GitHub Actions and 90% Selenium coverage; deployed on AWS EC2 with Route 53.',
    tech: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MySQL', 'GitHub Actions', 'Selenium', 'AWS EC2', 'Route 53'],
    img: '/strands-logo-new.png',
    demoLink: 'https://strands.click',
    codeLink: 'https://github.com/rrojas1819/Strands-Frontend',
    frontendLink: 'https://github.com/rrojas1819/Strands-Frontend',
    backendLink: 'https://github.com/rrojas1819/Strands-Backend',
  },
  {
    tape: 'A-03',
    title: 'COURSIFY',
    sub: 'AI Schedule Builder',
    color: '#f4a261',
    status: 'RECORDED',
    year: '2025',
    desc: 'AI-powered schedule builder using React, Spring Boot, and MySQL with RateMyProfessors integration. Fail2Ban filters reduced unauthorized traffic by 70%; migrated MySQL from Google Cloud SQL to a local server, cutting database costs by 97%.',
    tech: ['React', 'Spring Boot', 'MySQL', 'RateMyProfessors', 'Fail2Ban'],
    img: '/Coursify.png',
    demoLink: 'https://www.coursify1.com',
    codeLink: 'https://github.com/Ismail-Shaikh03/Coursify',
  },
  {
    tape: 'A-04',
    title: 'TASTE OF WORLDS',
    sub: 'Recipe Web App',
    color: '#90be6d',
    status: 'RECORDED',
    year: '2024',
    desc: 'Full-stack web app to explore international meals with search, filter, and detailed recipe views. RESTful API on Node.js and Express with MySQL, hosted on AWS EC2.',
    tech: ['Node.js', 'Express.js', 'MySQL', 'AWS EC2', 'HTML', 'CSS', 'JavaScript'],
    img: '/TasteofWorlds.png',
    demoLink: 'https://youtu.be/VDM5Tn_ZImE',
    codeLink: 'https://github.com/Ismail-Shaikh03/Taste-of-Worlds',
  },
  {
    tape: 'A-05',
    title: 'HOUSE OF HEALTH',
    sub: 'Doctor Office Portal',
    color: '#577590',
    status: 'RECORDED',
    year: '2024',
    desc: 'Doctor office portal for patient records, appointments, and medical procedures. Secure authentication, scheduling, and receptionist search built with PHP and MySQL.',
    tech: ['PHP', 'HTML', 'CSS', 'JavaScript', 'SQL', 'MySQL'],
    img: '/HouseOfHealth.png',
    demoLink: 'https://web.njit.edu/~is385/MainPortal4.html',
    codeLink: 'https://github.com/Ismail-Shaikh03/House-of-Health',
  },
  {
    tape: 'B-01',
    title: 'FRAUD DETECTION',
    sub: 'Hybrid ML Platform',
    color: '#b39ddb',
    status: 'REC',
    year: '2026',
    progress: 75,
    desc: 'Production-ready hybrid fraud detection combining rule-based scoring, statistical analysis, and Isolation Forest ML for real-time transaction risk. React analyst dashboard, Spring Boot backend, and FastAPI ML service.',
    tech: ['React', 'TypeScript', 'Spring Boot', 'Java', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Nginx'],
    img: null,
    codeLink: 'https://github.com/Ismail-Shaikh03/Fraud-Detection',
  },
];

export const resumePdfUrl = '/Shaikh_Ismail_Resume.pdf';

export const resume = {
  education: [
    {
      title: 'Bachelor of Science in Computer Science',
      org: 'New Jersey Institute of Technology, Newark, NJ',
      period: 'SEP 2022 — MAY 2026',
      points: [
        'Relevant Coursework: Data Structures & Algorithms, Web Applications, Data Visualization, Object-Oriented Programming, Software Engineering, Discrete Mathematics, Operating Systems, Cybersecurity, Database Systems, Computer Networks',
      ],
    },
  ],
  experience: [
    {
      title: 'Team Lead Researcher',
      org: 'New Jersey Institute of Technology, Newark, NJ',
      period: 'SEP 2023 — PRESENT',
      points: [
        'Built a Python automation script to prompt ChatGPT with contextual inputs and export generated responses to Excel for downstream bias analysis.',
        'Researched 9 AI bias detection methods analyzing ChatGPT outputs for age-related bias patterns.',
        'Mentored 5 students through onboarding and technical guidance.',
      ],
      link: 'https://dl.acm.org/doi/10.1145/3663547.3746464',
    },
    {
      title: 'Web Intern',
      org: 'Radiant Academy',
      period: 'SEP 2022 — JUN 2023',
      points: [
        "Migrated the organization's website to a new hosting platform, improving data efficiency by 17%.",
        'Coordinated 20+ community events at a local youth center to boost engagement and participation.',
      ],
    },
  ],
  leadership: [
    {
      title: 'Vice President',
      org: 'FinTech Club',
      period: 'SEP 2023 — SEP 2024',
      points: [
        'Led a 30+ member club, overseeing committees, supporting the president, and ensuring smooth operations.',
        'Organized and hosted 25+ workshops, panels, and collaborative projects to drive member engagement.',
      ],
    },
  ],
  certifications: [
    {
      title: 'AWS Certified Cloud Practitioner',
      org: '',
      period: '',
      points: [],
    },
  ],
  projectEntries: [
    {
      title: 'Recess',
      org: 'Stevens QuackHacks — Mindfulness and Wellbeing Track Winner',
      period: 'FEB 2026',
      points: [
        'Built a React Native + Expo mobile app for smart break scheduling and real-time campus location sharing.',
        'Architected a Supabase PostgreSQL backend with real-time presence, row-level security, and friend visibility controls.',
        'Integrated Apple Maps to display campus hotspots and track live activity zones.',
        'Implemented leaderboards, break analytics, and AI burnout insights using the xAI Grok API.',
      ],
      links: [
        { label: 'devpost.com/software/recess-bi6pj4', href: 'https://devpost.com/software/recess-bi6pj4' },
        { label: 'github.com/mduddin112203/Recess', href: 'https://github.com/mduddin112203/Recess' },
      ],
    },
    {
      title: 'Strands',
      org: 'Salon Management Platform',
      period: 'SEP 2025 — DEC 2025',
      points: [
        'Engineered a production-grade frontend for a salon management platform using React (Vite), Tailwind CSS, and modular UI components while collaborating with backend developers using Node.js, Express.js, and MySQL.',
        'Implemented JWT authentication, role-based dashboards, and core features including appointments, salon verification, loyalty tracking, reviews, and photo uploads with a fully responsive design.',
        'Integrated backend APIs and optimized filtering, sorting, and pagination, reducing unnecessary network requests by about 50% and improving page responsiveness.',
        'Built frontend CI/CD pipelines with GitHub Actions and developed Selenium UI tests with 90% coverage, reducing manual deployment time by 93% and deploying the application on AWS EC2 with Route 53.',
      ],
      links: [
        { label: 'strands.click', href: 'https://strands.click' },
        { label: 'github.com/rrojas1819/Strands-Frontend', href: 'https://github.com/rrojas1819/Strands-Frontend' },
      ],
    },
    {
      title: 'Coursify',
      org: 'AI Schedule Builder',
      period: 'MAR 2025 — JUN 2025',
      points: [
        'Built an AI-powered schedule builder using React, Spring Boot, and MySQL with RateMyProfessors integration.',
        'Implemented Fail2Ban filters reducing unauthorized traffic by 70% and blocking 50+ malicious IPs.',
        'Reduced database infrastructure costs 97% by migrating MySQL from Google Cloud SQL ($4/day) to a local server ($1/month).',
      ],
      links: [
        { label: 'coursify1.com', href: 'https://www.coursify1.com' },
        { label: 'github.com/Ismail-Shaikh03/Coursify', href: 'https://github.com/Ismail-Shaikh03/Coursify' },
      ],
    },
  ],
};

export const achievements = [
  {
    id: 'recess',
    title: 'QUACKHACKS WINNER',
    sub: 'Recess — Mindfulness & Wellbeing Track',
    year: '2026',
    color: '#5eb1bf',
    icon: '🏆',
    desc: 'Won Stevens QuackHacks Mindfulness and Wellbeing track with Recess — a React Native + Expo app for smart break scheduling, real-time campus location sharing, Supabase PostgreSQL backend, and AI burnout insights via xAI Grok.',
    img: '/recess-logo.png',
    imgFit: 'contain',
    imgBg: '#d4eef3',
    link: 'https://devpost.com/software/recess-bi6pj4',
  },
  {
    id: 'research',
    title: 'PUBLISHED RESEARCH',
    sub: 'Age Bias in LLMs — ACM',
    year: '2024',
    color: '#a8dadc',
    icon: '📄',
    desc: 'Team Lead Researcher at NJIT. Built a Python automation pipeline for ChatGPT bias analysis and studied 9 detection methods. Co-authored an ACM publication on age-related bias patterns in large language model outputs.',
    img: '/acm-logo-1-.webp',
    imgFit: 'contain',
    imgBg: '#0c0c0c',
    link: 'https://dl.acm.org/doi/10.1145/3663547.3746464',
  },
  {
    id: 'honors',
    title: 'ACADEMIC HONORS',
    sub: "Magna Cum Laude · Dean's List",
    year: '2022–2026',
    color: '#ffd700',
    icon: '🎓',
    desc: "Graduating with Magna Cum Laude from the New Jersey Institute of Technology. Earned Dean's List recognition all four years for sustained academic excellence in Computer Science.",
    img: null,
  },
  {
    id: 'fintech-vp',
    title: 'VICE PRESIDENT',
    sub: 'FinTech Club — NJIT',
    year: 'SEP 2023 — SEP 2024',
    color: '#c1121f',
    icon: '⚡',
    desc: 'Led a 30+ member club at NJIT, overseeing committees and supporting club operations. Organized and hosted 25+ workshops, panels, and collaborative projects to drive member engagement and professional development.',
    img: '/njit-logo.png',
    imgFit: 'contain',
    imgBg: '#0a0a0a',
  },
  {
    id: 'letuscook',
    title: 'LET US COOK',
    sub: 'Startup Showcase · MVP Award',
    year: 'JAN 2026 — PRESENT',
    color: '#f4a261',
    icon: '⭐',
    desc: 'Presented our startup to a panel of judges at Let Us Cook, walking through product vision, technical approach, and market impact. Earned MVP recognition for standout pitch and execution under competitive evaluation.',
    img: '/259163083.png',
    imgFit: 'contain',
    imgBg: '#1a1208',
  },
];

export const contact = {
  intro:
    "I'm actively looking for software engineering roles and internships. Reach out — I respond to everything.",
  links: [
    { label: 'EMAIL', value: 'ismailshaikh03@gmail.com', href: 'mailto:ismailshaikh03@gmail.com', color: '#ff6cf6' },
    { label: 'PHONE', value: '(201) 800-3345', href: 'tel:+12018003345', color: '#ff00ff' },
    { label: 'GITHUB', value: 'github.com/Ismail-Shaikh03', href: 'https://github.com/Ismail-Shaikh03', color: '#00ffff' },
    { label: 'LINKEDIN', value: 'linkedin.com/in/ismailshaikh03', href: 'https://www.linkedin.com/in/ismailshaikh03', color: '#06d6a0' },
  ],
};
