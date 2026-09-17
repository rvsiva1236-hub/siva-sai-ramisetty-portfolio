import { PersonalInfo, SkillCategory, Project, Certification, Activity } from '../types';

export const personalInfo: PersonalInfo = {
  name: 'Siva Sai Ramisetty',
  degree: 'B.Tech in Artificial Intelligence & Data Science',
  institution: 'K L Deemed to be University',
  graduationPeriod: 'July 2023 – April 2027',
  cgpa: '8.72/10.0',
  summary:
    'B.Tech Artificial Intelligence & Data Science student at K L Deemed to be University with strong foundations in Data Structures & Algorithms, Object-Oriented Programming, Python, SQL, JavaScript, and Flask. Experienced in building web applications, REST APIs, and AI-powered software solutions.',
  email: '2300080240aids@gmail.com',
  phone: '+91 88869 63539',
  linkedin: 'https://www.linkedin.com/in/siva-sai-ramisetty-518606356/',
  linkedinDisplay: 'linkedin.com/in/siva-sai-ramisetty-518606356',
  github: 'https://github.com/rvsiva1236-hub',
  githubDisplay: 'github.com/rvsiva1236-hub',
};

export const aboutDetails = {
  degree: 'B.Tech in Artificial Intelligence & Data Science',
  university: 'K L Deemed to be University',
  duration: 'July 2023 – April 2027',
  cgpa: '8.72/10.0',
  foundations: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming',
    'Python',
    'SQL',
    'JavaScript',
    'Flask',
    'REST APIs',
    'Web applications',
    'AI-powered software solutions',
  ],
};

export const skillCategories: SkillCategory[] = [
  {
    name: 'Programming Languages',
    skills: ['Python', 'JavaScript', 'SQL'],
  },
  {
    name: 'Backend',
    skills: ['Flask', 'REST APIs'],
  },
  {
    name: 'Frontend & Web',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    name: 'Database',
    skills: ['MySQL'],
  },
  {
    name: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Postman'],
  },
  {
    name: 'Core Computer Science',
    skills: [
      'Data Structures & Algorithms',
      'Object-Oriented Programming',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: ['AWS', 'Docker', 'Kubernetes'],
  },
  {
    name: 'AI / Machine Learning',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'NLP',
      'Generative AI',
      'LLMs',
      'RAG',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 'personal-finance-advisor',
    title: 'Personal Finance Advisor',
    subtitle: 'AI-Powered Financial Insights & Expense Classification',
    category: 'AI / ML',
    technologies: ['Python', 'Flask', 'MySQL', 'REST APIs'],
    overview:
      'Developed an AI-powered personal finance platform using Python, MySQL, and REST APIs to analyze transactions and provide automated budgeting guidance.',
    metrics: [
      { label: 'Transactions Analyzed', value: '1,000+' },
      { label: 'Expense Category Accuracy', value: '88%' },
      { label: 'Planning Effort Reduced', value: '40%' },
      { label: 'Insight Efficiency Gain', value: '+30%' },
    ],
    keyContributions: [
      'Developed an AI-powered personal finance platform using Python, MySQL, and REST APIs.',
      'Supported analysis of 1,000+ financial transactions.',
      'Built machine learning models for expense classification.',
      'Achieved 88% accuracy on expense categories.',
      'Integrated an LLM-based assistant that generated personalized budgeting recommendations.',
      'Reduced manual financial planning effort by 40%.',
      'Designed interactive dashboards.',
      'Improved financial insight generation and reporting efficiency by 30%.',
    ],
  },
  {
    id: 'onboard-ai',
    title: 'OnboardAI – Multi-Agent Employee Onboarding',
    subtitle: 'Centralized Employee Onboarding & Guidance Portal',
    role: 'Frontend Developer',
    category: 'Frontend',
    technologies: ['React.js', 'JavaScript', 'REST APIs', 'HTML5', 'CSS3'],
    overview:
      'OnboardAI is an AI-powered employee onboarding platform designed to simplify and automate the onboarding process for new employees. The platform provides a centralized interface where employees can complete onboarding tasks, provide required information, access onboarding documents, ask questions, and receive guidance throughout the onboarding journey.',
    keyContributions: [
      'Responsible for designing and developing the frontend application using React.js.',
      'Focused on creating a clean, responsive, and easy-to-use interface for employees and HR teams.',
      'Engineered reusable React components and established responsive design principles.',
      'Integrated REST APIs for retrieving and updating onboarding data, document management, and form submissions.',
      'Implemented robust form validation, interactive states, loading indicators, and user feedback mechanisms.',
      'Conducted frontend debugging and cross-device interface testing.',
    ],
    features: [
      'Employee Information Collection',
      'Onboarding Dashboard',
      'Document Management',
      'Employee Q&A',
      'Onboarding Workflow',
      'REST API Integration',
      'Reusable React Components',
      'Responsive Design',
      'Form Validation',
      'User Interaction',
      'Loading States',
      'User Feedback',
      'Frontend Debugging',
      'UI/API Integration',
    ],
    workflow: [
      'Employee logs into the onboarding platform.',
      'Dashboard displays onboarding progress and pending tasks.',
      'Employee provides required personal and professional information.',
      'Platform provides access to onboarding documents and resources.',
      'Employee can ask onboarding-related questions.',
      'Onboarding workflow guides the employee through required steps.',
      'Frontend communicates with backend services through REST APIs to retrieve and update information.',
    ],
  },
  {
    id: 'smart-food-safe',
    title: 'Smart Food Safe – Food Safety & Awareness Platform',
    subtitle: 'Food Safety & Awareness Platform',
    role: 'Frontend Developer',
    category: 'Frontend',
    technologies: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'REST APIs'],
    overview:
      'Smart Food Safe is a web-based food safety platform designed to help users understand food safety information and make more informed decisions about food products. The application provides a clean and user-friendly interface for accessing food-related information and safety resources.',
    keyContributions: [
      'Designed and developed the frontend using React.js and JavaScript.',
      'Created reusable UI components and responsive pages.',
      'Implemented navigation and interactive elements.',
      'Worked on API integration and frontend data handling.',
      'Tested and refined the interface for usability and responsiveness.',
    ],
    features: [
      'Responsive and user-friendly interface for exploring food safety information.',
      'Organized food safety content into clear sections for easier navigation.',
      'Interactive UI components to improve user engagement and accessibility.',
      'Responsive layouts for desktop and mobile devices.',
      'Integration of frontend components with application data/APIs.',
      'Clean navigation, reusable components, and simple user experience.',
    ],
    outcome:
      'Built and deployed a functional food-safety web application that demonstrates practical experience in React.js, responsive web development, API integration, and frontend application development.',
    liveUrl: 'https://smart-food-safe.vercel.app/',
  },
  {
    id: 'ai-resume-analyzer',
    title: 'AI Resume Analyzer',
    subtitle: 'Automated Resume Parsing, Skill Extraction & ATS Feedback',
    category: 'AI / ML',
    technologies: ['Python', 'Flask', 'NLP', 'REST APIs'],
    overview:
      'Developed an AI Resume Analyzer using Python, Flask, and NLP techniques to parse candidate resumes, extract skills automatically, and generate ATS-based feedback.',
    metrics: [
      { label: 'Resumes Processed', value: '100+' },
      { label: 'Extraction Accuracy', value: '90%+' },
      { label: 'Screening Time Reduced', value: '60%' },
    ],
    keyContributions: [
      'Developed an AI Resume Analyzer using Python, Flask, and NLP techniques.',
      'Processed 100+ resumes.',
      'Extracted relevant skills with automated parsing.',
      'Achieved 90%+ extraction accuracy.',
      'Integrated LLM APIs to generate ATS-based feedback.',
      'Generated personalized improvement recommendations.',
      'Built a web interface.',
      'Reduced manual resume screening time by 60%.',
    ],
  },
];

export const certifications: Certification[] = [
  { name: 'Microsoft Certified: Azure AI Engineer Associate' },
  { name: 'Oracle Certified Associate' },
  { name: 'Salesforce AI Associate' },
];

export const activities: Activity[] = [
  {
    title: 'NSS Event Management Team',
    period: '2023 – Present',
    stats: [
      { label: 'University Events', value: '5+' },
      { label: 'Participants Engaged', value: '100+' },
      { label: 'Volunteers Coordinated', value: '10+' },
    ],
    bullets: [
      'Organized and coordinated 5+ university events.',
      'Events involved 100+ participants.',
      'Collaborated with a team of 10+ volunteers.',
      'Helped ensure successful execution of events.',
    ],
  },
];
