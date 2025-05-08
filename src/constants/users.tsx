import { Portfolio, PROFICIENCY, PROJECT_TYPE } from '@/context/types';
import * as assets from './asset';

export const daniel_bello: Portfolio = {
  id: '1',
  started_professions_at: '1/1/2017',
  started_programming_at: '1/1/2020',
  imgs: [
    assets.user_img1,
    assets.user_img2,
    assets.user_img3,
    assets.user_img4,
  ],
  name: {
    complete: 'adegoke adeyinka daniel bello',
    first: 'adegoke',
    last: 'bello',
    other: ['adeyinka', 'daniel'],
  },
  role: 'computer engineer',
  professional_summary:
    'A computer engineer with over 9 years of distrubuted experience in full-stack web development, mobile development and embedded systems.',
  avatar: assets.user_img1,
  nationality: 'nigerian',
  phone_number: '+1 (463) 626-0490',
  email: 'gokebello@gmail.com',
  address: {
    country: 'united-states',
    state: 'indiana',
    region: 'marion',
    street: 'beachview drive',
    apartment: '250',
    city: 'indianapolis',
    zip_code: 46224,
    address: '6033 beachview drive apt 250 indianapolis IN u.s.a',
  },
  date_of_birth: '12/13/1996',
  services: [
    {
      id: '1',
      proficiency: PROFICIENCY.EXPERT,
      skills: [
        {
          id: '1',
          proficiency: PROFICIENCY.EXPERT,
          title: 'Javascript',
        },
        {
          id: '2',
          proficiency: PROFICIENCY.EXPERT,
          title: 'Typescript',
        },
        {
          id: '3',
          proficiency: PROFICIENCY.EXPERT,
          title: 'NodeJS',
        },
        {
          id: '4',
          proficiency: PROFICIENCY.EXPERT,
          title: 'ReactJS',
        },
      ],
      summary:
        '8+ years professional skills in both frontend and backend web development, using tools like React, ASP.NET-CORE, NodeJS etc as well as DevOps developments.',
      title: 'Full Stack Web Development',
    },
    {
      id: '2',
      proficiency: PROFICIENCY.EXPERIENCED,
      skills: [
        {
          id: '1',
          proficiency: PROFICIENCY.EXPERT,
          title: 'Javascript',
        },
        {
          id: '2',
          proficiency: PROFICIENCY.EXPERT,
          title: 'Typescript',
        },
        {
          id: '3',
          proficiency: PROFICIENCY.EXPERT,
          title: 'React-NativeJS',
        },
        {
          id: '4',
          proficiency: PROFICIENCY.EXPERT,
          title: 'Xcode',
        },
        {
          id: '5',
          proficiency: PROFICIENCY.EXPERT,
          title: 'Android Studio',
        },
        {
          id: '6',
          proficiency: PROFICIENCY.EXPERT,
          title: 'Swift',
        },
        {
          id: '7',
          proficiency: PROFICIENCY.EXPERT,
          title: 'Kotlin',
        },
      ],
      summary:
        'Advanced level development skills with over 6+ years experience in development for mobile platforms using libraries like React Native and native development tools like Xcode and Android Studio',
      title: 'Mobile Development',
    },
    {
      id: '3',
      proficiency: PROFICIENCY.EXPERIENCED,
      skills: [
        {
          id: '1',
          proficiency: PROFICIENCY.EXPERIENCED,
          title: 'Python',
        },
        {
          id: '2',
          proficiency: PROFICIENCY.INTERMEDIATE,
          title: 'Flask',
        },
        {
          id: '3',
          proficiency: PROFICIENCY.INTERMEDIATE,
          title: 'Django',
        },
      ],
      summary:
        'In-depth knowledge and experience in the design and development embedded systems hardware and software',
      title: 'Embedded Systems Development',
    },
  ],
  skills: [
    {
      id: '1',
      proficiency: PROFICIENCY.INTERMEDIATE,
      title: 'Xcode',
    },
    {
      id: '2',
      proficiency: PROFICIENCY.INTERMEDIATE,
      title: 'Android Studio',
    },
    {
      id: '3',
      proficiency: PROFICIENCY.EXPERIENCED,
      title: 'MongoDB',
    },
    {
      id: '4',
      proficiency: PROFICIENCY.EXPERIENCED,
      title: 'MySQL',
    },
    {
      id: '5',
      proficiency: PROFICIENCY.EXPERIENCED,
      title: 'Docker',
    },
    {
      id: '10',
      proficiency: PROFICIENCY.EXPERIENCED,
      title: 'CI/CD',
    },
    {
      id: '6',
      proficiency: PROFICIENCY.EXPERIENCED,
      title: 'ASP.NET-CORE',
    },
    {
      id: '7',
      proficiency: PROFICIENCY.EXPERT,
      title: 'NodeJS',
    },
    {
      id: '8',
      proficiency: PROFICIENCY.EXPERT,
      title: 'ReactJS',
    },
    {
      id: '9',
      proficiency: PROFICIENCY.EXPERT,
      title: 'ReactNativeJS',
    },
    {
      id: '7',
      proficiency: PROFICIENCY.EXPERT,
      title: 'NodeJS',
    },
    {
      id: '11',
      proficiency: PROFICIENCY.EXPERIENCED,
      title: 'Flask',
    },
    {
      id: '12',
      proficiency: PROFICIENCY.INTERMEDIATE,
      title: 'PCB Design & Fabrication',
    },
  ],
  languages: [
    {
      id: '1',
      proficiency: PROFICIENCY.EXPERT,
      title: 'English',
    },
    {
      id: '1',
      proficiency: PROFICIENCY.EXPERT,
      title: 'Yoruba',
    },
  ],
  links: [
    {
      id: '1',
      title: 'GitHub',
      url: 'https://github.com/DanielBello7',
    },
    {
      id: '2',
      title: 'X',
      url: 'https://x.com/i/flow/login?redirect_after_login=%2FOnlyBello_',
    },
    {
      id: '3',
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/adegoke-bello-3397a3a6/',
    },
    {
      id: '4',
      title: 'Portfolio',
      url: 'https://danielbello.dev',
    },
  ],
  education: [
    {
      id: '1',
      country: 'Nigeria',
      start: '2014',
      end: '2019',
      school: 'Ekiti State University Ado Ekiti',
      certificate: 'B.Eng Computer Engineering',
      notes: ['Graduated with honors for best final project design'],
    },
  ],
  hobbies: [
    'Reading',
    'Research',
    'Coding',
    'Reading Manga',
    'Walking',
    'Listening to Music',
    'Gaming',
  ],
  other: {},
  socials: {
    github: 'https://github.com/DanielBello7',
    linkedin: 'https://www.linkedin.com/in/adegoke-bello-3397a3a6/',
    twitter:
      'https://x.com/i/flow/login?redirect_after_login=%2FOnlyBello_',
  },
  courses: [
    {
      id: '1',
      title:
        'Node.js & MongoDB: Developing Back-end Database Applications',
      organization: 'I.B.M',
      start: 'Jan 18, 2025',
      end: 'Jan 18, 2025',
      url: 'https://coursera.org/verify/LBYYFG7G4BES',
    },
    {
      id: '2',
      title: 'Introduction To Swift Programming',
      organization: 'University of Toronto',
      start: 'Feb 23, 2025',
      end: 'Feb 23, 2025',
      url: 'https://coursera.org/verify/I0MLUPLC64HA',
    },
    {
      id: '3',
      title: 'iOS App Development Basics',
      organization: 'University of Toronto',
      start: 'Apr 4, 2025',
      end: 'Apr 4, 2025',
      url: 'https://coursera.org/verify/5NF2NONVQCB2',
    },
    {
      id: '4',
      title: 'JavaScript Programming Essentials',
      organization: 'I.B.M',
      start: 'Apr 27, 2025',
      end: 'Apr 27, 2025',
      url: 'https://coursera.org/verify/JWDLD47E8TZY',
    },
  ],
  work_experience: [
    {
      id: '1',
      company_name: 'Freelance',
      country: 'Remote',
      end: 'Currently',
      start: 'Oct 2023',
      position_held: 'Full Stack Engineer',
      points: [
        'Built scalable web applications for clients across e-commerce, education, and logistics sectors using Next.js and Node.js.',
        'Integrated third-party APIs and developed custom REST/GraphQL endpoints for dynamic client needs.',
      ],
    },
    {
      id: '2',
      company_name: 'Defence Space Administration',
      country: 'Nigeria',
      end: 'Oct 2023',
      start: 'Apr 2021',
      position_held: 'Software Engineer',
      points: [
        'Increased document security through local server setup',
        'Implemented end-to-end encryption system',
        'Engineered secure messaging platform for Defence Space Administration',
        'Pioneered a predictive maintenance tool for network servers.',
      ],
    },
    {
      id: '3',
      company_name: 'Gallery of Code',
      country: 'Nigeria',
      end: 'Feb 2024',
      start: 'Jun 2021',
      position_held: 'Full Stack Engineer',
      points: [
        'Engineered a custom caching solution, enhancing system efficiency by 25%.',
        'Introduced modular architecture for efficient code updates',
        'Contributed to team success in a collaborative environment',
      ],
    },
    {
      id: '4',
      company_name: 'P.A.R.V.I',
      country: 'Nigeria',
      end: 'Feb 2022',
      start: 'Aug 2021',
      position_held: 'Senior Software Engineer / System Architect',
      points: [
        'Pioneered a demo for a Learning Management System (LMS) product, securing 3+ investors',
        'Established operational structure and contributed to the hiring of 3 engineers',
        'Optimized applications frontend, reducing load time from 20s to 3s',
      ],
    },
  ],
  programming_languages: [
    { id: '1', proficiency: PROFICIENCY.EXPERT, title: 'Javascript' },
    { id: '2', proficiency: PROFICIENCY.EXPERT, title: 'Typescript' },
    { id: '3', proficiency: PROFICIENCY.EXPERIENCED, title: 'Python' },
    { id: '4', proficiency: PROFICIENCY.EXPERIENCED, title: 'C#' },
    { id: '5', proficiency: PROFICIENCY.EXPERIENCED, title: 'Swift' },
    { id: '6', proficiency: PROFICIENCY.INTERMEDIATE, title: 'Kotlin' },
  ],
  projects: [
    {
      id: '1',
      description:
        'A Simple and quick database to help development process and speed',
      github: 'https://github.com/DanielBello7/nosql-json-database',
      img: String(assets.nosql_json_database_1),
      previews: [String(assets.nosql_json_database_1)],
      tags: [],
      title: 'NoSQL Json Database',
      type: PROJECT_TYPE.BACKEND,
      url: 'https://www.npmjs.com/package/nosql-json-database',
    },
    {
      id: '2',
      description: 'A near perfect re-make for the figma store website.',
      github: 'https://github.com/DanielBello7/figma-website-clone',
      img: String(assets.figma_clone_1),
      previews: [String(assets.figma_clone_1)],
      tags: [],
      title: 'Figma Store Clone',
      type: PROJECT_TYPE.FRONTEND,
      url: 'https://figma.danielbello.dev',
    },
    {
      id: '3',
      description:
        'A task manager to effortlessly manage tasks with a web application. Share, create, update, export, and import tasks seamlessly. Collaborate effortlessly and boost productivity. I built this as a side project to explore the feature of smooth transitions within all parts of the application. I handled the project from design to completion. ',
      github: 'https://github.com/DanielBello7/time-tracker.git',
      img: String(assets.core_task_1),
      previews: [String(assets.core_task_1)],
      tags: [],
      title: 'CoreTask Task Manager',
      type: PROJECT_TYPE.FULL_STACK,
      url: 'https://coretask.danielbello.dev',
    },
  ],
};
